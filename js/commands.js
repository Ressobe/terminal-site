var github = "https://github.com/Ressobe";
var project_repo = "https://github.com/Ressobe/terminalSite";
var youtube = "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
var version = "v1.0";

var left_side = "<div class=left_side>";
var right_side = "<div class=right_side>";
var close_div = "</div>";
var close_right = close_div + right_side;

const loading = ["Loading ..."];

const commandsArray = [
  "help",
  "about",
  "repo",
  "github",
  "youtube",
  "neofetch",
  "banner",
  "clear",
];

const help = [
  `${left_side} about ${close_right} Who is Ressobe ${close_div}`,
  `${left_side} repo ${close_right} Open project repository ${close_div}`,
  `${left_side} github ${close_right} Open my github profile ${close_div}`,
  `${left_side} youtube ${close_right} Open my youtube channel ${close_div}`,
  `${left_side} neofetch ${close_right} Display info about my software ${close_div}`,
  `${left_side} banner ${close_right} Display ascii banner ${close_div}`,
  `${left_side} clear  ${close_right} Clear terminal screen ${close_div}`,
];

const banner = [
  "██████╗░███████╗░██████╗░██████╗░█████╗░██████╗░███████╗",
  "██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝",
  "██████╔╝█████╗░░╚█████╗░╚█████╗░██║░░██║██████╦╝█████╗░░",
  "██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗██║░░██║██╔══██╗██╔══╝░░",
  "██║░░██║███████╗██████╔╝██████╔╝╚█████╔╝██████╦╝███████╗",
  `╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░░╚════╝░╚═════╝░╚══════╝  ${version}`,
  "<br>",
  "Type 'help' to see list of available commands",
];

const software = [
  `${left_side} OS: ${close_right} Arch Linux ${close_div}`,
  `${left_side} Shell: ${close_right} Fish ${close_div}`,
  `${left_side} Window Manager: ${close_right} Dwm ${close_div}`,
  `${left_side} Text Editor: ${close_right} Neovim  ${close_div}`,
  `${left_side} Web Browser: ${close_right} Brave ${close_div}`,
  `${left_side} Terminal:  ${close_right} Alacritty ${close_div}`,
  `${left_side} Terminal Font: ${close_right} Hack Nerd Font ${close_div}`,
];

const about = [
  "I am a Linux enthusiast (mainly I use Arch and Gentoo). Mostly, I would be sitting at a terminal, fixing things, making them work and experimenting.I love tweaking my environment and creating things which are useful/fun.",
];
