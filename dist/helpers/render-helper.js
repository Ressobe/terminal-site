export const renderPromptWithCommand = (command, error, errorColor, sucessColor, outputElement) => {
    const prompt = document.createElement("label");
    const newSpan = document.createElement("span");
    const newDiv = document.createElement("div");
    const textPrompt = "visitor@ressobe.com:~$";
    if (error) {
        newSpan.style.color = errorColor;
    }
    else {
        newSpan.style.color = sucessColor;
    }
    newSpan.classList.add("text");
    newSpan.innerHTML = command;
    prompt.className = "prompt";
    prompt.setAttribute("for", "line");
    prompt.innerHTML = textPrompt;
    newDiv.appendChild(prompt);
    newDiv.appendChild(newSpan);
    outputElement.appendChild(newDiv);
};
export const renderRow = (text, outputElement) => {
    const newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.innerHTML = text;
    outputElement.appendChild(newDiv);
};
