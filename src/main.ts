import { Rows } from "./types/types";
import { sucessColor, errorColor } from "./themes.js";
import {
  left_side,
  close_div,
  close_right,
  commandsArray,
  banner,
  about,
  software,
  help,
  github,
  project_repo,
  youtube,
  loading,
} from "./commands.js";
import { renderPromptWithCommand, renderRow } from "./helpers/render-helper.js";

const outputElement: HTMLDivElement = document.querySelector("#Output");
const inputElement: HTMLInputElement = document.querySelector("#Input");

const getOneLine = (textArray: string[]) => {
  renderRow("<br>", outputElement);
  for (let line in textArray) {
    renderRow(textArray[line], outputElement);
  }
  renderRow("<br>", outputElement);
};

const getLines = (row: Rows[]) => {
  renderRow("<br>", outputElement);
  row.forEach((element) => {
    renderRow(
      `${left_side} ${element.left_side} ${close_right} ${element.right_side} ${close_div}`,
      outputElement
    );
  });
  renderRow("<br>", outputElement);
};

const clear = () => {
  while (outputElement.hasChildNodes()) {
    outputElement.removeChild(outputElement.firstChild);
  }
};

const openLink = (link: string) => {
  setTimeout(() => {
    window.open(link);
  }, 1500);
};

const getTime = () => {
  const actualDate = new Date();
  return [`${actualDate.getHours()}:${actualDate.getMinutes()} ⏰`];
};

const error = (text: string) => {
  return ['<span class="red">' + text + "</span>" + ": command not found"];
};

const commands = (text: string) => {
  switch (text) {
    case "help":
      getLines(help);
      break;
    case "about":
      getOneLine(about);
      break;
    case "repo":
      getOneLine(loading);
      openLink(project_repo);
      break;
    case "github":
      getOneLine(loading);
      openLink(github);
      break;
    case "youtube":
      getOneLine(loading);
      openLink(youtube);
      break;
    case "neofetch":
      getLines(software);
      break;
    case "banner":
      getOneLine(banner);
      break;
    case "time":
      getOneLine(getTime());
      break;
    case "clear":
      clear();
      break;
    default:
      getOneLine(error(text));
  }
};

window.addEventListener("load", () => {
  renderPromptWithCommand(
    "banner",
    false,
    errorColor,
    sucessColor,
    outputElement
  );
  getOneLine(banner);
});

inputElement.addEventListener("keyup", () => {
  if (commandsArray.indexOf(inputElement.value) != -1) {
    inputElement.style.color = sucessColor;
  } else {
    inputElement.style.color = errorColor;
  }
});

inputElement.addEventListener("keypress", (event) => {
  if (inputElement.value != "" && event.key === "Enter") {
    if (commandsArray.indexOf(inputElement.value) != -1) {
      renderPromptWithCommand(
        inputElement.value,
        false,
        errorColor,
        sucessColor,
        outputElement
      );
    } else {
      renderPromptWithCommand(
        inputElement.value,
        true,
        errorColor,
        sucessColor,
        outputElement
      );
    }
    commands(inputElement.value);
    inputElement.value = "";
    inputElement.scrollIntoView({ behavior: "smooth" });
  }
});
