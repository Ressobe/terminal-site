const outputElement: HTMLElement = document.querySelector("#Output");
const inputElement: HTMLInputElement = document.querySelector("#Input");

const sucessColor: string = "#98c379";
const errorColor: string = "#e06c75";

const createPrompt = (command: string, error: boolean) => {
  const prompt: HTMLLabelElement = document.createElement("label");
  const newSpan: HTMLSpanElement = document.createElement("span");
  const newDiv: HTMLDivElement = document.createElement("div");

  const textPrompt = "visitor@ressobe.com:~$";
  const textCommand = command;

  if (error) {
    newSpan.style.color = errorColor;
  } else {
    newSpan.style.color = sucessColor;
  }

  newSpan.classList.add("text");

  newSpan.innerHTML = textCommand;
  prompt.className = "prompt";
  prompt.setAttribute("for", "line");
  prompt.innerHTML = textPrompt;

  newDiv.appendChild(prompt);
  newDiv.appendChild(newSpan);

  outputElement.appendChild(newDiv);
};

const output = (textNode: string) => {
  const newDiv: HTMLDivElement = document.createElement("div");
  newDiv.className = "row";
  newDiv.innerHTML = textNode;
  outputElement.appendChild(newDiv);
};

const getLines = (textArray: string[]) => {
  output("<br>");
  for (let line in textArray) {
    output(textArray[line]);
  }
  output("<br>");
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
      getLines(about);
      break;
    case "repo":
      getLines(loading);
      openLink(project_repo);
      break;
    case "github":
      getLines(loading);
      openLink(github);
      break;
    case "youtube":
      getLines(loading);
      openLink(youtube);
      break;
    case "neofetch":
      getLines(software);
      break;
    case "banner":
      getLines(banner);
      break;
    case "time":
      getLines(getTime());
      break;
    case "clear":
      clear();
      break;
    default:
      getLines(error(text));
  }
};

window.addEventListener("load", () => {
  createPrompt("banner", false);
  getLines(banner);
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
      createPrompt(inputElement.value, false);
    } else {
      createPrompt(inputElement.value, true);
    }

    commands(inputElement.value);
    inputElement.value = "";
    inputElement.scrollIntoView({ behavior: "smooth" });
  }
});
