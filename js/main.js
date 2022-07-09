const input = document.getElementById("in");
var history_of_commands = new Set();


window.addEventListener("load", function() {
	createPrompt("banner");
	getLines(banner);
});


input.addEventListener("keyup", function() {

	if (commandsArray.includes(input.value)) {
		input.style.color = "#98c379";
	}
	else {
		input.style.color = "#e06c75";
	}
})

input.addEventListener("keypress", function (event) {
    if (input.value != '' && event.key === "Enter") {
        event.preventDefault();
		createPrompt(input.value);
        commands(input.value);
		history_of_commands.add(input.value);
        input.value = '';
		input.scrollIntoView({behavior: "smooth"});
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
		  getLines(banner);
		  break;
	  case 'cmatrix':
		  matrix();
		  break;
	  case 'about':
		  getLines(whois);
      case 'clear':
          clear();
          break;
	  case 'exit':
		  close();
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
	newDiv.className = "row";
	newDiv.innerHTML = textNode;
    const currentDiv = document.getElementById('output');
    currentDiv.appendChild(newDiv);
}

function createPrompt(command) {
	const prompt = document.createElement("label");
	const textNodePrompt = document.createTextNode("visitor@relow.com:~$");
	const newSpan = document.createElement("span");
	const textNodeCommand = document.createTextNode(command);
	const newDiv = document.createElement("div");

	newSpan.className = "green";
	newSpan.appendChild(textNodeCommand);
	prompt.className = "prompt";
	prompt.htmlFor = "line";
	prompt.appendChild(textNodePrompt);

	newDiv.appendChild(prompt);
	newDiv.appendChild(newSpan);
	
    const currentDiv = document.getElementById('output');
    currentDiv.appendChild(newDiv);
}

function clear() {
	const outputDiv = document.getElementById('output');
	while (outputDiv.hasChildNodes()){
	  outputDiv.removeChild(outputDiv.firstChild);
	}
}