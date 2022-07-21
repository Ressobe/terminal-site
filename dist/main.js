import { sucessColor, errorColor } from "./themes.js";
import { left_side, close_div, close_right, commandsArray, banner, about, software, help, github, project_repo, youtube, loading, } from "./commands.js";
import { renderPromptWithCommand, renderRow } from "./helpers/render-helper.js";
var outputElement = document.querySelector("#Output");
var inputElement = document.querySelector("#Input");
var getOneLine = function (textArray) {
    renderRow("<br>", outputElement);
    for (var line in textArray) {
        renderRow(textArray[line], outputElement);
    }
    renderRow("<br>", outputElement);
};
var getLines = function (row) {
    renderRow("<br>", outputElement);
    row.forEach(function (element) {
        renderRow("".concat(left_side, " ").concat(element.left_side, " ").concat(close_right, " ").concat(element.right_side, " ").concat(close_div), outputElement);
    });
    renderRow("<br>", outputElement);
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
    renderPromptWithCommand("banner", false, errorColor, sucessColor, outputElement);
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
            renderPromptWithCommand(inputElement.value, false, errorColor, sucessColor, outputElement);
        }
        else {
            renderPromptWithCommand(inputElement.value, true, errorColor, sucessColor, outputElement);
        }
        commands(inputElement.value);
        inputElement.value = "";
        inputElement.scrollIntoView({ behavior: "smooth" });
    }
});
