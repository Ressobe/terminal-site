export var renderPromptWithCommand = function (command, error, errorColor, sucessColor, outputElement) {
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
export var renderRow = function (text, outputElement) {
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.innerHTML = text;
    outputElement.appendChild(newDiv);
};
