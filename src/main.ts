import { promises } from "node:fs";
import { ColorScheme } from "./shared";
import { getPythonColors } from "./token-colors/languages/python";
import { getShellColors } from "./token-colors/languages/shell";
import { getCColors } from "./token-colors/languages/c";
import { getMakefileColors } from "./token-colors/languages/makefile";
import { getJavaColors } from "./token-colors/languages/java";
import { getLispColors } from "./token-colors/languages/lisp";
import { getMarkUpDownColors } from "./token-colors/languages/mark-up-down";
import { getJsonColors } from "./token-colors/languages/json";
import { getCSSColors } from "./token-colors/languages/css";
import { getXMLHTMLColors } from "./token-colors/languages/xml-html";
import { getJSTSColors } from "./token-colors/languages/js-ts";
import { getGolangColors } from "./token-colors/languages/golang";
import { getCucumberColors } from "./token-colors/languages/cucumber";
import { getReasonMLColors } from "./token-colors/languages/reason-ml";
import { getPowershellColors } from "./token-colors/languages/powershell";
import { getLatexColors } from "./token-colors/languages/latex";
import { getBaseTokenColors } from "./token-colors/base";
import { getSemanticColors } from "./semantic-colors";
import { getBaseColors } from "./colors/base";
import { getJupyterNotebookColors } from "./colors/extensions/jupyter-notebook";
import { getGitLensColors } from "./colors/extensions/gitlens";

const schemes: ColorScheme[] = ["dark", "light"];

const getName = (scheme: ColorScheme) =>
  `Orange ${scheme[0].toUpperCase()}${scheme.slice(1)}`;

const generateJson = (scheme: ColorScheme) => {
  return {
    $schema: "vscode://schemas/color-theme",
    name: getName(scheme),
    type: scheme,
    semanticHighlighting: true,
    tokenColors: [
      ...getBaseTokenColors(scheme),
      ...getPythonColors(scheme),
      ...getShellColors(scheme),
      ...getCColors(scheme),
      ...getMakefileColors(scheme),
      ...getJavaColors(scheme),
      ...getLispColors(scheme),
      ...getMarkUpDownColors(scheme),
      ...getJsonColors(scheme),
      ...getCSSColors(scheme),
      ...getXMLHTMLColors(scheme),
      ...getJSTSColors(scheme),
      ...getGolangColors(scheme),
      ...getCucumberColors(scheme),
      ...getReasonMLColors(scheme),
      ...getPowershellColors(scheme),
      ...getLatexColors(scheme),
    ],
    colors: {
      ...getBaseColors(scheme),
      ...getJupyterNotebookColors(scheme),
      ...getGitLensColors(scheme),
    },
    semanticTokenColors: getSemanticColors(scheme),
  };
};

const run = async () => {
  await Promise.all(
    schemes.map(async (scheme) =>
      promises.writeFile(
        `./themes/orange-${scheme}.json`,
        JSON.stringify(generateJson(scheme), undefined, "\t"),
      ),
    ),
  );
  console.log("Themes generated successfully!\n");
};

run();
