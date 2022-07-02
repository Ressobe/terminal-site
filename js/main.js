const input = document.getElementById("input");
var history_of_commands = new Set();

window.addEventListener("load", function() {
	getLines(banner);
});

input.addEventListener("keypress", function (event) {
    if (input.value != '' && event.key === "Enter") {
        event.preventDefault();
		createPrompt(input.value);
        commands(input.value);
		history_of_commands.add(input.value);
        input.value = '';
		input.scrollIntoView({behavior: "smooth"});
		console.log(history_of_commands);
    }
});

function commands(text) {
    switch (text) {
      case 'help':
		  getLines(help);
          break;
      case 'projects':
		  getLines(projects);
          break;
      case 'socials':
		  getLines(socials);
          break;
      case 'neofetch':
		  getLines(hardwareSoftwareInfo);
          break;
	  case 'banner':
		  getLines(ascii);
		  break;
	  case 'cmatrix':
		  matrix();
		  break;
	  case 'whois':
		  getLines(whois);
      case 'clear':
          clear();
          break;
      default:
		  output("Unknown command: " + text);
    }
}

function getLines(x) {
	for (let i in x) {
	  const textNode = x[i];
	  output(textNode);
	}
}

function output(textNode) {
    const newDiv = document.createElement("div");
	newDiv.innerHTML = textNode;
    const currentDiv = document.getElementById('output');
    currentDiv.appendChild(newDiv);
}

function createPrompt(command) {
	const prompt = document.createElement("label");
	const textNodePrompt = document.createTextNode("visitor@relow.com:~$");
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