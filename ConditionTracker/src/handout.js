import {
  HANDOUT_NAME,
  LOGO_URL_512,
  SCRIPT_NAME,
  SCRIPT_VERSION,
  CONDITION_DATA,
  DEFAULT_MARKERS,
} from "./constants.js";
import { t, tRaw, getLocale } from "./i18n.js";
import { escapeHtml, queryObjects } from "./utils.js";

const STYLE = {
  outer:
    "font-family:'Georgia',serif;background-color:#0A0A12;color:#E6DFFF;padding:24px;border-radius:8px;",
  header:
    "background:linear-gradient(135deg,#5B21B6 0%,#FF4D6D 100%);padding:18px 24px;border-radius:6px;margin-bottom:24px;text-align:center;",
  h1: "color:#FFFFFF;margin:0;font-size:1.6em;font-family:'Georgia',serif;letter-spacing:1px;",
  subtitle:
    "color:#E9D5FF;margin:6px 0 0;font-size:0.85em;letter-spacing:0.5px;",
  h2: "color:#FF4D6D;font-family:'Georgia',serif;border-bottom:1px solid #5B21B6;padding-bottom:6px;margin-top:24px;",
  h2first:
    "color:#FF4D6D;font-family:'Georgia',serif;border-bottom:1px solid #5B21B6;padding-bottom:6px;margin-top:0;",
  body: "color:#B8AFCF;line-height:1.6;margin-top:0;",
  intro: "color:#B8AFCF;font-size:0.9em;margin-top:0;",
  table:
    "width:100%;border-collapse:collapse;font-size:0.9em;margin-bottom:8px;",
  tableSmall: "width:100%;border-collapse:collapse;font-size:0.85em;",
  thRow: "background-color:#1E40AF;",
  th: "padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;",
  thW42:
    "padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;width:42%;",
  thW30:
    "padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;width:30%;",
  thW50:
    "padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;width:50%;",
  thW40:
    "padding:7px 10px;text-align:left;color:#E9D5FF;font-weight:bold;width:40%;",
  tdA: "padding:7px 10px;background-color:#12122a;border-radius:4px;font-family:monospace;color:#E9D5FF;white-space:nowrap;width:45%;",
  tdB: "padding:7px 10px;color:#B8AFCF;",
  tdEven:
    "padding:6px 10px;font-family:monospace;color:#E9D5FF;background-color:#12122a;",
  tdOdd:
    "padding:6px 10px;font-family:monospace;color:#E9D5FF;background-color:#0e0e22;",
  tdDescEven: "padding:6px 10px;color:#B8AFCF;background-color:#12122a;",
  tdDescOdd: "padding:6px 10px;color:#B8AFCF;background-color:#0e0e22;",
  tdCondEven: "padding:7px 10px;color:#E6DFFF;background-color:#12122a;",
  tdCondOdd: "padding:7px 10px;color:#E6DFFF;background-color:#0e0e22;",
  spacer: "padding:3px;",
  footer:
    "margin-top:28px;padding-top:14px;border-top:1px solid #5B21B6;text-align:center;color:#B8AFCF;font-size:0.8em;",
  footerP: "margin:0;line-height:1.8;",
  code: "background-color:#1a1a2e;padding:1px 4px;border-radius:2px;",
};

function row(even) {
  return even ? "#12122a" : "#0e0e22";
}

function buildTable(headers, rows, widths) {
  const thCells = headers
    .map((h, i) => {
      const w = widths?.[i] ? `width:${widths[i]};` : "";
      return `<th style="${STYLE.th}${w}">${h}</th>`;
    })
    .join("");
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
        .join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");
  return `<table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}">${thCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
}

function buildConditionTable(colLabel) {
  const standardConditions = [
    "Blinded",
    "Charmed",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious",
  ];
  const left = standardConditions.slice(0, 7);
  const right = standardConditions.slice(7);
  const maxRows = Math.max(left.length, right.length);
  const rows = [];
  for (let i = 0; i < maxRows; i++) {
    const l = left[i] ? `${CONDITION_DATA[left[i]].emoji} ${left[i]}` : "";
    const r = right[i] ? `${CONDITION_DATA[right[i]].emoji} ${right[i]}` : "";
    const bg = row(i % 2 === 0);
    rows.push(
      `<tr><td style="padding:7px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(l)}</td>` +
        `<td style="padding:7px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(r)}</td></tr>`,
    );
  }

  const thStyle = `${STYLE.th}width:50%;`;
  const safeLabel = escapeHtml(colLabel);
  return `<table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}"><th style="${thStyle}">${safeLabel}</th><th style="${thStyle}">${safeLabel}</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function buildMarkersTable(colCondition, colMarker) {
  const entries = Object.entries(DEFAULT_MARKERS);
  const rows = entries
    .map(([condition, marker], i) => {
      const data = CONDITION_DATA[condition];
      const emoji = data ? data.emoji : "";
      const bg = row(i % 2 === 0);
      return (
        `<tr>` +
        `<td style="padding:6px 10px;color:#E6DFFF;background-color:${bg};">${escapeHtml(emoji)} ${escapeHtml(condition)}</td>` +
        `<td style="padding:6px 10px;font-family:monospace;color:#B8AFCF;background-color:${bg};">${escapeHtml(marker)}</td>` +
        `</tr>`
      );
    })
    .join("");
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
    .join("");
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
    <h2 style="${STYLE.h2first}">${hs("overview.heading")}</h2>
    <p style="${STYLE.body}">${hs("overview.body")}</p>`;

  const quickStart = `
    <h2 style="${STYLE.h2}">${hs("quickStart.heading")}</h2>
    ${buildQuickStartTable(hs("quickStart.colCommand"), hs("quickStart.colDesc"), hr("quickStart.rows"))}`;

  const commandsRef = (() => {
    const rows = hr("commandsRef.rows");
    return `<h2 style="${STYLE.h2}">${hs("commandsRef.heading")}</h2>
    ${buildTable([hs("commandsRef.colFlag"), hs("commandsRef.colDesc")], rows, ["42%"])}`;
  })();

  const standardConds = `
    <h2 style="${STYLE.h2}">${hs("standardConditions.heading")}</h2>
    ${buildConditionTable(hs("standardConditions.colCondition"))}`;

  const customEffects = (() => {
    const rows = hr("customEffects.rows");
    return `<h2 style="${STYLE.h2}">${hs("customEffects.heading")}</h2>
    ${buildTable([hs("customEffects.colType"), hs("customEffects.colNotes")], rows, ["30%"])}`;
  })();

  const durationOpts = (() => {
    const rows = hr("durationOptions.rows");
    return `<h2 style="${STYLE.h2}">${hs("durationOptions.heading")}</h2>
    <p style="${STYLE.intro}">${hs("durationOptions.intro")}</p>
    ${buildTable([hs("durationOptions.colOption"), hs("durationOptions.colBehaviour")], rows, ["40%"])}`;
  })();

  const config = (() => {
    const rows = hr("configuration.rows");
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
      .join("");
    return (
      `<h2 style="${STYLE.h2}">${hs("configuration.heading")}</h2>
    <p style="${STYLE.intro}">${hs("configuration.intro")}</p>
    <table style="${STYLE.tableSmall}"><thead><tr style="${STYLE.thRow}">` +
      `<th style="${STYLE.th}width:30%;">${hs("configuration.colOption")}</th>` +
      `<th style="${STYLE.th}width:25%;">${hs("configuration.colValues")}</th>` +
      `<th style="${STYLE.th}">${hs("configuration.colDesc")}</th>` +
      `</tr></thead><tbody>${threeCol}</tbody></table>`
    );
  })();

  const markers = `
    <h2 style="${STYLE.h2}">${hs("defaultMarkers.heading")}</h2>
    ${buildMarkersTable(hs("defaultMarkers.colCondition"), hs("defaultMarkers.colMarker"))}`;

  const footer = `
    <div style="${STYLE.footer}">
      <p style="${STYLE.footerP}">${SCRIPT_NAME} ${version} &nbsp;•&nbsp; ${hs("footerNote")}</p>
    </div>`;

  return `<div style="${STYLE.outer}">
    <div style="${STYLE.header}">
      <img src="${LOGO_URL_512}" style="max-width:220px;height:auto;margin-bottom:10px;display:block;margin-left:auto;margin-right:auto;" alt="${SCRIPT_NAME} logo" title="${SCRIPT_NAME}" />
      <h1 style="${STYLE.h1}">${SCRIPT_NAME}</h1>
      <p style="${STYLE.subtitle}">${hs("versionLabel")} ${version} &nbsp;•&nbsp; ${hs("subtitle")}</p>
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
export function installHandout(locale) {
  const html = buildHandoutHtml(locale);
  const existing = queryObjects({ _type: "handout", name: HANDOUT_NAME });

  if (existing.length === 0) {
    const handout = createObj("handout", {
      name: HANDOUT_NAME,
      inplayerjournals: "",
      controlledby: "",
    });
    handout.set("notes", html);
    log(`${SCRIPT_NAME}: Help handout created.`);
    return;
  }

  const [primary, ...duplicates] = existing;
  primary.set("notes", html);
  for (const dup of duplicates) {
    dup.remove();
  }

  const cleanupNote =
    duplicates.length > 0 ? ` Removed ${duplicates.length} duplicate(s).` : "";
  log(`${SCRIPT_NAME}: Help handout updated.${cleanupNote}`);
}
