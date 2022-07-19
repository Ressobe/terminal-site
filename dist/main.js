var outputElement = document.querySelector("#Output");
var inputElement = document.querySelector("#Input");
var sucessColor = "#98c379";
var errorColor = "#e06c75";
var createPrompt = function (command, error) {
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
var output = function (textNode) {
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.innerHTML = textNode;
    outputElement.appendChild(newDiv);
};
var getLines = function (textArray) {
    output("<br>");
    for (var line in textArray) {
        output(textArray[line]);
    }
    output("<br>");
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
window.addEventListener("load", function () {
    createPrompt("banner", false);
    getLines(banner);
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
            createPrompt(inputElement.value, false);
        }
        else {
            createPrompt(inputElement.value, true);
        }
        commands(inputElement.value);
        inputElement.value = "";
        inputElement.scrollIntoView({ behavior: "smooth" });
    }
});
