const input = document.getElementById("in");
var history_of_commands = new Set();
var green = "#98c379";
var red = "#e06c75";

window.addEventListener("load", function () {
  createPrompt("banner");
  getLines(banner);
});

input.addEventListener("keyup", function () {
  if (commandsArray.includes(input.value)) {
    input.style.color = green;
  } else {
    input.style.color = red;
  }
});

input.addEventListener("keypress", function (event) {
  if (input.value != "" && event.key === "Enter") {
    event.preventDefault();

    if (commandsArray.includes(input.value)) {
      createPrompt(input.value, false);
    } else {
      createPrompt(input.value, true);
    }

    commands(input.value);
    history_of_commands.add(input.value);
    input.value = "";
    input.scrollIntoView({ behavior: "smooth" });
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
    case "clear":
      clear();
      break;
    default:
      let error = [
        '<span class="red">' + text + "</span>" + ": command not found",
      ];
      getLines(error);
  }
}

function getLines(x) {
  output("<br>");
  for (let i in x) {
    const textNode = x[i];
    output(textNode);
  }
  output("<br>");
}

function output(textNode) {
  const newDiv = document.createElement("div");
  newDiv.className = "row";
  newDiv.innerHTML = textNode;
  const currentDiv = document.getElementById("output");
  currentDiv.appendChild(newDiv);
}

function createPrompt(command, error) {
  const prompt = document.createElement("label");
  const textNodePrompt = document.createTextNode("visitor@relow.com:~$");
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

  const currentDiv = document.getElementById("output");
  currentDiv.appendChild(newDiv);
}

function clear() {
  const outputDiv = document.getElementById("output");
  while (outputDiv.hasChildNodes()) {
    outputDiv.removeChild(outputDiv.firstChild);
  }
}

function openLink(link) {
  setTimeout(function () {
    window.open(link);
  }, 1500);
}
