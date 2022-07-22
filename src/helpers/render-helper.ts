export const renderPromptWithCommand = (
  command: string,
  error: boolean,
  errorColor: string,
  sucessColor: string,
  outputElement: HTMLDivElement
) => {
  const prompt: HTMLLabelElement = document.createElement("label");
  const newSpan: HTMLSpanElement = document.createElement("span");
  const newDiv: HTMLDivElement = document.createElement("div");
  const textPrompt = "visitor@ressobe.com:~$";

  if (error) {
    newSpan.style.color = errorColor;
  } else {
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

export const renderRow = (text: string, outputElement: HTMLDivElement) => {
  const newDiv: HTMLDivElement = document.createElement("div");
  newDiv.className = "row";
  newDiv.innerHTML = text;
  outputElement.appendChild(newDiv);
};
