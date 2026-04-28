/**
 * NOTE: GENERATED FILE - DO NOT EDIT DIRECTLY.
 * NOTE: Source files live under src/ and are bundled with `npm run build`.
 * ------------------------------------------------
 * Name: Condition Tracker
 * Script: ConditionTracker.js
 * Version: 1.0.0
 * Built: 2026-04-28T16:21:00.544Z
 */
const ConditionTrackerMod = (() => {
  'use strict';

  const SCRIPT_NAME = 'Condition Tracker';
  const SCRIPT_VERSION = '1.0.0';
  const SCRIPT_LAST_UPDATED = '2026-04-28T16:21:00.544Z';

  const COLOR_BG_SOFT_BLACK = '#0A0A12';
  const COLOR_TEXT_ARCANE_SILVER = '#E6DFFF';
  const COLOR_TEXT_DIM_SILVER = '#B8AFCF';
  const COLOR_ACCENT_LIGHT = '#FF4D6D';
  const COLOR_ACCENT_DARK = '#5B21B6';
  const COLOR_HEADER_LIGHT = '#E9D5FF';
  const COLOR_HEADER_DARK = '#1E40AF';
  const COLOR_TEXT_WHITE = '#FFFFFF';

  const STATE_KEY = SCRIPT_NAME.replaceAll(/\s+/g, '');
  const HANDOUT_NAME = `${SCRIPT_NAME} — Help & Reference`;
  const MACRO_NAME = `${STATE_KEY}Wizard`;
  const MACRO_NAME_MULTI_TARGET = `${STATE_KEY}MultiTarget`;
  const COMMAND = '!condition-tracker';
  const COMMAND_PROMPT = `${COMMAND} --prompt`;
  const COMMAND_MULTI_TARGET = `${COMMAND} --multi-target`;
  const TURN_ORDER_PREFIX = `${STATE_KEY}:`;
  const TOKEN_MARKER_SEPARATOR = ',';
  const EMPTY_TURN_ORDER = '[]';
  const VALID_HEALTH_BARS = ['bar1_value', 'bar2_value', 'bar3_value'];
  const BOOLEAN_TEXT = new Set(['true', 'false']);
  const DURATION_UNTIL_REMOVED = 'untilRemoved';
  const DURATION_TURN_END = 'turnEnd';
  const DURATION_ROUNDS = 'rounds';
  const MENU_REMOVE = 'remove';
  const CONDITION_OTHER = 'Other';
  const CONDITION_SPELL = 'Spell';
  const CONDITION_ABILITY = 'Ability';
  const CONDITION_ADVANTAGE = 'Advantage';
  const CONDITION_DISADVANTAGE = 'Disadvantage';
  const DEFAULT_MACRO_BODY = `${COMMAND_PROMPT}`;
  const DEFAULT_MULTI_TARGET_MACRO_BODY = `${COMMAND_MULTI_TARGET}`;

  const DEFAULT_MARKERS = Object.freeze({
    Grappled: 'grab',
    Restrained: 'padlock',
    Prone: 'back-pain',
    Poisoned: 'chemical-bolt',
    Stunned: 'pummeled',
    Blinded: 'bleeding-eye',
    Charmed: 'chained-heart',
    Frightened: 'screaming',
    Incapacitated: 'interdiction',
    Invisible: 'ninja-mask',
    Paralyzed: 'frozen-orb',
    Petrified: 'fossil',
    Unconscious: 'sleepy',
    Spell: 'lightning-helix',
    Ability: 'fist',
    Advantage: 'three-leaves',
    Disadvantage: 'broken-heart',
  });

  const CONDITION_DATA = Object.freeze({
    Grappled: { past: 'grappled', verb: 'grapples', icon: '[G]', emoji: '🤛' },
    Restrained: {
      past: 'restrained',
      verb: 'restrains',
      icon: '[R]',
      emoji: '🔒',
    },
    Prone: {
      past: 'knocked prone',
      verb: 'knocks',
      suffix: 'prone',
      icon: '[P]',
      emoji: '🛌',
    },
    Poisoned: { past: 'poisoned', verb: 'poisons', icon: '[Psn]', emoji: '☠️' },
    Stunned: { past: 'stunned', verb: 'stuns', icon: '[Stn]', emoji: '😵' },
    Blinded: { past: 'blinded', verb: 'blinds', icon: '[B]', emoji: '🙈' },
    Charmed: { past: 'charmed', verb: 'charms', icon: '[C]', emoji: '😍' },
    Frightened: {
      past: 'frightened',
      verb: 'frightens',
      icon: '[F]',
      emoji: '😱',
    },
    Incapacitated: {
      past: 'incapacitated',
      verb: 'incapacitates',
      icon: '[I]',
      emoji: '🚫',
    },
    Invisible: {
      past: 'invisible',
      verb: 'makes',
      suffix: 'invisible',
      icon: '[Inv]',
      emoji: '🥷',
    },
    Paralyzed: {
      past: 'paralyzed',
      verb: 'paralyzes',
      icon: '[Pz]',
      emoji: '❄️',
    },
    Petrified: {
      past: 'petrified',
      verb: 'petrifies',
      icon: '[Pet]',
      emoji: '🪨',
    },
    Unconscious: {
      past: 'unconscious',
      verb: 'knocks',
      suffix: 'unconscious',
      icon: '[U]',
      emoji: '💤',
    },
    Spell: {
      past: 'affected by a spell',
      verb: 'casts a spell on',
      icon: '[Spl]',
      emoji: '🔮',
    },
    Ability: {
      past: 'affected by an ability',
      verb: 'uses an ability on',
      icon: '[Abl]',
      emoji: '🎯',
    },
    Advantage: {
      past: 'has advantage',
      verb: 'grants advantage to',
      icon: '[Adv]',
      emoji: '🍀',
      noBy: true,
    },
    Disadvantage: {
      past: 'has disadvantage',
      verb: 'imposes disadvantage on',
      icon: '[Dis]',
      emoji: '⬇️',
      noBy: true,
    },
  });

  const STANDARD_CONDITIONS = Object.freeze(
    [
      'Grappled',
      'Restrained',
      'Prone',
      'Poisoned',
      'Stunned',
      'Blinded',
      'Charmed',
      'Frightened',
      'Incapacitated',
      'Invisible',
      'Paralyzed',
      'Petrified',
      'Unconscious',
    ].sort((a, b) => a.localeCompare(b)),
  );
  const CUSTOM_EFFECT_TYPES = Object.freeze([
    CONDITION_SPELL,
    CONDITION_ABILITY,
    CONDITION_ADVANTAGE,
    CONDITION_DISADVANTAGE,
    CONDITION_OTHER,
  ]);
  const CUSTOM_EFFECT_TYPE_SET = Object.freeze(new Set(CUSTOM_EFFECT_TYPES));
  const CUSTOM_TEXT_CONDITIONS = Object.freeze(
    new Set([CONDITION_SPELL, CONDITION_ABILITY, CONDITION_OTHER]),
  );
  Object.freeze([...STANDARD_CONDITIONS, ...CUSTOM_EFFECT_TYPES]);

  const DURATION_OPTIONS = Object.freeze([
    'Until removed',
    'End of target next turn',
    'End of source next turn',
    '1 round',
    '2 rounds',
    '3 rounds',
    '10 rounds',
  ]);

  const VALID_LOCALES$1 = new Set(['en-US', 'fr', 'de', 'es', 'pt-BR', 'ko']);
  const DEFAULT_LOCALE$1 = 'en-US';

  const LOGO_URL_256 =
    'https://files.d20.io/images/485066521/0h0oZF8g-5RuLMztE7mTSw/original.png';
  const LOGO_URL_512 =
    'https://files.d20.io/images/485066393/v9LJk9VFfPohrzbTJ3b51Q/original.png';

  /**
   * Returns true when a value is neither undefined nor null.
   *
   * @param {*} value The value to inspect.
   * @returns {boolean} True when the value exists.
   */
  function hasValue$1(value) {
    return value !== undefined && value !== null;
  }

  /**
   * Converts a value to trimmed text.
   *
   * @param {*} value The value to convert.
   * @returns {string} Trimmed text or an empty string.
   */
  function toText(value) {
    if (!hasValue$1(value)) {
      return '';
    }

    return String(value).trim();
  }

  /**
   * Escapes text for safe Roll20 chat HTML.
   *
   * @param {*} value The value to escape.
   * @returns {string} Escaped text.
   */
  function escapeHtml(value) {
    return toText(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  /**
   * Normalizes a label for case-insensitive comparisons.
   *
   * @param {*} value The label to normalize.
   * @returns {string} A lowercase comparison key.
   */
  function normalizeKey(value) {
    return toText(value).toLowerCase();
  }

  /**
   * Generates a compact stable-enough Roll20 state identifier.
   *
   * @returns {string} A condition identifier.
   */
  function createId() {
    const randomPart = Math.floor(Math.random() * 0x100000000)
      .toString(36)
      .padStart(7, '0');
    return `ct_${Date.now().toString(36)}_${randomPart}`;
  }

  /**
   * Converts a Roll20 object name into a useful display value.
   *
   * @param {Graphic} token The Roll20 token object.
   * @returns {string} The token name or a fallback label.
   */
  function getTokenName(token) {
    const name = token?.get ? toText(token.get('name')) : '';
    if (name) {
      return name;
    }

    return 'Unnamed Token';
  }

  /**
   * Safely parses JSON and returns a fallback on failure.
   *
   * @param {string} text JSON text.
   * @param {*} fallback The fallback value.
   * @returns {*} Parsed JSON or the fallback.
   */
  function parseJson(text, fallback) {
    try {
      return JSON.parse(text || '');
    } catch (error) {
      log(`Failed to parse JSON: ${error.message}`);
      return fallback;
    }
  }

  /**
   * Returns true when the provided value is an object but not an array.
   *
   * @param {*} value The value to inspect.
   * @returns {boolean} True for plain object-like values.
   */
  function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Queries Roll20 objects and always returns an array.
   *
   * @param {object} criteria Roll20 findObjs criteria.
   * @returns {object[]} Matching Roll20 objects.
   */
  function queryObjects(criteria) {
    return findObjs(criteria) || [];
  }

  /**
   * Returns a graphic token by id, or null when missing.
   *
   * @param {*} tokenId Roll20 graphic id.
   * @returns {Graphic|null} Roll20 token object.
   */
  function getGraphicToken(tokenId) {
    return getObj('graphic', toText(tokenId)) || null;
  }

  /**
   * Returns true when a graphic token id resolves to an existing token.
   *
   * @param {*} tokenId Roll20 graphic id.
   * @returns {boolean} True when the token exists.
   */
  function tokenExists(tokenId) {
    return Boolean(getGraphicToken(tokenId));
  }

  /**
   * Returns all Roll20 player objects.
   *
   * @returns {object[]} Roll20 player objects.
   */
  function getPlayers() {
    return queryObjects({ _type: 'player' });
  }

  /**
   * Returns all current GM player ids.
   *
   * @returns {string[]} GM player ids.
   */
  function getGmPlayerIds() {
    const gmIds = [];
    const players = getPlayers();

    for (const player of players) {
      const playerId = toText(player.get('_id'));
      if (playerId && playerIsGM(playerId)) {
        gmIds.push(playerId);
      }
    }

    return gmIds;
  }

  const GLOBAL_CONFIG_KEY = STATE_KEY.toLowerCase();

  /**
   * Creates a fresh default configuration object.
   *
   * @returns {object} Default configuration.
   */
  function createDefaultConfig() {
    return {
      useMarkers: true,
      useIcons: false,
      subjectPromptBypass: false,
      healthBar: VALID_HEALTH_BARS[0],
      language: DEFAULT_LOCALE$1,
      markers: { ...DEFAULT_MARKERS },
    };
  }

  /**
   * Creates a new runtime bookkeeping object.
   *
   * @returns {object} Runtime bookkeeping state.
   */
  function createRuntimeState() {
    return {
      previousFirstTurnId: '',
      previousTurnSignature: '',
    };
  }

  /**
   * Ensures the persistent Roll20 state exists and has required fields.
   *
   * @returns {object} The Condition Tracker state branch.
   */
  function ensureState() {
    const existing = state[STATE_KEY];
    if (
      isRecord(existing) &&
      existing.version === SCRIPT_VERSION &&
      isRecord(existing.config) &&
      Array.isArray(existing.active) &&
      isRecord(existing.runtime)
    ) {
      return existing;
    }

    if (!isRecord(state[STATE_KEY])) {
      state[STATE_KEY] = {};
    }

    const trackerState = state[STATE_KEY];
    trackerState.version = SCRIPT_VERSION;

    if (!isRecord(trackerState.config)) {
      trackerState.config = createDefaultConfig();
    }

    trackerState.config = mergeConfig(trackerState.config);

    if (!Array.isArray(trackerState.active)) {
      trackerState.active = [];
    }

    if (!isRecord(trackerState.runtime)) {
      trackerState.runtime = createRuntimeState();
    }

    return trackerState;
  }

  /**
   * Merges a possibly incomplete config object with defaults.
   *
   * @param {object} config The current config.
   * @returns {object} A complete config.
   */
  function mergeConfig(config) {
    const defaults = createDefaultConfig();
    const nextConfig = isRecord(config) ? config : {};
    const markers = isRecord(nextConfig.markers) ? nextConfig.markers : {};

    return {
      useMarkers:
        typeof nextConfig.useMarkers === 'boolean'
          ? nextConfig.useMarkers
          : defaults.useMarkers,
      useIcons:
        typeof nextConfig.useIcons === 'boolean'
          ? nextConfig.useIcons
          : defaults.useIcons,
      subjectPromptBypass:
        typeof nextConfig.subjectPromptBypass === 'boolean'
          ? nextConfig.subjectPromptBypass
          : defaults.subjectPromptBypass,
      healthBar: VALID_HEALTH_BARS.includes(nextConfig.healthBar)
        ? nextConfig.healthBar
        : defaults.healthBar,
      language: VALID_LOCALES$1.has(nextConfig.language)
        ? nextConfig.language
        : defaults.language,
      markers: { ...defaults.markers, ...markers },
    };
  }

  /**
   * Returns the current configuration.
   *
   * @returns {object} The current configuration.
   */
  function getConfig() {
    return ensureState().config;
  }

  /**
   * Replaces the current configuration.
   *
   * @param {object} config The next config.
   * @returns {object} The saved config.
   */
  function setConfig(config) {
    const trackerState = ensureState();
    trackerState.config = mergeConfig(config);
    return trackerState.config;
  }

  /**
   * Imports Roll20 One-Click useroptions into persisted config when available.
   *
   * Supports both the common direct branch format and branches that nest values
   * under a useroptions object.
   *
   * @returns {object} The saved config.
   */
  function applyGlobalConfig() {
    const options = getGlobalConfigOptions();
    if (!options) {
      return getConfig();
    }

    const config = getConfig();
    const nextConfig = { ...config };

    nextConfig.useMarkers = parseBooleanOption(
      options.useMarkers,
      config.useMarkers,
    );
    nextConfig.useIcons = parseBooleanOption(options.useIcons, config.useIcons);
    nextConfig.subjectPromptBypass = parseBooleanOption(
      options.subjectPromptBypass,
      config.subjectPromptBypass,
    );

    if (VALID_HEALTH_BARS.includes(options.healthBar)) {
      nextConfig.healthBar = options.healthBar;
    }

    if (VALID_LOCALES$1.has(options.language)) {
      nextConfig.language = options.language;
    }

    const nextMarkers = { ...config.markers };
    Object.keys(DEFAULT_MARKERS).forEach((condition) => {
      const markerValue = getMarkerOption(options, condition);
      nextMarkers[condition] = parseMarkerOption(
        markerValue,
        nextMarkers[condition] || DEFAULT_MARKERS[condition],
      );
    });
    nextConfig.markers = nextMarkers;

    return setConfig(nextConfig);
  }

  /**
   * Returns the Condition Tracker One-Click options branch when present.
   *
   * @returns {object|null} One-Click options or null.
   */
  function getGlobalConfigOptions() {
    if (!isRecord(globalconfig)) {
      return null;
    }

    const branch = globalconfig[GLOBAL_CONFIG_KEY] || globalconfig[STATE_KEY];
    if (!isRecord(branch)) {
      return null;
    }

    if (isRecord(branch.useroptions)) {
      return branch.useroptions;
    }

    return branch;
  }

  /**
   * Normalizes Roll20 checkbox-style option values to booleans.
   *
   * @param {*} value Option value.
   * @param {boolean} fallback Value to use when the option is absent/invalid.
   * @returns {boolean} Parsed boolean option.
   */
  function parseBooleanOption(value, fallback) {
    if (typeof value === 'boolean') {
      return value;
    }

    if (value === undefined || value === null) {
      return fallback;
    }

    const normalized = String(value).trim().toLowerCase();
    if (['true', '1', 'checked', 'on', 'yes'].includes(normalized)) {
      return true;
    }

    if (['false', '0', '', 'off', 'no'].includes(normalized)) {
      return false;
    }

    return fallback;
  }

  /**
   * Reads marker overrides from One-Click option keys.
   *
   * Supports several key formats for compatibility with prior local builds.
   *
   * @param {object} options One-Click options object.
   * @param {string} condition Condition/effect name.
   * @returns {*} Raw option value.
   */
  function getMarkerOption(options, condition) {
    if (!isRecord(options)) {
      return undefined;
    }

    const keyVariants = [
      `marker${condition}`,
      `marker.${condition}`,
      `markers.${condition}`,
    ];

    for (const key of keyVariants) {
      if (Object.hasOwn(options, key)) {
        return options[key];
      }
    }

    return undefined;
  }

  /**
   * Normalizes marker option values.
   *
   * @param {*} value Option value.
   * @param {string} fallback Value to use when absent/invalid.
   * @returns {string} Parsed marker name.
   */
  function parseMarkerOption(value, fallback) {
    if (typeof value !== 'string') {
      return fallback;
    }

    const marker = value.trim();
    if (marker) {
      return marker;
    }

    return fallback;
  }

  /**
   * Adds an active condition to persistent state.
   *
   * @param {object} condition The condition record to add.
   * @returns {object} The saved condition record.
   */
  function addActiveCondition(condition) {
    const trackerState = ensureState();
    trackerState.active.push(condition);
    return condition;
  }

  /**
   * Returns the current active condition list.
   *
   * @returns {object[]} Active conditions.
   */
  function getActiveConditions() {
    return ensureState().active;
  }

  /**
   * Returns active conditions matching a predicate.
   *
   * @param {(condition: object) => boolean} predicate Match function.
   * @returns {object[]} Matching active conditions.
   */
  function filterActiveConditions(predicate) {
    return getActiveConditions().filter(predicate);
  }

  /**
   * Returns true when any active condition matches a predicate.
   *
   * @param {(condition: object) => boolean} predicate Match function.
   * @returns {boolean} True when a matching condition exists.
   */
  function someActiveCondition(predicate) {
    return getActiveConditions().some(predicate);
  }

  /**
   * Splits active conditions into kept and matched groups.
   *
   * @param {(condition: object) => boolean} predicate Match function.
   * @returns {{ matched: object[], unmatched: object[] }} Partitioned conditions.
   */
  function partitionActiveConditions(predicate) {
    const matched = [];
    const unmatched = [];

    for (const condition of getActiveConditions()) {
      if (predicate(condition)) {
        matched.push(condition);
      } else {
        unmatched.push(condition);
      }
    }

    return { matched, unmatched };
  }

  /**
   * Finds an active condition by id.
   *
   * @param {string} conditionId The condition id.
   * @returns {object|null} The matching condition or null.
   */
  function findActiveCondition(conditionId) {
    return (
      filterActiveConditions((condition) => condition.id === conditionId)[0] ||
      null
    );
  }

  /**
   * Replaces the active condition list.
   *
   * @param {object[]} active The next active list.
   * @returns {object[]} The saved active list.
   */
  function setActiveConditions(active) {
    const trackerState = ensureState();
    trackerState.active = Array.isArray(active) ? active : [];
    return trackerState.active;
  }

  /**
   * Removes one active condition by id.
   *
   * @param {string} conditionId The condition id to remove.
   * @returns {object|null} The removed condition or null.
   */
  function removeActiveCondition(conditionId) {
    const trackerState = ensureState();
    const remaining = [];
    let removed = null;

    for (const condition of trackerState.active) {
      if (condition.id === conditionId) {
        removed = condition;
      } else {
        remaining.push(condition);
      }
    }

    trackerState.active = remaining;
    return removed;
  }

  /**
   * Returns all active conditions for one target token.
   *
   * @param {string} targetTokenId The target token id.
   * @returns {object[]} Matching active conditions.
   */
  function getActiveByTarget(targetTokenId) {
    return filterActiveConditions(
      (condition) => condition.targetTokenId === targetTokenId,
    );
  }

  /**
   * Updates runtime turn tracker bookkeeping.
   *
   * @param {string} firstTurnId The current first turn id.
   * @param {string} signature The current turn signature.
   * @returns {void}
   */
  function updateTurnRuntime(firstTurnId, signature) {
    const runtime = ensureState().runtime;
    runtime.previousFirstTurnId = firstTurnId || '';
    runtime.previousTurnSignature = signature || '';
  }

  const VALID_LOCALES = new Set(['en-US', 'fr', 'de', 'es', 'pt-BR', 'ko']);
  const DEFAULT_LOCALE = 'en-US';

  const TRANSLATIONS = {
    'en-US': {
      conditions: {
        Grappled: { past: 'grappled', verb: 'grapples' },
        Restrained: { past: 'restrained', verb: 'restrains' },
        Prone: { past: 'knocked prone', verb: 'knocks', suffix: 'prone' },
        Poisoned: { past: 'poisoned', verb: 'poisons' },
        Stunned: { past: 'stunned', verb: 'stuns' },
        Blinded: { past: 'blinded', verb: 'blinds' },
        Charmed: { past: 'charmed', verb: 'charms' },
        Frightened: { past: 'frightened', verb: 'frightens' },
        Incapacitated: { past: 'incapacitated', verb: 'incapacitates' },
        Invisible: { past: 'invisible', verb: 'makes', suffix: 'invisible' },
        Paralyzed: { past: 'paralyzed', verb: 'paralyzes' },
        Petrified: { past: 'petrified', verb: 'petrifies' },
        Unconscious: {
          past: 'unconscious',
          verb: 'knocks',
          suffix: 'unconscious',
        },
        Spell: { past: 'affected by a spell', verb: 'casts a spell on' },
        Ability: { past: 'affected by an ability', verb: 'uses an ability on' },
        Advantage: {
          past: 'has advantage',
          verb: 'grants advantage to',
          noBy: true,
        },
        Disadvantage: {
          past: 'has disadvantage',
          verb: 'imposes disadvantage on',
          noBy: true,
        },
      },
      condNames: {
        Grappled: 'Grappled',
        Restrained: 'Restrained',
        Prone: 'Prone',
        Poisoned: 'Poisoned',
        Stunned: 'Stunned',
        Blinded: 'Blinded',
        Charmed: 'Charmed',
        Frightened: 'Frightened',
        Incapacitated: 'Incapacitated',
        Invisible: 'Invisible',
        Paralyzed: 'Paralyzed',
        Petrified: 'Petrified',
        Unconscious: 'Unconscious',
        Spell: 'Spell',
        Ability: 'Ability',
        Advantage: 'Advantage',
        Disadvantage: 'Disadvantage',
        Other: 'Other',
      },
      templates: {
        display: {
          custom: '{emoji} {target} affected by {effect} ({source})',
          advantage: '{emoji} {source} has advantage against {target}{subject}',
          disadvantage:
            '{emoji} {source} has disadvantage against {target}{subject}',
          noBy: '{emoji} {target} {past} ({source})',
          standard: '{emoji} {target} {past} by {source}',
        },
        apply: {
          custom: '{source} applies {effect} to {target}.',
          advantage: '{source} has advantage against {target}{subject}.',
          disadvantage: '{source} has disadvantage against {target}{subject}.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} is no longer affected by {effect}.',
          advantage:
            '{source} no longer has advantage against {target}{subject}.',
          disadvantage:
            '{source} no longer has disadvantage against {target}{subject}.',
          noBy: '{target} no longer {past}.',
          standard: '{target} is no longer {past} by {source}.',
        },
      },
      ui: {
        wizard: {
          selectCondition: 'Select Condition',
          selectSource: 'Select Source Token',
          selectTarget: 'Select Target Token',
          selectSubject: 'Select Subject',
          selectDuration: 'Select Duration',
          confirmTargetTitle: 'Confirm Target List',
          applyEffectTitle: 'Apply {condition} Effect',
          noTokens: 'No named tokens found on the active page.',
          confirmIntro: 'The following tokens will receive the condition:',
          confirmBtn: 'Confirm target list',
          enterDetails: 'Enter effect details',
          noneBtn: 'None',
          subjectDesc: 'Select who or what delivers the effect.',
          sourceDesc:
            'Select the creature that is creating / generating the condition or effect.',
          targetDesc:
            'Select the creature that will receive the condition or effect.',
          otherText: 'Other condition text',
          effectDetails: '{condition} details',
        },
        col: {
          players: 'Players',
          npcs: 'NPCs',
          conditions: 'Conditions',
          customEffects: 'Custom Effects',
          permanentTurnEnd: 'Permanent / Turn End',
          rounds: 'Rounds',
          command: 'Command',
          result: 'Result',
          field: 'Field',
          value: 'Value',
          option: 'Option',
          condition: 'Condition',
          marker: 'Marker',
          item: 'Item',
          removed: 'Removed',
          details: 'Details',
          description: 'Description',
          scenario: 'Scenario',
        },
        dur: {
          untilRemoved: 'Until removed',
          endOfTargetTurn: 'End of target next turn',
          endOfSourceTurn: 'End of source next turn',
          round1: '1 round',
          round2: '2 rounds',
          round3: '3 rounds',
          round10: '10 rounds',
          custom: 'Custom',
          customPrompt: 'Number of rounds',
          untilRemovedDisplay: 'Until removed',
          turnsRemaining: '{n} tracked turn end(s) remaining',
        },
        btn: {
          openWizard: 'Open Wizard',
          openMultiTarget: 'Open Multi-Target Wizard',
          openRemovalList: 'Open Removal List',
          showConfig: 'Show Config',
          runCleanup: 'Run Cleanup',
          reinstallMacro: 'Reinstall Macro',
          reinstallHandout: 'Reinstall Handout',
          showHelp: 'Show Help',
        },
        title: {
          menu: 'Menu',
          removalMenu: 'Condition Tracker removal',
          config: 'Config',
          configTracker: 'Condition Tracker config',
          help: 'Help',
          applied: 'Applied',
          removed: 'Condition Removed',
          cleanup: 'Cleanup Complete',
          macroReinstalled: 'Macro Reinstalled',
          handoutReinstalled: 'Handout Reinstalled',
          warning: 'Warning',
          error: 'Error',
          turnOrder: 'Turn Order',
          noConditions: 'No Conditions',
          tokenMoved: 'Token Moved',
          markedDead: 'Marked as Dead',
          zeroHp: '{name} — 0 HP',
          moveToken: '{name} — Move Token?',
          scriptReady: 'Script Ready',
        },
        heading: {
          quickActions: 'Quick Actions',
          settings: 'Settings',
          markerMappings: 'Marker Mappings',
          result: 'Result',
          info: 'Info',
          commandOptions: 'Command Options',
          promptUi: 'Prompt UI',
          examples: 'Examples',
          summary: 'Summary',
        },
        msg: {
          noActive: 'No active conditions are tracked.',
          configReset: 'Configuration reset to mod defaults.',
          unknownConfig:
            'Unknown config option. Use --config to view supported settings.',
          macroReinstalled:
            'The {wizard} and {multiTarget} macros have been reinstalled for all current GM players.',
          handoutReinstalled:
            'The help handout {handout} has been reinstalled.',
          duplicate:
            'That exact source, subject, target, condition, and custom text is already active.',
          noTargets: 'No target tokens specified for multi-target apply.',
          noSelection:
            'Select at least one token on the board before using --multi-target.',
          invalidIds: 'No valid token ids found in the current selection.',
          reSelectTokens:
            'None of the originally-selected tokens could be found. Re-select tokens and try again.',
          conditionNotFound: 'Condition id was not found.',
          gmOnly: 'Condition Tracker commands are GM-only.',
          commandFailed:
            'The command could not be completed safely. Check the API console for details.',
          sourceTokenNotFound: 'Source token could not be found.',
          targetTokenNotFound: 'Target token could not be found.',
          subjectTokenNotFound: 'Subject token could not be found.',
          invalidCondition:
            'Condition must be one of the predefined conditions or Other.',
          subjectOnlyCustom:
            '--subject is only valid for Spell, Ability, Advantage, Disadvantage, and Other.',
          subjectBypassInvalid:
            '--subjectPromptBypass expects true or false when a value is provided.',
          customDetailsRequired:
            '{condition} details are required. Use --other to provide them.',
          markerConfigFormat:
            'Marker config format is: --config marker Grappled=grab',
          markerPredefinedRequired:
            'Marker configuration requires a predefined condition name.',
          markerNameRequired:
            'Marker configuration requires a non-empty marker name.',
          markerSet: '{condition} marker set to {marker}.',
          healthBarSet: 'Health bar set to {bar}.',
          boolSet: '{key} set to {value}.',
          expectedBoolean: 'Expected true or false.',
          invalidHealthBar:
            'Health bar must be bar1_value, bar2_value, or bar3_value.',
          markersDisabled: 'Markers are disabled.',
          noMarkerConfigured: 'No marker is configured for this condition.',
          markerApplied: 'Marker applied: {marker}',
          markerPresent: 'Marker already present: {marker}',
          langSet: 'Language set to {locale}.',
          invalidLocale: 'Invalid locale. Supported locales: {locales}.',
          otherDurationRequiresRounds:
            'Other duration requires a numeric round count, for example --duration 5 rounds.',
          invalidDuration:
            'Duration must be Until removed, an end-of-turn option, or a positive round count.',
          zeroHpNoConditions:
            '{name} has reached 0 HP and has no active conditions.',
          zeroHpConditions:
            '{name} has reached 0 HP. Choose conditions to remove:',
          removeAllBtn: 'Remove All Conditions for {name}',
          markIncapacitated: 'Mark as Incapacitated',
          removeFromTurnOrder: 'Remove from Turn Order',
          alreadyIncapacitated: '{name} is already Incapacitated.',
          tokenRemovedFromTurn: '{name} has been removed from the turn order.',
          tokenNotInTurn: '{name} was not found in the turn order.',
          moveTokenPrompt:
            "Move {name} to the map layer so it remains visible but won't interfere with other tokens?",
          moveTokenBtn: 'Move {name} to Map Layer',
          tokenMoved: '{name} has been moved to the map layer.',
          tokenNotFound: 'Token not found.',
          noActiveConditions: '{name} has no active conditions to remove.',
          deadNoConditions:
            '{name} was marked as dead. No conditions were active.',
          scriptReady: '{name} is active and you are using version {version}.',
          reachedZeroHp: '{name} reached 0 HP',
          manuallyRemoved: 'it was manually removed',
          durationExpired: 'its duration expired',
          markedAsDead: '{name} was marked as dead',
        },
        removal: {
          conditionField: 'Condition',
          reasonField: 'Reason',
          turnRowField: 'Turn Tracker row',
          markerField: 'Marker',
          notConfigured: 'Not configured',
          markerRemoved: 'Removed ({marker})',
          markerRetained: 'Retained ({marker})',
          rowRemoved: 'Removed',
          rowMissing: 'Already missing',
          manualReason: 'Manual removal',
        },
        cleanup: {
          orphaned: 'Orphaned condition entries',
          stale: 'Stale condition entries',
          orphanedRows: 'Orphaned Turn Tracker rows',
          unusedMarkers: 'Unused markers',
        },
        apply: {
          turnAppended:
            'Target was not in turn order; condition row was appended.',
          turnInserted: 'Condition row inserted below target token.',
        },
      },
      handout: {
        versionLabel: 'Version',
        subtitle: 'D&D 5e Status Effect Manager',
        footerNote:
          'This handout is automatically created and updated each time the script loads.',
        overview: {
          heading: 'Overview',
          body: 'Condition Tracker manages D&D 5e status conditions and custom effects as labelled rows in the Roll20 Turn Tracker. Apply conditions to tokens, track durations by initiative order, and automatically remove expired effects when a turn ends. All commands are GM-only and can be triggered from chat or via the installed macros.',
        },
        quickStart: {
          heading: 'Quick Start',
          colCommand: 'Command',
          colDesc: 'Description',
          rows: [
            [
              '!condition-tracker --prompt',
              'Step-by-step wizard — pick condition, tokens & duration interactively. Also available as the ConditionTrackerWizard macro.',
            ],
            [
              '!condition-tracker --multi-target',
              'Apply one condition to several tokens simultaneously. Also available as the ConditionTrackerMultiTarget macro.',
            ],
            [
              '!condition-tracker --menu',
              'Open the main management menu with buttons to apply, review, or remove conditions.',
            ],
          ],
        },
        commandsRef: {
          heading: 'Commands Reference',
          colFlag: 'Flag',
          colDesc: 'Description',
          rows: [
            ['--prompt', 'Interactive step-by-step wizard UI'],
            [
              '--multi-target',
              'Apply a condition to multiple target tokens at once',
            ],
            ['--menu', 'Show main menu (add remove for removal menu)'],
            [
              '--source X --target Y --condition Z',
              'Apply a condition directly without the wizard',
            ],
            [
              '--duration &lt;value&gt;',
              'Duration for a direct apply (e.g. 2 rounds)',
            ],
            [
              '--other &lt;text&gt;',
              'Custom text for Spell / Ability / Other effect types',
            ],
            [
              '--remove &lt;condition-id&gt;',
              'Remove a specific condition by its unique ID',
            ],
            [
              '--config &lt;option&gt; &lt;value&gt;',
              'Adjust configuration settings (see Config section below)',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              'Override subjectPromptBypass for this command only (also supports --subject-prompt-bypass)',
            ],
            [
              '--cleanup',
              'Reconcile state — remove orphaned conditions and Turn Tracker rows',
            ],
            ['--reinstall-macro', 'Recreate or update the GM macros'],
            [
              '--reinstall-handout',
              'Recreate or update the localized help handout',
            ],
            [
              '--lang &lt;locale&gt;',
              "Output this command's messages in an additional locale (bilingual mode)",
            ],
            ['--help', 'Show a brief help card in chat'],
          ],
        },
        standardConditions: {
          heading: 'Standard Conditions (D&amp;D 5e)',
          colCondition: 'Condition',
        },
        customEffects: {
          heading: 'Custom Effect Types',
          colType: 'Type',
          colNotes: 'Notes',
          rows: [
            [
              '🔮 Spell',
              'Track a named spell effect — you will be prompted for the spell name',
            ],
            [
              '🎯 Ability',
              'Track a named class or racial ability — you will be prompted for the ability name',
            ],
            [
              '🍀 Advantage',
              'Record advantage granted from one token to another; grouped with the source in initiative',
            ],
            [
              '⬇️ Disadvantage',
              'Record disadvantage imposed; grouped with the source in initiative',
            ],
            [
              '📝 Other',
              'Freeform custom label — you will be prompted for a description',
            ],
          ],
        },
        durationOptions: {
          heading: 'Duration Options',
          intro:
            "The remaining count is shown in the Turn Tracker pr column and decrements when the anchor token's turn ends.",
          colOption: 'Option',
          colBehaviour: 'Behaviour',
          rows: [
            [
              'Until removed',
              'Permanent — must be removed manually via the menu or --remove',
            ],
            [
              "End of target's next turn",
              "Expires when the target token's next turn ends in initiative",
            ],
            [
              "End of source's next turn",
              "Expires when the source token's next turn ends in initiative",
            ],
            [
              '1 / 2 / 3 / 10 rounds',
              'Fixed countdown; one decrement per anchor-token turn-end',
            ],
          ],
        },
        configuration: {
          heading: 'Configuration',
          intro:
            'Use !condition-tracker --config &lt;option&gt; &lt;value&gt; or the Config button in the main menu.',
          colOption: 'Option',
          colValues: 'Values',
          colDesc: 'Description',
          rows: [
            [
              'useMarkers',
              'true / false',
              'Apply Roll20 status markers to tokens when a condition is added',
            ],
            [
              'useIcons',
              'true / false',
              'Show short icon codes (e.g. [G]) instead of emoji in Turn Tracker rows',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              'Skip the optional subject-token step for Spell / Ability / Other effects',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              'Token bar to watch; when it drops to 0 the GM is prompted to clean up conditions',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              'Output language for chat messages and the help handout',
            ],
            [
              'markers.&lt;Condition&gt;',
              '&lt;marker name&gt;',
              'Override the status marker used for a specific condition (e.g. markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: 'Default Status Markers',
          colCondition: 'Condition',
          colMarker: 'Marker Name',
        },
      },
    },

    fr: {
      conditions: {
        Grappled: { past: 'agrippé', verb: 'agrippe' },
        Restrained: { past: 'entravé', verb: 'entrave' },
        Prone: { past: 'mis à terre', verb: 'met', suffix: 'à terre' },
        Poisoned: { past: 'empoisonné', verb: 'empoisonne' },
        Stunned: { past: 'étourdi', verb: 'étourdit' },
        Blinded: { past: 'aveuglé', verb: 'aveugle' },
        Charmed: { past: 'charmé', verb: 'charme' },
        Frightened: { past: 'effrayé', verb: 'effraie' },
        Incapacitated: { past: 'incapacité', verb: 'incapacite' },
        Invisible: { past: 'invisible', verb: 'rend', suffix: 'invisible' },
        Paralyzed: { past: 'paralysé', verb: 'paralyse' },
        Petrified: { past: 'pétrifié', verb: 'pétrifie' },
        Unconscious: {
          past: 'inconscient',
          verb: 'rend',
          suffix: 'inconscient',
        },
        Spell: { past: 'affecté par un sort', verb: 'lance un sort sur' },
        Ability: {
          past: 'affecté par une capacité',
          verb: 'utilise une capacité sur',
        },
        Advantage: {
          past: 'a l’avantage',
          verb: 'accorde l’avantage à',
          noBy: true,
        },
        Disadvantage: {
          past: 'a le désavantage',
          verb: 'impose le désavantage à',
          noBy: true,
        },
      },
      condNames: {
        Grappled: 'Agrippé',
        Restrained: 'Entravé',
        Prone: 'À terre',
        Poisoned: 'Empoisonné',
        Stunned: 'Étourdi',
        Blinded: 'Aveuglé',
        Charmed: 'Charmé',
        Frightened: 'Effrayé',
        Incapacitated: 'Incapacité',
        Invisible: 'Invisible',
        Paralyzed: 'Paralysé',
        Petrified: 'Pétrifié',
        Unconscious: 'Inconscient',
        Spell: 'Sort',
        Ability: 'Capacité',
        Advantage: 'Avantage',
        Disadvantage: 'Désavantage',
        Other: 'Autre',
      },
      templates: {
        display: {
          custom: '{emoji} {target} affecté par {effect} ({source})',
          advantage: '{emoji} {source} a l’avantage contre {target}{subject}',
          disadvantage:
            '{emoji} {source} a le désavantage contre {target}{subject}',
          noBy: '{emoji} {target} {past} ({source})',
          standard: '{emoji} {target} {past} par {source}',
        },
        apply: {
          custom: '{source} applique {effect} à {target}.',
          advantage: '{source} a l’avantage contre {target}{subject}.',
          disadvantage: '{source} a le désavantage contre {target}{subject}.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} n’est plus affecté par {effect}.',
          advantage: '{source} n’a plus l’avantage contre {target}{subject}.',
          disadvantage:
            '{source} n’a plus le désavantage contre {target}{subject}.',
          noBy: '{target} n’est plus {past}.',
          standard: '{target} n’est plus {past} par {source}.',
        },
      },
      ui: {
        wizard: {
          selectCondition: 'Sélectionner une condition',
          selectSource: 'Sélectionner le jeton source',
          selectTarget: 'Sélectionner le jeton cible',
          selectSubject: 'Sélectionner le sujet',
          selectDuration: 'Sélectionner la durée',
          confirmTargetTitle: 'Confirmer la liste de cibles',
          applyEffectTitle: 'Appliquer l’effet {condition}',
          noTokens: 'Aucun jeton nommé trouvé sur la page active.',
          confirmIntro: 'Les jetons suivants recevront la condition :',
          confirmBtn: 'Confirmer la liste de cibles',
          enterDetails: 'Saisir les détails de l’effet',
          noneBtn: 'Aucun',
          subjectDesc: 'Sélectionnez qui ou quoi délivre l’effet.',
          sourceDesc:
            'Sélectionnez la créature qui crée ou génère la condition ou l’effet.',
          targetDesc:
            'Sélectionnez la créature qui recevra la condition ou l’effet.',
          otherText: 'Texte de condition personnalisé',
          effectDetails: 'Détails de {condition}',
        },
        col: {
          players: 'Joueurs',
          npcs: 'PNJ',
          conditions: 'Conditions',
          customEffects: 'Effets personnalisés',
          permanentTurnEnd: 'Permanent / Fin de tour',
          rounds: 'Rounds',
          command: 'Commande',
          result: 'Résultat',
          field: 'Champ',
          value: 'Valeur',
          option: 'Option',
          condition: 'Condition',
          marker: 'Marqueur',
          item: 'Élément',
          removed: 'Supprimé',
          details: 'Détails',
          description: 'Description',
          scenario: 'Scénario',
        },
        dur: {
          untilRemoved: 'Jusqu’à suppression',
          endOfTargetTurn: 'Fin du prochain tour de la cible',
          endOfSourceTurn: 'Fin du prochain tour de la source',
          round1: '1 round',
          round2: '2 rounds',
          round3: '3 rounds',
          round10: '10 rounds',
          custom: 'Personnalisé',
          customPrompt: 'Nombre de rounds',
          untilRemovedDisplay: 'Jusqu’à suppression',
          turnsRemaining: '{n} fin(s) de tour restante(s)',
        },
        btn: {
          openWizard: 'Ouvrir l’assistant',
          openMultiTarget: 'Ouvrir l’assistant multi-cibles',
          openRemovalList: 'Ouvrir la liste de suppression',
          showConfig: 'Afficher la configuration',
          runCleanup: 'Lancer le nettoyage',
          reinstallMacro: 'Réinstaller la macro',
          reinstallHandout: 'Réinstaller le livret',
          showHelp: 'Afficher l’aide',
        },
        title: {
          menu: 'Menu',
          removalMenu: 'Suppression — Condition Tracker',
          config: 'Configuration',
          configTracker: 'Configuration — Condition Tracker',
          help: 'Aide',
          applied: 'Appliqué',
          removed: 'Condition supprimée',
          cleanup: 'Nettoyage terminé',
          macroReinstalled: 'Macro réinstallée',
          handoutReinstalled: 'Livret réinstallé',
          warning: 'Avertissement',
          error: 'Erreur',
          turnOrder: 'Ordre d’initiative',
          noConditions: 'Aucune condition',
          tokenMoved: 'Jeton déplacé',
          markedDead: 'Marqué comme mort',
          zeroHp: '{name} — 0 PV',
          moveToken: '{name} — Déplacer le jeton ?',
          scriptReady: 'Script prêt',
        },
        heading: {
          quickActions: 'Actions rapides',
          settings: 'Paramètres',
          markerMappings: 'Correspondances des marqueurs',
          result: 'Résultat',
          info: 'Informations',
          commandOptions: 'Options de commande',
          promptUi: 'Interface de l’assistant',
          examples: 'Exemples',
          summary: 'Résumé',
        },
        msg: {
          noActive: 'Aucune condition active n’est suivie.',
          configReset: 'Configuration réinitialisée aux valeurs par défaut.',
          unknownConfig:
            'Option de configuration inconnue. Utilisez --config pour voir les paramètres disponibles.',
          macroReinstalled:
            'Les macros {wizard} et {multiTarget} ont été réinstallées pour tous les MJ actifs.',
          handoutReinstalled: 'Le livret d’aide {handout} a été réinstallé.',
          duplicate:
            'Cette combinaison source, sujet, cible, condition et texte personnalisé est déjà active.',
          noTargets:
            'Aucun jeton cible spécifié pour l’application multi-cibles.',
          noSelection:
            'Sélectionnez au moins un jeton sur le plateau avant d’utiliser --multi-target.',
          invalidIds:
            'Aucun identifiant de jeton valide trouvé dans la sélection actuelle.',
          reSelectTokens:
            'Aucun des jetons initialement sélectionnés n’a pu être trouvé. Veuillez resélectionner les jetons et réessayer.',
          conditionNotFound: 'Identifiant de condition introuvable.',
          gmOnly: 'Les commandes de Condition Tracker sont réservées au MJ.',
          commandFailed:
            'La commande n’a pas pu être exécutée. Vérifiez la console API pour plus de détails.',
          sourceTokenNotFound: 'Le jeton source est introuvable.',
          targetTokenNotFound: 'Le jeton cible est introuvable.',
          subjectTokenNotFound: 'Le jeton sujet est introuvable.',
          invalidCondition:
            'La condition doit être une condition prédéfinie ou Autre.',
          subjectOnlyCustom:
            '--subject est uniquement valide pour Sort, Capacité, Avantage, Désavantage et Autre.',
          subjectBypassInvalid:
            '--subjectPromptBypass attend true ou false si une valeur est fournie.',
          customDetailsRequired:
            'Les détails de {condition} sont requis. Utilisez --other pour les fournir.',
          markerConfigFormat:
            'Format de configuration du marqueur : --config marker Grappled=grab',
          markerPredefinedRequired:
            'La configuration du marqueur requiert un nom de condition prédéfini.',
          markerNameRequired:
            'La configuration du marqueur requiert un nom de marqueur non vide.',
          markerSet: 'Marqueur de {condition} défini sur {marker}.',
          healthBarSet: 'Barre de santé définie sur {bar}.',
          boolSet: '{key} défini sur {value}.',
          expectedBoolean: 'true ou false est attendu.',
          invalidHealthBar:
            'La barre de santé doit être bar1_value, bar2_value ou bar3_value.',
          markersDisabled: 'Les marqueurs sont désactivés.',
          noMarkerConfigured:
            'Aucun marqueur n’est configuré pour cette condition.',
          markerApplied: 'Marqueur appliqué : {marker}',
          markerPresent: 'Marqueur déjà présent : {marker}',
          langSet: 'Langue définie sur {locale}.',
          invalidLocale: 'Locale invalide. Locales disponibles : {locales}.',
          otherDurationRequiresRounds:
            'La durée Autre requiert un nombre de rounds, par exemple --duration 5 rounds.',
          invalidDuration:
            'La durée doit être Jusqu’à suppression, une option de fin de tour ou un nombre de rounds positif.',
          zeroHpNoConditions:
            '{name} a atteint 0 PV et n’a aucune condition active.',
          zeroHpConditions:
            '{name} a atteint 0 PV. Choisissez les conditions à supprimer :',
          removeAllBtn: 'Supprimer toutes les conditions de {name}',
          markIncapacitated: 'Marquer comme Incapacité',
          removeFromTurnOrder: 'Retirer de l’ordre d’initiative',
          alreadyIncapacitated: '{name} est déjà Incapacité.',
          tokenRemovedFromTurn: '{name} a été retiré de l’ordre d’initiative.',
          tokenNotInTurn:
            '{name} n’a pas été trouvé dans l’ordre d’initiative.',
          moveTokenPrompt:
            'Déplacer {name} vers le calque carte pour qu’il reste visible sans interférer avec les autres jetons ?',
          moveTokenBtn: 'Déplacer {name} vers le calque carte',
          tokenMoved: '{name} a été déplacé vers le calque carte.',
          tokenNotFound: 'Jeton introuvable.',
          noActiveConditions: '{name} n’a aucune condition active à supprimer.',
          deadNoConditions:
            '{name} a été marqué comme mort. Aucune condition n’était active.',
          scriptReady:
            '{name} est actif et vous utilisez la version {version}.',
          reachedZeroHp: '{name} a atteint 0 PV',
          manuallyRemoved: 'suppression manuelle',
          durationExpired: 'sa durée a expiré',
          markedAsDead: '{name} a été marqué comme mort',
        },
        removal: {
          conditionField: 'Condition',
          reasonField: 'Raison',
          turnRowField: 'Ligne d’initiative',
          markerField: 'Marqueur',
          notConfigured: 'Non configuré',
          markerRemoved: 'Supprimé ({marker})',
          markerRetained: 'Conservé ({marker})',
          rowRemoved: 'Supprimé',
          rowMissing: 'Déjà absent',
          manualReason: 'Suppression manuelle',
        },
        cleanup: {
          orphaned: 'Entrées de condition orphelines',
          stale: 'Entrées de condition obsolètes',
          orphanedRows: 'Lignes d’initiative orphelines',
          unusedMarkers: 'Marqueurs inutilisés',
        },
        apply: {
          turnAppended:
            'La cible n’était pas dans l’ordre d’initiative ; la ligne de condition a été ajoutée.',
          turnInserted: 'Ligne de condition insérée sous le jeton cible.',
        },
      },
      handout: {
        versionLabel: 'Version',
        subtitle: 'Gestionnaire d’états D&D 5e',
        footerNote:
          'Ce livret est créé et mis à jour automatiquement à chaque chargement du script.',
        overview: {
          heading: 'Présentation',
          body: 'Condition Tracker gère les conditions de statut D&D 5e et les effets personnalisés sous forme de lignes dans le suivi d’initiative Roll20. Appliquez des conditions aux jetons, suivez les durées par ordre d’initiative et supprimez automatiquement les effets expirés à la fin d’un tour. Toutes les commandes sont réservées au MJ.',
        },
        quickStart: {
          heading: 'Démarrage rapide',
          colCommand: 'Commande',
          colDesc: 'Description',
          rows: [
            [
              '!condition-tracker --prompt',
              'Assistant pas à pas — choisissez condition, jetons et durée de façon interactive. Disponible aussi via la macro ConditionTrackerWizard.',
            ],
            [
              '!condition-tracker --multi-target',
              'Appliquer une condition à plusieurs jetons simultanément. Disponible aussi via la macro ConditionTrackerMultiTarget.',
            ],
            [
              '!condition-tracker --menu',
              'Ouvrir le menu principal pour appliquer, consulter ou supprimer des conditions.',
            ],
          ],
        },
        commandsRef: {
          heading: 'Référence des commandes',
          colFlag: 'Option',
          colDesc: 'Description',
          rows: [
            ['--prompt', 'Interface de l’assistant pas à pas'],
            [
              '--multi-target',
              'Appliquer une condition à plusieurs jetons cibles',
            ],
            [
              '--menu',
              'Afficher le menu principal (ajouter remove pour le menu de suppression)',
            ],
            [
              '--source X --target Y --condition Z',
              'Appliquer une condition directement sans l’assistant',
            ],
            [
              '--duration &lt;valeur&gt;',
              'Durée pour une application directe (ex. 2 rounds)',
            ],
            [
              '--other &lt;texte&gt;',
              'Texte personnalisé pour les types Sort / Capacité / Autre',
            ],
            [
              '--remove &lt;id-condition&gt;',
              'Supprimer une condition spécifique par son identifiant unique',
            ],
            [
              '--config &lt;option&gt; &lt;valeur&gt;',
              'Modifier les paramètres de configuration',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              'Remplacer subjectPromptBypass pour cette commande uniquement (prend aussi en charge --subject-prompt-bypass)',
            ],
            [
              '--cleanup',
              'Nettoyer l’état — supprimer les conditions et lignes orphelines',
            ],
            ['--reinstall-macro', 'Recréer ou mettre à jour les macros MJ'],
            [
              '--reinstall-handout',
              'Recréer ou mettre à jour le livret d’aide localisé',
            ],
            [
              '--lang &lt;locale&gt;',
              'Afficher les messages de cette commande dans une locale supplémentaire (mode bilingue)',
            ],
            ['--help', 'Afficher une carte d’aide rapide dans le chat'],
          ],
        },
        standardConditions: {
          heading: 'Conditions standard (D&D 5e)',
          colCondition: 'Condition',
        },
        customEffects: {
          heading: 'Types d’effets personnalisés',
          colType: 'Type',
          colNotes: 'Notes',
          rows: [
            [
              '🔮 Sort',
              'Suivre un effet de sort nommé — vous serez invité à saisir le nom du sort',
            ],
            [
              '🎯 Capacité',
              'Suivre une capacité de classe ou raciale — vous serez invité à saisir le nom',
            ],
            [
              '🍀 Avantage',
              'Enregistrer un avantage accordé d’un jeton à un autre ; groupé avec la source dans l’initiative',
            ],
            [
              '⬇️ Désavantage',
              'Enregistrer un désavantage imposé ; groupé avec la source dans l’initiative',
            ],
            [
              '📝 Autre',
              'Étiquette personnalisée libre — vous serez invité à saisir une description',
            ],
          ],
        },
        durationOptions: {
          heading: 'Options de durée',
          intro:
            'Le compteur restant est affiché dans la colonne pr du suivi d’initiative et décrémente à la fin du tour du jeton ancre.',
          colOption: 'Option',
          colBehaviour: 'Comportement',
          rows: [
            [
              'Jusqu’à suppression',
              'Permanent — doit être supprimé manuellement via le menu ou --remove',
            ],
            [
              'Fin du prochain tour de la cible',
              'Expire à la fin du prochain tour du jeton cible dans l’initiative',
            ],
            [
              'Fin du prochain tour de la source',
              'Expire à la fin du prochain tour du jeton source dans l’initiative',
            ],
            [
              '1 / 2 / 3 / 10 rounds',
              'Compte à rebours fixe ; un décrément par fin de tour du jeton ancre',
            ],
          ],
        },
        configuration: {
          heading: 'Configuration',
          intro:
            'Utilisez !condition-tracker --config &lt;option&gt; &lt;valeur&gt; ou le bouton Config dans le menu principal.',
          colOption: 'Option',
          colValues: 'Valeurs',
          colDesc: 'Description',
          rows: [
            [
              'useMarkers',
              'true / false',
              'Appliquer des marqueurs de statut Roll20 aux jetons lors de l’ajout d’une condition',
            ],
            [
              'useIcons',
              'true / false',
              'Afficher des codes d’icônes courts (ex. [G]) dans les lignes du suivi d’initiative',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              'Ignorer l’étape sujet optionnelle pour les effets Sort / Capacité / Autre',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              'Barre à surveiller ; quand elle atteint 0 le MJ est invité à nettoyer les conditions',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              'Langue des messages de chat et du livret d’aide',
            ],
            [
              'markers.&lt;Condition&gt;',
              '&lt;nom du marqueur&gt;',
              'Remplacer le marqueur utilisé pour une condition spécifique (ex. markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: 'Marqueurs de statut par défaut',
          colCondition: 'Condition',
          colMarker: 'Nom du marqueur',
        },
      },
    },

    de: {
      conditions: {
        Grappled: { past: 'gepackt', verb: 'packt' },
        Restrained: { past: 'gefesselt', verb: 'fesselt' },
        Prone: { past: 'niedergeworfen', verb: 'wirft', suffix: 'nieder' },
        Poisoned: { past: 'vergiftet', verb: 'vergiftet' },
        Stunned: { past: 'betäubt', verb: 'betäubt' },
        Blinded: { past: 'geblendet', verb: 'blendet' },
        Charmed: { past: 'bezaubert', verb: 'bezaubert' },
        Frightened: { past: 'verängstigt', verb: 'verängstigt' },
        Incapacitated: { past: 'kampfunfähig', verb: 'macht kampfunfähig' },
        Invisible: { past: 'unsichtbar', verb: 'macht', suffix: 'unsichtbar' },
        Paralyzed: { past: 'gelähmt', verb: 'lähmt' },
        Petrified: { past: 'versteinert', verb: 'versteinert' },
        Unconscious: {
          past: 'bewusstlos',
          verb: 'macht',
          suffix: 'bewusstlos',
        },
        Spell: {
          past: 'von einem Zauber betroffen',
          verb: 'wirkt einen Zauber auf',
        },
        Ability: {
          past: 'von einer Fähigkeit betroffen',
          verb: 'setzt eine Fähigkeit gegen',
        },
        Advantage: {
          past: 'hat Vorteil',
          verb: 'gewährt Vorteil für',
          noBy: true,
        },
        Disadvantage: {
          past: 'hat Nachteil',
          verb: 'verhängt Nachteil gegen',
          noBy: true,
        },
      },
      condNames: {
        Grappled: 'Gepackt',
        Restrained: 'Gefesselt',
        Prone: 'Liegend',
        Poisoned: 'Vergiftet',
        Stunned: 'Betäubt',
        Blinded: 'Geblendet',
        Charmed: 'Bezaubert',
        Frightened: 'Verängstigt',
        Incapacitated: 'Kampfunfähig',
        Invisible: 'Unsichtbar',
        Paralyzed: 'Gelähmt',
        Petrified: 'Versteinert',
        Unconscious: 'Bewusstlos',
        Spell: 'Zauber',
        Ability: 'Fähigkeit',
        Advantage: 'Vorteil',
        Disadvantage: 'Nachteil',
        Other: 'Sonstiges',
      },
      templates: {
        display: {
          custom: '{emoji} {target} betroffen von {effect} ({source})',
          advantage: '{emoji} {source} hat Vorteil gegen {target}{subject}',
          disadvantage: '{emoji} {source} hat Nachteil gegen {target}{subject}',
          noBy: '{emoji} {target} {past} ({source})',
          standard: '{emoji} {target} {past} durch {source}',
        },
        apply: {
          custom: '{source} wendet {effect} auf {target} an.',
          advantage: '{source} hat Vorteil gegen {target}{subject}.',
          disadvantage: '{source} hat Nachteil gegen {target}{subject}.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} ist nicht mehr von {effect} betroffen.',
          advantage:
            '{source} hat keinen Vorteil mehr gegen {target}{subject}.',
          disadvantage:
            '{source} hat keinen Nachteil mehr gegen {target}{subject}.',
          noBy: '{target} ist nicht mehr {past}.',
          standard: '{target} ist nicht mehr {past} durch {source}.',
        },
      },
      ui: {
        wizard: {
          selectCondition: 'Zustand wählen',
          selectSource: 'Quell-Token wählen',
          selectTarget: 'Ziel-Token wählen',
          selectSubject: 'Subjekt wählen',
          selectDuration: 'Dauer wählen',
          reinstallHandout: 'Handout neu installieren',
          confirmTargetTitle: 'Zielliste bestätigen',
          applyEffectTitle: 'Effekt {condition} anwenden',
          noTokens: 'Keine benannten Tokens auf der aktiven Seite gefunden.',
          confirmIntro: 'Die folgenden Tokens erhalten die Bedingung:',
          confirmBtn: 'Zielliste bestätigen',
          enterDetails: 'Effektdetails eingeben',
          noneBtn: 'Keines',
          subjectDesc: 'Wähle aus, wer oder was den Effekt auslöst.',
          sourceDesc:
            'Wähle das Wesen, das die Bedingung oder den Effekt erzeugt.',
          targetDesc:
            'Wähle das Wesen, das die Bedingung oder den Effekt erhält.',
          otherText: 'Benutzerdefinierter Bedingungstext',
          effectDetails: 'Details zu {condition}',
        },
        col: {
          players: 'Spieler',
          npcs: 'NSC',
          conditions: 'Zustände',
          customEffects: 'Benutzerdefinierte Effekte',
          permanentTurnEnd: 'Permanent / Rundende',
          rounds: 'Runden',
          command: 'Befehl',
          result: 'Ergebnis',
          field: 'Feld',
          value: 'Wert',
          option: 'Option',
          condition: 'Zustand',
          marker: 'Marker',
          item: 'Eintrag',
          removed: 'Entfernt',
          details: 'Details',
          description: 'Beschreibung',
          scenario: 'Szenario',
        },
        dur: {
          untilRemoved: 'Bis zur Entfernung',
          endOfTargetTurn: 'Ende des nächsten Zugs des Ziels',
          endOfSourceTurn: 'Ende des nächsten Zugs der Quelle',
          round1: '1 Runde',
          round2: '2 Runden',
          round3: '3 Runden',
          round10: '10 Runden',
          custom: 'Benutzerdefiniert',
          customPrompt: 'Anzahl der Runden',
          untilRemovedDisplay: 'Bis zur Entfernung',
          turnsRemaining: '{n} verbleibende Zugende(n)',
        },
        btn: {
          openWizard: 'Assistent öffnen',
          openMultiTarget: 'Mehrfachziel-Assistent öffnen',
          openRemovalList: 'Entfernungsliste öffnen',
          showConfig: 'Konfiguration anzeigen',
          runCleanup: 'Bereinigung starten',
          reinstallMacro: 'Makro neu installieren',
          showHelp: 'Hilfe anzeigen',
        },
        title: {
          menu: 'Menü',
          removalMenu: 'Condition Tracker — Entfernen',
          config: 'Konfiguration',
          configTracker: 'Condition Tracker — Konfiguration',
          help: 'Hilfe',
          applied: 'Angewendet',
          removed: 'Zustand entfernt',
          cleanup: 'Bereinigung abgeschlossen',
          macroReinstalled: 'Makro neu installiert',
          handoutReinstalled: 'Handout neu installiert',
          warning: 'Warnung',
          error: 'Fehler',
          turnOrder: 'Rundenreihenfolge',
          noConditions: 'Keine Zustände',
          tokenMoved: 'Token verschoben',
          markedDead: 'Als tot markiert',
          zeroHp: '{name} — 0 TP',
          moveToken: '{name} — Token verschieben?',
          scriptReady: 'Skript bereit',
        },
        heading: {
          quickActions: 'Schnellaktionen',
          settings: 'Einstellungen',
          markerMappings: 'Markerzuordnungen',
          result: 'Ergebnis',
          info: 'Informationen',
          commandOptions: 'Befehlsoptionen',
          promptUi: 'Assistent-Oberfläche',
          examples: 'Beispiele',
          summary: 'Zusammenfassung',
        },
        msg: {
          noActive: 'Es werden keine aktiven Zustände verfolgt.',
          configReset: 'Konfiguration auf Standardwerte zurückgesetzt.',
          unknownConfig:
            'Unbekannte Konfigurationsoption. Verwende --config, um unterstützte Einstellungen anzuzeigen.',
          macroReinstalled:
            'Die Makros {wizard} und {multiTarget} wurden für alle aktuellen GM-Spieler neu installiert.',
          handoutReinstalled:
            'Das Hilfe-Handout {handout} wurde neu installiert.',
          duplicate:
            'Diese exakte Kombination aus Quelle, Subjekt, Ziel, Zustand und benutzerdefiniertem Text ist bereits aktiv.',
          noTargets: 'Keine Ziel-Tokens für die Mehrfachanwendung angegeben.',
          noSelection:
            'Wähle mindestens einen Token auf dem Spielfeld aus, bevor du --multi-target verwendest.',
          invalidIds:
            'Keine gültigen Token-IDs in der aktuellen Auswahl gefunden.',
          reSelectTokens:
            'Keiner der ursprünglich ausgewählten Tokens konnte gefunden werden. Tokens neu auswählen und erneut versuchen.',
          conditionNotFound: 'Zustands-ID nicht gefunden.',
          gmOnly: 'Condition Tracker-Befehle sind nur für GMs verfügbar.',
          commandFailed:
            'Der Befehl konnte nicht sicher ausgeführt werden. Bitte API-Konsole prüfen.',
          sourceTokenNotFound: 'Quell-Token konnte nicht gefunden werden.',
          targetTokenNotFound: 'Ziel-Token konnte nicht gefunden werden.',
          subjectTokenNotFound: 'Subjekt-Token konnte nicht gefunden werden.',
          invalidCondition:
            'Der Zustand muss einer der vordefinierten Zustände oder Sonstiges sein.',
          subjectOnlyCustom:
            '--subject ist nur für Zauber, Fähigkeit, Vorteil, Nachteil und Sonstiges gültig.',
          subjectBypassInvalid:
            '--subjectPromptBypass erwartet true oder false, wenn ein Wert angegeben wird.',
          customDetailsRequired:
            'Details für {condition} sind erforderlich. Verwende --other, um sie anzugeben.',
          markerConfigFormat:
            'Marker-Konfigurationsformat: --config marker Grappled=grab',
          markerPredefinedRequired:
            'Die Marker-Konfiguration erfordert einen vordefinierten Zustandsnamen.',
          markerNameRequired:
            'Die Marker-Konfiguration erfordert einen nicht-leeren Markernamen.',
          markerSet: 'Marker für {condition} auf {marker} gesetzt.',
          healthBarSet: 'Gesundheitsleiste auf {bar} gesetzt.',
          boolSet: '{key} auf {value} gesetzt.',
          expectedBoolean: 'true oder false erwartet.',
          invalidHealthBar:
            'Die Gesundheitsleiste muss bar1_value, bar2_value oder bar3_value sein.',
          markersDisabled: 'Marker sind deaktiviert.',
          noMarkerConfigured:
            'Für diesen Zustand ist kein Marker konfiguriert.',
          markerApplied: 'Marker angewendet: {marker}',
          markerPresent: 'Marker bereits vorhanden: {marker}',
          langSet: 'Sprache auf {locale} gesetzt.',
          invalidLocale: 'Ungültige Locale. Unterstützte Locales: {locales}.',
          otherDurationRequiresRounds:
            'Die Dauer Sonstiges erfordert eine numerische Rundenzahl, zum Beispiel --duration 5 rounds.',
          invalidDuration:
            'Die Dauer muss Bis zur Entfernung, eine Zugende-Option oder eine positive Rundenzahl sein.',
          zeroHpNoConditions:
            '{name} hat 0 TP erreicht und hat keine aktiven Zustände.',
          zeroHpConditions:
            '{name} hat 0 TP erreicht. Zustände zum Entfernen auswählen:',
          removeAllBtn: 'Alle Zustände für {name} entfernen',
          markIncapacitated: 'Als kampfunfähig markieren',
          removeFromTurnOrder: 'Aus Rundenreihenfolge entfernen',
          alreadyIncapacitated: '{name} ist bereits kampfunfähig.',
          tokenRemovedFromTurn:
            '{name} wurde aus der Rundenreihenfolge entfernt.',
          tokenNotInTurn:
            '{name} wurde nicht in der Rundenreihenfolge gefunden.',
          moveTokenPrompt:
            '{name} auf die Kartenebene verschieben, damit es sichtbar bleibt, aber andere Tokens nicht stört?',
          moveTokenBtn: '{name} auf Kartenebene verschieben',
          tokenMoved: '{name} wurde auf die Kartenebene verschoben.',
          tokenNotFound: 'Token nicht gefunden.',
          noActiveConditions:
            '{name} hat keine aktiven Zustände zum Entfernen.',
          deadNoConditions:
            '{name} wurde als tot markiert. Keine Zustände waren aktiv.',
          scriptReady: '{name} ist aktiv und du verwendest Version {version}.',
          reachedZeroHp: '{name} hat 0 TP erreicht',
          manuallyRemoved: 'manuell entfernt',
          durationExpired: 'Dauer abgelaufen',
          markedAsDead: '{name} wurde als tot markiert',
        },
        removal: {
          conditionField: 'Zustand',
          reasonField: 'Grund',
          turnRowField: 'Rundenreihenfolge-Zeile',
          markerField: 'Marker',
          notConfigured: 'Nicht konfiguriert',
          markerRemoved: 'Entfernt ({marker})',
          markerRetained: 'Beibehalten ({marker})',
          rowRemoved: 'Entfernt',
          rowMissing: 'Bereits fehlend',
          manualReason: 'Manuelle Entfernung',
        },
        cleanup: {
          orphaned: 'Verwaiste Zustandseinträge',
          stale: 'Verältete Zustandseinträge',
          orphanedRows: 'Verwaiste Rundenreihenfolge-Zeilen',
          unusedMarkers: 'Unbenutzte Marker',
        },
        apply: {
          turnAppended:
            'Ziel war nicht in der Rundenreihenfolge; Zustandszeile wurde angehängt.',
          turnInserted: 'Zustandszeile unterhalb des Ziel-Tokens eingefügt.',
        },
      },
      handout: {
        versionLabel: 'Version',
        subtitle: 'D&D 5e Statuseffekt-Verwaltung',
        footerNote:
          'Dieses Handout wird bei jedem Skriptstart automatisch erstellt und aktualisiert.',
        overview: {
          heading: 'Übersicht',
          body: 'Condition Tracker verwaltet D&D 5e-Statuszustände und benutzerdefinierte Effekte als beschriftete Zeilen im Roll20-Rundenvählungstracker. Wende Zustände auf Tokens an, verfolge Dauern nach Initiativereihenfolge und entferne abgelaufene Effekte am Zugende automatisch. Alle Befehle sind GM-exklusiv.',
        },
        quickStart: {
          heading: 'Schnellstart',
          colCommand: 'Befehl',
          colDesc: 'Beschreibung',
          rows: [
            [
              '!condition-tracker --prompt',
              'Schritt-für-Schritt-Assistent — Zustand, Tokens und Dauer interaktiv auswählen. Auch als Makro ConditionTrackerWizard verfügbar.',
            ],
            [
              '!condition-tracker --multi-target',
              'Einen Zustand gleichzeitig auf mehrere Tokens anwenden. Auch als Makro ConditionTrackerMultiTarget verfügbar.',
            ],
            [
              '!condition-tracker --menu',
              'Hauptmenü öffnen, um Zustände anzuwenden, anzusehen oder zu entfernen.',
            ],
          ],
        },
        commandsRef: {
          heading: 'Befehlsreferenz',
          colFlag: 'Option',
          colDesc: 'Beschreibung',
          rows: [
            ['--prompt', 'Schritt-für-Schritt-Assistent-Oberfläche'],
            ['--multi-target', 'Zustand auf mehrere Ziel-Tokens anwenden'],
            [
              '--menu',
              'Hauptmenü anzeigen (remove für Entfernungsmenü hinzufügen)',
            ],
            [
              '--source X --target Y --condition Z',
              'Zustand direkt ohne Assistenten anwenden',
            ],
            [
              '--duration &lt;Wert&gt;',
              'Dauer für direkte Anwendung (z. B. 2 rounds)',
            ],
            [
              '--other &lt;Text&gt;',
              'Benutzerdefinierter Text für Zauber / Fähigkeit / Sonstiges',
            ],
            [
              '--remove &lt;Zustands-ID&gt;',
              'Bestimmten Zustand per eindeutiger ID entfernen',
            ],
            [
              '--config &lt;Option&gt; &lt;Wert&gt;',
              'Konfigurationseinstellungen anpassen',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              'subjectPromptBypass nur für diesen Befehl überschreiben (unterstützt auch --subject-prompt-bypass)',
            ],
            [
              '--cleanup',
              'Status bereinigen — verwaiste Zustände und Zeilen entfernen',
            ],
            ['--reinstall-macro', 'GM-Makros neu erstellen oder aktualisieren'],
            [
              '--reinstall-handout',
              'Lokalisiertes Hilfe-Handout neu erstellen oder aktualisieren',
            ],
            [
              '--lang &lt;Locale&gt;',
              'Nachrichten dieses Befehls in einer zusätzlichen Locale ausgeben (zweisprachiger Modus)',
            ],
            ['--help', 'Kurze Hilfekarte im Chat anzeigen'],
          ],
        },
        standardConditions: {
          heading: 'Standardzustände (D&D 5e)',
          colCondition: 'Zustand',
        },
        customEffects: {
          heading: 'Benutzerdefinierte Effekttypen',
          colType: 'Typ',
          colNotes: 'Hinweise',
          rows: [
            [
              '🔮 Zauber',
              'Benannten Zaubereffekt verfolgen — du wirst nach dem Zaubernamen gefragt',
            ],
            [
              '🎯 Fähigkeit',
              'Benannte Klassen- oder Rassafähigkeit verfolgen — du wirst nach dem Namen gefragt',
            ],
            [
              '🍀 Vorteil',
              'Vorteil von einem Token auf einen anderen aufzeichnen; in der Initiative mit der Quelle gruppiert',
            ],
            [
              '⬇️ Nachteil',
              'Nachteil aufzeichnen; in der Initiative mit der Quelle gruppiert',
            ],
            [
              '📝 Sonstiges',
              'Freies benutzerdefiniertes Etikett — du wirst nach einer Beschreibung gefragt',
            ],
          ],
        },
        durationOptions: {
          heading: 'Daueroptionen',
          intro:
            'Die verbleibende Anzahl wird in der pr-Spalte des Rundentracker angezeigt und verringert sich, wenn der Ankerzug des Tokens endet.',
          colOption: 'Option',
          colBehaviour: 'Verhalten',
          rows: [
            [
              'Bis zur Entfernung',
              'Dauerhaft — muss manuell über das Menü oder --remove entfernt werden',
            ],
            [
              'Ende des nächsten Zugs des Ziels',
              'Verfällt am Ende des nächsten Zugs des Ziel-Tokens',
            ],
            [
              'Ende des nächsten Zugs der Quelle',
              'Verfällt am Ende des nächsten Zugs des Quell-Tokens',
            ],
            [
              '1 / 2 / 3 / 10 Runden',
              'Fester Countdown; ein Dekrement pro Zugende des Ankertokens',
            ],
          ],
        },
        configuration: {
          heading: 'Konfiguration',
          intro:
            'Verwende !condition-tracker --config &lt;Option&gt; &lt;Wert&gt; oder die Schaltfläche Konfiguration im Hauptmenü.',
          colOption: 'Option',
          colValues: 'Werte',
          colDesc: 'Beschreibung',
          rows: [
            [
              'useMarkers',
              'true / false',
              'Roll20-Statusmarker auf Tokens anwenden, wenn ein Zustand hinzugefügt wird',
            ],
            [
              'useIcons',
              'true / false',
              'Kurze Symbolcodes (z. B. [G]) statt Emojis in Rundentracker-Zeilen anzeigen',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              'Den optionalen Subjektschritt für Zauber / Fähigkeit / Sonstiges überspringen',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              'Zu überwachende Leiste; wenn sie auf 0 fällt, wird der GM zur Bereinigung aufgefordert',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              'Ausgabesprache für Chat-Nachrichten und das Hilfe-Handout',
            ],
            [
              'markers.&lt;Zustand&gt;',
              '&lt;Markername&gt;',
              'Den Marker für einen bestimmten Zustand überschreiben (z. B. markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: 'Standard-Statusmarker',
          colCondition: 'Zustand',
          colMarker: 'Markername',
        },
      },
    },

    es: {
      conditions: {
        Grappled: { past: 'aferrado', verb: 'aferra' },
        Restrained: { past: 'restringido', verb: 'restringe' },
        Prone: { past: 'derribado', verb: 'derriba' },
        Poisoned: { past: 'envenenado', verb: 'envenena' },
        Stunned: { past: 'aturdido', verb: 'aturde' },
        Blinded: { past: 'cegado', verb: 'ciega' },
        Charmed: { past: 'encantado', verb: 'encanta' },
        Frightened: { past: 'asustado', verb: 'asusta' },
        Incapacitated: { past: 'incapacitado', verb: 'incapacita' },
        Invisible: { past: 'invisible', verb: 'vuelve', suffix: 'invisible' },
        Paralyzed: { past: 'paralizado', verb: 'paraliza' },
        Petrified: { past: 'petrificado', verb: 'petrifica' },
        Unconscious: {
          past: 'inconsciente',
          verb: 'deja',
          suffix: 'inconsciente',
        },
        Spell: {
          past: 'afectado por un conjuro',
          verb: 'lanza un conjuro sobre',
        },
        Ability: {
          past: 'afectado por una habilidad',
          verb: 'usa una habilidad en',
        },
        Advantage: {
          past: 'tiene ventaja',
          verb: 'otorga ventaja a',
          noBy: true,
        },
        Disadvantage: {
          past: 'tiene desventaja',
          verb: 'impone desventaja en',
          noBy: true,
        },
      },
      condNames: {
        Grappled: 'Aferrado',
        Restrained: 'Restringido',
        Prone: 'Derribado',
        Poisoned: 'Envenenado',
        Stunned: 'Aturdido',
        Blinded: 'Cegado',
        Charmed: 'Encantado',
        Frightened: 'Asustado',
        Incapacitated: 'Incapacitado',
        Invisible: 'Invisible',
        Paralyzed: 'Paralizado',
        Petrified: 'Petrificado',
        Unconscious: 'Inconsciente',
        Spell: 'Conjuro',
        Ability: 'Habilidad',
        Advantage: 'Ventaja',
        Disadvantage: 'Desventaja',
        Other: 'Otro',
      },
      templates: {
        display: {
          custom: '{emoji} {target} afectado por {effect} ({source})',
          advantage: '{emoji} {source} tiene ventaja contra {target}{subject}',
          disadvantage:
            '{emoji} {source} tiene desventaja contra {target}{subject}',
          noBy: '{emoji} {target} {past} ({source})',
          standard: '{emoji} {target} {past} por {source}',
        },
        apply: {
          custom: '{source} aplica {effect} a {target}.',
          advantage: '{source} tiene ventaja contra {target}{subject}.',
          disadvantage: '{source} tiene desventaja contra {target}{subject}.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} ya no está afectado por {effect}.',
          advantage: '{source} ya no tiene ventaja contra {target}{subject}.',
          disadvantage:
            '{source} ya no tiene desventaja contra {target}{subject}.',
          noBy: '{target} ya no está {past}.',
          standard: '{target} ya no está {past} por {source}.',
        },
      },
      ui: {
        wizard: {
          selectCondition: 'Seleccionar condición',
          selectSource: 'Seleccionar ficha de origen',
          selectTarget: 'Seleccionar ficha objetivo',
          selectSubject: 'Seleccionar sujeto',
          selectDuration: 'Seleccionar duración',
          confirmTargetTitle: 'Confirmar lista de objetivos',
          applyEffectTitle: 'Aplicar efecto {condition}',
          noTokens: 'No se encontraron fichas con nombre en la página activa.',
          confirmIntro: 'Las siguientes fichas recibirán la condición:',
          confirmBtn: 'Confirmar lista de objetivos',
          enterDetails: 'Introducir detalles del efecto',
          noneBtn: 'Ninguno',
          subjectDesc: 'Selecciona quién o qué aplica el efecto.',
          sourceDesc:
            'Selecciona la criatura que crea o genera la condición o efecto.',
          targetDesc:
            'Selecciona la criatura que recibirá la condición o efecto.',
          otherText: 'Texto de condición personalizada',
          effectDetails: 'Detalles de {condition}',
        },
        col: {
          players: 'Jugadores',
          npcs: 'PNJ',
          conditions: 'Condiciones',
          customEffects: 'Efectos personalizados',
          permanentTurnEnd: 'Permanente / Fin de turno',
          rounds: 'Rondas',
          command: 'Comando',
          result: 'Resultado',
          field: 'Campo',
          value: 'Valor',
          option: 'Opción',
          condition: 'Condición',
          marker: 'Marcador',
          item: 'Elemento',
          removed: 'Eliminado',
          details: 'Detalles',
          description: 'Descripción',
          scenario: 'Escenario',
        },
        dur: {
          untilRemoved: 'Hasta retirar',
          endOfTargetTurn: 'Fin del próximo turno del objetivo',
          endOfSourceTurn: 'Fin del próximo turno de la fuente',
          round1: '1 ronda',
          round2: '2 rondas',
          round3: '3 rondas',
          round10: '10 rondas',
          custom: 'Personalizado',
          customPrompt: 'Número de rondas',
          untilRemovedDisplay: 'Hasta retirar',
          turnsRemaining: '{n} fin(es) de turno restante(s)',
        },
        btn: {
          openWizard: 'Abrir asistente',
          openMultiTarget: 'Abrir asistente multiobjetivo',
          openRemovalList: 'Abrir lista de eliminación',
          showConfig: 'Mostrar configuración',
          runCleanup: 'Ejecutar limpieza',
          reinstallMacro: 'Reinstalar macro',
          reinstallHandout: 'Reinstalar folleto',
          showHelp: 'Mostrar ayuda',
        },
        title: {
          menu: 'Menú',
          removalMenu: 'Eliminación — Condition Tracker',
          config: 'Configuración',
          configTracker: 'Configuración — Condition Tracker',
          help: 'Ayuda',
          applied: 'Aplicado',
          removed: 'Condición eliminada',
          cleanup: 'Limpieza completada',
          macroReinstalled: 'Macro reinstalada',
          handoutReinstalled: 'Folleto reinstalado',
          warning: 'Advertencia',
          error: 'Error',
          turnOrder: 'Orden de iniciativa',
          noConditions: 'Sin condiciones',
          tokenMoved: 'Ficha movida',
          markedDead: 'Marcado como muerto',
          zeroHp: '{name} — 0 PV',
          moveToken: '{name} — ¿Mover ficha?',
          scriptReady: 'Script listo',
        },
        heading: {
          quickActions: 'Acciones rápidas',
          settings: 'Ajustes',
          markerMappings: 'Asignación de marcadores',
          result: 'Resultado',
          info: 'Información',
          commandOptions: 'Opciones de comando',
          promptUi: 'Interfaz del asistente',
          examples: 'Ejemplos',
          summary: 'Resumen',
        },
        msg: {
          noActive: 'No se están rastreando condiciones activas.',
          configReset:
            'Configuración restablecida a los valores predeterminados.',
          unknownConfig:
            'Opción de configuración desconocida. Usa --config para ver los ajustes disponibles.',
          macroReinstalled:
            'Las macros {wizard} y {multiTarget} se han reinstalado para todos los GM actuales.',
          handoutReinstalled: 'El folleto de ayuda {handout} se reinstaló.',
          duplicate:
            'Esa combinación exacta de fuente, sujeto, objetivo, condición y texto personalizado ya está activa.',
          noTargets:
            'No se especificaron fichas objetivo para la aplicación múltiple.',
          noSelection:
            'Selecciona al menos una ficha en el tablero antes de usar --multi-target.',
          invalidIds:
            'No se encontraron identificadores de ficha válidos en la selección actual.',
          reSelectTokens:
            'No se encontró ninguna de las fichas seleccionadas originalmente. Vuelve a seleccionarlas e inténtalo de nuevo.',
          conditionNotFound: 'No se encontró el identificador de condición.',
          gmOnly: 'Los comandos de Condition Tracker son solo para el GM.',
          commandFailed:
            'El comando no pudo completarse de forma segura. Revisa la consola de la API.',
          sourceTokenNotFound: 'No se encontró la ficha de origen.',
          targetTokenNotFound: 'No se encontró la ficha objetivo.',
          subjectTokenNotFound: 'No se encontró la ficha del sujeto.',
          invalidCondition:
            'La condición debe ser una de las predefinidas u Otro.',
          subjectOnlyCustom:
            '--subject solo es válido para Conjuro, Habilidad, Ventaja, Desventaja y Otro.',
          subjectBypassInvalid:
            '--subjectPromptBypass espera true o false cuando se proporciona un valor.',
          customDetailsRequired:
            'Se requieren los detalles de {condition}. Usa --other para proporcionarlos.',
          markerConfigFormat:
            'Formato de configuración del marcador: --config marker Grappled=grab',
          markerPredefinedRequired:
            'La configuración del marcador requiere un nombre de condición predefinido.',
          markerNameRequired:
            'La configuración del marcador requiere un nombre de marcador no vacío.',
          markerSet: 'Marcador de {condition} establecido en {marker}.',
          healthBarSet: 'Barra de salud establecida en {bar}.',
          boolSet: '{key} establecido en {value}.',
          expectedBoolean: 'Se esperaba true o false.',
          invalidHealthBar:
            'La barra de salud debe ser bar1_value, bar2_value o bar3_value.',
          markersDisabled: 'Los marcadores están desactivados.',
          noMarkerConfigured:
            'No hay ningún marcador configurado para esta condición.',
          markerApplied: 'Marcador aplicado: {marker}',
          markerPresent: 'Marcador ya presente: {marker}',
          langSet: 'Idioma establecido en {locale}.',
          invalidLocale:
            'Configuración regional no válida. Locales admitidas: {locales}.',
          otherDurationRequiresRounds:
            'La duración Otro requiere un número de rondas, por ejemplo --duration 5 rounds.',
          invalidDuration:
            'La duración debe ser Hasta retirar, una opción de fin de turno o un número positivo de rondas.',
          zeroHpNoConditions:
            '{name} ha llegado a 0 PV y no tiene condiciones activas.',
          zeroHpConditions:
            '{name} ha llegado a 0 PV. Elige las condiciones a eliminar:',
          removeAllBtn: 'Eliminar todas las condiciones de {name}',
          markIncapacitated: 'Marcar como incapacitado',
          removeFromTurnOrder: 'Eliminar del orden de iniciativa',
          alreadyIncapacitated: '{name} ya está incapacitado.',
          tokenRemovedFromTurn:
            '{name} ha sido eliminado del orden de iniciativa.',
          tokenNotInTurn: '{name} no se encontró en el orden de iniciativa.',
          moveTokenPrompt:
            '¿Mover {name} a la capa del mapa para que permanezca visible sin interferir con otras fichas?',
          moveTokenBtn: 'Mover {name} a la capa del mapa',
          tokenMoved: '{name} ha sido movido a la capa del mapa.',
          tokenNotFound: 'Ficha no encontrada.',
          noActiveConditions:
            '{name} no tiene condiciones activas que eliminar.',
          deadNoConditions:
            '{name} fue marcado como muerto. No había condiciones activas.',
          scriptReady: '{name} está activo y usas la versión {version}.',
          reachedZeroHp: '{name} alcanzó 0 PV',
          manuallyRemoved: 'eliminación manual',
          durationExpired: 'su duración expiró',
          markedAsDead: '{name} fue marcado como muerto',
        },
        removal: {
          conditionField: 'Condición',
          reasonField: 'Razón',
          turnRowField: 'Fila de iniciativa',
          markerField: 'Marcador',
          notConfigured: 'No configurado',
          markerRemoved: 'Eliminado ({marker})',
          markerRetained: 'Conservado ({marker})',
          rowRemoved: 'Eliminado',
          rowMissing: 'Ya faltaba',
          manualReason: 'Eliminación manual',
        },
        cleanup: {
          orphaned: 'Entradas de condición huérfanas',
          stale: 'Entradas de condición obsoletas',
          orphanedRows: 'Filas de iniciativa huérfanas',
          unusedMarkers: 'Marcadores sin usar',
        },
        apply: {
          turnAppended:
            'El objetivo no estaba en el orden de iniciativa; se agregó la fila de condición.',
          turnInserted:
            'Fila de condición insertada debajo de la ficha objetivo.',
        },
      },
      handout: {
        versionLabel: 'Versión',
        subtitle: 'Gestor de efectos de estado de D&D 5e',
        footerNote:
          'Este folleto se crea y actualiza automáticamente cada vez que se carga el script.',
        overview: {
          heading: 'Descripción general',
          body: 'Condition Tracker gestiona las condiciones de estado de D&D 5e y los efectos personalizados como filas etiquetadas en el rastreador de turno de Roll20. Aplica condiciones a fichas, rastrea duraciones por orden de iniciativa y elimina automáticamente los efectos caducados al finalizar un turno. Todos los comandos son exclusivos para el GM.',
        },
        quickStart: {
          heading: 'Inicio rápido',
          colCommand: 'Comando',
          colDesc: 'Descripción',
          rows: [
            [
              '!condition-tracker --prompt',
              'Asistente paso a paso — elige condición, fichas y duración de forma interactiva. También disponible como macro ConditionTrackerWizard.',
            ],
            [
              '!condition-tracker --multi-target',
              'Aplicar una condición a varias fichas simultáneamente. También disponible como macro ConditionTrackerMultiTarget.',
            ],
            [
              '!condition-tracker --menu',
              'Abrir el menú principal para aplicar, revisar o eliminar condiciones.',
            ],
          ],
        },
        commandsRef: {
          heading: 'Referencia de comandos',
          colFlag: 'Opción',
          colDesc: 'Descripción',
          rows: [
            ['--prompt', 'Interfaz del asistente paso a paso'],
            [
              '--multi-target',
              'Aplicar una condición a varias fichas objetivo',
            ],
            [
              '--menu',
              'Mostrar menú principal (añadir remove para el menú de eliminación)',
            ],
            [
              '--source X --target Y --condition Z',
              'Aplicar una condición directamente sin el asistente',
            ],
            [
              '--duration &lt;valor&gt;',
              'Duración para aplicación directa (p. ej. 2 rounds)',
            ],
            [
              '--other &lt;texto&gt;',
              'Texto personalizado para tipos Conjuro / Habilidad / Otro',
            ],
            [
              '--remove &lt;id-condición&gt;',
              'Eliminar una condición específica por su ID único',
            ],
            [
              '--config &lt;opción&gt; &lt;valor&gt;',
              'Ajustar opciones de configuración',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              'Sobrescribir subjectPromptBypass solo para este comando (también admite --subject-prompt-bypass)',
            ],
            [
              '--cleanup',
              'Reconciliar estado — eliminar condiciones y filas huérfanas',
            ],
            ['--reinstall-macro', 'Recrear o actualizar las macros del GM'],
            [
              '--reinstall-handout',
              'Recrear o actualizar el folleto de ayuda localizado',
            ],
            [
              '--lang &lt;locale&gt;',
              'Emitir los mensajes de este comando en una locale adicional (modo bilingüe)',
            ],
            ['--help', 'Mostrar una tarjeta de ayuda breve en el chat'],
          ],
        },
        standardConditions: {
          heading: 'Condiciones estándar (D&D 5e)',
          colCondition: 'Condición',
        },
        customEffects: {
          heading: 'Tipos de efectos personalizados',
          colType: 'Tipo',
          colNotes: 'Notas',
          rows: [
            [
              '🔮 Conjuro',
              'Rastrear un efecto de conjuro nombrado — se te pedirá el nombre del conjuro',
            ],
            [
              '🎯 Habilidad',
              'Rastrear una habilidad de clase o racial — se te pedirá el nombre',
            ],
            [
              '🍀 Ventaja',
              'Registrar ventaja otorgada de una ficha a otra; agrupada con la fuente en la iniciativa',
            ],
            [
              '⬇️ Desventaja',
              'Registrar desventaja impuesta; agrupada con la fuente en la iniciativa',
            ],
            [
              '📝 Otro',
              'Etiqueta personalizada libre — se te pedirá una descripción',
            ],
          ],
        },
        durationOptions: {
          heading: 'Opciones de duración',
          intro:
            'El conteo restante se muestra en la columna pr del rastreador de turno y disminuye cuando termina el turno de la ficha ancla.',
          colOption: 'Opción',
          colBehaviour: 'Comportamiento',
          rows: [
            [
              'Hasta retirar',
              'Permanente — debe eliminarse manualmente mediante el menú o --remove',
            ],
            [
              'Fin del próximo turno del objetivo',
              'Expira cuando termina el próximo turno del objetivo en la iniciativa',
            ],
            [
              'Fin del próximo turno de la fuente',
              'Expira cuando termina el próximo turno de la fuente en la iniciativa',
            ],
            [
              '1 / 2 / 3 / 10 rondas',
              'Cuenta regresiva fija; un decremento por cada fin de turno del ancla',
            ],
          ],
        },
        configuration: {
          heading: 'Configuración',
          intro:
            'Usa !condition-tracker --config &lt;opción&gt; &lt;valor&gt; o el botón Configuración en el menú principal.',
          colOption: 'Opción',
          colValues: 'Valores',
          colDesc: 'Descripción',
          rows: [
            [
              'useMarkers',
              'true / false',
              'Aplicar marcadores de estado de Roll20 a las fichas al agregar una condición',
            ],
            [
              'useIcons',
              'true / false',
              'Mostrar códigos de ícono cortos (p. ej. [G]) en las filas del rastreador de turno',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              'Omitir el paso de sujeto opcional para efectos Conjuro / Habilidad / Otro',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              'Barra a vigilar; cuando llega a 0 se le pide al GM que limpie las condiciones',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              'Idioma de los mensajes de chat y el folleto de ayuda',
            ],
            [
              'markers.&lt;Condición&gt;',
              '&lt;nombre del marcador&gt;',
              'Reemplazar el marcador usado para una condición específica (p. ej. markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: 'Marcadores de estado predeterminados',
          colCondition: 'Condición',
          colMarker: 'Nombre del marcador',
        },
      },
    },

    'pt-BR': {
      conditions: {
        Grappled: { past: 'agarrado', verb: 'agarra' },
        Restrained: { past: 'contido', verb: 'contém' },
        Prone: { past: 'derrubado', verb: 'derruba' },
        Poisoned: { past: 'envenenado', verb: 'envenena' },
        Stunned: { past: 'atordoado', verb: 'atordoa' },
        Blinded: { past: 'cegado', verb: 'cega' },
        Charmed: { past: 'encantado', verb: 'encanta' },
        Frightened: { past: 'apavorado', verb: 'apavora' },
        Incapacitated: { past: 'incapacitado', verb: 'incapacita' },
        Invisible: { past: 'invisível', verb: 'torna', suffix: 'invisível' },
        Paralyzed: { past: 'paralisado', verb: 'paralisa' },
        Petrified: { past: 'petrificado', verb: 'petrifica' },
        Unconscious: {
          past: 'inconsciente',
          verb: 'deixa',
          suffix: 'inconsciente',
        },
        Spell: { past: 'afetado por uma magia', verb: 'lança uma magia em' },
        Ability: {
          past: 'afetado por uma habilidade',
          verb: 'usa uma habilidade em',
        },
        Advantage: {
          past: 'tem vantagem',
          verb: 'concede vantagem a',
          noBy: true,
        },
        Disadvantage: {
          past: 'tem desvantagem',
          verb: 'impõe desvantagem em',
          noBy: true,
        },
      },
      condNames: {
        Grappled: 'Agarrado',
        Restrained: 'Contido',
        Prone: 'Derrubado',
        Poisoned: 'Envenenado',
        Stunned: 'Atordoado',
        Blinded: 'Cegado',
        Charmed: 'Encantado',
        Frightened: 'Apavorado',
        Incapacitated: 'Incapacitado',
        Invisible: 'Invisível',
        Paralyzed: 'Paralisado',
        Petrified: 'Petrificado',
        Unconscious: 'Inconsciente',
        Spell: 'Magia',
        Ability: 'Habilidade',
        Advantage: 'Vantagem',
        Disadvantage: 'Desvantagem',
        Other: 'Outro',
      },
      templates: {
        display: {
          custom: '{emoji} {target} afetado por {effect} ({source})',
          advantage: '{emoji} {source} tem vantagem contra {target}{subject}',
          disadvantage:
            '{emoji} {source} tem desvantagem contra {target}{subject}',
          noBy: '{emoji} {target} {past} ({source})',
          standard: '{emoji} {target} {past} por {source}',
        },
        apply: {
          custom: '{source} aplica {effect} em {target}.',
          advantage: '{source} tem vantagem contra {target}{subject}.',
          disadvantage: '{source} tem desvantagem contra {target}{subject}.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} não está mais afetado por {effect}.',
          advantage: '{source} não tem mais vantagem contra {target}{subject}.',
          disadvantage:
            '{source} não tem mais desvantagem contra {target}{subject}.',
          noBy: '{target} não está mais {past}.',
          standard: '{target} não está mais {past} por {source}.',
        },
      },
      ui: {
        wizard: {
          selectCondition: 'Selecionar condição',
          selectSource: 'Selecionar ficha de origem',
          selectTarget: 'Selecionar ficha alvo',
          selectSubject: 'Selecionar sujeito',
          selectDuration: 'Selecionar duração',
          reinstallHandout: 'Reinstalar livreto',
          confirmTargetTitle: 'Confirmar lista de alvos',
          applyEffectTitle: 'Aplicar efeito {condition}',
          noTokens: 'Nenhuma ficha nomeada encontrada na página ativa.',
          confirmIntro: 'As seguintes fichas receberão a condição:',
          confirmBtn: 'Confirmar lista de alvos',
          enterDetails: 'Inserir detalhes do efeito',
          noneBtn: 'Nenhum',
          subjectDesc: 'Selecione quem ou o que aplica o efeito.',
          sourceDesc:
            'Selecione a criatura que está criando ou gerando a condição ou efeito.',
          targetDesc: 'Selecione a criatura que receberá a condição ou efeito.',
          otherText: 'Texto de condição personalizada',
          effectDetails: 'Detalhes de {condition}',
        },
        col: {
          players: 'Jogadores',
          npcs: 'NPCs',
          conditions: 'Condições',
          customEffects: 'Efeitos personalizados',
          permanentTurnEnd: 'Permanente / Fim de turno',
          rounds: 'Rodadas',
          command: 'Comando',
          result: 'Resultado',
          field: 'Campo',
          value: 'Valor',
          option: 'Opção',
          condition: 'Condição',
          marker: 'Marcador',
          item: 'Item',
          removed: 'Removido',
          details: 'Detalhes',
          description: 'Descrição',
          scenario: 'Cenário',
        },
        dur: {
          untilRemoved: 'Até ser removido',
          endOfTargetTurn: 'Fim do próximo turno do alvo',
          endOfSourceTurn: 'Fim do próximo turno da origem',
          round1: '1 rodada',
          round2: '2 rodadas',
          round3: '3 rodadas',
          round10: '10 rodadas',
          custom: 'Personalizado',
          customPrompt: 'Número de rodadas',
          untilRemovedDisplay: 'Até ser removido',
          turnsRemaining: '{n} fim(ns) de turno restante(s)',
        },
        btn: {
          openWizard: 'Abrir assistente',
          openMultiTarget: 'Abrir assistente multialvo',
          openRemovalList: 'Abrir lista de remoção',
          showConfig: 'Mostrar configuração',
          runCleanup: 'Executar limpeza',
          reinstallMacro: 'Reinstalar macro',
          showHelp: 'Mostrar ajuda',
        },
        title: {
          menu: 'Menu',
          removalMenu: 'Remoção — Condition Tracker',
          config: 'Configuração',
          configTracker: 'Configuração — Condition Tracker',
          help: 'Ajuda',
          applied: 'Aplicado',
          removed: 'Condição removida',
          cleanup: 'Limpeza concluída',
          macroReinstalled: 'Macro reinstalada',
          handoutReinstalled: 'Livreto reinstalado',
          warning: 'Aviso',
          error: 'Erro',
          turnOrder: 'Ordem de iniciativa',
          noConditions: 'Sem condições',
          tokenMoved: 'Ficha movida',
          markedDead: 'Marcado como morto',
          zeroHp: '{name} — 0 PV',
          moveToken: '{name} — Mover ficha?',
          scriptReady: 'Script pronto',
        },
        heading: {
          quickActions: 'Ações rápidas',
          settings: 'Configurações',
          markerMappings: 'Mapeamento de marcadores',
          result: 'Resultado',
          info: 'Informações',
          commandOptions: 'Opções de comando',
          promptUi: 'Interface do assistente',
          examples: 'Exemplos',
          summary: 'Resumo',
        },
        msg: {
          noActive: 'Nenhuma condição ativa está sendo rastreada.',
          configReset: 'Configuração redefinida para os padrões do mod.',
          unknownConfig:
            'Opção de configuração desconhecida. Use --config para ver as configurações disponíveis.',
          macroReinstalled:
            'As macros {wizard} e {multiTarget} foram reinstaladas para todos os GMs atuais.',
          handoutReinstalled: 'O livreto de ajuda {handout} foi reinstalado.',
          duplicate:
            'Essa combinação exata de origem, sujeito, alvo, condição e texto personalizado já está ativa.',
          noTargets: 'Nenhuma ficha alvo especificada para aplicação múltipla.',
          noSelection:
            'Selecione pelo menos uma ficha no tabuleiro antes de usar --multi-target.',
          invalidIds: 'Nenhum ID de ficha válido encontrado na seleção atual.',
          reSelectTokens:
            'Nenhuma das fichas selecionadas originalmente pôde ser encontrada. Selecione novamente e tente de novo.',
          conditionNotFound: 'ID de condição não encontrado.',
          gmOnly: 'Os comandos do Condition Tracker são exclusivos para o GM.',
          commandFailed:
            'O comando não pôde ser concluído com segurança. Verifique o console da API.',
          sourceTokenNotFound: 'A ficha de origem não foi encontrada.',
          targetTokenNotFound: 'A ficha alvo não foi encontrada.',
          subjectTokenNotFound: 'A ficha do sujeito não foi encontrada.',
          invalidCondition:
            'A condição deve ser uma das predefinidas ou Outro.',
          subjectOnlyCustom:
            '--subject só é válido para Magia, Habilidade, Vantagem, Desvantagem e Outro.',
          subjectBypassInvalid:
            '--subjectPromptBypass espera true ou false quando um valor é fornecido.',
          customDetailsRequired:
            'Os detalhes de {condition} são obrigatórios. Use --other para fornecê-los.',
          markerConfigFormat:
            'Formato de configuração do marcador: --config marker Grappled=grab',
          markerPredefinedRequired:
            'A configuração do marcador requer um nome de condição predefinido.',
          markerNameRequired:
            'A configuração do marcador requer um nome de marcador não vazio.',
          markerSet: 'Marcador de {condition} definido como {marker}.',
          healthBarSet: 'Barra de saúde definida como {bar}.',
          boolSet: '{key} definido como {value}.',
          expectedBoolean: 'Era esperado true ou false.',
          invalidHealthBar:
            'A barra de saúde deve ser bar1_value, bar2_value ou bar3_value.',
          markersDisabled: 'Os marcadores estão desativados.',
          noMarkerConfigured:
            'Nenhum marcador está configurado para esta condição.',
          markerApplied: 'Marcador aplicado: {marker}',
          markerPresent: 'Marcador já presente: {marker}',
          langSet: 'Idioma definido como {locale}.',
          invalidLocale: 'Locale inválida. Locales suportadas: {locales}.',
          otherDurationRequiresRounds:
            'A duração Outro requer um número de rodadas, por exemplo --duration 5 rounds.',
          invalidDuration:
            'A duração deve ser Até ser removido, uma opção de fim de turno ou uma contagem positiva de rodadas.',
          zeroHpNoConditions:
            '{name} chegou a 0 PV e não tem condições ativas.',
          zeroHpConditions:
            '{name} chegou a 0 PV. Escolha as condições a remover:',
          removeAllBtn: 'Remover todas as condições de {name}',
          markIncapacitated: 'Marcar como incapacitado',
          removeFromTurnOrder: 'Remover da ordem de iniciativa',
          alreadyIncapacitated: '{name} já está incapacitado.',
          tokenRemovedFromTurn: '{name} foi removido da ordem de iniciativa.',
          tokenNotInTurn: '{name} não foi encontrado na ordem de iniciativa.',
          moveTokenPrompt:
            'Mover {name} para a camada do mapa para que permaneça visível sem interferir com outras fichas?',
          moveTokenBtn: 'Mover {name} para a camada do mapa',
          tokenMoved: '{name} foi movido para a camada do mapa.',
          tokenNotFound: 'Ficha não encontrada.',
          noActiveConditions: '{name} não tem condições ativas para remover.',
          deadNoConditions:
            '{name} foi marcado como morto. Nenhuma condição estava ativa.',
          scriptReady:
            '{name} está ativo e você está usando a versão {version}.',
          reachedZeroHp: '{name} chegou a 0 PV',
          manuallyRemoved: 'remoção manual',
          durationExpired: 'sua duração expirou',
          markedAsDead: '{name} foi marcado como morto',
        },
        removal: {
          conditionField: 'Condição',
          reasonField: 'Motivo',
          turnRowField: 'Linha de iniciativa',
          markerField: 'Marcador',
          notConfigured: 'Não configurado',
          markerRemoved: 'Removido ({marker})',
          markerRetained: 'Mantido ({marker})',
          rowRemoved: 'Removido',
          rowMissing: 'Já ausente',
          manualReason: 'Remoção manual',
        },
        cleanup: {
          orphaned: 'Entradas de condição órfãs',
          stale: 'Entradas de condição obsoletas',
          orphanedRows: 'Linhas de iniciativa órfãs',
          unusedMarkers: 'Marcadores não utilizados',
        },
        apply: {
          turnAppended:
            'O alvo não estava na ordem de iniciativa; a linha de condição foi adicionada.',
          turnInserted: 'Linha de condição inserida abaixo da ficha alvo.',
        },
      },
      handout: {
        versionLabel: 'Versão',
        subtitle: 'Gerenciador de efeitos de status de D&D 5e',
        footerNote:
          'Este livreto é criado e atualizado automaticamente cada vez que o script é carregado.',
        overview: {
          heading: 'Visão geral',
          body: 'Condition Tracker gerencia condições de status do D&D 5e e efeitos personalizados como linhas rotuladas no rastreador de turno do Roll20. Aplique condições a fichas, rastreie durações por ordem de iniciativa e remova automaticamente os efeitos expirados ao final de um turno. Todos os comandos são exclusivos para o GM.',
        },
        quickStart: {
          heading: 'Início rápido',
          colCommand: 'Comando',
          colDesc: 'Descrição',
          rows: [
            [
              '!condition-tracker --prompt',
              'Assistente passo a passo — escolha condição, fichas e duração de forma interativa. Também disponível como macro ConditionTrackerWizard.',
            ],
            [
              '!condition-tracker --multi-target',
              'Aplicar uma condição a várias fichas simultaneamente. Também disponível como macro ConditionTrackerMultiTarget.',
            ],
            [
              '!condition-tracker --menu',
              'Abrir o menu principal para aplicar, revisar ou remover condições.',
            ],
          ],
        },
        commandsRef: {
          heading: 'Referência de comandos',
          colFlag: 'Opção',
          colDesc: 'Descrição',
          rows: [
            ['--prompt', 'Interface do assistente passo a passo'],
            ['--multi-target', 'Aplicar uma condição a várias fichas alvo'],
            [
              '--menu',
              'Mostrar menu principal (adicionar remove para o menu de remoção)',
            ],
            [
              '--source X --target Y --condition Z',
              'Aplicar uma condição diretamente sem o assistente',
            ],
            [
              '--duration &lt;valor&gt;',
              'Duração para aplicação direta (ex. 2 rounds)',
            ],
            [
              '--other &lt;texto&gt;',
              'Texto personalizado para tipos Magia / Habilidade / Outro',
            ],
            [
              '--remove &lt;id-condição&gt;',
              'Remover uma condição específica pelo seu ID único',
            ],
            [
              '--config &lt;opção&gt; &lt;valor&gt;',
              'Ajustar opções de configuração',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              'Substituir subjectPromptBypass somente para este comando (também aceita --subject-prompt-bypass)',
            ],
            [
              '--cleanup',
              'Reconciliar estado — remover condições e linhas órfãs',
            ],
            ['--reinstall-macro', 'Recriar ou atualizar as macros do GM'],
            [
              '--reinstall-handout',
              'Recriar ou atualizar o livreto de ajuda localizado',
            ],
            [
              '--lang &lt;locale&gt;',
              'Emitir as mensagens deste comando em uma locale adicional (modo bilingüe)',
            ],
            ['--help', 'Mostrar um cartão de ajuda breve no chat'],
          ],
        },
        standardConditions: {
          heading: 'Condições padrão (D&D 5e)',
          colCondition: 'Condição',
        },
        customEffects: {
          heading: 'Tipos de efeitos personalizados',
          colType: 'Tipo',
          colNotes: 'Notas',
          rows: [
            [
              '🔮 Magia',
              'Rastrear um efeito de magia nomeado — você será solicitado a inserir o nome da magia',
            ],
            [
              '🎯 Habilidade',
              'Rastrear uma habilidade de classe ou raça — você será solicitado a inserir o nome',
            ],
            [
              '🍀 Vantagem',
              'Registrar vantagem concedida de uma ficha a outra; agrupada com a origem na iniciativa',
            ],
            [
              '⬇️ Desvantagem',
              'Registrar desvantagem imposta; agrupada com a origem na iniciativa',
            ],
            [
              '📝 Outro',
              'Rótulo personalizado livre — você será solicitado a inserir uma descrição',
            ],
          ],
        },
        durationOptions: {
          heading: 'Opções de duração',
          intro:
            'O contador restante é exibido na coluna pr do rastreador de turno e diminui quando o turno da ficha âncora termina.',
          colOption: 'Opção',
          colBehaviour: 'Comportamento',
          rows: [
            [
              'Até ser removido',
              'Permanente — deve ser removido manualmente pelo menu ou --remove',
            ],
            [
              'Fim do próximo turno do alvo',
              'Expira quando o próximo turno do alvo termina na iniciativa',
            ],
            [
              'Fim do próximo turno da origem',
              'Expira quando o próximo turno da origem termina na iniciativa',
            ],
            [
              '1 / 2 / 3 / 10 rodadas',
              'Contagem regressiva fixa; um decremento por cada fim de turno da âncora',
            ],
          ],
        },
        configuration: {
          heading: 'Configuração',
          intro:
            'Use !condition-tracker --config &lt;opção&gt; &lt;valor&gt; ou o botão Configuração no menu principal.',
          colOption: 'Opção',
          colValues: 'Valores',
          colDesc: 'Descrição',
          rows: [
            [
              'useMarkers',
              'true / false',
              'Aplicar marcadores de status do Roll20 às fichas ao adicionar uma condição',
            ],
            [
              'useIcons',
              'true / false',
              'Exibir códigos de ícone curtos (ex. [G]) nas linhas do rastreador de turno',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              'Ignorar a etapa de sujeito opcional para efeitos Magia / Habilidade / Outro',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              'Barra a monitorar; quando chega a 0 o GM é solicitado a limpar as condições',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              'Idioma das mensagens de chat e do livreto de ajuda',
            ],
            [
              'markers.&lt;Condição&gt;',
              '&lt;nome do marcador&gt;',
              'Substituir o marcador usado para uma condição específica (ex. markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: 'Marcadores de status padrão',
          colCondition: 'Condição',
          colMarker: 'Nome do marcador',
        },
      },
    },
    ko: {
      conditions: {
        Grappled: { past: '붙잡힘', verb: '붙잡음' },
        Restrained: { past: '구속됨', verb: '구속함' },
        Prone: { past: '넘어짐', verb: '넘어뜨림', suffix: '상태' },
        Poisoned: { past: '중독됨', verb: '중독시킴' },
        Stunned: { past: '기절함', verb: '기절시킴' },
        Blinded: { past: '눈이 멂', verb: '눈을 멀게 함' },
        Charmed: { past: '매혹됨', verb: '매혹함' },
        Frightened: { past: '겁에 질림', verb: '겁을 줌' },
        Incapacitated: { past: '무력화됨', verb: '무력화시킴' },
        Invisible: { past: '투명해짐', verb: '투명하게 만듦' },
        Paralyzed: { past: '마비됨', verb: '마비시킴' },
        Petrified: { past: '석화됨', verb: '석화시킴' },
        Unconscious: { past: '의식 불명', verb: '의식 불명으로 만듦' },
        Spell: { past: '주문에 걸림', verb: '주문을 시전함' },
        Ability: { past: '능력의 영향을 받음', verb: '능력을 사용함' },
        Advantage: {
          past: '이점을 가짐',
          verb: '이점을 부여함',
          noBy: true,
        },
        Disadvantage: {
          past: '불이익을 가짐',
          verb: '불이익을 가함',
          noBy: true,
        },
      },
      condNames: {
        Grappled: '붙잡힘',
        Restrained: '구속됨',
        Prone: '넘어짐',
        Poisoned: '중독됨',
        Stunned: '기절함',
        Blinded: '눈이 멂',
        Charmed: '매혹됨',
        Frightened: '겁에 질림',
        Incapacitated: '무력화됨',
        Invisible: '투명화',
        Paralyzed: '마비됨',
        Petrified: '석화됨',
        Unconscious: '의식 불명',
        Spell: '주문',
        Ability: '능력',
        Advantage: '이점',
        Disadvantage: '불이익',
        Other: '기타',
      },
      templates: {
        display: {
          custom: '{emoji} {target} 이(가) {effect}의 영향을 받음 ({source})',
          advantage:
            '{emoji} {source} 이(가) {target}{subject} 에 대해 이점을 가짐',
          disadvantage:
            '{emoji} {source} 이(가) {target}{subject} 에 대해 불이익을 가짐',
          noBy: '{emoji} {target} 이(가) {past} ({source})',
          standard: '{emoji} {target} 이(가) {source} 에 의해 {past}',
        },
        apply: {
          custom: '{source} 이(가) {target} 에게 {effect} 효과를 적용함.',
          advantage: '{source} 이(가) {target}{subject} 에 대해 이점을 가짐.',
          disadvantage:
            '{source} 이(가) {target}{subject} 에 대해 불이익을 가짐.',
          withSuffix: '{source} {verb} {target} {suffix}.',
          standard: '{source} {verb} {target}.',
        },
        remove: {
          custom: '{target} 에게 적용된 {effect} 효과가 종료됨.',
          advantage:
            '{source} 이(가) {target}{subject} 에 대해 더 이상 이점을 가지지 않음.',
          disadvantage:
            '{source} 이(가) {target}{subject} 에 대해 더 이상 불이익을 가지지 않음.',
          noBy: '{target} 이(가) 더 이상 {past} 상태가 아님.',
          standard:
            '{target} 이(가) 더 이상 {source} 에 의해 {past} 상태가 아님.',
        },
      },
      ui: {
        wizard: {
          selectCondition: '상태 선택',
          selectSource: '시전자 토큰 선택',
          selectTarget: '대상 토큰 선택',
          selectSubject: '주체 선택',
          selectDuration: '지속 시간 선택',
          confirmTargetTitle: '대상 목록 확인',
          applyEffectTitle: '{condition} 효과 적용',
          noTokens: '활성 페이지에서 이름이 있는 토큰을 찾을 수 없습니다.',
          confirmIntro: '다음 토큰들에 상태가 적용됩니다:',
          confirmBtn: '대상 목록 확인',
          enterDetails: '효과 상세 내용 입력',
          noneBtn: '없음',
          subjectDesc: '효과를 전달하는 대상이나 항목을 선택하세요.',
          sourceDesc: '상태나 효과를 생성하는 생명체를 선택하세요.',
          targetDesc: '상태나 효과를 받을 생명체를 선택하세요.',
          otherText: '기타 상태 텍스트',
          effectDetails: '{condition} 상세 내용',
        },
        col: {
          players: '플레이어',
          npcs: 'NPC',
          conditions: '상태',
          customEffects: '사용자 정의 효과',
          permanentTurnEnd: '영구 / 턴 종료',
          rounds: '라운드',
          command: '명령어',
          result: '결과',
          field: '필드',
          value: '값',
          option: '옵션',
          condition: '상태',
          marker: '마커',
          item: '항목',
          removed: '제거됨',
          details: '상세 내용',
          description: '설명',
          scenario: '시나리오',
        },
        dur: {
          untilRemoved: '제거될 때까지',
          endOfTargetTurn: '대상의 다음 턴 종료 시',
          endOfSourceTurn: '시전자의 다음 턴 종료 시',
          round1: '1 라운드',
          round2: '2 라운드',
          round3: '3 라운드',
          round10: '10 라운드',
          custom: '사용자 정의',
          customPrompt: '라운드 수',
          untilRemovedDisplay: '제거될 때까지',
          turnsRemaining: '{n} 개의 추적된 턴 종료 남음',
        },
        btn: {
          openWizard: '위저드 열기',
          openMultiTarget: '다중 대상 위저드 열기',
          openRemovalList: '제거 목록 열기',
          showConfig: '설정 표시',
          runCleanup: '정리 실행',
          reinstallMacro: '매크로 재설치',
          reinstallHandout: '유인물 재설치',
          showHelp: '도움말 표시',
        },
        title: {
          menu: '메뉴',
          removalMenu: '상태 추적기 제거',
          config: '설정',
          configTracker: '상태 추적기 설정',
          help: '도움말',
          applied: '적용됨',
          removed: '상태 제거됨',
          cleanup: '정리 완료',
          macroReinstalled: '매크로 재설치됨',
          handoutReinstalled: '유인물 재설치됨',
          warning: '경고',
          error: '오류',
          turnOrder: '턴 순서',
          noConditions: '상태 없음',
          tokenMoved: '토큰 이동됨',
          markedDead: '사망으로 표시됨',
          zeroHp: '{name} — 0 HP',
          moveToken: '{name} — 토큰을 이동하시겠습니까?',
          scriptReady: '스크립트 준비됨',
        },
        heading: {
          quickActions: '빠른 작업',
          settings: '설정',
          markerMappings: '마커 매핑',
          result: '결과',
          info: '정보',
          commandOptions: '명령어 옵션',
          promptUi: '프롬프트 UI',
          examples: '예시',
          summary: '요약',
        },
        msg: {
          noActive: '추적 중인 활성 상태가 없습니다.',
          configReset: '설정이 모드 기본값으로 재설정되었습니다.',
          unknownConfig:
            '알 수 없는 설정 옵션입니다. --config 를 사용하여 지원되는 설정을 확인하세요.',
          macroReinstalled:
            '{wizard} 및 {multiTarget} 매크로가 모든 현재 GM 플레이어를 위해 재설치되었습니다.',
          handoutReinstalled: '도움말 유인물 {handout}이(가) 재설치되었습니다.',
          duplicate:
            '동일한 시전자, 주체, 대상, 상태 및 사용자 정의 텍스트가 이미 활성화되어 있습니다.',
          noTargets: '다중 대상 적용을 위한 대상 토큰이 지정되지 않았습니다.',
          noSelection:
            '--multi-target 을 사용하기 전에 보드에서 하나 이상의 토큰을 선택하세요.',
          invalidIds: '현재 선택 항목에서 유효한 토큰 ID를 찾을 수 없습니다.',
          reSelectTokens:
            '원래 선택한 토큰을 찾을 수 없습니다. 토큰을 다시 선택하고 다시 시도하세요.',
          conditionNotFound: '상태 ID를 찾을 수 없습니다.',
          gmOnly: '상태 추적기 명령어는 GM 전용입니다.',
          commandFailed:
            '명령어를 안전하게 완료할 수 없습니다. 자세한 내용은 API 콘솔을 확인하세요.',
          sourceTokenNotFound: '시전자 토큰을 찾을 수 없습니다.',
          targetTokenNotFound: '대상 토큰을 찾을 수 없습니다.',
          subjectTokenNotFound: '주체 토큰을 찾을 수 없습니다.',
          invalidCondition:
            "상태는 미리 정의된 상태 중 하나이거나 '기타'여야 합니다.",
          subjectOnlyCustom:
            '--subject 는 주문, 능력, 이점, 불이익 및 기타 효과에만 유효합니다.',
          subjectBypassInvalid:
            '--subjectPromptBypass 는 값이 제공될 때 true 또는 false를 기대합니다.',
          customDetailsRequired:
            '{condition} 상세 내용이 필요합니다. --other 를 사용하여 제공하세요.',
          markerConfigFormat: '마커 설정 형식: --config marker Grappled=grab',
          markerPredefinedRequired:
            '마커 설정에는 미리 정의된 상태 이름이 필요합니다.',
          markerNameRequired:
            '마커 설정에는 비어 있지 않은 마커 이름이 필요합니다.',
          markerSet: '{condition} 마커가 {marker} 로 설정되었습니다.',
          healthBarSet: '체력 바가 {bar} 로 설정되었습니다.',
          boolSet: '{key} 이(가) {value} 로 설정되었습니다.',
          expectedBoolean: 'true 또는 false를 기대했습니다.',
          invalidHealthBar:
            '체력 바는 bar1_value, bar2_value 또는 bar3_value 여야 합니다.',
          markersDisabled: '마커가 비활성화되었습니다.',
          noMarkerConfigured: '이 상태에 대해 설정된 마커가 없습니다.',
          markerApplied: '마커 적용됨: {marker}',
          markerPresent: '마커가 이미 존재함: {marker}',
          langSet: '언어가 {locale} 로 설정되었습니다.',
          invalidLocale:
            '유효하지 않은 로케일입니다. 지원되는 로케일: {locales}.',
          otherDurationRequiresRounds:
            '기타 지속 시간은 숫자 라운드 수가 필요합니다. 예: --duration 5 rounds.',
          invalidDuration:
            "지속 시간은 '제거될 때까지', 턴 종료 옵션 또는 양수 라운드 수여야 합니다.",
          zeroHpNoConditions:
            '{name} 의 HP가 0이 되었으며 활성 상태가 없습니다.',
          zeroHpConditions:
            '{name} 의 HP가 0이 되었습니다. 제거할 상태를 선택하세요:',
          removeAllBtn: '{name} 의 모든 상태 제거',
          markIncapacitated: '무력화됨으로 표시',
          removeFromTurnOrder: '턴 순서에서 제거',
          alreadyIncapacitated: '{name} 은(는) 이미 무력화 상태입니다.',
          tokenRemovedFromTurn: '{name} 이(가) 턴 순서에서 제거되었습니다.',
          tokenNotInTurn: '{name} 을(를) 턴 순서에서 찾을 수 없습니다.',
          moveTokenPrompt:
            '{name} 을(를) 지도 레이어로 이동하여 다른 토큰을 방해하지 않으면서 가시성을 유지하시겠습니까?',
          moveTokenBtn: '{name} 을(를) 지도 레이어로 이동',
          tokenMoved: '{name} 이(가) 지도 레이어로 이동되었습니다.',
          tokenNotFound: '토큰을 찾을 수 없습니다.',
          noActiveConditions: '{name} 에 제거할 활성 상태가 없습니다.',
          deadNoConditions:
            '{name} 이(가) 사망으로 표시되었습니다. 활성 상태가 없었습니다.',
          scriptReady:
            '{name} 이(가) 활성화되었으며 버전 {version} 을(를) 사용 중입니다.',
          reachedZeroHp: '{name} 의 HP가 0에 도달함',
          manuallyRemoved: '수동으로 제거됨',
          durationExpired: '지속 시간이 만료됨',
          markedAsDead: '{name} 이(가) 사망으로 표시됨',
        },
        removal: {
          conditionField: '상태',
          reasonField: '이유',
          turnRowField: '턴 추적기 행',
          markerField: '마커',
          notConfigured: '설정되지 않음',
          markerRemoved: '제거됨 ({marker})',
          markerRetained: '유지됨 ({marker})',
          rowRemoved: '제거됨',
          rowMissing: '이미 누락됨',
          manualReason: '수동 제거',
        },
        cleanup: {
          orphaned: '연결이 끊긴 상태 항목',
          stale: '오래된 상태 항목',
          orphanedRows: '연결이 끊긴 턴 추적기 행',
          unusedMarkers: '사용되지 않는 마커',
        },
        apply: {
          turnAppended:
            '대상이 턴 순서에 없었습니다. 상태 행이 추가되었습니다.',
          turnInserted: '대상 토큰 아래에 상태 행이 삽입되었습니다.',
        },
      },
      handout: {
        versionLabel: '버전',
        subtitle: 'D&D 5e 상태 효과 관리자',
        footerNote:
          '이 유인물은 스크립트가 로드될 때마다 자동으로 생성 및 업데이트됩니다.',
        overview: {
          heading: '개요',
          body: '상태 추적기(Condition Tracker)는 D&D 5e 상태 조건 및 사용자 정의 효과를 Roll20 턴 추적기의 레이블이 지정된 행으로 관리합니다. 토큰에 상태를 적용하고, 이니셔티브 순서에 따라 지속 시간을 추적하며, 턴이 종료될 때 만료된 효과를 자동으로 제거합니다. 모든 명령어는 GM 전용이며 채팅 또는 설치된 매크로를 통해 실행할 수 있습니다.',
        },
        quickStart: {
          heading: '빠른 시작',
          colCommand: '명령어',
          colDesc: '설명',
          rows: [
            [
              '!condition-tracker --prompt',
              '단계별 위저드 — 대화형으로 상태, 토큰 및 지속 시간을 선택합니다. ConditionTrackerWizard 매크로로도 사용할 수 있습니다.',
            ],
            [
              '!condition-tracker --multi-target',
              '여러 토큰에 하나의 상태를 동시에 적용합니다. ConditionTrackerMultiTarget 매크로로도 사용할 수 있습니다.',
            ],
            [
              '!condition-tracker --menu',
              '상태를 적용, 검토 또는 제거할 수 있는 버튼이 있는 메인 관리 메뉴를 엽니다.',
            ],
          ],
        },
        commandsRef: {
          heading: '명령어 참조',
          colFlag: '플래그',
          colDesc: '설명',
          rows: [
            ['--prompt', '대화형 단계별 위저드 UI'],
            ['--multi-target', '여러 대상 토큰에 동시에 상태 적용'],
            ['--menu', '메인 메뉴 표시 (제거 메뉴의 경우 remove 추가)'],
            [
              '--source X --target Y --condition Z',
              '위저드 없이 직접 상태 적용',
            ],
            ['--duration &lt;값&gt;', '직접 적용 시 지속 시간 (예: 2 rounds)'],
            [
              '--other &lt;텍스트&gt;',
              '주문 / 능력 / 기타 효과 유형에 대한 사용자 정의 텍스트',
            ],
            ['--remove &lt;condition-id&gt;', '고유 ID로 특정 상태 제거'],
            [
              '--config &lt;옵션&gt; &lt;값&gt;',
              '구성 설정 조정 (아래 설정 섹션 참조)',
            ],
            [
              '--prompt --subjectPromptBypass true|false',
              '이 명령어에 대해서만 subjectPromptBypass 재정의 (--subject-prompt-bypass 도 지원)',
            ],
            ['--cleanup', '상태 조정 — 연결이 끊긴 상태 및 턴 추적기 행 제거'],
            ['--reinstall-macro', 'GM 매크로 재생성 또는 업데이트'],
            [
              '--reinstall-handout',
              '현지화된 도움말 유인물 재생성 또는 업데이트',
            ],
            [
              '--lang &lt;로케일&gt;',
              '이 명령어의 메시지를 추가 로케일로 출력 (이중 언어 모드)',
            ],
            ['--help', '채팅에 간단한 도움말 카드 표시'],
          ],
        },
        standardConditions: {
          heading: '표준 상태 (D&D 5e)',
          colCondition: '상태',
        },
        customEffects: {
          heading: '사용자 정의 효과 유형',
          colType: '유형',
          colNotes: '참고',
          rows: [
            [
              '🔮 주문 (Spell)',
              '명명된 주문 효과 추적 — 주문 이름을 입력하라는 메시지가 표시됩니다.',
            ],
            [
              '🎯 능력 (Ability)',
              '명명된 클래스 또는 종족 능력 추적 — 이름을 입력하라는 메시지가 표시됩니다.',
            ],
            [
              '🍀 이점 (Advantage)',
              '한 토큰에서 다른 토큰으로 부여된 이점을 기록합니다. 이니셔티브에서 시전자와 함께 그룹화됩니다.',
            ],
            [
              '⬇️ 불이익 (Disadvantage)',
              '가해진 불이익을 기록합니다. 이니셔티브에서 시전자와 함께 그룹화됩니다.',
            ],
            [
              '📝 기타 (Other)',
              '자유 형식 사용자 정의 레이블 — 설명을 입력하라는 메시지가 표시됩니다.',
            ],
          ],
        },
        durationOptions: {
          heading: '지속 시간 옵션',
          intro:
            '남은 카운트는 턴 추적기 pr 열에 표시되며 고정된 토큰의 턴이 종료될 때 감소합니다.',
          colOption: '옵션',
          colBehaviour: '동작',
          rows: [
            [
              '제거될 때까지',
              '영구적 — 메뉴 또는 --remove 를 통해 수동으로 제거해야 합니다.',
            ],
            [
              '대상의 다음 턴 종료 시',
              '이니셔티브에서 대상 토큰의 다음 턴이 종료될 때 만료됩니다.',
            ],
            [
              '시전자의 다음 턴 종료 시',
              '이니셔티브에서 시전자 토큰의 다음 턴이 종료될 때 만료됩니다.',
            ],
            [
              '1 / 2 / 3 / 10 라운드',
              '고정된 카운트다운; 고정 토큰의 턴 종료 시마다 1씩 감소합니다.',
            ],
          ],
        },
        configuration: {
          heading: '설정',
          intro:
            '!condition-tracker --config &lt;옵션&gt; &lt;값&gt; 또는 메인 메뉴의 설정 버튼을 사용하세요.',
          colOption: '옵션',
          colValues: '값',
          colDesc: '설명',
          rows: [
            [
              'useMarkers',
              'true / false',
              '상태가 추가될 때 토큰에 Roll20 상태 마커를 적용합니다.',
            ],
            [
              'useIcons',
              'true / false',
              '턴 추적기 행에 이모지 대신 짧은 아이콘 코드(예: [G])를 표시합니다.',
            ],
            [
              'subjectPromptBypass',
              'true / false',
              '주문 / 능력 / 기타 효과에 대해 선택적인 주체 토큰 단계를 건너뜁니다.',
            ],
            [
              'healthBar',
              'bar1_value / bar2_value / bar3_value',
              '모니터링할 토큰 바; 0으로 떨어지면 GM에게 상태 정리를 요청합니다.',
            ],
            [
              'language',
              'en-US / fr / de / es / pt-BR / ko',
              '채팅 메시지 및 도움말 유인물의 출력 언어',
            ],
            [
              'markers.&lt;상태&gt;',
              '&lt;마커 이름&gt;',
              '특정 상태에 사용되는 상태 마커를 재정의합니다 (예: markers.Grappled grab)',
            ],
          ],
        },
        defaultMarkers: {
          heading: '기본 상태 마커',
          colCondition: '상태',
          colMarker: '마커 이름',
        },
      },
    },
  };

  /**
   * Returns a valid locale string, falling back to the default.
   *
   * @param {string} lang Locale string to validate.
   * @returns {string} Validated locale.
   */
  function getLocale(lang) {
    const s = typeof lang === 'string' ? lang.trim() : '';
    return VALID_LOCALES.has(s) ? s : DEFAULT_LOCALE;
  }

  /**
   * Navigates a nested object by splitting key on dots.
   *
   * @param {object} obj Root object.
   * @param {string[]} parts Key path segments.
   * @returns {*} Value at the key path, or undefined.
   */
  function getNestedValue(obj, parts) {
    let current = obj;
    for (const part of parts) {
      if (current == null || typeof current !== 'object') return undefined;
      current = current[part];
    }
    return current;
  }

  /**
   * Returns the translated string for a dot-separated key, interpolating {placeholder} vars.
   * Falls back to en-US when the key is missing in the requested locale.
   * No HTML escaping is performed — callers must pre-escape HTML-unsafe values.
   *
   * @param {string} key Dot-separated translation key.
   * @param {string} locale Locale string.
   * @param {object} [vars] Interpolation variables.
   * @returns {string} Translated and interpolated string.
   */
  function t(key, locale, vars = {}) {
    const lang = getLocale(locale);
    const parts = key.split('.');
    let value = getNestedValue(TRANSLATIONS[lang], parts);

    if (value === undefined && lang !== DEFAULT_LOCALE) {
      value = getNestedValue(TRANSLATIONS[DEFAULT_LOCALE], parts);
    }

    if (typeof value !== 'string') return key;

    return value.replaceAll(/\{(\w+)\}/g, (_, k) =>
      k in vars ? String(vars[k]) : `{${k}}`,
    );
  }

  /**
   * Returns the raw translation value at a dot-separated key (any type).
   * Falls back to en-US when the key is missing in the requested locale.
   *
   * @param {string} key Dot-separated translation key.
   * @param {string} locale Locale string.
   * @returns {*} Raw translation value, or undefined.
   */
  function tRaw(key, locale) {
    const lang = getLocale(locale);
    const parts = key.split('.');
    let value = getNestedValue(TRANSLATIONS[lang], parts);
    if (value === undefined && lang !== DEFAULT_LOCALE) {
      value = getNestedValue(TRANSLATIONS[DEFAULT_LOCALE], parts);
    }
    return value;
  }

  /**
   * Returns locale-specific condition verb data, or null if not available.
   *
   * @param {string} condition Canonical condition name.
   * @param {string} locale Locale string.
   * @returns {{past: string, verb: string, suffix?: string, noBy?: boolean}|null}
   */
  function getConditionLocalData(condition, locale) {
    const lang = getLocale(locale);
    const data = TRANSLATIONS[lang]?.conditions?.[condition];
    return data || null;
  }

  const MACRO_DEFINITIONS = [
    { name: MACRO_NAME, body: DEFAULT_MACRO_BODY },
    { name: MACRO_NAME_MULTI_TARGET, body: DEFAULT_MULTI_TARGET_MACRO_BODY },
  ];

  /**
   * Installs or updates all GM-facing macros for all current GMs.
   *
   * @returns {void}
   */
  function installMacro() {
    const gmIds = getGmIds();
    if (!gmIds.length) {
      log(
        `${SCRIPT_NAME} macro install skipped: no GM player id is currently available.`,
      );
      return;
    }

    const gmIdSet = new Set(gmIds);
    let createdCount = 0;
    let updatedCount = 0;
    let removedCount = 0;

    for (const macroDef of MACRO_DEFINITIONS) {
      const macrosByOwner = groupMacrosByOwner(
        queryObjects({ _type: 'macro', name: macroDef.name }),
      );

      for (const gmId of gmIds) {
        const result = syncGmMacro(
          gmId,
          macrosByOwner.get(gmId) || [],
          gmId,
          macroDef,
        );
        createdCount += result.created;
        updatedCount += result.updated;
        removedCount += result.removed;
      }

      removedCount += removeOrphanedMacros(macrosByOwner, gmIdSet);
    }

    logInstallResult(createdCount, updatedCount, removedCount);
  }

  /**
   * Groups existing macros by their owner player id.
   *
   * @param {object[]} macros Roll20 macro objects.
   * @returns {Map<string, object[]>} Macros keyed by owner player id.
   */
  function groupMacrosByOwner(macros) {
    const byOwner = new Map();
    for (const macro of macros) {
      const ownerId = macro.get('playerid') || '';
      if (!byOwner.has(ownerId)) {
        byOwner.set(ownerId, []);
      }
      byOwner.get(ownerId).push(macro);
    }
    return byOwner;
  }

  /**
   * Creates or updates one named macro for a GM, removing any duplicates.
   *
   * @param {string} gmId GM player id.
   * @param {object[]} ownerMacros Existing macros owned by this GM for this definition.
   * @param {string} visibleTo Comma-separated GM ids for visibility.
   * @param {{name: string, body: string}} macroDef Macro name and action body.
   * @returns {{created: number, updated: number, removed: number}} Counts.
   */
  function syncGmMacro(gmId, ownerMacros, visibleTo, macroDef) {
    if (ownerMacros.length === 0) {
      createObj('macro', {
        playerid: gmId,
        name: macroDef.name,
        action: macroDef.body,
        visibleto: visibleTo,
        istokenaction: false,
      });
      return { created: 1, updated: 0, removed: 0 };
    }

    const [primaryMacro, ...duplicates] = ownerMacros;
    primaryMacro.set({
      action: macroDef.body,
      visibleto: visibleTo,
      istokenaction: false,
    });

    for (const duplicate of duplicates) {
      duplicate.remove();
    }

    return { created: 0, updated: 1, removed: duplicates.length };
  }

  /**
   * Removes macros owned by players who are no longer GMs.
   *
   * @param {Map<string, object[]>} macrosByOwner Macros keyed by owner player id.
   * @param {Set<string>} gmIdSet Current GM player ids.
   * @returns {number} Number of macros removed.
   */
  function removeOrphanedMacros(macrosByOwner, gmIdSet) {
    let removed = 0;
    for (const [ownerId, orphans] of macrosByOwner) {
      if (gmIdSet.has(ownerId)) continue;
      for (const orphan of orphans) {
        orphan.remove();
        removed += 1;
      }
    }
    return removed;
  }

  /**
   * Logs the result of a macro install/update pass.
   *
   * @param {number} createdCount Macros created.
   * @param {number} updatedCount Macros updated.
   * @param {number} removedCount Macros removed.
   * @returns {void}
   */
  function logInstallResult(createdCount, updatedCount, removedCount) {
    const cleanupNote =
      removedCount > 0 ? ` Cleaned up ${removedCount} duplicate macro(s).` : '';
    if (createdCount > 0) {
      log(
        `${SCRIPT_NAME}: Macros installed (created ${createdCount}).${cleanupNote}`,
      );
    } else {
      log(
        `${SCRIPT_NAME}: Macros updated (updated ${updatedCount}).${cleanupNote}`,
      );
    }
  }

  /**
   * Returns all current GM player ids.
   *
   * @returns {string[]} GM player ids.
   */
  function getGmIds() {
    return getGmPlayerIds();
  }

  const STYLE = {
    outer:
      "font-family:'Georgia',serif;background-color:#0A0A12;color:#E6DFFF;padding:24px;border-radius:8px;",
    header:
      'background:linear-gradient(135deg,#5B21B6 0%,#FF4D6D 100%);padding:18px 24px;border-radius:6px;margin-bottom:24px;text-align:center;',
    h1: "color:#FFFFFF;margin:0;font-size:1.6em;font-family:'Georgia',serif;letter-spacing:1px;",
    subtitle:
      'color:#E9D5FF;margin:6px 0 0;font-size:0.85em;letter-spacing:0.5px;',
    h2: "color:#FF4D6D;font-family:'Georgia',serif;border-bottom:1px solid #5B21B6;padding-bottom:6px;margin-top:24px;",
    h2first:
      "color:#FF4D6D;font-family:'Georgia',serif;border-bottom:1px solid #5B21B6;padding-bottom:6px;margin-top:0;",
    body: 'color:#B8AFCF;line-height:1.6;margin-top:0;',
    intro: 'color:#B8AFCF;font-size:0.9em;margin-top:0;',
    table:
      'width:100%;border-collapse:collapse;font-size:0.9em;margin-bottom:8px;',
    tableSmall: 'width:100%;border-collapse:collapse;font-size:0.85em;',
    thRow: 'background-color:#1E40AF;',
    th: 'padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;',
    spacer: 'padding:3px;',
    footer:
      'margin-top:28px;padding-top:14px;border-top:1px solid #5B21B6;text-align:center;color:#B8AFCF;font-size:0.8em;',
    footerP: 'margin:0;line-height:1.8;',
  };

  function row(even) {
    return even ? '#12122a' : '#0e0e22';
  }

  function buildTable(headers, rows, widths) {
    const thCells = headers
      .map((h, i) => {
        const w = widths?.[i] ? `width:${widths[i]};` : '';
        return `<th style="${STYLE.th}${w}">${h}</th>`;
      })
      .join('');
    const bodyRows = rows
      .map((cells, ri) => {
        const bg = row(ri % 2 === 0);
        const tds = cells
          .map((cell, ci) => {
            const isFirst = ci === 0;
            const style = isFirst
              ? `padding:6px 10px;font-family:monospace;color:#E9D5FF;background-color:${bg};`
              : `padding:6px 10px;color:#B8AFCF;background-color:${bg};`;
            return `<td style="${style}">${cell}</td>`;
          })
          .join('');
        return `<tr>${tds}</tr>`;
      })
      .join('');
    return `<table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}">${thCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  }

  function buildConditionTable(colLabel) {
    const standardConditions = [
      'Blinded',
      'Charmed',
      'Frightened',
      'Grappled',
      'Incapacitated',
      'Invisible',
      'Paralyzed',
      'Petrified',
      'Poisoned',
      'Prone',
      'Restrained',
      'Stunned',
      'Unconscious',
    ];
    const left = standardConditions.slice(0, 7);
    const right = standardConditions.slice(7);
    const maxRows = Math.max(left.length, right.length);
    const rows = [];
    for (let i = 0; i < maxRows; i++) {
      const l = left[i] ? `${CONDITION_DATA[left[i]].emoji} ${left[i]}` : '';
      const r = right[i] ? `${CONDITION_DATA[right[i]].emoji} ${right[i]}` : '';
      const bg = row(i % 2 === 0);
      rows.push(
        `<tr><td style="padding:7px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(l)}</td>` +
          `<td style="padding:7px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(r)}</td></tr>`,
      );
    }

    const thStyle = `${STYLE.th}width:50%;`;
    const safeLabel = escapeHtml(colLabel);
    return `<table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}"><th style="${thStyle}">${safeLabel}</th><th style="${thStyle}">${safeLabel}</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function buildMarkersTable(colCondition, colMarker) {
    const entries = Object.entries(DEFAULT_MARKERS);
    const rows = entries
      .map(([condition, marker], i) => {
        const data = CONDITION_DATA[condition];
        const emoji = data ? data.emoji : '';
        const bg = row(i % 2 === 0);
        return (
          `<tr>` +
          `<td style="padding:6px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(emoji)} ${escapeHtml(condition)}</td>` +
          `<td style="padding:6px 10px;font-family:monospace;color:#B8AFCF;background-color:${bg};">${escapeHtml(marker)}</td>` +
          `</tr>`
        );
      })
      .join('');
    return (
      `<table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}">` +
      `<th style="${STYLE.th}width:50%;">${escapeHtml(colCondition)}</th>` +
      `<th style="${STYLE.th}">${escapeHtml(colMarker)}</th>` +
      `</tr></thead><tbody>${rows}</tbody></table>`
    );
  }

  function buildQuickStartTable(colCommand, colDesc, rows) {
    const bodyRows = rows
      .map(([cmd, desc], i) => {
        const bg = row(i % 2 === 0);
        return (
          `<tr>` +
          `<td style="padding:7px 10px;background-color:${bg};border-radius:4px;font-family:monospace;color:#E9D5FF;white-space:nowrap;width:45%;">${cmd}</td>` +
          `<td style="padding:7px 10px;color:#B8AFCF;background-color:${bg};">${desc}</td>` +
          `<tr><td colspan="2" style="${STYLE.spacer}"></td></tr>`
        );
      })
      .join('');
    return `<table style="${STYLE.table}"><tbody>${bodyRows}</tbody></table>`;
  }

  /**
   * Generates the full help handout HTML for the given locale.
   *
   * @param {string} [locale] Output locale.
   * @returns {string} HTML string.
   */
  function buildHandoutHtml(locale) {
    const lang = getLocale(locale);
    const hs = (key) => t(`handout.${key}`, lang);
    const hr = (key) => tRaw(`handout.${key}`, lang);
    const version = SCRIPT_VERSION;

    const overview = `
    <h2 style="${STYLE.h2first}">${hs('overview.heading')}</h2>
    <p style="${STYLE.body}">${hs('overview.body')}</p>`;

    const quickStart = `
    <h2 style="${STYLE.h2}">${hs('quickStart.heading')}</h2>
    ${buildQuickStartTable(hs('quickStart.colCommand'), hs('quickStart.colDesc'), hr('quickStart.rows'))}`;

    const commandsRef = (() => {
      const rows = hr('commandsRef.rows');
      return `<h2 style="${STYLE.h2}">${hs('commandsRef.heading')}</h2>
    ${buildTable([hs('commandsRef.colFlag'), hs('commandsRef.colDesc')], rows, ['42%'])}`;
    })();

    const standardConds = `
    <h2 style="${STYLE.h2}">${hs('standardConditions.heading')}</h2>
    ${buildConditionTable(hs('standardConditions.colCondition'))}`;

    const customEffects = (() => {
      const rows = hr('customEffects.rows');
      return `<h2 style="${STYLE.h2}">${hs('customEffects.heading')}</h2>
    ${buildTable([hs('customEffects.colType'), hs('customEffects.colNotes')], rows, ['30%'])}`;
    })();

    const durationOpts = (() => {
      const rows = hr('durationOptions.rows');
      return `<h2 style="${STYLE.h2}">${hs('durationOptions.heading')}</h2>
    <p style="${STYLE.intro}">${hs('durationOptions.intro')}</p>
    ${buildTable([hs('durationOptions.colOption'), hs('durationOptions.colBehaviour')], rows, ['40%'])}`;
    })();

    const config = (() => {
      const rows = hr('configuration.rows');
      const threeCol = rows
        .map(([opt, vals, desc], i) => {
          const bg = row(i % 2 === 0);
          return (
            `<tr>` +
            `<td style="padding:6px 10px;font-family:monospace;color:#E9D5FF;background-color:${bg};">${opt}</td>` +
            `<td style="padding:6px 10px;color:#B8AFCF;background-color:${bg};">${vals}</td>` +
            `<td style="padding:6px 10px;color:#B8AFCF;background-color:${bg};">${desc}</td>` +
            `</tr>`
          );
        })
        .join('');
      return (
        `<h2 style="${STYLE.h2}">${hs('configuration.heading')}</h2>
    <p style="${STYLE.intro}">${hs('configuration.intro')}</p>
    <table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}">` +
        `<th style="${STYLE.th}width:30%;">${hs('configuration.colOption')}</th>` +
        `<th style="${STYLE.th}width:25%;">${hs('configuration.colValues')}</th>` +
        `<th style="${STYLE.th}">${hs('configuration.colDesc')}</th>` +
        `</tr></thead><tbody>${threeCol}</tbody></table>`
      );
    })();

    const markers = `
    <h2 style="${STYLE.h2}">${hs('defaultMarkers.heading')}</h2>
    ${buildMarkersTable(hs('defaultMarkers.colCondition'), hs('defaultMarkers.colMarker'))}`;

    const footer = `
    <div style="${STYLE.footer}">
      <p style="${STYLE.footerP}">${SCRIPT_NAME} ${version} &nbsp;•&nbsp; ${hs('footerNote')}</p>
    </div>`;

    return `<div style="${STYLE.outer}">
    <div style="${STYLE.header}">
      <img src="${LOGO_URL_512}" style="max-width:220px;height:auto;margin-bottom:10px;display:block;margin-left:auto;margin-right:auto;" alt="${SCRIPT_NAME} logo" title="${SCRIPT_NAME}" />
      <h1 style="${STYLE.h1}">${SCRIPT_NAME}</h1>
      <p style="${STYLE.subtitle}">${hs('versionLabel')} ${version} &nbsp;•&nbsp; ${hs('subtitle')}</p>
    </div>
    ${overview}${quickStart}${commandsRef}${standardConds}${customEffects}${durationOpts}${config}${markers}${footer}
  </div>`;
  }

  /**
   * Creates the help handout on first run, or updates its notes on every subsequent startup.
   * Duplicate handouts with the same name are removed.
   *
   * @param {string} [locale] Output locale.
   * @returns {void}
   */
  function installHandout(locale) {
    const html = buildHandoutHtml(locale);
    const existing = queryObjects({ _type: 'handout', name: HANDOUT_NAME });

    if (existing.length === 0) {
      const handout = createObj('handout', {
        name: HANDOUT_NAME,
        inplayerjournals: '',
        controlledby: '',
      });
      handout.set('notes', html);
      log(`${SCRIPT_NAME}: Help handout created.`);
      return;
    }

    const [primary, ...duplicates] = existing;
    primary.set('notes', html);
    for (const dup of duplicates) {
      dup.remove();
    }

    const cleanupNote =
      duplicates.length > 0
        ? ` Removed ${duplicates.length} duplicate(s).`
        : '';
    log(`${SCRIPT_NAME}: Help handout updated.${cleanupNote}`);
  }

  /**
   * Returns true when a condition is a custom effect type (not a standard D&D condition).
   *
   * @param {string} condition Canonical condition.
   * @returns {boolean}
   */
  function isCustomEffectType(condition) {
    return CUSTOM_EFFECT_TYPE_SET.has(condition);
  }

  /**
   * Returns true when a condition requires free-text details via --other.
   *
   * @param {string} condition Canonical condition.
   * @returns {boolean}
   */
  function isCustomTextCondition(condition) {
    return CUSTOM_TEXT_CONDITIONS.has(condition);
  }

  /**
   * Returns the canonical condition label for user input.
   *
   * @param {string} value The condition label from chat.
   * @returns {string} The canonical label or an empty string.
   */
  function getCanonicalCondition(value) {
    const key = normalizeKey(value);

    for (const type of CUSTOM_EFFECT_TYPE_SET) {
      if (normalizeKey(type) === key) {
        return type;
      }
    }

    for (const condition of STANDARD_CONDITIONS) {
      if (normalizeKey(condition) === key) {
        return condition;
      }
    }

    return '';
  }

  /**
   * Returns the past-tense effect text for a condition in the given locale.
   *
   * @param {string} condition The canonical condition.
   * @param {string} locale Locale string.
   * @returns {string} The past-tense effect text.
   */
  function getLocalizedPast(condition, locale) {
    const localData = getConditionLocalData(condition, locale);
    if (localData?.past) return localData.past;
    const data = CONDITION_DATA[condition];
    return data ? data.past : toText(condition).toLowerCase();
  }

  /**
   * Returns the emoji for a condition, used in Turn Tracker and GM whispers.
   *
   * @param {string} condition Canonical condition.
   * @returns {string} Emoji character.
   */
  function getConditionEmoji(condition) {
    const data = CONDITION_DATA[condition];
    return data ? data.emoji : '✨';
  }

  /**
   * Builds the Turn Tracker display text in the given locale.
   * All values are plain text (no HTML).
   *
   * @param {object} details Display details.
   * @param {string} details.condition Canonical condition.
   * @param {string} details.customText Custom effect text.
   * @param {string} details.sourceName Source token name.
   * @param {string} details.targetName Target token name.
   * @param {string} [details.subjectName] Subject name for advantage types.
   * @param {string} [locale] Output locale.
   * @returns {string} Turn Tracker display text.
   */
  function buildDisplayText(details, locale) {
    const emoji = getConditionEmoji(details.condition);

    if (isCustomTextCondition(details.condition)) {
      return t('templates.display.custom', locale, {
        emoji,
        target: details.targetName,
        effect: details.customText,
        source: details.sourceName,
      });
    }

    if (isAdvantageType(details.condition)) {
      const subject = toText(details.subjectName)
        ? ` (${details.subjectName})`
        : '';
      const tplKey =
        details.condition === CONDITION_DISADVANTAGE
          ? 'templates.display.disadvantage'
          : 'templates.display.advantage';
      return t(tplKey, locale, {
        emoji,
        source: details.sourceName,
        target: details.targetName,
        subject,
      });
    }

    const localData = getConditionLocalData(details.condition, locale);
    const data = localData || CONDITION_DATA[details.condition];

    if (data?.noBy) {
      return t('templates.display.noBy', locale, {
        emoji,
        target: details.targetName,
        past: data.past,
        source: details.sourceName,
      });
    }

    return t('templates.display.standard', locale, {
      emoji,
      target: details.targetName,
      past: getLocalizedPast(details.condition, locale),
      source: details.sourceName,
    });
  }

  /**
   * Builds the public application announcement in the given locale.
   * HTML-unsafe names are wrapped in pre-built HTML spans by the caller;
   * verb/suffix values are passed pre-escaped.
   *
   * @param {object} details Display details.
   * @param {string} details.condition Canonical condition.
   * @param {string} details.customText Custom effect text.
   * @param {string} details.sourceName Source token name.
   * @param {string} details.targetName Target token name.
   * @param {string} [details.subjectName] Subject name.
   * @param {boolean} details.useIcons Whether icons are enabled.
   * @param {string} [locale] Output locale.
   * @returns {string} Public chat text.
   */
  function buildApplyMessage(details, locale) {
    const prefix = buildIconPrefix(details.condition, details.useIcons);
    const src = actorSpan(details.sourceName);
    const tgt = actorSpan(details.targetName);

    if (isCustomTextCondition(details.condition)) {
      return (
        prefix +
        t('templates.apply.custom', locale, {
          source: src,
          effect: effectSpan(details.customText),
          target: tgt,
        })
      );
    }

    if (isAdvantageType(details.condition)) {
      const subject = toText(details.subjectName)
        ? ` (${escapeHtml(details.subjectName)})`
        : '';
      const tplKey =
        details.condition === CONDITION_DISADVANTAGE
          ? 'templates.apply.disadvantage'
          : 'templates.apply.advantage';
      return prefix + t(tplKey, locale, { source: src, target: tgt, subject });
    }

    const localData = getConditionLocalData(details.condition, locale);
    const data = localData || CONDITION_DATA[details.condition];

    if (data?.suffix) {
      return (
        prefix +
        t('templates.apply.withSuffix', locale, {
          source: src,
          verb: escapeHtml(data.verb),
          target: tgt,
          suffix: escapeHtml(data.suffix),
        })
      );
    }

    return (
      prefix +
      t('templates.apply.standard', locale, {
        source: src,
        verb: escapeHtml(data.verb),
        target: tgt,
      })
    );
  }

  /**
   * Builds the public removal announcement in the given locale.
   *
   * @param {object} condition Active condition record.
   * @param {boolean} useIcons Whether icons are enabled.
   * @param {string} [locale] Output locale.
   * @returns {string} Public chat text.
   */
  function buildRemovalMessage(condition, useIcons, locale) {
    const prefix = buildIconPrefix(condition.condition, useIcons);
    const src = actorSpan(condition.sourceName);
    const tgt = actorSpan(condition.targetName);

    if (isCustomTextCondition(condition.condition)) {
      return (
        prefix +
        t('templates.remove.custom', locale, {
          target: tgt,
          effect: effectSpan(condition.customText),
        })
      );
    }

    if (isAdvantageType(condition.condition)) {
      const subject = toText(condition.subjectName)
        ? ` (${escapeHtml(condition.subjectName)})`
        : '';
      const tplKey =
        condition.condition === CONDITION_DISADVANTAGE
          ? 'templates.remove.disadvantage'
          : 'templates.remove.advantage';
      return prefix + t(tplKey, locale, { source: src, target: tgt, subject });
    }

    const localData = getConditionLocalData(condition.condition, locale);
    const data = localData || CONDITION_DATA[condition.condition];

    if (data?.noBy) {
      return (
        prefix +
        t('templates.remove.noBy', locale, {
          target: tgt,
          past: escapeHtml(data.past),
        })
      );
    }

    return (
      prefix +
      t('templates.remove.standard', locale, {
        target: tgt,
        past: escapeHtml(getLocalizedPast(condition.condition, locale)),
        source: src,
      })
    );
  }

  /**
   * Returns a configured icon prefix when enabled.
   *
   * @param {string} condition The canonical condition.
   * @param {boolean} useIcons Whether icons are enabled.
   * @returns {string} Icon prefix or an empty string.
   */
  function buildIconPrefix(condition, useIcons) {
    if (!useIcons) {
      return '';
    }

    const data = CONDITION_DATA[condition];
    if (!data) {
      return '[*] ';
    }

    return `${data.icon} `;
  }

  /**
   * Returns true for Advantage/Disadvantage conditions.
   *
   * @param {string} condition Canonical condition.
   * @returns {boolean} True for advantage-style effects.
   */
  function isAdvantageType(condition) {
    return (
      condition === CONDITION_ADVANTAGE || condition === CONDITION_DISADVANTAGE
    );
  }

  /**
   * Wraps an actor name in a coloured bold span.
   *
   * @param {string} name Actor name.
   * @returns {string} HTML span.
   */
  function actorSpan(name) {
    return `<span style="color:#5B21B6;font-weight:bold">${escapeHtml(name)}</span>`;
  }

  /**
   * Wraps an effect label in a coloured italic span.
   *
   * @param {string} label Effect label.
   * @returns {string} HTML span.
   */
  function effectSpan(label) {
    return `<span style="color:#FF4D6D;font-style:italic">${escapeHtml(label)}</span>`;
  }

  const DEFAULT_WHISPER_TARGET = 'gm';

  const CHAT_CARD_STYLE = [
    'width:100%',
    'border-radius:4px',
    `box-shadow:1px 1px 1px ${COLOR_TEXT_DIM_SILVER}`,
    'text-align:left',
    'vertical-align:middle',
    'margin:0px auto',
    `border:1px solid ${COLOR_BG_SOFT_BLACK}`,
    `color:${COLOR_TEXT_ARCANE_SILVER}`,
    `background-image:-webkit-linear-gradient(-45deg,${COLOR_ACCENT_DARK} 0%,${COLOR_ACCENT_LIGHT} 100%)`,
    'overflow:hidden',
  ].join(';');

  const CHAT_HEADER_STYLE = [
    `background:${COLOR_HEADER_LIGHT}`,
    `color:${COLOR_HEADER_DARK}`,
    'padding:2px 5px',
    `border-bottom:1px solid ${COLOR_BG_SOFT_BLACK}`,
    'font-variant:small-caps',
    'font-weight:bold',
    'text-align:center',
  ].join(';');

  const CHAT_CONTENT_STYLE = 'padding:3px 8px';

  const TABLE_HEADER_STYLE = [
    'text-align:left',
    'padding:2px 4px',
    `border-bottom:1px solid ${COLOR_TEXT_ARCANE_SILVER}`,
  ].join(';');

  const CHAT_BUTTON_STYLE = [
    `background:${COLOR_ACCENT_DARK}`,
    `color:${COLOR_TEXT_WHITE}`,
    'padding:2px 6px',
    'border-radius:4px',
    'text-decoration:none',
  ].join(';');

  const CHAT_HEADER_SCRIPT_READY = 'Script Ready';

  const CHAT_HEADER_WARNING_STYLE = [
    'background:#FEF3C7',
    'color:#92400E',
    'padding:2px 5px',
    'border-bottom:1px solid #92400E',
    'font-variant:small-caps',
    'font-weight:bold',
    'text-align:center',
  ].join(';');

  const CHAT_HEADER_ERROR_STYLE = [
    'background:#FEE2E2',
    'color:#991B1B',
    'padding:2px 5px',
    'border-bottom:1px solid #991B1B',
    'font-variant:small-caps',
    'font-weight:bold',
    'text-align:center',
  ].join(';');

  /**
   * Marks a string as trusted HTML for controlled chat rendering.
   *
   * @param {string} value Trusted HTML fragment.
   * @returns {object} Trusted HTML wrapper.
   */
  function rawHtml(value) {
    return { __trustedHtml: String(value) };
  }

  /**
   * Sends a public chat message as raw HTML.
   *
   * @param {string} html Trusted HTML message body.
   * @returns {void}
   */
  function announceHtml(html) {
    sendChat(SCRIPT_NAME, html);
  }

  /**
   * Whispers a message to a GM or player.
   *
   * @param {string} playerId Player id.
   * @param {string} title Message title.
   * @param {string|string[]} body Message body lines.
   * @returns {void}
   */
  function whisper(playerId, title, body) {
    whisperWithBox(playerId, body, (lines) => buildBox(title, lines));
  }

  /**
   * Whispers a message to every GM in the game.
   *
   * @param {string} title Message title.
   * @param {string|string[]} body Message body lines.
   * @returns {void}
   */
  function whisperGms(title, body) {
    const gmIds = getGmPlayerIds();
    for (const gmId of gmIds) {
      whisper(gmId, title, body);
    }
  }

  /**
   * Builds a styled chat box.
   *
   * @param {string} title Message title.
   * @param {string[]} lines Message body lines.
   * @returns {string} Chat HTML.
   */
  function buildBox(title, lines) {
    const safeTitle = escapeHtml(title);
    const locale = getConfig().language;
    const headerLabel =
      toText(title) === CHAT_HEADER_SCRIPT_READY ||
      toText(title) === t('ui.title.scriptReady', locale)
        ? `😎 ${safeTitle} 😎`
        : `ℹ️ ${safeTitle}`;
    return buildStyledBox(lines, CHAT_HEADER_STYLE, headerLabel);
  }

  /**
   * Builds a styled warning chat box.
   *
   * @param {string[]} lines Message body lines.
   * @returns {string} Chat HTML.
   */
  function buildWarningBox(lines, locale) {
    return buildStyledBox(
      lines,
      CHAT_HEADER_WARNING_STYLE,
      `⚠️ ${escapeHtml(t('ui.title.warning', locale))}`,
    );
  }

  /**
   * Builds a styled error chat box.
   *
   * @param {string[]} lines Message body lines.
   * @returns {string} Chat HTML.
   */
  function buildErrorBox(lines, locale) {
    return buildStyledBox(
      lines,
      CHAT_HEADER_ERROR_STYLE,
      `❌ ${escapeHtml(t('ui.title.error', locale))}`,
    );
  }

  /**
   * Whispers a warning message to a GM or player.
   *
   * @param {string} playerId Player id.
   * @param {string|string[]} body Message body lines.
   * @returns {void}
   */
  function whisperWarning(playerId, body) {
    whisperWithBox(playerId, body, (lines, locale) =>
      buildWarningBox(lines, locale),
    );
  }

  /**
   * Whispers an error message to a GM or player.
   *
   * @param {string} playerId Player id.
   * @param {string|string[]} body Message body lines.
   * @returns {void}
   */
  function whisperError(playerId, body) {
    whisperWithBox(playerId, body, (lines, locale) =>
      buildErrorBox(lines, locale),
    );
  }

  /**
   * Builds one of the styled chat card variants.
   *
   * @param {string[]} lines Message body lines.
   * @param {string} headerStyle Header style string.
   * @param {string} headerText Header label.
   * @returns {string} Chat HTML.
   */
  function buildStyledBox(lines, headerStyle, headerText) {
    const body = buildBody(lines);
    const logo = `<div style="text-align:center;padding:6px 0 4px;"><img src="${LOGO_URL_256}" style="height:48px;width:auto;" alt="${SCRIPT_NAME} logo" title="${SCRIPT_NAME}" /></div>`;
    const header = `<div style="${headerStyle}">${headerText}</div>`;
    const content = `<div style="${CHAT_CONTENT_STYLE}">${body}</div>`;
    return `<div style="${CHAT_CARD_STYLE}">${logo}${header}${content}</div>`;
  }

  /**
   * Normalizes whisper input, builds a box, and sends it.
   *
   * @param {string} playerId Player id.
   * @param {string|string[]} body Message body lines.
   * @param {(lines: string[], locale: string) => string} boxBuilder Chat box builder.
   * @returns {void}
   */
  function whisperWithBox(playerId, body, boxBuilder) {
    const lines = normalizeBodyLines(body);
    const locale = getConfig().language;
    const html = boxBuilder(lines, locale);
    sendWhisperHtml(playerId, html);
  }

  /**
   * Sends prebuilt whisper HTML to a player or GM target.
   *
   * @param {string} playerId Player id.
   * @param {string} html Prebuilt chat card HTML.
   * @returns {void}
   */
  function sendWhisperHtml(playerId, html) {
    const target = getWhisperTarget(playerId);
    sendChat(SCRIPT_NAME, `/w "${target}" ${html}`);
  }

  /**
   * Normalizes whisper body input to a string array.
   *
   * @param {string|string[]} body Message body lines.
   * @returns {string[]} Body lines array.
   */
  function normalizeBodyLines(body) {
    return Array.isArray(body) ? body : [body];
  }

  /**
   * Builds escaped chat body HTML.
   *
   * @param {string[]} lines Body lines.
   * @returns {string} Body HTML.
   */
  function buildBody(lines) {
    const parts = [];
    for (const line of lines) {
      const content = formatChatLine(line);
      parts.push(`<div>${content}</div>`);
    }

    return parts.join('');
  }

  /**
   * Formats one line for chat body rendering.
   *
   * @param {*} line Chat line value.
   * @returns {string} Escaped or trusted HTML content.
   */
  function formatChatLine(line) {
    if (isTrustedHtmlLine(line)) {
      return getTrustedHtml(line);
    }

    return escapeHtml(line);
  }

  /**
   * Returns true for internally generated chat HTML fragments.
   *
   * @param {*} line Chat line value.
   * @returns {boolean} True when the line is trusted HTML.
   */
  function isTrustedHtmlLine(line) {
    return (
      Boolean(line) && typeof line === 'object' && hasValue(line.__trustedHtml)
    );
  }

  /**
   * Returns the HTML payload from a trusted chat line.
   *
   * @param {*} line Chat line value.
   * @returns {string} Trusted HTML.
   */
  function getTrustedHtml(line) {
    if (line === null || line === undefined) return '';
    if (typeof line === 'object') {
      return hasValue(line.__trustedHtml) ? String(line.__trustedHtml) : '';
    }
    return String(line);
  }

  /**
   * Returns true when a value exists.
   *
   * @param {*} value The value to inspect.
   * @returns {boolean} True when the value is neither undefined nor null.
   */
  function hasValue(value) {
    return value !== undefined && value !== null;
  }

  /**
   * Builds a Roll20 API command button.
   *
   * @param {string} label Button label.
   * @param {string} command Command text.
   * @returns {string} Button HTML.
   */
  function buildButton(label, command) {
    return rawHtml(
      `<a style="${CHAT_BUTTON_STYLE}" href="${escapeHtml(command)}">${escapeHtml(label)}</a>`,
    );
  }

  /**
   * Builds a remove button for an active condition.
   *
   * @param {object} condition Active condition record.
   * @returns {string} Button HTML.
   */
  function buildRemoveButton(condition) {
    return buildButton(
      `Remove: ${condition.displayText}`,
      `${COMMAND} --remove ${condition.id}`,
    );
  }

  /**
   * Creates a compact HTML table for chat output.
   *
   * @param {string[]} headers Column labels.
   * @param {string[][]} rows Table rows with trusted cell HTML.
   * @returns {object} Trusted HTML line.
   */
  function htmlTable(headers, rows) {
    const headerCells = headers
      .map(
        (header) =>
          `<th style="${TABLE_HEADER_STYLE}"><strong>${escapeHtml(header)}</strong></th>`,
      )
      .join('');

    const bodyRows = rows
      .map(
        (cells) =>
          `<tr>${cells
            .map(
              (cell) =>
                `<td style="padding:2px 4px;vertical-align:top;">${getTrustedHtml(cell)}</td>`,
            )
            .join('')}</tr>`,
      )
      .join('');

    return rawHtml(
      `<table style="width:100%;border-collapse:collapse;"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`,
    );
  }

  /**
   * Resolves a player whisper target.
   *
   * @param {string} playerId Player id.
   * @returns {string} Display name suitable for /w.
   */
  function getWhisperTarget(playerId) {
    const player = getObj('player', playerId);
    const displayName = player
      ? toText(player.get('_displayname')).replaceAll('"', '')
      : '';
    if (displayName) {
      return displayName;
    }

    return DEFAULT_WHISPER_TARGET;
  }

  /**
   * Parses a duration label into a stored duration object.
   *
   * @param {string} label User-provided duration label.
   * @param {object} context Duration context.
   * @param {string} context.sourceTokenId Source token id.
   * @param {string} context.targetTokenId Target token id.
   * @param {string} context.currentTurnTokenId Current first turn token id.
   * @returns {object} Parse result.
   */
  function parseDuration(label, context) {
    const locale = getConfig().language;
    const text = toText(label) || 'Until removed';
    const key = normalizeKey(text);

    if (key === 'until removed') {
      return validDuration({
        type: DURATION_UNTIL_REMOVED,
        remaining: null,
        anchor: null,
      });
    }

    if (
      key === 'end of target next turn' ||
      key === "end of target's next turn"
    ) {
      return validDuration(
        createTurnEndDuration(
          context.targetTokenId,
          context.currentTurnTokenId,
        ),
      );
    }

    if (
      key === 'end of source next turn' ||
      key === "end of source's next turn"
    ) {
      return validDuration(
        createTurnEndDuration(
          context.sourceTokenId,
          context.currentTurnTokenId,
        ),
      );
    }

    const rounds = parseRoundCount(key);
    if (rounds > 0) {
      return validDuration(
        createRoundDuration(
          rounds,
          context.targetTokenId,
          context.currentTurnTokenId,
        ),
      );
    }

    if (key === 'other') {
      return invalidDuration(t('ui.msg.otherDurationRequiresRounds', locale));
    }

    return invalidDuration(t('ui.msg.invalidDuration', locale));
  }

  /**
   * Creates a turn-end duration.
   *
   * @param {string} anchorTokenId Anchor token id.
   * @param {string} currentTurnTokenId Current first turn token id.
   * @returns {object} Stored duration.
   */
  function createTurnEndDuration(anchorTokenId, currentTurnTokenId) {
    return {
      type: DURATION_TURN_END,
      remaining: anchorTokenId === currentTurnTokenId ? 2 : 1,
      anchor: anchorTokenId,
    };
  }

  /**
   * Creates a round-count duration anchored on the target turn.
   *
   * @param {number} rounds Round count.
   * @param {string} targetTokenId Target token id.
   * @param {string} currentTurnTokenId Current first turn token id.
   * @returns {object} Stored duration.
   */
  function createRoundDuration(rounds, targetTokenId, currentTurnTokenId) {
    const extraCurrentTurn = targetTokenId === currentTurnTokenId ? 1 : 0;
    return {
      type: DURATION_ROUNDS,
      remaining: rounds + extraCurrentTurn,
      anchor: targetTokenId,
    };
  }

  /**
   * Parses a round-count duration key.
   *
   * @param {string} key Normalized duration key.
   * @returns {number} Positive round count or zero.
   */
  function parseRoundCount(key) {
    const match = /^(\d+)\s*(?:round|rounds)?$/.exec(key);
    if (!match) {
      return 0;
    }

    return Number(match[1]);
  }

  /**
   * Decrements a condition duration when its anchor turn ends.
   *
   * @param {object} condition Active condition record.
   * @param {string} endedTurnTokenId Token id whose turn just ended.
   * @returns {boolean} True when the condition expired.
   */
  function decrementDuration(condition, endedTurnTokenId) {
    const duration = condition.duration;
    if (
      !duration ||
      duration.type === DURATION_UNTIL_REMOVED ||
      duration.anchor !== endedTurnTokenId
    ) {
      return false;
    }

    duration.remaining -= 1;
    return duration.remaining <= 0;
  }

  /**
   * Creates a valid duration result.
   *
   * @param {object} duration Stored duration.
   * @returns {object} Valid parse result.
   */
  function validDuration(duration) {
    return { valid: true, duration };
  }

  /**
   * Creates an invalid duration result.
   *
   * @param {string} message Error message.
   * @returns {object} Invalid parse result.
   */
  function invalidDuration(message) {
    return { valid: false, message };
  }

  /**
   * Applies a marker to a token if needed.
   *
   * @param {Graphic} token Target token.
   * @param {string} marker Marker name or tag.
   * @returns {boolean} True when the marker was added.
   */
  function applyMarker(token, marker) {
    const markerText = toText(marker);
    if (!token || !markerText) {
      return false;
    }

    const markers = getTokenMarkers(token);
    if (containsMarker(markers, markerText)) {
      return false;
    }

    markers.push(markerText);
    setTokenMarkers(token, markers);
    return true;
  }

  /**
   * Removes a marker if no remaining active condition needs it.
   *
   * @param {object} condition Condition being removed.
   * @returns {object} Marker removal result.
   */
  function removeMarkerIfUnused(condition) {
    const marker = toText(condition.marker);
    if (!marker) {
      return { removed: false, marker: '' };
    }

    if (isMarkerStillRequired(condition.targetTokenId, marker, condition.id)) {
      return { removed: false, marker };
    }

    const token = getObj('graphic', condition.targetTokenId);
    if (!token) {
      return { removed: false, marker };
    }

    const markers = getTokenMarkers(token);
    const nextMarkers = removeMarkerFromList(markers, marker);
    const removed = nextMarkers.length !== markers.length;
    if (removed) {
      setTokenMarkers(token, nextMarkers);
    }

    return { removed, marker };
  }

  /**
   * Returns true when another active condition still requires a marker.
   *
   * @param {string} targetTokenId Target token id.
   * @param {string} marker Marker name or tag.
   * @param {string} ignoredConditionId Condition id being removed.
   * @returns {boolean} True when the marker is still needed.
   */
  function isMarkerStillRequired(targetTokenId, marker, ignoredConditionId) {
    for (const condition of ensureState().active) {
      const sameTarget = condition.targetTokenId === targetTokenId;
      const sameMarker = condition.marker === marker;
      const differentCondition = condition.id !== ignoredConditionId;
      if (sameTarget && sameMarker && differentCondition) {
        return true;
      }
    }

    return false;
  }

  /**
   * Reads a token status marker list.
   *
   * @param {Graphic} token Token object.
   * @returns {string[]} Marker list.
   */
  function getTokenMarkers(token) {
    const text = toText(token.get('statusmarkers'));
    if (!text) {
      return [];
    }

    const markers = [];
    const parts = text.split(TOKEN_MARKER_SEPARATOR);
    for (const part of parts) {
      const marker = toText(part);
      if (marker) {
        markers.push(marker);
      }
    }

    return markers;
  }

  /**
   * Saves a token status marker list.
   *
   * @param {Graphic} token Token object.
   * @param {string[]} markers Marker list.
   * @returns {void}
   */
  function setTokenMarkers(token, markers) {
    token.set('statusmarkers', markers.join(TOKEN_MARKER_SEPARATOR));
  }

  /**
   * Returns true when a marker item matches a target marker name or tag.
   *
   * Handles badged markers (e.g. "grab@2") by comparing the base name.
   *
   * @param {string} item Marker item from a token's marker list.
   * @param {string} marker Marker name or tag to compare against.
   * @returns {boolean} True when the item matches.
   */
  function matchesMarker(item, marker) {
    return item === marker || getMarkerBase(item) === marker;
  }

  /**
   * Returns true when a marker list already contains a marker.
   *
   * @param {string[]} markers Marker list.
   * @param {string} marker Marker name or tag.
   * @returns {boolean} True when present.
   */
  function containsMarker(markers, marker) {
    for (const item of markers) {
      if (matchesMarker(item, marker)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Removes one marker from a marker list.
   *
   * @param {string[]} markers Marker list.
   * @param {string} marker Marker name or tag.
   * @returns {string[]} Marker list without the marker.
   */
  function removeMarkerFromList(markers, marker) {
    const nextMarkers = [];
    for (const item of markers) {
      if (!matchesMarker(item, marker)) {
        nextMarkers.push(item);
      }
    }

    return nextMarkers;
  }

  /**
   * Returns the marker name without a numeric badge suffix.
   *
   * @param {string} marker Marker text.
   * @returns {string} Marker base.
   */
  function getMarkerBase(marker) {
    return toText(marker).split('@')[0];
  }

  /**
   * Parses an API chat message into command arguments.
   *
   * @param {string} content Raw chat content.
   * @returns {object} Parsed command details.
   */
  function parseCommand(content) {
    const body = toText(content).slice(COMMAND.length).trim();
    const tokens = tokenize(body);
    return collectFlags(tokens);
  }

  /**
   * Splits command text into shell-like tokens.
   *
   * @param {string} text Command text without namespace.
   * @returns {string[]} Token list.
   */
  function tokenize(text) {
    const tokens = [];
    let current = '';
    let quote = '';

    for (let index = 0; index < text.length; index += 1) {
      const character = text.charAt(index);
      if (isQuote(character)) {
        quote = updateQuote(quote, character);
        continue;
      }

      if (!quote && /\s/.test(character)) {
        pushToken(tokens, current);
        current = '';
        continue;
      }

      current += character;
    }

    pushToken(tokens, current);
    return tokens;
  }

  /**
   * Collects flag tokens into a command argument object.
   *
   * @param {string[]} tokens Token list.
   * @returns {object} Parsed flags.
   */
  function collectFlags(tokens) {
    const args = { raw: tokens.slice(0) };
    let index = 0;

    while (index < tokens.length) {
      const token = tokens[index];
      if (!token.startsWith('--')) {
        index += 1;
        continue;
      }

      const key = token.slice(2);
      const valueTokens = [];
      index += 1;

      while (index < tokens.length && !tokens[index].startsWith('--')) {
        valueTokens.push(tokens[index]);
        index += 1;
      }

      args[key] = valueTokens.length > 0 ? valueTokens.join(' ') : true;
    }

    return args;
  }

  /**
   * Returns true when a character is a supported quote.
   *
   * @param {string} character Character to inspect.
   * @returns {boolean} True for single or double quotes.
   */
  function isQuote(character) {
    return character === '"' || character === "'";
  }

  /**
   * Updates the active quote state.
   *
   * @param {string} activeQuote Current quote character.
   * @param {string} character Current character.
   * @returns {string} Next quote state.
   */
  function updateQuote(activeQuote, character) {
    if (!activeQuote) {
      return character;
    }

    if (activeQuote === character) {
      return '';
    }

    return activeQuote;
  }

  /**
   * Adds a non-empty token to a token list.
   *
   * @param {string[]} tokens Token list to mutate.
   * @param {string} token Token candidate.
   * @returns {void}
   */
  function pushToken(tokens, token) {
    const trimmed = toText(token);
    if (trimmed) {
      tokens.push(trimmed);
    }
  }

  /**
   * Gets the current Campaign turn order as an array.
   *
   * @returns {object[]} Current turn order rows.
   */
  function getTurnOrder() {
    const campaign = Campaign();
    const rows = parseJson(campaign.get('turnorder') || EMPTY_TURN_ORDER, []);
    return Array.isArray(rows) ? rows : [];
  }

  /**
   * Saves the Campaign turn order.
   *
   * @param {object[]} rows Turn order rows.
   * @returns {void}
   */
  function setTurnOrder(rows) {
    Campaign().set('turnorder', JSON.stringify(rows));
  }

  /**
   * Returns the first token id in the current turn order.
   *
   * @returns {string} Current first token id or an empty string.
   */
  function getCurrentTurnTokenId() {
    const rows = getTurnOrder();
    if (rows.length === 0) {
      return '';
    }

    return getTokenRowId(rows[0]);
  }

  /**
   * Returns the pr value for a condition row based on its duration.
   *
   * @param {object|null} duration Stored duration object.
   * @returns {string} Remaining count as a string, or empty for untimed durations.
   */
  function buildTurnOrderPr(duration) {
    if (!duration || duration.type === DURATION_UNTIL_REMOVED) {
      return '';
    }
    return String(duration.remaining);
  }

  /**
   * Creates a custom Turn Tracker row for a condition.
   *
   * @param {object} condition Active condition record.
   * @returns {object} Turn order row.
   */
  function createConditionRow(condition) {
    return {
      id: '-1',
      pr: buildTurnOrderPr(condition.duration),
      custom: condition.displayText,
      _ct: condition.id,
    };
  }

  /**
   * Updates the pr value of an existing condition row after a duration decrement.
   *
   * @param {object} condition Active condition record.
   * @returns {void}
   */
  function updateConditionRow(condition) {
    const rows = getTurnOrder();
    let changed = false;

    for (const row of rows) {
      if (getConditionIdFromRow(row) === condition.id) {
        row.pr = buildTurnOrderPr(condition.duration);
        changed = true;
        break;
      }
    }

    if (changed) {
      setTurnOrder(rows);
    }
  }

  /**
   * Inserts a condition row after the target token and existing target conditions.
   *
   * @param {object} condition Active condition record.
   * @returns {object} Insert result.
   */
  function insertConditionRow(condition) {
    const rows = getTurnOrder();
    const anchorTokenId = getConditionAnchorTokenId(condition);
    const anchorLookup = getConditionAnchorLookup();
    const insertIndex = getInsertIndex(rows, anchorTokenId, anchorLookup);
    const conditionRow = createConditionRow(condition);
    rows.splice(insertIndex.index, 0, conditionRow);
    setTurnOrder(rows);
    return { appended: insertIndex.appended };
  }

  /**
   * Inserts multiple condition rows in a single turn-order read-write cycle.
   *
   * All conditions must already be added to active state before calling this so
   * the anchor lookup is complete. Rows are spliced sequentially so each
   * insertion sees the positions from prior insertions.
   *
   * @param {object[]} conditions Active condition records.
   * @returns {{ appended: boolean }[]} Per-condition insert results in the same order.
   */
  function insertConditionRows(conditions) {
    if (!conditions || conditions.length === 0) {
      return [];
    }

    const rows = getTurnOrder();
    const anchorLookup = getConditionAnchorLookup();
    const results = [];

    for (const condition of conditions) {
      const anchorTokenId = getConditionAnchorTokenId(condition);
      const insertIndex = getInsertIndex(rows, anchorTokenId, anchorLookup);
      rows.splice(insertIndex.index, 0, createConditionRow(condition));
      results.push({ appended: insertIndex.appended });
    }

    setTurnOrder(rows);
    return results;
  }

  /**
   * Returns the token id used to anchor a condition row in Turn Tracker.
   *
   * Advantage and Disadvantage are grouped under the source token so they read
   * with the creature granting or imposing the effect.
   *
   * @param {object} condition Active condition record.
   * @returns {string} Anchor token id.
   */
  function getConditionAnchorTokenId(condition) {
    if (
      condition?.condition === CONDITION_ADVANTAGE ||
      condition?.condition === CONDITION_DISADVANTAGE
    ) {
      return toText(condition.sourceTokenId);
    }

    return toText(condition?.targetTokenId);
  }

  /**
   * Finds the insertion point for a target condition row.
   *
   * @param {object[]} rows Current turn order rows.
   * @param {string} targetTokenId Target token id.
   * @param {Map<string, string>} [anchorLookup] Optional condition-id to anchor-token lookup.
   * @returns {object} Insert index details.
   */
  function getInsertIndex(rows, targetTokenId, anchorLookup) {
    let targetIndex = -1;

    for (let index = 0; index < rows.length; index += 1) {
      if (getTokenRowId(rows[index]) === targetTokenId) {
        targetIndex = index;
        break;
      }
    }

    if (targetIndex < 0) {
      return { index: rows.length, appended: true };
    }

    return {
      index: findAfterExistingTargetConditions(
        rows,
        targetIndex + 1,
        targetTokenId,
        anchorLookup,
      ),
      appended: false,
    };
  }

  /**
   * Finds the first row after existing Condition Tracker rows for a target.
   *
   * @param {object[]} rows Current turn order rows.
   * @param {number} startIndex Initial index after the target token.
   * @param {string} anchorTokenId Target token id.
   * @param {Map<string, string>} [anchorLookup] Optional condition-id to anchor-token lookup.
   * @returns {number} Insert index.
   */
  function findAfterExistingTargetConditions(
    rows,
    startIndex,
    anchorTokenId,
    anchorLookup,
  ) {
    const lookup = anchorLookup || getConditionAnchorLookup();
    let index = startIndex;
    while (
      index < rows.length &&
      isConditionRowForTarget(rows[index], anchorTokenId, lookup)
    ) {
      index += 1;
    }

    return index;
  }

  /**
   * Returns true when a row belongs to a target condition.
   *
   * @param {object} row Turn order row.
   * @param {string} targetTokenId Target token id.
   * @param {Map<string, string>} [anchorLookup] Optional condition-id to anchor-token lookup.
   * @returns {boolean} True for a matching condition row.
   */
  function isConditionRowForTarget(row, targetTokenId, anchorLookup) {
    const conditionId = getConditionIdFromRow(row);
    if (!conditionId) {
      return false;
    }

    const lookup = anchorLookup || getConditionAnchorLookup();
    return lookup.get(conditionId) === targetTokenId;
  }

  /**
   * Removes a token's own turn order row by token id.
   *
   * @param {string} tokenId Roll20 graphic token id.
   * @returns {boolean} True when a row was removed.
   */
  function removeTokenRow(tokenId) {
    const rows = getTurnOrder();
    const remaining = [];
    let removed = false;

    for (const row of rows) {
      if (getTokenRowId(row) === tokenId) {
        removed = true;
      } else {
        remaining.push(row);
      }
    }

    if (removed) {
      setTurnOrder(remaining);
    }

    return removed;
  }

  /**
   * Removes a condition row by condition id.
   *
   * @param {string} conditionId Condition id.
   * @returns {boolean} True when a row was removed.
   */
  function removeConditionRow(conditionId) {
    const rows = getTurnOrder();
    const remaining = [];
    let removed = false;

    for (const row of rows) {
      if (getConditionIdFromRow(row) === conditionId) {
        removed = true;
      } else {
        remaining.push(row);
      }
    }

    if (removed) {
      setTurnOrder(remaining);
    }

    return removed;
  }

  /**
   * Removes one or more condition rows by condition id.
   *
   * Uses a single pass over turn order rows to avoid repeated rescans when
   * cleaning up multiple conditions.
   *
   * @param {Iterable<string>} conditionIds Condition ids to remove.
   * @returns {number} Number of removed rows.
   */
  function removeConditionRows(conditionIds) {
    const ids = new Set();
    for (const id of conditionIds || []) {
      const text = toText(id);
      if (text) {
        ids.add(text);
      }
    }

    if (ids.size === 0) {
      return 0;
    }

    const rows = getTurnOrder();
    const remaining = [];
    let removed = 0;

    for (const row of rows) {
      const conditionId = getConditionIdFromRow(row);
      if (conditionId && ids.has(conditionId)) {
        removed += 1;
      } else {
        remaining.push(row);
      }
    }

    if (removed > 0) {
      setTurnOrder(remaining);
    }

    return removed;
  }

  /**
   * Removes orphaned condition rows without active state records.
   *
   * @returns {number} Number of removed rows.
   */
  function removeOrphanedConditionRows() {
    const rows = getTurnOrder();
    const activeIds = getActiveConditionIds();
    const remaining = [];
    let removed = 0;

    for (const row of rows) {
      const conditionId = getConditionIdFromRow(row);
      if (conditionId && !activeIds[conditionId]) {
        removed += 1;
      } else {
        remaining.push(row);
      }
    }

    if (removed > 0) {
      setTurnOrder(remaining);
    }

    return removed;
  }

  /**
   * Returns true when a condition row currently exists.
   *
   * @param {string} conditionId Condition id.
   * @returns {boolean} True when the row exists.
   */
  function conditionRowExists(conditionId) {
    const rows = getTurnOrder();
    for (const row of rows) {
      if (getConditionIdFromRow(row) === conditionId) {
        return true;
      }
    }

    return false;
  }

  /**
   * Extracts a Condition Tracker id from a row.
   *
   * @param {object} row Turn order row.
   * @returns {string} Condition id or an empty string.
   */
  function getConditionIdFromRow(row) {
    if (row && row._ct) {
      return toText(row._ct);
    }

    // Backward compat: older rows stored the id in the formula field.
    const formula = toText(row && row.formula);
    if (formula.startsWith(TURN_ORDER_PREFIX)) {
      return formula.slice(TURN_ORDER_PREFIX.length);
    }

    return '';
  }

  /**
   * Returns a token id from a normal token turn row.
   *
   * @param {object} row Turn order row.
   * @returns {string} Token id or an empty string.
   */
  function getTokenRowId(row) {
    const id = toText(row && row.id);
    if (!id || id === '-1') {
      return '';
    }

    return id;
  }

  /**
   * Builds a signature for turn-order change detection.
   *
   * @returns {string} Turn signature.
   */
  function getTurnSignature() {
    const rows = getTurnOrder();
    if (rows.length === 0) {
      return '';
    }

    // Track all row fields that can affect condition bookkeeping.
    return rows
      .map((row) =>
        [
          toText(row?.id),
          toText(row?.custom),
          toText(row?.pr),
          toText(row?.formula),
          toText(row?._ct),
        ].join('|'),
      )
      .join('\n');
  }

  /**
   * Rewrites any existing Turn Tracker rows that use the old formula-based
   * identifier to the new _ct field, clearing the formula so Roll20 stops
   * trying to evaluate it as a dice expression.
   *
   * @returns {void}
   */
  function migrateTurnOrderRows() {
    const rows = getTurnOrder();
    let changed = false;

    for (const row of rows) {
      const formula = toText(row.formula);
      if (formula.startsWith(TURN_ORDER_PREFIX)) {
        const conditionId = formula.slice(TURN_ORDER_PREFIX.length);
        if (row._ct !== conditionId) {
          row._ct = conditionId;
        }
        // Roll20 expects formula to be numeric/math; clear legacy metadata values.
        row.formula = '';
        changed = true;
      }
    }

    if (changed) {
      setTurnOrder(rows);
    }
  }

  /**
   * Builds a lookup object of active condition ids.
   *
   * @returns {object} Lookup object.
   */
  function getActiveConditionIds() {
    const lookup = {};
    for (const condition of ensureState().active) {
      lookup[condition.id] = true;
    }

    return lookup;
  }

  /**
   * Returns a Set of all condition ids that currently have a Turn Tracker row.
   *
   * Builds the Set in a single pass so callers avoid O(n) per-condition scans.
   *
   * @returns {Set<string>} Condition ids with an existing row.
   */
  function getConditionRowIdSet() {
    const ids = new Set();
    for (const row of getTurnOrder()) {
      const id = getConditionIdFromRow(row);
      if (id) ids.add(id);
    }
    return ids;
  }

  /**
   * Builds a condition-id to anchor-token lookup from active state.
   *
   * @returns {Map<string, string>} Condition anchor lookup.
   */
  function getConditionAnchorLookup() {
    const lookup = new Map();
    for (const condition of ensureState().active) {
      lookup.set(condition.id, getConditionAnchorTokenId(condition));
    }

    return lookup;
  }

  /**
   * Removes a condition and emits the requested feedback.
   *
   * @param {string} conditionId Active condition id.
   * @param {object} options Removal options.
   * @param {string} options.playerId GM player id for whispers.
   * @param {string} options.reason Cleanup reason.
   * @param {boolean} options.publicAnnounce Whether to announce publicly.
   * @param {boolean} options.whisperResult Whether to whisper details.
   * @param {string} [options.locale] Primary output locale.
   * @param {string} [options.extraLocale] Additional output locale for bilingual mode.
   * @returns {object} Removal result.
   */
  function removeConditionById(conditionId, options) {
    const condition = removeActiveCondition(conditionId);
    if (!condition) {
      return {
        removed: false,
        message: t('ui.msg.conditionNotFound', getConfig().language),
      };
    }

    const rowRemoved = removeConditionRow(condition.id);
    const markerResult = removeMarkerIfUnused(condition);
    const config = getConfig();
    const locale = options.locale || config.language;

    if (options.publicAnnounce) {
      announceHtml(buildRemovalMessage(condition, config.useIcons, locale));
      if (options.extraLocale && options.extraLocale !== locale) {
        announceHtml(
          buildRemovalMessage(condition, config.useIcons, options.extraLocale),
        );
      }
    }

    if (options.whisperResult) {
      whisperRemoval(
        options.playerId,
        condition,
        rowRemoved,
        markerResult,
        options.reason,
        locale,
      );
    }

    return { removed: true, condition, rowRemoved, markerResult };
  }

  /**
   * Whispers condition removal details to the GM.
   *
   * @param {string} playerId GM player id.
   * @param {object} condition Removed condition.
   * @param {boolean} rowRemoved Whether the turn row was removed.
   * @param {object} markerResult Marker removal result.
   * @param {string} reason Removal reason.
   * @param {string} [locale] Output locale.
   * @returns {void}
   */
  function whisperRemoval(
    playerId,
    condition,
    rowRemoved,
    markerResult,
    reason,
    locale,
  ) {
    const reasonText = reason || t('ui.removal.manualReason', locale);
    let markerSummary = t('ui.removal.notConfigured', locale);
    if (markerResult.marker) {
      markerSummary = markerResult.removed
        ? t('ui.removal.markerRemoved', locale, {
            marker: escapeHtml(markerResult.marker),
          })
        : t('ui.removal.markerRetained', locale, {
            marker: escapeHtml(markerResult.marker),
          });
    }

    whisper(playerId, t('ui.title.removed', locale), [
      htmlTable(
        [t('ui.col.field', locale), t('ui.col.result', locale)],
        [
          [
            t('ui.removal.conditionField', locale),
            escapeHtml(condition.displayText),
          ],
          [t('ui.removal.reasonField', locale), escapeHtml(reasonText)],
          [
            t('ui.removal.turnRowField', locale),
            rowRemoved
              ? t('ui.removal.rowRemoved', locale)
              : t('ui.removal.rowMissing', locale),
          ],
          [t('ui.removal.markerField', locale), markerSummary],
        ],
      ),
    ]);
  }

  /**
   * Returns true when a chat sender is a GM.
   *
   * @param {object} msg Roll20 chat message.
   * @returns {boolean} True for GM senders.
   */
  function isGmMessage(msg) {
    return Boolean(msg && playerIsGM(msg.playerid));
  }

  /**
   * Resolves and validates token-based apply arguments.
   *
   * @param {object} args Parsed command arguments.
   * @returns {object} Validation result.
   */
  function validateApplyArgs(args) {
    const locale = getConfig().language;
    const sourceToken = getGraphicToken(args.source);
    if (!sourceToken) {
      return invalid(t('ui.msg.sourceTokenNotFound', locale));
    }

    const condition = getCanonicalCondition(args.condition);
    if (!condition) {
      return invalid(t('ui.msg.invalidCondition', locale));
    }

    const subjectRaw = toText(args.subject);
    const subjectId = subjectRaw === '__none__' ? '' : subjectRaw;
    if (subjectId && !isCustomEffectType(condition)) {
      return invalid(t('ui.msg.subjectOnlyCustom', locale));
    }

    const subjectToken = subjectId ? getGraphicToken(subjectId) : null;
    if (subjectId && !subjectToken) {
      return invalid(t('ui.msg.subjectTokenNotFound', locale));
    }

    const targetId = toText(args.target);
    const targetToken = getGraphicToken(targetId);
    if (!targetToken) {
      return invalid(t('ui.msg.targetTokenNotFound', locale));
    }

    const customText = toText(args.other);
    if (isCustomTextCondition(condition) && !customText) {
      return invalid(t('ui.msg.customDetailsRequired', locale, { condition }));
    }

    return {
      valid: true,
      sourceToken,
      subjectToken,
      targetToken,
      condition,
      customText: isCustomTextCondition(condition) ? customText : '',
    };
  }

  /**
   * Validates a marker configuration value.
   *
   * @param {string} condition Condition label.
   * @param {string} marker Marker name or tag.
   * @returns {object} Validation result.
   */
  function validateMarkerConfig(condition, marker) {
    const locale = getConfig().language;
    const canonical = getCanonicalCondition(condition);
    if (!canonical || canonical === CONDITION_OTHER) {
      return invalid(t('ui.msg.markerPredefinedRequired', locale));
    }

    if (!toText(marker)) {
      return invalid(t('ui.msg.markerNameRequired', locale));
    }

    return { valid: true, condition: canonical, marker: toText(marker) };
  }

  /**
   * Validates a boolean configuration value.
   *
   * @param {string} value Boolean text.
   * @returns {object} Validation result.
   */
  function validateBoolean(value) {
    const locale = getConfig().language;
    const text = toText(value).toLowerCase();
    if (!BOOLEAN_TEXT.has(text)) {
      return invalid(t('ui.msg.expectedBoolean', locale));
    }

    return { valid: true, value: text === 'true' };
  }

  /**
   * Validates a health bar setting.
   *
   * @param {string} value Health bar property.
   * @returns {object} Validation result.
   */
  function validateHealthBar(value) {
    const locale = getConfig().language;
    const text = toText(value);
    if (!VALID_HEALTH_BARS.includes(text)) {
      return invalid(t('ui.msg.invalidHealthBar', locale));
    }

    return { valid: true, value: text };
  }

  /**
   * Validates a locale string.
   *
   * @param {string} value Locale string.
   * @returns {object} Validation result.
   */
  function validateLocale(value) {
    const locale = getConfig().language;
    const text = toText(value);
    if (!VALID_LOCALES$1.has(text)) {
      return invalid(
        t('ui.msg.invalidLocale', locale, {
          locales: [...VALID_LOCALES$1].join(', '),
        }),
      );
    }
    return { valid: true, value: text };
  }

  /**
   * Creates an invalid validation result.
   *
   * @param {string} message Error message.
   * @returns {object} Invalid result.
   */
  function invalid(message) {
    return { valid: false, message };
  }

  /**
   * Performs manual cleanup and reconciliation.
   *
   * @param {string} playerId GM player id.
   * @returns {object} Cleanup summary.
   */
  function runCleanup(playerId) {
    const turnOrderRows = getTurnOrder();
    const tokenRowIds = buildTokenRowIdSet(turnOrderRows);
    const combatActive = tokenRowIds.size > 0;

    const kept = [];
    const removedConditions = [];
    let orphanedEntries = 0;
    let staleEntries = 0;
    let missingRows = 0;

    for (const condition of getActiveConditions()) {
      const sourceExists = tokenExists(condition.sourceTokenId);
      const targetExists = tokenExists(condition.targetTokenId);
      const rowExists = conditionRowExists(condition.id);
      const targetInTurnOrder =
        !combatActive || tokenRowIds.has(condition.targetTokenId);

      if (sourceExists && targetExists && rowExists && targetInTurnOrder) {
        kept.push(condition);
      } else {
        removedConditions.push(condition);
        if (!sourceExists || !targetExists) {
          orphanedEntries += 1;
        } else if (!targetInTurnOrder) {
          staleEntries += 1;
        }
        if (!rowExists) {
          missingRows += 1;
        }
      }
    }

    removeConditionRows(removedConditions.map((c) => c.id));
    setActiveConditions(kept);
    const unusedMarkers = removeUnusedMarkers(removedConditions);
    const orphanedRows = removeOrphanedConditionRows();
    const locale = getConfig().language;
    whisperCleanupSummary(
      playerId,
      orphanedEntries,
      staleEntries,
      orphanedRows + missingRows,
      unusedMarkers,
      locale,
    );

    return {
      orphanedEntries,
      staleEntries,
      orphanedRows: orphanedRows + missingRows,
      unusedMarkers,
    };
  }

  /**
   * Removes markers for conditions after state has been reconciled.
   *
   * @param {object[]} conditions Removed condition records.
   * @returns {number} Number of removed markers.
   */
  function removeUnusedMarkers(conditions) {
    let removed = 0;
    for (const condition of conditions) {
      const markerResult = removeMarkerIfUnused(condition);
      if (markerResult.removed) {
        removed += 1;
      }
    }

    return removed;
  }

  /**
   * Builds a Set of token ids present as real token rows in the turn order.
   *
   * @param {object[]} rows Turn order rows.
   * @returns {Set<string>} Token ids.
   */
  function buildTokenRowIdSet(rows) {
    const ids = new Set();
    for (const row of rows) {
      const id = getTokenRowId(row);
      if (id) ids.add(id);
    }
    return ids;
  }

  /**
   * Whispers cleanup details to the GM.
   *
   * @param {string} playerId GM player id.
   * @param {number} orphanedEntries Removed state entries for deleted tokens.
   * @param {number} staleEntries Removed state entries for tokens no longer in the turn order.
   * @param {number} orphanedRows Removed or missing Turn Tracker rows.
   * @param {number} unusedMarkers Removed markers.
   * @param {string} [locale] Output locale.
   * @returns {void}
   */
  function whisperCleanupSummary(
    playerId,
    orphanedEntries,
    staleEntries,
    orphanedRows,
    unusedMarkers,
    locale,
  ) {
    whisper(playerId, t('ui.title.cleanup', locale), [
      rawHtml(`<strong>${t('ui.heading.summary', locale)}</strong>`),
      htmlTable(
        [t('ui.col.item', locale), t('ui.col.removed', locale)],
        [
          [t('ui.cleanup.orphaned', locale), String(orphanedEntries)],
          [t('ui.cleanup.stale', locale), String(staleEntries)],
          [t('ui.cleanup.orphanedRows', locale), String(orphanedRows)],
          [t('ui.cleanup.unusedMarkers', locale), String(unusedMarkers)],
        ],
      ),
    ]);
  }

  const SUBJECT_NONE = '__none__';

  const SECTION_HEADING_STYLE = [
    `background:${COLOR_HEADER_LIGHT}`,
    `color:${COLOR_HEADER_DARK}`,
    `border-left:4px solid ${COLOR_BG_SOFT_BLACK}`,
    `border-bottom:1px solid ${COLOR_BG_SOFT_BLACK}`,
    `box-shadow:inset 0 -1px 0 ${COLOR_BG_SOFT_BLACK}`,
    `text-transform:uppercase`,
    `letter-spacing:0.06em`,
    `font-size:11px`,
    `font-weight:bold`,
    `padding:3px 6px`,
    `margin:2px 0`,
  ].join(';');

  /**
   * Builds an in-card section heading distinct from the message header.
   *
   * @param {string} text Heading text.
   * @returns {object} Trusted HTML line.
   */
  function heading(text) {
    return rawHtml(
      `<div style="${SECTION_HEADING_STYLE}">${escapeHtml(text)}</div>`,
    );
  }

  /**
   * Wraps a value in chat-safe code tags.
   *
   * @param {string} text Text to render as code.
   * @returns {string} HTML fragment.
   */
  function code(text) {
    return `<code>${escapeHtml(text)}</code>`;
  }

  /**
   * Adds light spacing between structured sections.
   *
   * @returns {object} Trusted HTML spacer.
   */
  function sectionSpacer() {
    return rawHtml('<br><br>');
  }

  /**
   * Returns true when a character's sheet-level npc attribute marks it as a PC.
   *
   * Works for sheets that expose an "npc" attribute (e.g. D&D 5e OGL).
   * Returns undefined when the attribute is absent so callers can fall back.
   * Uses findObjs instead of getAttrByName to avoid Roll20 console errors when
   * the attribute does not exist on the character sheet.
   *
   * @param {string} characterId Roll20 character id.
   * @returns {boolean|undefined} True for PC, false for NPC, undefined if unknown.
   */
  function isPlayerByNpcAttribute(characterId) {
    const attrs = queryObjects({
      _type: 'attribute',
      _characterid: characterId,
      name: 'npc',
    });
    if (attrs.length === 0) return undefined;
    return attrs[0].get('current') !== '1';
  }

  /**
   * Returns true when a character's controlledby field includes at least one
   * non-GM player.
   *
   * @param {object} character Roll20 character object.
   * @returns {boolean} True for player-controlled characters.
   */
  function isPlayerByControlledBy(character) {
    const controlledBy = toText(character.get('controlledby'));
    if (!controlledBy) return false;
    // "all" is a Roll20 sentinel meaning every player can see the sheet —
    // it does not indicate a player character, so exclude it.
    return controlledBy
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id && id !== 'all')
      .some((id) => !playerIsGM(id));
  }

  /**
   * Returns true when a token is directly controlled by at least one non-GM player
   * via its token-level controlledby field.
   *
   * @param {object} token Roll20 graphic object.
   * @returns {boolean} True when a non-GM player controls the token directly.
   */
  function isPlayerByTokenControlledBy(token) {
    const controlledBy = toText(token.get('controlledby'));
    if (!controlledBy) return false;
    return controlledBy
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id && id !== 'all')
      .some((id) => !playerIsGM(id));
  }

  /**
   * Returns true when a token is linked to a player character.
   *
   * Checks token-level controlledby first (catches player-owned NPC stat blocks
   * such as an Echo Knight's echo). Then falls back to sheet npc attribute and
   * the character-level controlledby field.
   *
   * @param {object} token Roll20 graphic object.
   * @returns {boolean} True for player tokens.
   */
  function isPlayerToken(token) {
    if (isPlayerByTokenControlledBy(token)) return true;
    const characterId = toText(token.get('represents'));
    if (!characterId) return false;
    const character = getObj('character', characterId);
    if (!character) return false;
    const byAttr = isPlayerByNpcAttribute(characterId);
    if (byAttr !== undefined) return byAttr;
    return isPlayerByControlledBy(character);
  }

  /**
   * Returns the display name for a token: the token's own name field, falling
   * back to the linked character's name when the token field is blank.
   *
   * @param {object} token Roll20 graphic object.
   * @returns {string} Display name, or empty string if none found.
   */
  function getTokenDisplayName(token) {
    const tokenName = toText(token.get('name'));
    if (tokenName) return tokenName;
    const characterId = toText(token.get('represents'));
    if (!characterId) return '';
    const character = getObj('character', characterId);
    return character ? toText(character.get('name')) : '';
  }

  /**
   * Returns true when a token's configured HP bar is explicitly set to zero or
   * below. Tokens with no value on the bar (empty string) are not considered
   * dead and return false.
   *
   * @param {object} token Roll20 graphic object.
   * @returns {boolean} True when the token has zero or negative HP.
   */
  function hasZeroHp(token) {
    const bar = getConfig().healthBar;
    const raw = token.get(bar);
    if (raw === '' || raw === null || raw === undefined) return false;
    const value = Number(raw);
    return Number.isFinite(value) && value <= 0;
  }

  /**
   * Converts one Roll20 graphic token into a token entry, or null when the
   * token has no resolvable name or has zero HP.
   *
   * @param {object} token Roll20 graphic object.
   * @returns {{id: string, name: string, isPlayer: boolean}|null} Token entry.
   */
  function tokenToEntry(token) {
    if (hasZeroHp(token)) return null;
    const name = getTokenDisplayName(token);
    if (!name) return null;
    return { id: token.id, name, isPlayer: isPlayerToken(token) };
  }

  /**
   * Returns token entries sourced from the current turn order.
   *
   * Custom text rows (id "-1") are ignored. Tokens that no longer exist or
   * have no resolvable name are skipped. Each token id appears at most once.
   *
   * @returns {{id: string, name: string, isPlayer: boolean}[]} Token entries.
   */
  function getTokensFromTurnOrder() {
    const seen = new Set();
    const entries = [];
    for (const row of getTurnOrder()) {
      const tokenId = getTokenRowId(row);
      if (!tokenId || seen.has(tokenId)) continue;
      seen.add(tokenId);
      const token = getGraphicToken(tokenId);
      if (!token) continue;
      const entry = tokenToEntry(token);
      if (entry) entries.push(entry);
    }
    return entries;
  }

  /**
   * Returns token entries sourced from the active player page.
   *
   * @returns {{id: string, name: string, isPlayer: boolean}[]} Token entries.
   */
  function getTokensFromPage() {
    const pageId = Campaign().get('playerpageid');
    return queryObjects({ _type: 'graphic', _pageid: pageId })
      .map(tokenToEntry)
      .filter(Boolean);
  }

  /**
   * Returns named combat tokens sorted alphabetically.
   *
   * Uses turn order token IDs when initiative is running — this works regardless
   * of which page the GM is viewing and naturally excludes custom text rows
   * (e.g. "Round 1"). Falls back to the active player page when the turn order
   * contains no real token entries (pre-combat).
   *
   * @returns {{id: string, name: string, isPlayer: boolean}[]} Token entries.
   */
  function getPageTokens() {
    const fromTurnOrder = getTokensFromTurnOrder();
    const entries =
      fromTurnOrder.length > 0 ? fromTurnOrder : getTokensFromPage();
    return entries.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Builds a partial wizard command string carrying all resolved args forward.
   *
   * Only includes args that have valid, non-empty values. Condition is
   * canonicalized and dropped if unrecognized.
   *
   * @param {object} args Current parsed command arguments.
   * @returns {string} Command prefix for wizard step buttons.
   */
  function buildWizardBase(args) {
    const parts = ['--prompt'];
    const sourceId = toText(args.source);
    const subjectRaw = toText(args.subject);
    const subjectId = subjectRaw === SUBJECT_NONE ? '' : subjectRaw;
    const targetId = toText(args.target);
    const targetsRaw = toText(args.targets);
    const selectedIdsRaw = toText(args['selected-ids']);
    const conditionRaw = toText(args.condition);
    const canonical = conditionRaw ? getCanonicalCondition(conditionRaw) : '';
    const durationRaw = toText(args.duration);
    const langRaw = toText(args.lang);

    if (sourceId) parts.push(`--source ${sourceId}`);
    if (subjectRaw === SUBJECT_NONE) parts.push(`--subject ${SUBJECT_NONE}`);
    else if (subjectId) parts.push(`--subject ${subjectId}`);
    if (targetId) parts.push(`--target ${targetId}`);
    if (targetsRaw) parts.push(`--targets ${targetsRaw}`);
    else if (selectedIdsRaw) parts.push(`--selected-ids ${selectedIdsRaw}`);
    if (canonical) parts.push(`--condition ${canonical}`);
    if (durationRaw) parts.push(`--duration ${durationRaw}`);
    if (langRaw) parts.push(`--lang ${langRaw}`);
    return buildCommand(parts);
  }

  /**
   * Builds a Roll20 command string with the script command prefix.
   *
   * @param {string[]} parts Command parts excluding the base command.
   * @returns {string} Joined command string.
   */
  function buildCommand(parts) {
    return [COMMAND, ...parts].join(' ');
  }

  /**
   * Builds a Roll20 duration query string with an optional leading default.
   *
   * Custom values not in the standard list are prepended so they appear first.
   *
   * @param {string} defaultDuration Duration label to pre-select, or empty.
   * @returns {string} Roll20 `?{...}` query string.
   */
  function buildDurationQuery(defaultDuration) {
    const text = toText(defaultDuration);
    if (text) {
      const rest = DURATION_OPTIONS.filter((o) => o !== text);
      const options = DURATION_OPTIONS.includes(text)
        ? [text, ...rest]
        : [text, ...DURATION_OPTIONS];
      return `?{Duration|${options.join('|')}}`;
    }
    return `?{Duration|${DURATION_OPTIONS.join('|')}}`;
  }

  /**
   * Builds table rows for two uneven button columns.
   *
   * @param {string[]} leftButtons Left column button HTML.
   * @param {string[]} rightButtons Right column button HTML.
   * @returns {string[][]} Table rows with blank-cell padding.
   */
  function buildTwoColumnRows(leftButtons, rightButtons) {
    const maxRows = Math.max(leftButtons.length, rightButtons.length);
    const tableRows = [];

    for (let i = 0; i < maxRows; i += 1) {
      tableRows.push([
        i < leftButtons.length ? leftButtons[i] : '',
        i < rightButtons.length ? rightButtons[i] : '',
      ]);
    }

    return tableRows;
  }

  /**
   * Whispers named token buttons for one wizard slot in a two-column layout.
   *
   * Player-controlled tokens appear in the left column and NPCs in the right.
   * An optional description is shown above the table to explain the role.
   *
   * @param {string} playerId GM player id.
   * @param {string} title Step heading.
   * @param {object} args Current wizard args.
   * @param {"source"|"target"} slot Which slot to fill.
   * @param {string} [description] Optional context shown above the token list.
   * @returns {void}
   */
  function showTokenStep(playerId, title, args, slot, description) {
    const locale = getConfig().language;
    const tokens = getPageTokens();
    if (tokens.length === 0) {
      whisper(playerId, title, t('ui.wizard.noTokens', locale));
      return;
    }

    const makeButton = (tok) =>
      buildButton(tok.name, buildWizardBase({ ...args, [slot]: tok.id }));

    const playerButtons = tokens.filter((tok) => tok.isPlayer).map(makeButton);
    const npcButtons = tokens.filter((tok) => !tok.isPlayer).map(makeButton);
    const tableRows = buildTwoColumnRows(playerButtons, npcButtons);

    const body = [];
    if (description) {
      body.push(
        rawHtml(
          `<div style="font-style:italic;margin:2px 0 4px;">${escapeHtml(description)}</div>`,
        ),
      );
    }
    if (slot === 'subject') {
      body.push(
        buildButton(
          t('ui.wizard.noneBtn', locale),
          buildWizardBase({ ...args, subject: SUBJECT_NONE }),
        ),
      );
    }
    body.push(
      htmlTable(
        [t('ui.col.players', locale), t('ui.col.npcs', locale)],
        tableRows,
      ),
    );
    whisper(playerId, title, body);
  }

  /**
   * Whispers a confirmation card listing the pre-selected tokens with a single
   * "Confirm target list" button that advances the wizard to the duration step.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Current wizard args.
   * @returns {void}
   */
  function showMultiTargetStep(playerId, args) {
    const locale = getConfig().language;
    const selectedIdsRaw = toText(args['selected-ids']);
    const ids = selectedIdsRaw.split(',').filter(Boolean);

    const resolved = ids
      .map((id) => {
        const token = getGraphicToken(id);
        if (!token) return null;
        const name = getTokenDisplayName(token);
        return name ? { id, name } : null;
      })
      .filter(Boolean);

    if (resolved.length === 0) {
      whisperWarning(playerId, t('ui.msg.reSelectTokens', locale));
      return;
    }

    const confirmedIds = resolved.map((tok) => tok.id).join(',');
    const confirmCmd = buildWizardBase({
      ...args,
      targets: confirmedIds,
      'selected-ids': '',
    });
    const tokenListHtml = resolved
      .map(
        (tok) => `<div style="padding:1px 0;">• ${escapeHtml(tok.name)}</div>`,
      )
      .join('');

    whisper(playerId, t('ui.wizard.confirmTargetTitle', locale), [
      rawHtml(
        `<div style="margin-bottom:4px;font-style:italic;">${escapeHtml(t('ui.wizard.confirmIntro', locale))}</div>`,
      ),
      rawHtml(tokenListHtml),
      buildButton(t('ui.wizard.confirmBtn', locale), confirmCmd),
    ]);
  }

  /**
   * Whispers condition selection buttons in a two-column layout.
   *
   * Left column: standard D&D conditions. Right column: custom effect types.
   * All buttons advance the wizard to the target/subject step.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Current wizard args.
   * @returns {void}
   */
  function showConditionStep(playerId, args) {
    const locale = getConfig().language;
    const base = buildWizardBase(args);

    const standardButtons = STANDARD_CONDITIONS.map((c) =>
      buildButton(t(`condNames.${c}`, locale), `${base} --condition ${c}`),
    );

    const customButtons = CUSTOM_EFFECT_TYPES.map((c) =>
      buildButton(t(`condNames.${c}`, locale), `${base} --condition ${c}`),
    );

    const tableRows = buildTwoColumnRows(standardButtons, customButtons);

    whisper(playerId, t('ui.wizard.selectCondition', locale), [
      htmlTable(
        [t('ui.col.conditions', locale), t('ui.col.customEffects', locale)],
        tableRows,
      ),
    ]);
  }

  /**
   * Whispers duration buttons in a two-column table layout.
   *
   * Left column: permanent and turn-end options.
   * Right column: fixed round counts plus a custom-round entry.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Current wizard args.
   * @returns {void}
   */
  function showDurationStep(playerId, args) {
    const locale = getConfig().language;
    const sourceId = toText(args.source);
    const targetId = toText(args.target);
    const targetsRaw = toText(args.targets);
    const condition = getCanonicalCondition(toText(args.condition));
    const langRaw = toText(args.lang);

    const makeCmd = (dur) => {
      const parts = [
        `--source ${sourceId}`,
        targetsRaw ? `--targets ${targetsRaw}` : `--target ${targetId}`,
        `--condition ${condition}`,
        `--duration ${dur}`,
      ];
      if (langRaw) parts.push(`--lang ${langRaw}`);
      return buildCommand(parts);
    };

    // English canonical values used in command URLs; localized labels shown on buttons
    const leftOptions = [
      { dur: 'Until removed', label: t('ui.dur.untilRemoved', locale) },
      {
        dur: 'End of target next turn',
        label: t('ui.dur.endOfTargetTurn', locale),
      },
      {
        dur: 'End of source next turn',
        label: t('ui.dur.endOfSourceTurn', locale),
      },
    ];
    const rightOptions = [
      { dur: '1 round', label: t('ui.dur.round1', locale) },
      { dur: '2 rounds', label: t('ui.dur.round2', locale) },
      { dur: '3 rounds', label: t('ui.dur.round3', locale) },
      { dur: '10 rounds', label: t('ui.dur.round10', locale) },
    ];
    const customPrompt = t('ui.dur.customPrompt', locale);
    const customCmd = makeCmd(`?{${customPrompt}|} rounds`);

    const leftButtons = leftOptions.map(({ dur, label }) =>
      buildButton(label, makeCmd(dur)),
    );
    const rightButtons = [
      ...rightOptions.map(({ dur, label }) => buildButton(label, makeCmd(dur))),
      buildButton(t('ui.dur.custom', locale), customCmd),
    ];

    const tableRows = buildTwoColumnRows(leftButtons, rightButtons);

    whisper(playerId, t('ui.wizard.selectDuration', locale), [
      htmlTable(
        [t('ui.col.permanentTurnEnd', locale), t('ui.col.rounds', locale)],
        tableRows,
      ),
    ]);
  }

  /**
   * Whispers a button with native query dialogs for effect text and duration.
   *
   * Used for Spell, Ability, and Other when description or duration is missing
   * and cannot be collected through the wizard button flow.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Current wizard args.
   * @param {string} condition Canonical condition (Spell, Ability, or Other).
   * @returns {void}
   */
  function showCustomTextStep(playerId, args, condition) {
    const locale = getConfig().language;
    const sourceId = toText(args.source);
    const targetId = toText(args.target);
    const targetsRaw = toText(args.targets);
    const langRaw = toText(args.lang);
    const durationQuery = buildDurationQuery(toText(args.duration));
    const prompt =
      condition === 'Other'
        ? t('ui.wizard.otherText', locale)
        : t('ui.wizard.effectDetails', locale, { condition });
    const parts = [
      `--source ${sourceId}`,
      targetsRaw ? `--targets ${targetsRaw}` : `--target ${targetId}`,
      `--condition ${condition}`,
      `--other ?{${prompt}|}`,
      `--duration ${durationQuery}`,
    ];
    if (langRaw) parts.push(`--lang ${langRaw}`);
    const cmd = buildCommand(parts);
    whisper(playerId, t('ui.wizard.applyEffectTitle', locale, { condition }), [
      buildButton(t('ui.wizard.enterDetails', locale), cmd),
    ]);
  }

  /**
   * Returns false when --subject is supplied for a standard (non-custom) condition.
   *
   * @param {string} subjectId Parsed --subject value.
   * @param {string} canonical Canonical condition label.
   * @returns {boolean} True when the combination is valid.
   */
  function isSubjectAllowed(subjectId, canonical) {
    const value = subjectId === SUBJECT_NONE ? '' : subjectId;
    if (!value || !canonical) return true;
    return isCustomEffectType(canonical);
  }

  /**
   * Dispatches to the correct detail step once source, target, and condition are known.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Resolved wizard args.
   * @param {string} canonical Canonical condition label.
   * @returns {void}
   */
  function showEffectDetailStep(playerId, args, canonical) {
    const targetsRaw = toText(args.targets);
    if (isCustomTextCondition(canonical)) {
      if (toText(args.other) && toText(args.duration)) {
        if (targetsRaw) {
          handleMultiApply(playerId, args);
        } else {
          handleApply(playerId, args);
        }
        return;
      }
      showCustomTextStep(playerId, args, canonical);
      return;
    }
    if (toText(args.duration)) {
      if (targetsRaw) {
        handleMultiApply(playerId, args);
      } else {
        handleApply(playerId, args);
      }
      return;
    }
    showDurationStep(playerId, args);
  }

  /**
   * Advances the condition application wizard based on which arguments are present.
   *
   * Steps in order: condition, subject (custom effects), source token,
   * target token, and duration.
   * Each step whispers buttons to the GM. Any step whose value is already
   * supplied is skipped. Calls handleApply directly when all values are present.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Parsed command arguments.
   * @returns {void}
   */
  function showPromptUi(playerId, args) {
    const conditionRaw = toText(args.condition);
    const canonical = conditionRaw ? getCanonicalCondition(conditionRaw) : '';
    const config = getConfig();
    const subjectBypassForCommand = resolveSubjectPromptBypassOverride(
      args,
      config.subjectPromptBypass,
    );
    if (!subjectBypassForCommand.valid) {
      whisperWarning(playerId, subjectBypassForCommand.message);
      return;
    }

    const shouldBypassSubject =
      subjectBypassForCommand.value && isCustomEffectType(canonical);
    const wizardArgs = shouldBypassSubject
      ? { ...args, subject: SUBJECT_NONE }
      : args;

    const sourceId = toText(wizardArgs.source);
    const subjectRaw = toText(wizardArgs.subject);
    const subjectId = subjectRaw === SUBJECT_NONE ? '' : subjectRaw;

    const locale = getConfig().language;

    if (!isSubjectAllowed(toText(wizardArgs.subject), canonical)) {
      whisperWarning(playerId, t('ui.msg.subjectOnlyCustom', locale));
      return;
    }

    if (!canonical) {
      showConditionStep(playerId, wizardArgs);
      return;
    }

    const subjectChosen = Boolean(subjectId) || subjectRaw === SUBJECT_NONE;
    if (isCustomEffectType(canonical) && !subjectChosen) {
      showTokenStep(
        playerId,
        t('ui.wizard.selectSubject', locale),
        wizardArgs,
        'subject',
        t('ui.wizard.subjectDesc', locale),
      );
      return;
    }

    if (!sourceId) {
      showTokenStep(
        playerId,
        t('ui.wizard.selectSource', locale),
        wizardArgs,
        'source',
        t('ui.wizard.sourceDesc', locale),
      );
      return;
    }

    const targetId = toText(wizardArgs.target);
    const targetsRaw = toText(wizardArgs.targets);

    if (!targetId && !targetsRaw) {
      const selectedIdsRaw = toText(wizardArgs['selected-ids']);
      if (selectedIdsRaw) {
        showMultiTargetStep(playerId, wizardArgs);
        return;
      }
      showTokenStep(
        playerId,
        t('ui.wizard.selectTarget', locale),
        wizardArgs,
        'target',
        t('ui.wizard.targetDesc', locale),
      );
      return;
    }

    const resolvedArgs =
      subjectRaw === SUBJECT_NONE ? { ...wizardArgs, subject: '' } : wizardArgs;

    showEffectDetailStep(playerId, resolvedArgs, canonical);
  }

  /**
   * Resolves a per-command override for subjectPromptBypass.
   *
   * Supports either --subjectPromptBypass or --subject-prompt-bypass.
   * If omitted, the persisted config value is used.
   *
   * @param {object} args Parsed command arguments.
   * @param {boolean} configDefault Current config default.
   * @returns {{valid: boolean, value?: boolean, message?: string}} Resolution result.
   */
  function resolveSubjectPromptBypassOverride(args, configDefault) {
    const overrideRaw =
      args.subjectPromptBypass ?? args['subject-prompt-bypass'];
    if (overrideRaw === undefined) {
      return { valid: true, value: configDefault };
    }

    if (overrideRaw === true) {
      return { valid: true, value: true };
    }

    const parsed = validateBoolean(overrideRaw);
    if (!parsed.valid) {
      return {
        valid: false,
        message: t('ui.msg.subjectBypassInvalid', getConfig().language),
      };
    }

    return { valid: true, value: parsed.value };
  }

  /**
   * Handles Roll20 API chat input.
   *
   * @param {object} msg Roll20 chat message.
   * @returns {void}
   */
  function handleInput(msg) {
    if (!isConditionTrackerMessage(msg)) {
      return;
    }

    try {
      ensureState();
      routeCommand(msg, parseCommand(msg.content));
    } catch (error) {
      whisperError(
        msg.playerid,
        t('ui.msg.commandFailed', getConfig().language),
      );
      log(`${SCRIPT_NAME} error: ${error.message}`);
    }
  }

  /**
   * Returns true when a chat message belongs to this mod.
   *
   * @param {object} msg Roll20 chat message.
   * @returns {boolean} True for Condition Tracker API messages.
   */
  function isConditionTrackerMessage(msg) {
    return Boolean(
      msg && msg.type === 'api' && toText(msg.content).startsWith(COMMAND),
    );
  }

  /**
   * Routes a parsed command to the correct handler.
   *
   * @param {object} msg Roll20 chat message.
   * @param {object} args Parsed command arguments.
   * @returns {void}
   */
  function routeCommand(msg, args) {
    if (args.help) {
      showHelp(msg.playerid);
      return;
    }

    if (!isGmMessage(msg)) {
      whisperError(msg.playerid, t('ui.msg.gmOnly', getConfig().language));
      return;
    }

    if (args['multi-target'] !== undefined) {
      handleMultiTargetTrigger(msg);
      return;
    }

    if (args.prompt !== undefined) {
      showPromptUi(msg.playerid, args);
      return;
    }

    if (args.menu) {
      showMenu(msg.playerid, args.menu);
      return;
    }

    if (args.remove) {
      handleRemove(msg.playerid, args.remove);
      return;
    }

    if (args.cleanup) {
      runCleanup(msg.playerid);
      return;
    }

    if (args['reinstall-macro']) {
      handleReinstallMacro(msg.playerid);
      return;
    }

    if (args['reinstall-handout']) {
      handleReinstallHandout(msg.playerid);
      return;
    }

    if (args.config) {
      handleConfig(msg.playerid, args.config);
      return;
    }

    if (args.targets) {
      handleMultiApply(msg.playerid, args);
      return;
    }

    if (args.source || args.target || args.subject || args.condition) {
      handleApply(msg.playerid, args);
      return;
    }

    routeZeroHpCommand(msg.playerid, args);
  }

  /**
   * Dispatches zero-HP event commands, falling back to the main menu.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Parsed command arguments.
   * @returns {void}
   */
  function routeZeroHpCommand(playerId, args) {
    if (args['zero-hp-dead']) {
      handleZeroHpDead(playerId, args['zero-hp-dead']);
      return;
    }
    if (args['zero-hp-incapacitated']) {
      handleZeroHpIncapacitated(playerId, args['zero-hp-incapacitated']);
      return;
    }
    if (args['zero-hp-remove-all']) {
      handleZeroHpRemoveAll(playerId, args['zero-hp-remove-all']);
      return;
    }
    if (args['zero-hp-remove-from-turn']) {
      handleZeroHpRemoveFromTurnOrder(
        playerId,
        args['zero-hp-remove-from-turn'],
      );
      return;
    }
    if (args['zero-hp-to-map']) {
      handleZeroHpToMapLayer(playerId, args['zero-hp-to-map']);
      return;
    }
    showMenu(playerId, 'main');
  }

  /**
   * Reads the tokens currently selected by the GM and launches the multi-target
   * wizard, encoding the selected token ids into --selected-ids.
   *
   * @param {object} msg Roll20 chat message (used for playerid and selected).
   * @returns {void}
   */
  function handleMultiTargetTrigger(msg) {
    const locale = getConfig().language;
    const selected = Array.isArray(msg.selected) ? msg.selected : [];
    if (selected.length === 0) {
      whisperWarning(msg.playerid, t('ui.msg.noSelection', locale));
      return;
    }
    const selectedIds = selected
      .map((s) => toText(s._id))
      .filter(Boolean)
      .join(',');
    if (!selectedIds) {
      whisperWarning(msg.playerid, t('ui.msg.invalidIds', locale));
      return;
    }
    showPromptUi(msg.playerid, { prompt: true, 'selected-ids': selectedIds });
  }

  /**
   * Validates args, checks for duplicates, and builds a ready-to-persist condition.
   *
   * Does not modify state or the turn order. Returns null and whispers a warning
   * to the GM when any step fails.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Parsed command arguments.
   * @returns {{condition: object, markerNotice: string, locale: string, extraLocale: string}|null}
   */
  function prepareApply(playerId, args) {
    const validation = validateApplyArgs(args);
    if (!validation.valid) {
      whisperWarning(playerId, validation.message);
      return null;
    }

    const config = getConfig();
    const locale = config.language;
    const extraLocale = getLocale(toText(args.lang));
    const durationResult = parseDuration(args.duration, {
      sourceTokenId: validation.sourceToken.id,
      targetTokenId: validation.targetToken.id,
      currentTurnTokenId: getCurrentTurnTokenId(),
    });

    if (!durationResult.valid) {
      whisperWarning(playerId, durationResult.message);
      return null;
    }

    if (
      isDuplicate(
        validation.sourceToken.id,
        validation.subjectToken?.id || '',
        validation.subjectName || '',
        validation.targetToken.id,
        validation.condition,
        validation.customText,
      )
    ) {
      whisperWarning(playerId, t('ui.msg.duplicate', locale));
      return null;
    }

    const condition = buildConditionRecord(
      validation,
      config,
      durationResult.duration,
      locale,
    );
    const markerNotice = applyConfiguredMarker(
      validation.targetToken,
      condition,
      config,
      locale,
    );
    return { condition, markerNotice, locale, extraLocale };
  }

  /**
   * Applies a condition or custom effect to multiple target tokens.
   *
   * Validates and adds each condition to state sequentially (preserving duplicate
   * detection across targets), then inserts all Turn Tracker rows in a single
   * read-write cycle.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Parsed command arguments (must include targets).
   * @returns {void}
   */
  function handleMultiApply(playerId, args) {
    const targetsRaw = toText(args.targets);
    const targetIds = targetsRaw.split(',').filter(Boolean);
    if (targetIds.length === 0) {
      whisperWarning(playerId, t('ui.msg.noTargets', getConfig().language));
      return;
    }

    const prepared = [];
    for (const targetId of targetIds) {
      const prep = prepareApply(playerId, {
        ...args,
        target: targetId,
      });
      if (!prep) continue;
      addActiveCondition(prep.condition);
      prepared.push(prep);
    }

    if (prepared.length === 0) return;

    const insertResults = insertConditionRows(prepared.map((p) => p.condition));

    for (let i = 0; i < prepared.length; i++) {
      const { condition, markerNotice, locale, extraLocale } = prepared[i];
      const { appended } = insertResults[i];
      announceHtml(buildApplyMessage(condition, locale));
      if (extraLocale !== locale) {
        announceHtml(buildApplyMessage(condition, extraLocale));
      }
      whisperApplySummary(playerId, condition, appended, markerNotice, locale);
    }
  }

  /**
   * Applies a condition or custom effect.
   *
   * @param {string} playerId GM player id.
   * @param {object} args Parsed command arguments.
   * @returns {void}
   */
  function handleApply(playerId, args) {
    const prep = prepareApply(playerId, args);
    if (!prep) return;

    const { condition, markerNotice, locale, extraLocale } = prep;
    addActiveCondition(condition);
    const insertResult = insertConditionRow(condition);

    announceHtml(buildApplyMessage(condition, locale));
    if (extraLocale !== locale) {
      announceHtml(buildApplyMessage(condition, extraLocale));
    }
    whisperApplySummary(
      playerId,
      condition,
      insertResult.appended,
      markerNotice,
      locale,
    );
  }

  /**
   * Builds an active condition record.
   *
   * @param {object} validation Validated apply arguments.
   * @param {object} config Current config.
   * @param {object} duration Stored duration.
   * @param {string} [locale] Output locale for displayText.
   * @returns {object} Active condition record.
   */
  function buildConditionRecord(validation, config, duration, locale) {
    const sourceName = getTokenName(validation.sourceToken);
    const subjectName = validation.subjectToken
      ? getTokenName(validation.subjectToken)
      : validation.subjectName || '';
    const targetName = getTokenName(validation.targetToken);
    const marker = toText(config.markers[validation.condition]) || '';
    const details = {
      sourceName,
      subjectName,
      targetName,
      condition: validation.condition,
      customText: validation.customText,
      useIcons: config.useIcons,
    };

    const id = createId();
    return {
      id,
      sourceTokenId: validation.sourceToken.id,
      subjectTokenId: validation.subjectToken?.id || '',
      targetTokenId: validation.targetToken.id,
      sourceName,
      subjectName,
      targetName,
      condition: validation.condition,
      customText: validation.customText,
      displayText: buildDisplayText(details, locale),
      marker,
      turnOrderCustomId: id,
      duration,
      createdAt: Date.now(),
    };
  }

  /**
   * Applies the configured marker and returns a GM-facing notice.
   *
   * @param {Graphic} targetToken Target token.
   * @param {object} condition Condition record.
   * @param {object} config Current config.
   * @param {string} [locale] Output locale.
   * @returns {string} Marker notice.
   */
  function applyConfiguredMarker(targetToken, condition, config, locale) {
    if (!config.useMarkers) {
      return t('ui.msg.markersDisabled', locale);
    }

    if (!condition.marker) {
      return t('ui.msg.noMarkerConfigured', locale);
    }

    const added = applyMarker(targetToken, condition.marker);
    return added
      ? t('ui.msg.markerApplied', locale, { marker: condition.marker })
      : t('ui.msg.markerPresent', locale, { marker: condition.marker });
  }

  /**
   * Returns true when an exact duplicate is already active.
   *
   * @param {string} sourceTokenId Source token id.
   * @param {string} subjectTokenId Subject token id.
   * @param {string} subjectName Subject display name.
   * @param {string} targetTokenId Target token id.
   * @param {string} condition Condition label.
   * @param {string} customText Custom effect text.
   * @returns {boolean} True for an exact duplicate.
   */
  function isDuplicate(
    sourceTokenId,
    subjectTokenId,
    subjectName,
    targetTokenId,
    condition,
    customText,
  ) {
    return someActiveCondition((activeCondition) => {
      const sameSource = activeCondition.sourceTokenId === sourceTokenId;
      const sameSubject =
        (activeCondition.subjectTokenId || '') === (subjectTokenId || '');
      const sameSubjectName =
        (activeCondition.subjectName || '') === (subjectName || '');
      const sameTarget = activeCondition.targetTokenId === targetTokenId;
      const sameCondition = activeCondition.condition === condition;
      const sameCustomText = activeCondition.customText === customText;
      return (
        sameSource &&
        sameSubject &&
        sameSubjectName &&
        sameTarget &&
        sameCondition &&
        sameCustomText
      );
    });
  }

  /**
   * Removes one active condition by id.
   *
   * @param {string} playerId GM player id.
   * @param {string} conditionId Condition id.
   * @returns {void}
   */
  function handleRemove(playerId, conditionId) {
    const locale = getConfig().language;
    const condition = findActiveCondition(toText(conditionId));
    if (!condition) {
      whisperWarning(playerId, t('ui.msg.conditionNotFound', locale));
      return;
    }

    removeConditionById(condition.id, {
      playerId,
      reason: t('ui.msg.manuallyRemoved', locale),
      publicAnnounce: true,
      whisperResult: true,
      locale,
    });
  }

  /**
   * Handles configuration commands.
   *
   * @param {string} playerId GM player id.
   * @param {string|boolean} configText Config command text.
   * @returns {void}
   */
  function handleConfig(playerId, configText) {
    if (configText === true || !toText(configText)) {
      showConfig(playerId);
      return;
    }

    const parts = toText(configText).split(/\s+/);
    const option = parts[0];
    const value = parts.slice(1).join(' ');

    if (option === 'marker') {
      updateMarkerConfig(playerId, value);
      return;
    }

    if (option === 'useMarkers') {
      updateBooleanConfig(playerId, 'useMarkers', value);
      return;
    }

    if (option === 'icons') {
      updateBooleanConfig(playerId, 'useIcons', value);
      return;
    }

    if (option === 'subjectPromptBypass') {
      updateBooleanConfig(playerId, 'subjectPromptBypass', value);
      return;
    }

    if (option === 'healthBar') {
      updateHealthBarConfig(playerId, value);
      return;
    }

    if (option === 'language') {
      updateLocaleConfig(playerId, value);
      return;
    }

    if (option === 'reset') {
      resetConfig(playerId);
      return;
    }

    whisperWarning(playerId, t('ui.msg.unknownConfig', getConfig().language));
  }

  /**
   * Restores all configuration settings to their defaults.
   *
   * @param {string} playerId GM player id.
   * @returns {void}
   */
  function resetConfig(playerId) {
    const defaultConfig = createDefaultConfig();
    setConfig(defaultConfig);
    installHandout(defaultConfig.language);
    whisper(
      playerId,
      t('ui.title.configTracker', defaultConfig.language),
      t('ui.msg.configReset', defaultConfig.language),
    );
  }

  /**
   * Updates the language setting.
   *
   * @param {string} playerId GM player id.
   * @param {string} value Locale string.
   * @returns {void}
   */
  function updateLocaleConfig(playerId, value) {
    const result = validateLocale(value);
    if (!result.valid) {
      const locale = getConfig().language;
      whisperWarning(
        playerId,
        t('ui.msg.invalidLocale', locale, {
          locales: [...VALID_LOCALES$1].join(', '),
        }),
      );
      return;
    }

    applyConfigUpdate(
      playerId,
      (config) => {
        config.language = result.value;
      },
      t('ui.msg.langSet', result.value, { locale: result.value }),
      result.value,
    );

    installHandout(result.value);
  }

  /**
   * Updates a marker mapping.
   *
   * @param {string} playerId GM player id.
   * @param {string} value Marker assignment text.
   * @returns {void}
   */
  function updateMarkerConfig(playerId, value) {
    const locale = getConfig().language;
    const separatorIndex = value.indexOf('=');
    if (separatorIndex < 1) {
      whisperWarning(playerId, t('ui.msg.markerConfigFormat', locale));
      return;
    }

    const result = validateMarkerConfig(
      value.slice(0, separatorIndex),
      value.slice(separatorIndex + 1),
    );
    if (!result.valid) {
      whisperWarning(playerId, result.message);
      return;
    }

    applyConfigUpdate(
      playerId,
      (config) => {
        config.markers[result.condition] = result.marker;
      },
      t('ui.msg.markerSet', locale, {
        condition: result.condition,
        marker: result.marker,
      }),
    );
  }

  /**
   * Persists a config mutation and whispers the success message.
   *
   * @param {string} playerId GM player id.
   * @param {(config: object) => void} applyMutation Config mutator.
   * @param {string} successMessage Success message body.
   * @param {string} [locale] Locale for the config title (defaults to current config language).
   * @returns {void}
   */
  function applyConfigUpdate(playerId, applyMutation, successMessage, locale) {
    const config = getConfig();
    applyMutation(config);
    setConfig(config);
    const lang = locale || config.language;
    whisper(playerId, t('ui.title.configTracker', lang), successMessage);
  }

  /**
   * Updates a boolean config setting.
   *
   * @param {string} playerId GM player id.
   * @param {string} key Config key.
   * @param {string} value Boolean text.
   * @returns {void}
   */
  function updateBooleanConfig(playerId, key, value) {
    const locale = getConfig().language;
    const result = validateBoolean(value);
    if (!result.valid) {
      whisperWarning(playerId, result.message);
      return;
    }

    applyConfigUpdate(
      playerId,
      (config) => {
        config[key] = result.value;
      },
      t('ui.msg.boolSet', locale, { key, value: String(result.value) }),
    );
  }

  /**
   * Updates the configured health bar.
   *
   * @param {string} playerId GM player id.
   * @param {string} value Health bar setting.
   * @returns {void}
   */
  function updateHealthBarConfig(playerId, value) {
    const locale = getConfig().language;
    const result = validateHealthBar(value);
    if (!result.valid) {
      whisperWarning(playerId, result.message);
      return;
    }

    applyConfigUpdate(
      playerId,
      (config) => {
        config.healthBar = result.value;
      },
      t('ui.msg.healthBarSet', locale, { bar: result.value }),
    );
  }

  /**
   * Shows the main or removal menu.
   *
   * @param {string} playerId GM player id.
   * @param {string|boolean} menu Menu name.
   * @returns {void}
   */
  function showMenu(playerId, menu) {
    const locale = getConfig().language;
    if (menu === MENU_REMOVE) {
      showRemovalMenu(playerId);
      return;
    }

    const cmdPrompt = `${COMMAND} --prompt`;
    const cmdMultiTarget = `${COMMAND} --multi-target`;
    const cmdRemoveMenu = `${COMMAND} --menu remove`;
    const cmdConfig = `${COMMAND} --config`;
    const cmdCleanup = `${COMMAND} --cleanup`;
    const cmdReinstall = `${COMMAND} --reinstall-macro`;
    const cmdReinstallHandout = `${COMMAND} --reinstall-handout`;
    const cmdHelp = `${COMMAND} --help`;

    whisper(playerId, t('ui.title.menu', locale), [
      heading(t('ui.heading.quickActions', locale)),
      htmlTable(
        [t('ui.col.command', locale), t('ui.col.result', locale)],
        [
          [
            code(cmdPrompt),
            buildButton(t('ui.btn.openWizard', locale), cmdPrompt),
          ],
          [
            code(cmdMultiTarget),
            buildButton(t('ui.btn.openMultiTarget', locale), cmdMultiTarget),
          ],
          [
            code(cmdRemoveMenu),
            buildButton(t('ui.btn.openRemovalList', locale), cmdRemoveMenu),
          ],
          [
            code(cmdConfig),
            buildButton(t('ui.btn.showConfig', locale), cmdConfig),
          ],
          [
            code(cmdCleanup),
            buildButton(t('ui.btn.runCleanup', locale), cmdCleanup),
          ],
          [
            code(cmdReinstall),
            buildButton(t('ui.btn.reinstallMacro', locale), cmdReinstall),
          ],
          [
            code(cmdReinstallHandout),
            buildButton(
              t('ui.btn.reinstallHandout', locale),
              cmdReinstallHandout,
            ),
          ],
          [code(cmdHelp), buildButton(t('ui.btn.showHelp', locale), cmdHelp)],
        ],
      ),
    ]);
  }

  /**
   * Shows active conditions with remove buttons.
   *
   * @param {string} playerId GM player id.
   * @returns {void}
   */
  function showRemovalMenu(playerId) {
    const locale = getConfig().language;
    const active = ensureState().active;
    if (active.length === 0) {
      whisper(
        playerId,
        t('ui.title.removalMenu', locale),
        t('ui.msg.noActive', locale),
      );
      return;
    }

    const lines = [];
    for (const condition of active) {
      lines.push(buildRemoveButton(condition));
    }

    whisper(playerId, t('ui.title.removalMenu', locale), lines);
  }

  /**
   * Shows the current configuration.
   *
   * @param {string} playerId GM player id.
   * @returns {void}
   */
  function showConfig(playerId) {
    const config = getConfig();
    const locale = config.language;
    const markerRows = [];
    for (const condition of STANDARD_CONDITIONS) {
      markerRows.push([
        escapeHtml(condition),
        code(config.markers[condition] || '(none)'),
      ]);
    }

    whisper(playerId, t('ui.title.config', locale), [
      heading(t('ui.heading.settings', locale)),
      htmlTable(
        [t('ui.col.option', locale), t('ui.col.value', locale)],
        [
          ['useMarkers', code(String(config.useMarkers))],
          ['useIcons', code(String(config.useIcons))],
          ['subjectPromptBypass', code(String(config.subjectPromptBypass))],
          ['healthBar', code(config.healthBar)],
          ['language', code(config.language)],
        ],
      ),
      sectionSpacer(),
      heading(t('ui.heading.markerMappings', locale)),
      htmlTable(
        [t('ui.col.condition', locale), t('ui.col.marker', locale)],
        markerRows,
      ),
    ]);
  }

  /**
   * Shows command help.
   *
   * @param {string} playerId Player id.
   * @returns {void}
   */
  function showHelp(playerId) {
    const locale = getConfig().language;
    const commandRows = /** @type {string[][]} */ (
      tRaw('handout.commandsRef.rows', locale) || []
    );
    const quickStartRows = /** @type {string[][]} */ (
      tRaw('handout.quickStart.rows', locale) || []
    );
    const configRows = /** @type {string[][]} */ (
      tRaw('handout.configuration.rows', locale) || []
    );

    const toTableRows = (rows) =>
      rows.map(([a, b]) => [code(a), escapeHtml(b)]);

    const configTableRows = configRows.map(([option, values, description]) => [
      code(option),
      escapeHtml(values),
      escapeHtml(description),
    ]);

    whisper(playerId, t('ui.title.help', locale), [
      heading(t('ui.heading.info', locale)),
      htmlTable(
        [t('ui.col.item', locale), t('ui.col.details', locale)],
        [
          [escapeHtml(SCRIPT_NAME), code(SCRIPT_VERSION)],
          [escapeHtml(HANDOUT_NAME), escapeHtml(t('handout.subtitle', locale))],
          [
            escapeHtml(t('handout.overview.heading', locale)),
            escapeHtml(t('handout.overview.body', locale)),
          ],
        ],
      ),
      sectionSpacer(),
      heading(t('ui.heading.commandOptions', locale)),
      htmlTable(
        [
          t('handout.commandsRef.colFlag', locale),
          t('handout.commandsRef.colDesc', locale),
        ],
        toTableRows(commandRows),
      ),
      sectionSpacer(),
      heading(t('handout.configuration.heading', locale)),
      htmlTable(
        [
          t('handout.configuration.colOption', locale),
          t('handout.configuration.colValues', locale),
          t('handout.configuration.colDesc', locale),
        ],
        configTableRows,
      ),
      sectionSpacer(),
      heading(t('ui.heading.examples', locale)),
      htmlTable(
        [
          t('handout.quickStart.colCommand', locale),
          t('handout.quickStart.colDesc', locale),
        ],
        toTableRows(quickStartRows),
      ),
      sectionSpacer(),
    ]);
  }

  /**
   * Whispers application details to the GM.
   *
   * @param {string} playerId GM player id.
   * @param {object} condition Active condition record.
   * @param {boolean} appended Whether the row was appended.
   * @param {string} markerNotice Marker notice.
   * @param {string} [locale] Output locale.
   * @returns {void}
   */
  function whisperApplySummary(
    playerId,
    condition,
    appended,
    markerNotice,
    locale,
  ) {
    whisper(playerId, t('ui.title.applied', locale), [
      heading(t('ui.heading.result', locale)),
      htmlTable(
        [t('ui.col.field', locale), t('ui.col.value', locale)],
        [
          [
            t('ui.removal.conditionField', locale),
            escapeHtml(condition.displayText),
          ],
          [
            t('ui.title.turnOrder', locale),
            appended
              ? t('ui.apply.turnAppended', locale)
              : t('ui.apply.turnInserted', locale),
          ],
          [t('ui.removal.markerField', locale), escapeHtml(markerNotice)],
          ['Duration', escapeHtml(formatDuration(condition.duration, locale))],
        ],
      ),
    ]);
  }

  /**
   * Formats a stored duration for chat.
   *
   * @param {object} duration Stored duration.
   * @param {string} [locale] Output locale.
   * @returns {string} Human-readable duration.
   */
  function formatDuration(duration, locale) {
    if (!duration || duration.type === DURATION_UNTIL_REMOVED) {
      return t('ui.dur.untilRemovedDisplay', locale);
    }

    return t('ui.dur.turnsRemaining', locale, { n: duration.remaining });
  }

  /**
   * Whispers all GMs a prompt to selectively remove conditions when a token hits 0 HP.
   * For player tokens, does nothing when there are no active conditions.
   * For NPC tokens, always sends the turn order removal prompt even with no conditions.
   *
   * @param {object} token Roll20 graphic object.
   * @param {string} targetName Token display name.
   * @param {boolean} isPlayer Whether the token is a player-controlled token.
   * @returns {void}
   */
  function promptZeroHpConditionRemoval(token, targetName, isPlayer) {
    const locale = getConfig().language;
    const tokenId = token.id;
    const active = getActiveByTarget(tokenId);
    const title = t('ui.title.zeroHp', locale, { name: targetName });

    if (active.length === 0) {
      if (isPlayer) {
        return;
      }
      whisperGms(title, [
        t('ui.msg.zeroHpNoConditions', locale, { name: targetName }),
        buildButton(
          t('ui.msg.removeFromTurnOrder', locale),
          `${COMMAND} --zero-hp-remove-from-turn ${tokenId}`,
        ),
      ]);
      return;
    }

    const lines = [
      t('ui.msg.zeroHpConditions', locale, { name: targetName }),
      ...active.map((condition) => buildRemoveButton(condition)),
      buildButton(
        t('ui.msg.removeAllBtn', locale, { name: targetName }),
        `${COMMAND} --zero-hp-remove-all ${tokenId}`,
      ),
    ];

    if (isPlayer) {
      lines.push(
        buildButton(
          t('ui.msg.markIncapacitated', locale),
          `${COMMAND} --zero-hp-incapacitated ${tokenId}`,
        ),
      );
    } else {
      lines.push(
        buildButton(
          t('ui.msg.removeFromTurnOrder', locale),
          `${COMMAND} --zero-hp-remove-from-turn ${tokenId}`,
        ),
      );
    }

    whisperGms(title, lines);
  }

  /**
   * Removes expired duration conditions.
   *
   * @param {string} playerId GM player id.
   * @param {object[]} expired Expired conditions.
   * @returns {void}
   */
  function removeExpiredConditions(playerId, expired) {
    const locale = getConfig().language;
    for (const condition of expired) {
      removeConditionById(condition.id, {
        playerId,
        reason: t('ui.msg.durationExpired', locale),
        publicAnnounce: true,
        whisperResult: true,
        locale,
      });
    }
  }

  /**
   * Removes all active conditions for a token, used when the GM clicks "Remove All" at 0 HP.
   *
   * @param {string} playerId GM player id.
   * @param {string} tokenId Target token id.
   * @returns {void}
   */
  function handleZeroHpRemoveAll(playerId, tokenId) {
    const locale = getConfig().language;
    const token = getGraphicToken(tokenId);
    const targetName = token ? getTokenName(token) : tokenId;
    const active = getActiveByTarget(tokenId);
    if (active.length === 0) {
      whisper(playerId, t('ui.title.noConditions', locale), [
        t('ui.msg.noActiveConditions', locale, { name: targetName }),
      ]);
      return;
    }
    for (const condition of active) {
      removeConditionById(condition.id, {
        playerId,
        reason: t('ui.msg.reachedZeroHp', locale, { name: targetName }),
        publicAnnounce: true,
        whisperResult: true,
        locale,
      });
    }
  }

  /**
   * Removes an NPC token's own row from the turn order when it hits 0 HP,
   * then prompts all GMs to optionally move the token to the map layer.
   *
   * @param {string} playerId GM player id.
   * @param {string} tokenId Target token id.
   * @returns {void}
   */
  function handleZeroHpRemoveFromTurnOrder(playerId, tokenId) {
    const locale = getConfig().language;
    const token = getGraphicToken(tokenId);
    const targetName = token ? getTokenName(token) : tokenId;
    const removed = removeTokenRow(tokenId);
    const message = removed
      ? t('ui.msg.tokenRemovedFromTurn', locale, { name: targetName })
      : t('ui.msg.tokenNotInTurn', locale, { name: targetName });
    whisper(playerId, t('ui.title.turnOrder', locale), [message]);

    if (token) {
      whisperGms(t('ui.title.moveToken', locale, { name: targetName }), [
        t('ui.msg.moveTokenPrompt', locale, { name: targetName }),
        buildButton(
          t('ui.msg.moveTokenBtn', locale, { name: targetName }),
          `${COMMAND} --zero-hp-to-map ${tokenId}`,
        ),
      ]);
    }
  }

  /**
   * Moves a token to the map layer so it stays visible but is no longer interactive.
   *
   * @param {string} playerId GM player id.
   * @param {string} tokenId Target token id.
   * @returns {void}
   */
  function handleZeroHpToMapLayer(playerId, tokenId) {
    const locale = getConfig().language;
    const token = getGraphicToken(tokenId);
    if (!token) {
      whisperError(playerId, t('ui.msg.tokenNotFound', locale));
      return;
    }

    const targetName = getTokenName(token);
    token.set('layer', 'map');
    whisper(playerId, t('ui.title.tokenMoved', locale), [
      t('ui.msg.tokenMoved', locale, { name: targetName }),
    ]);
  }

  /**
   * Removes all active conditions for a player token marked as dead.
   *
   * @param {string} playerId GM player id.
   * @param {string} tokenId Target token id.
   * @returns {void}
   */
  function handleZeroHpDead(playerId, tokenId) {
    const locale = getConfig().language;
    const token = getGraphicToken(tokenId);
    const targetName = token ? getTokenName(token) : tokenId;
    const active = getActiveByTarget(tokenId);
    if (active.length === 0) {
      whisper(playerId, t('ui.title.markedDead', locale), [
        t('ui.msg.deadNoConditions', locale, { name: targetName }),
      ]);
      return;
    }
    for (const condition of active) {
      removeConditionById(condition.id, {
        playerId,
        reason: t('ui.msg.markedAsDead', locale, { name: targetName }),
        publicAnnounce: true,
        whisperResult: true,
        locale,
      });
    }
  }

  /**
   * Applies the Incapacitated condition to a player token at 0 HP.
   *
   * @param {string} playerId GM player id.
   * @param {string} tokenId Target token id.
   * @returns {void}
   */
  function handleZeroHpIncapacitated(playerId, tokenId) {
    const config = getConfig();
    const locale = config.language;
    const token = getGraphicToken(tokenId);
    if (!token) {
      whisperError(playerId, t('ui.msg.tokenNotFound', locale));
      return;
    }

    const tokenName = getTokenName(token);

    if (isDuplicate(tokenId, '', '', tokenId, 'Incapacitated', '')) {
      whisperWarning(
        playerId,
        t('ui.msg.alreadyIncapacitated', locale, { name: tokenName }),
      );
      return;
    }

    const validation = {
      sourceToken: token,
      subjectToken: null,
      targetToken: token,
      condition: 'Incapacitated',
      customText: '',
    };
    const duration = { type: DURATION_UNTIL_REMOVED };
    const condition = buildConditionRecord(
      validation,
      config,
      duration,
      locale,
    );
    const markerNotice = applyConfiguredMarker(
      token,
      condition,
      config,
      locale,
    );
    addActiveCondition(condition);
    const insertResult = insertConditionRow(condition);

    announceHtml(buildApplyMessage(condition, locale));
    whisperApplySummary(
      playerId,
      condition,
      insertResult.appended,
      markerNotice,
      locale,
    );
  }

  /**
   * Reinstalls the ConditionTrackerWizard macro for all current GM players.
   *
   * @param {string} playerId GM player id.
   * @returns {void}
   */
  function handleReinstallMacro(playerId) {
    const locale = getConfig().language;
    installMacro();
    whisper(
      playerId,
      t('ui.title.macroReinstalled', locale),
      t('ui.msg.macroReinstalled', locale, {
        wizard: MACRO_NAME,
        multiTarget: MACRO_NAME_MULTI_TARGET,
      }),
    );
  }

  /**
   * Reinstalls the localized help handout for the current configured language.
   *
   * @param {string} playerId GM player id.
   * @returns {void}
   */
  function handleReinstallHandout(playerId) {
    const locale = getConfig().language;
    installHandout(locale);
    whisper(
      playerId,
      t('ui.title.handoutReinstalled', locale),
      t('ui.msg.handoutReinstalled', locale, { handout: HANDOUT_NAME }),
    );
  }

  /**
   * Initializes state, macros, and runtime turn bookkeeping.
   *
   * @returns {void}
   */
  function checkInstall() {
    ensureState();
    applyGlobalConfig();
    migrateTurnOrderRows();
    updateTurnRuntime(getCurrentTurnTokenId(), getTurnSignature());
    installMacro();
    installHandout(getConfig().language);
    log(
      `-=> ${SCRIPT_NAME} v${SCRIPT_VERSION} [Updated: ${SCRIPT_LAST_UPDATED}] <=-`,
    );

    const locale = getConfig().language;
    const gmIds = getGmPlayerIds();
    for (const gmId of gmIds) {
      whisper(
        gmId,
        t('ui.title.scriptReady', locale),
        t('ui.msg.scriptReady', locale, {
          name: SCRIPT_NAME,
          version: SCRIPT_VERSION,
        }),
      );
      showMenu(gmId);
    }
  }

  /**
   * Handles token changes for HP-zero cleanup.
   *
   * @param {Graphic} token Changed token.
   * @param {object} previous Previous token attributes.
   * @returns {void}
   */
  function handleTokenChange(token, previous) {
    try {
      if (previous.statusmarkers !== undefined) {
        const prevMarkers = toText(previous.statusmarkers)
          .split(TOKEN_MARKER_SEPARATOR)
          .map((s) => s.trim())
          .filter(Boolean);
        const currMarkers = getTokenMarkers(token);
        if (
          containsMarker(currMarkers, 'dead') &&
          !containsMarker(prevMarkers, 'dead')
        ) {
          const targetName = getTokenName(token);
          promptZeroHpConditionRemoval(token, targetName, isPlayerToken(token));
          return;
        }
      }

      const config = getConfig();
      const bar = config.healthBar;
      const previousValue = Number(previous[bar]);
      const currentValue = Number(token.get(bar));

      if (!Number.isFinite(currentValue) || currentValue > 0) {
        return;
      }

      if (Number.isFinite(previousValue) && previousValue <= 0) {
        return;
      }

      const targetName = getTokenName(token);
      promptZeroHpConditionRemoval(token, targetName, isPlayerToken(token));
    } catch (error) {
      log(`${SCRIPT_NAME} HP cleanup error: ${error.message}`);
    }
  }

  /**
   * Removes conditions bound to a deleted token.
   *
   * Prunes conditions where the deleted token was either source or target,
   * removes matching turn-order rows in a single pass, and clears markers from
   * surviving target tokens when they are no longer needed.
   *
   * @param {Graphic} token Deleted token.
   * @returns {void}
   */
  function handleTokenDestroy(token) {
    try {
      const tokenId = token?.id || '';
      if (!tokenId) {
        return;
      }

      const { matched: removed, unmatched: kept } = partitionActiveConditions(
        (condition) =>
          condition.sourceTokenId === tokenId ||
          condition.targetTokenId === tokenId,
      );

      if (removed.length === 0) {
        return;
      }

      setActiveConditions(kept);
      removeConditionRows(removed.map((condition) => condition.id));
      for (const condition of removed) {
        removeMarkerIfUnused(condition);
      }
    } catch (error) {
      log(`${SCRIPT_NAME} token cleanup error: ${error.message}`);
    }
  }

  /**
   * Handles Turn Tracker changes for duration expiration.
   *
   * @returns {void}
   */
  function handleTurnOrderChange() {
    try {
      const trackerState = ensureState();
      const currentSignature = getTurnSignature();
      if (currentSignature === trackerState.runtime.previousTurnSignature) {
        return;
      }

      const previousFirstTurnId = trackerState.runtime.previousFirstTurnId;
      const currentFirstTurnId = getCurrentTurnTokenId();
      updateTurnRuntime(currentFirstTurnId, currentSignature);
      reconcileActiveConditionsWithTurnOrder();

      if (!previousFirstTurnId || previousFirstTurnId === currentFirstTurnId) {
        return;
      }

      const { expired, decremented } =
        collectExpiredConditions(previousFirstTurnId);
      for (const condition of decremented) {
        updateConditionRow(condition);
      }
      removeExpiredConditions(getPrimaryGmId(), expired);
    } catch (error) {
      log(`${SCRIPT_NAME} duration error: ${error.message}`);
    }
  }

  /**
   * Removes active conditions whose custom Turn Tracker rows no longer exist.
   *
   * @returns {number} Number of removed state entries.
   */
  function reconcileActiveConditionsWithTurnOrder() {
    const rowConditionIds = getConditionRowIdSet();
    const { matched: kept, unmatched: removed } = partitionActiveConditions(
      (condition) => rowConditionIds.has(condition.id),
    );

    if (removed.length === 0) {
      return 0;
    }

    setActiveConditions(kept);
    for (const condition of removed) {
      removeMarkerIfUnused(condition);
    }

    return removed.length;
  }

  /**
   * Collects conditions that expired or decremented when an anchor token turn ended.
   *
   * @param {string} endedTurnTokenId Token id whose turn ended.
   * @returns {{ expired: object[], decremented: object[] }} Expired and decremented condition records.
   */
  function collectExpiredConditions(endedTurnTokenId) {
    const expired = [];
    const decremented = [];

    for (const condition of getActiveConditions()) {
      const anchored = isAnchoredTo(condition, endedTurnTokenId);
      if (decrementDuration(condition, endedTurnTokenId)) {
        expired.push(condition);
      } else if (anchored) {
        decremented.push(condition);
      }
    }

    return { expired, decremented };
  }

  /**
   * Returns true when a condition's duration is anchored to the given token.
   *
   * @param {object} condition Active condition record.
   * @param {string} tokenId Token id to check against.
   * @returns {boolean} True when anchored.
   */
  function isAnchoredTo(condition, tokenId) {
    const d = condition.duration;
    return d?.anchor === tokenId;
  }

  /**
   * Returns a GM player id for automated whispers.
   *
   * @returns {string} GM player id or an empty string.
   */
  function getPrimaryGmId() {
    return getGmPlayerIds()[0] || '';
  }

  /**
   * Registers Roll20 event handlers.
   *
   * @returns {void}
   */
  function registerEventHandlers() {
    on('ready', checkInstall);
    on('chat:message', handleInput);
    on('change:graphic', handleTokenChange);
    on('destroy:graphic', handleTokenDestroy);
    on('change:campaign:turnorder', handleTurnOrderChange);
  }

  registerEventHandlers();
})();
