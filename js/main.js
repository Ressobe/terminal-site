const outputElement = document.querySelector("#Output");
const inputElement = document.querySelector("#Input");
var green = "#98c379";
var red = "#e06c75";

window.addEventListener("load", () => {
  createPrompt("banner");
  getLines(banner);
});

inputElement.addEventListener("keyup", () => {
  if (commandsArray.includes(inputElement.value)) {
    inputElement.style.color = green;
  } else {
    inputElement.style.color = red;
  }
});

inputElement.addEventListener("keypress", (event) => {
  if (inputElement.value != "" && event.key === "Enter") {
    if (commandsArray.includes(inputElement.value)) {
      createPrompt(inputElement.value, false);
    } else {
      createPrompt(inputElement.value, true);
    }

    commands(inputElement.value);
    inputElement.value = "";
    inputElement.scrollIntoView({ behavior: "smooth" });
  }
});

function commands(text) {
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
}

function getLines(textArray) {
  output("<br>");
  for (let line in textArray) {
    output(textArray[line]);
  }
  output("<br>");
}

function output(textNode) {
  const newDiv = document.createElement("div");
  newDiv.className = "row";
  newDiv.innerHTML = textNode;
  outputElement.appendChild(newDiv);
}

function createPrompt(command, error) {
  const prompt = document.createElement("label");
  const textNodePrompt = document.createTextNode("visitor@ressobe.com:~$");
  const newSpan = document.createElement("span");
  const textNodeCommand = document.createTextNode(command);
  const newDiv = document.createElement("div");

  newSpan.className = "red";

  if (!error) {
    newSpan.className = "green";
  }

  newSpan.classList.add("text");

  newSpan.appendChild(textNodeCommand);
  prompt.className = "prompt";
  prompt.htmlFor = "line";
  prompt.appendChild(textNodePrompt);

  newDiv.appendChild(prompt);
  newDiv.appendChild(newSpan);

  outputElement.appendChild(newDiv);
}

function clear() {
  while (outputElement.hasChildNodes()) {
    outputElement.removeChild(outputElement.firstChild);
  }
}

function openLink(link) {
  setTimeout(function () {
    window.open(link);
  }, 1500);
}

function getTime() {
  const actualDate = new Date();
  return [`${actualDate.getHours()}:${actualDate.getMinutes()} ⏰`];
}

function error(text) {
  return ['<span class="red">' + text + "</span>" + ": command not found"];
}
