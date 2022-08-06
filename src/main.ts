import { Rows } from "./types/types";
import {
  left_side,
  close_div,
  close_right,
  banner,
  about,
  software,
  help,
  github,
  project_repo,
  youtube,
  loading,
} from "./commands-content.js";
import { renderPromptWithCommand, renderRow } from "./helpers/render-helper.js";

const outputElement: HTMLDivElement = document.querySelector("#Output");
const inputElement: HTMLInputElement = document.querySelector("#Input");
const sucessColor: string = "#98c379";
const errorColor: string = "#e06c75";

const commandsArray: string[] = [
  "help",
  "about",
  "repo",
  "github",
  "youtube",
  "neofetch",
  "banner",
  "time",
  "clear",
];

const getOneLineRender = (textArray: string[]) => {
  renderRow("<br>", outputElement);
  for (let line in textArray) {
    renderRow(textArray[line], outputElement);
  }
  renderRow("<br>", outputElement);
};

const getLinesRender = (row: Rows[]) => {
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
  let minutes = `${actualDate.getMinutes()}`;
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  return [`${actualDate.getHours()}:${minutes} ⏰`];
};

const error = (text: string) => {
  return ['<span class="red">' + text + "</span>" + ": command not found"];
};

const commands = (text: string) => {
  switch (text) {
    case "help":
      getLinesRender(help);
      break;
    case "about":
      getOneLineRender(about);
      break;
    case "repo":
      getOneLineRender(loading);
      openLink(project_repo);
      break;
    case "github":
      getOneLineRender(loading);
      openLink(github);
      break;
    case "youtube":
      getOneLineRender(loading);
      openLink(youtube);
      break;
    case "neofetch":
      getLinesRender(software);
      break;
    case "banner":
      getOneLineRender(banner);
      break;
    case "time":
      getOneLineRender(getTime());
      break;
    case "clear":
      clear();
      break;
    default:
      getOneLineRender(error(text));
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
  getOneLineRender(banner);
});

inputElement.addEventListener("keyup", () => {
  if (commandsArray.includes(inputElement.value)) {
    inputElement.style.color = sucessColor;
  } else {
    inputElement.style.color = errorColor;
  }
});

inputElement.addEventListener("keypress", (event) => {
  if (inputElement.value !== "" && event.key === "Enter") {
    if (commandsArray.includes(inputElement.value)) {
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
