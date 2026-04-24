import { SILENT_MANAGEMENT_FLAGS } from "./constants.js";
import { spawnPointFx, spawnTravelFx } from "./effects.js";
import { whisperSender, whisperSenderError } from "./messages.js";

/**
 * Validates selection and resolves the two tokens targeted for swapping.
 *
 * @param {object} msg Roll20 chat message object.
 * @returns {Array<object>|null} Two graphic token objects or null when invalid.
 */
export function getSelectedTokens(msg) {
  const selectedCount = (msg.selected || []).length;

  if (selectedCount !== 2) {
    const isSilent = SILENT_MANAGEMENT_FLAGS.some((flag) => flag.test(msg.content));
    if (!isSilent) {
      whisperSenderError(
        msg,
        `Please select exactly two tokens to perform a swap. (Currently selected: ${selectedCount})`,
        "Selection Error",
      );
    }
    return null;
  }

  const token1 = getObj("graphic", msg.selected[0]._id);
  const token2 = getObj("graphic", msg.selected[1]._id);

  if (!token1 || !token2) {
    whisperSenderError(msg, "One or both selected tokens could not be found.");
    return null;
  }

  return [token1, token2];
}

/**
 * Confirms both tokens reached their intended destination coordinates.
 *
 * @param {object} token1 First token object.
 * @param {object} token2 Second token object.
 * @param {{left:number, top:number}} pos1 Original position for token1.
 * @param {{left:number, top:number}} pos2 Original position for token2.
 * @returns {boolean} True when both tokens match expected post-swap coordinates.
 */
function hasVerifiedSwapPosition(token1, token2, pos1, pos2) {
  return (
    token1.get("left") === pos2.left &&
    token1.get("top") === pos2.top &&
    token2.get("left") === pos1.left &&
    token2.get("top") === pos1.top
  );
}

/**
 * Spawns destination FX at both destination points after an optional delay.
 *
 * @param {{left:number, top:number, page:string}} pos1 Original position for token1.
 * @param {{left:number, top:number, page:string}} pos2 Original position for token2.
 * @param {string} destinationFx FX to spawn at destination points.
 * @param {number} delayMs Delay in milliseconds before spawning FX.
 * @returns {void}
 */
function scheduleDestinationFx(pos1, pos2, destinationFx, delayMs) {
  const spawn = () => {
    spawnPointFx(pos2.left, pos2.top, destinationFx, pos2.page);
    spawnPointFx(pos1.left, pos1.top, destinationFx, pos1.page);
  };

  if (delayMs > 0) {
    setTimeout(spawn, delayMs);
    return;
  }

  spawn();
}

/**
 * Swaps token coordinates, verifies the result, and runs a completion callback.
 *
 * @param {object} token1 First token object.
 * @param {object} token2 Second token object.
 * @param {{left:number, top:number, page:string}} pos1 Original position for token1.
 * @param {{left:number, top:number, page:string}} pos2 Original position for token2.
 * @param {object} msg Roll20 chat message object.
 * @param {Function} [onVerified] Optional callback executed after verification.
 * @param {Function} [onFailed] Optional callback executed when verification fails.
 * @returns {void}
 */
export function performSwap(
  token1,
  token2,
  pos1,
  pos2,
  msg,
  onVerified,
  onFailed,
) {
  token1.set({ left: pos2.left, top: pos2.top });
  token2.set({ left: pos1.left, top: pos1.top });

  const maxVerificationAttempts = 8;
  const verificationRetryMs = 50;
  let attempt = 0;

  const verifyThenFinalize = () => {
    if (hasVerifiedSwapPosition(token1, token2, pos1, pos2)) {
      whisperSender(
        msg,
        `<strong>Swap Successful!</strong><br>${token1.get("name") || "Token 1"} ↔ ${token2.get("name") || "Token 2"}`,
        "Success",
      );
      if (typeof onVerified === "function") {
        onVerified();
      }
      return;
    }

    attempt += 1;
    if (attempt >= maxVerificationAttempts) {
      whisperSenderError(msg, "Token swap failed verification.");
      if (typeof onFailed === "function") {
        onFailed();
      }
      return;
    }

    setTimeout(verifyThenFinalize, verificationRetryMs);
  };

  verifyThenFinalize();
}

function runNormalTravelPhase(context) {
  const {
    token1,
    token2,
    pos1,
    pos2,
    travelFx,
    destinationFx,
    msg,
    msBeforeSwap,
    msBeforeDestinationFx,
  } = context;

  spawnTravelFx(pos1, pos2, travelFx);

  setTimeout(() => {
    performSwap(token1, token2, pos1, pos2, msg, () => {
      scheduleDestinationFx(pos1, pos2, destinationFx, msBeforeDestinationFx);
    });
  }, msBeforeSwap);
}

function runInvisibleTravelPhase(context) {
  const {
    token1,
    token2,
    pos1,
    pos2,
    travelFx,
    destinationFx,
    msg,
    msBeforeSwap,
    msBeforeDestinationFx,
  } = context;
  const hideRenderBufferMs = 80;
  const revealRenderBufferMs = 120;

  const layer1 = token1.get("layer");
  const layer2 = token2.get("layer");

  const revealThenFx = () => {
    // Restore layer — tokens appear at their new positions with no render artifact.
    token1.set({ layer: layer1 });
    token2.set({ layer: layer2 });
    setTimeout(() => scheduleDestinationFx(pos1, pos2, destinationFx, 0), revealRenderBufferMs);
  };

  const doMove = () => {
    // Tokens are on the GM layer so the position change is invisible to players.
    token1.set({ left: pos2.left, top: pos2.top });
    token2.set({ left: pos1.left, top: pos1.top });

    whisperSender(
      msg,
      `<strong>Swap Successful!</strong><br>${token1.get("name") || "Token 1"} ↔ ${token2.get("name") || "Token 2"}`,
      "Success",
    );

    if (msBeforeDestinationFx > 0) {
      setTimeout(revealThenFx, msBeforeDestinationFx);
    } else {
      revealThenFx();
    }
  };

  // Moving to gmlayer removes tokens from the player canvas instantly — no
  // position-change flash, unlike baseOpacity which Roll20 ignores on move renders.
  token1.set({ layer: "gmlayer" });
  token2.set({ layer: "gmlayer" });

  setTimeout(() => {
    spawnTravelFx(pos1, pos2, travelFx);

    if (msBeforeSwap > 0) {
      setTimeout(doMove, msBeforeSwap);
    } else {
      doMove();
    }
  }, hideRenderBufferMs);
}

/**
 * Executes staged FX before performing the final swap.
 *
 * @param {object} config Effective swap configuration.
 * @param {object} token1 First token object.
 * @param {object} token2 Second token object.
 * @param {{left:number, top:number, page:string}} pos1 Original position for token1.
 * @param {{left:number, top:number, page:string}} pos2 Original position for token2.
 * @param {object} msg Roll20 chat message object.
 * @returns {void}
 */
export function executeSwapPipeline(config, token1, token2, pos1, pos2, msg) {
  const {
    originFx,
    travelFx,
    travelMode,
    destinationFx,
    originTime,
    travelTime,
    swapDelay,
    destinationDelay,
    destinationTime,
  } = config;

  const msBeforeTravel = originTime * 1000;
  const msBeforeSwap = (travelTime + swapDelay) * 1000;
  const msBeforeDestinationFx = (destinationDelay + destinationTime) * 1000;
  const useInvisibleTravel = travelMode === "invisible";

  spawnPointFx(pos1.left, pos1.top, originFx, pos1.page);
  spawnPointFx(pos2.left, pos2.top, originFx, pos2.page);

  setTimeout(() => {
    if (useInvisibleTravel) {
      runInvisibleTravelPhase({
        token1,
        token2,
        pos1,
        pos2,
        travelFx,
        destinationFx,
        msg,
        msBeforeSwap,
        msBeforeDestinationFx,
      });
      return;
    }

    runNormalTravelPhase({
      token1,
      token2,
      pos1,
      pos2,
      travelFx,
      destinationFx,
      msg,
      msBeforeSwap,
      msBeforeDestinationFx,
    });
  }, msBeforeTravel);
}
