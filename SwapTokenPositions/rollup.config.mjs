import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "script.json"), "utf8"),
);
const buildTimestamp = new Date().toISOString();
const scriptName = scriptJson.name;
const scriptFile = scriptJson.script;
const buildVersion = scriptJson.version;

const banner = [
  "/**",
  " * NOTE: GENERATED FILE - DO NOT EDIT DIRECTLY.",
  " * NOTE: Source files live under src/ and are bundled with `npm run build`.",
  " * ------------------------------------------------",
  ` * Name: ${scriptName}`,
  ` * Script: ${scriptFile}`,
  ` * Built: ${buildTimestamp}`,
  " */",
].join("\n");

export default {
  input: path.join(__dirname, "src", "index.js"),
  plugins: [
    {
      name: "inject-build-metadata",
      transform(code, id) {
        if (!id.endsWith(path.join("src", "constants.js"))) {
          return null;
        }

        return {
          code: code
            .replaceAll("__SCRIPT_NAME__", scriptName)
            .replaceAll("__SCRIPT_FILE__", scriptFile)
            .replaceAll("__BUILD_VERSION__", buildVersion)
            .replaceAll("__BUILD_DATE__", buildTimestamp),
          map: null,
        };
      },
    },
  ],
  output: [
    {
      file: path.join(__dirname, `${scriptJson.name}.js`),
      format: "iife",
      banner,
    },
    {
      file: path.join(__dirname, scriptJson.version, `${scriptJson.name}.js`),
      format: "iife",
      banner,
    },
  ],
};
