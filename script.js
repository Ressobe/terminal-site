const line = document.getElementById('line');
const send = document.getElementById('send');
let actual_command = "";

line.addEventListener("keypress", function (event) {
    if (line.value != '' && event.key === "Enter") {
        event.preventDefault();
		actual_command = line.value;
        commands(line.value);
        line.value = '';
    }
}); 

function output(textNode) {
    const newDiv = document.createElement("div");
	newDiv.appendChild(textNode);
    const currentDiv = document.getElementById('input');
    currentDiv.before(newDiv);
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
        case 'social':
            social();
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
	return output(textNode);
}

function help() {
    const commands = ['clear', 'projects', 'social', 'neofetch'];

	for (let i in commands) {
	  const textNode = document.createTextNode(commands[i]);
	  output(textNode);
	}
}

function social() {
    const socials = ['fb', 'github', 'yt'];

	for (let i in socials) {
	  const textNode = document.createTextNode(socials[i]);
	  output(textNode);
	}
}

function createPrompt(command) {
	const prompt = document.createElement("label");
	const textNode = document.createTextNode("[relow@arch /home/relow]");
	prompt.className = "prompt";
	prompt.htmlFor = "line";
	prompt.appendChild(textNode);

	return prompt;
}
