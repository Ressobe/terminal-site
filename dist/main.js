import { left_side, close_div, close_right, commandsArray, banner, about, software, help, github, project_repo, youtube, loading, } from "./commands.js";
var outputElement = document.querySelector("#Output");
var inputElement = document.querySelector("#Input");
var renderPrompt = function (command, error) {
    var prompt = document.createElement("label");
    var newSpan = document.createElement("span");
    var newDiv = document.createElement("div");
    var textPrompt = "visitor@ressobe.com:~$";
    var textCommand = command;
    if (error) {
        newSpan.style.color = errorColor;
    }
    else {
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
var render = function (text) {
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.innerHTML = text;
    outputElement.appendChild(newDiv);
};
var getOneLine = function (textArray) {
    render("<br>");
    for (var line in textArray) {
        render(textArray[line]);
    }
    render("<br>");
};
var getLines = function (row) {
    render("<br>");
    row.forEach(function (element) {
        render("".concat(left_side, " ").concat(element.left_side, " ").concat(close_right, " ").concat(element.right_side, " ").concat(close_div));
    });
    render("<br>");
};
var clear = function () {
    while (outputElement.hasChildNodes()) {
        outputElement.removeChild(outputElement.firstChild);
    }
};
var openLink = function (link) {
    setTimeout(function () {
        window.open(link);
    }, 1500);
};
var getTime = function () {
    var actualDate = new Date();
    return ["".concat(actualDate.getHours(), ":").concat(actualDate.getMinutes(), " \u23F0")];
};
var error = function (text) {
    return ['<span class="red">' + text + "</span>" + ": command not found"];
};
var commands = function (text) {
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
        case "theme":
            changeTheme();
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
window.addEventListener("load", function () {
    renderPrompt("banner", false);
    getOneLine(banner);
});
inputElement.addEventListener("keyup", function () {
    if (commandsArray.indexOf(inputElement.value) != -1) {
        inputElement.style.color = sucessColor;
    }
    else {
        inputElement.style.color = errorColor;
    }
});
inputElement.addEventListener("keypress", function (event) {
    if (inputElement.value != "" && event.key === "Enter") {
        if (commandsArray.indexOf(inputElement.value) != -1) {
            renderPrompt(inputElement.value, false);
        }
        else {
            renderPrompt(inputElement.value, true);
        }
        commands(inputElement.value);
        inputElement.value = "";
        inputElement.scrollIntoView({ behavior: "smooth" });
    }
});
