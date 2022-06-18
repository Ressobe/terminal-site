const line = document.getElementById('line');
let actual_command = "";


line.addEventListener("keypress", function (event) {
    if (line.value != '' && event.key === "Enter") {
        event.preventDefault();
		actual_command = line.value;
		createPrompt(actual_command);
        commands(line.value);
        line.value = '';
    }
}); 

function asciiWelcome(){
  return 0;
}

function output(textNode) {
    const newDiv = document.createElement("div");
	newDiv.appendChild(textNode);

    const currentDiv = document.getElementById('output');
    currentDiv.appendChild(newDiv);
}

function commands(text) {
    switch (text) {
        case 'help':
            help();
            break;
        case 'clear':
            clear();
            break;
        case 'projects':
            projects();
            break;
        case 'socials':
            socials();
            break;
        case 'neofetch':
            neofetch()
            break;
        default:
            unknown_command(text);
    }
}

function unknown_command(text) {
	const message = "Unknown command: " + text;
	const textNode = document.createTextNode(message);
	output(textNode);
}

function help() {
    const commands = ['clear', 'projects', 'social', 'neofetch'];
	for (let i in commands) {
	  const textNode = document.createTextNode(commands[i]);
	  output(textNode);
	}
}

function socials() {
    const socialsArray = ['fb', 'github', 'yt'];
	for (let i in socialsArray) {
	  const textNode = document.createTextNode(socialsArray[i]);
	  output(textNode);
	}
}

function createPrompt(command) {
	const prompt = document.createElement("label");
	const textNodePrompt = document.createTextNode("visitor@relow.com:~$ ");
	const textNodeCommand = document.createTextNode(command);
	const newDiv = document.createElement("div");

	prompt.className = "prompt";
	prompt.htmlFor = "line";
	prompt.appendChild(textNodePrompt);

	newDiv.appendChild(prompt);
	newDiv.appendChild(textNodeCommand);
	
    const currentDiv = document.getElementById('output');
    currentDiv.appendChild(newDiv);
}

function clear() {
  const outputDiv = document.getElementById('output');
  while (outputDiv.hasChildNodes()){
	outputDiv.removeChild(outputDiv.firstChild);
  }
}
