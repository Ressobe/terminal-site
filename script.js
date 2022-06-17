const line = document.getElementById('line');
const send = document.getElementById('send');
let number_of_divs = 0;

line.addEventListener("keypress", function (event) {
    if (line.value != '' && event.key === "Enter") {
        event.preventDefault();
        commands(line.value);
        line.value = '';
    }
}); 

function output(command) {
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(command);
    newDiv.appendChild(newContent);

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
    return output("Unknown command: " + text);
}

function help() {
    const commands = ['clear', 'projects', 'social', 'neofetch'];
    return output(commands);
}

function social() {
    const socials = ['fb', 'github', 'yt'];

    return output(socials);
}
