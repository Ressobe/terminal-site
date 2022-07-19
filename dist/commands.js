var github = "https://github.com/Ressobe";
var project_repo = "https://github.com/Ressobe/terminalSite";
var youtube = "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
var version = "v1.0";
var left_side = "<div class=left_side>";
var right_side = "<div class=right_side>";
var close_div = "</div>";
var close_right = close_div + right_side;
var loading = ["Loading ..."];
var commandsArray = [
    "help",
    "about",
    "repo",
    "github",
    "youtube",
    "neofetch",
    "banner",
    "time",
    "clear",
];
var help = [
    "".concat(left_side, " about ").concat(close_right, " Who is Ressobe? ").concat(close_div),
    "".concat(left_side, " repo ").concat(close_right, " Open project repository ").concat(close_div),
    "".concat(left_side, " github ").concat(close_right, " Open my github profile ").concat(close_div),
    "".concat(left_side, " youtube ").concat(close_right, " Open my youtube channel ").concat(close_div),
    "".concat(left_side, " neofetch ").concat(close_right, " Display info about my software ").concat(close_div),
    "".concat(left_side, " banner ").concat(close_right, " Display ascii banner ").concat(close_div),
    "".concat(left_side, " time  ").concat(close_right, " Display actual time ").concat(close_div),
    "".concat(left_side, " clear  ").concat(close_right, " Clear terminal screen ").concat(close_div),
];
var banner = [
    "██████╗░███████╗░██████╗░██████╗░█████╗░██████╗░███████╗",
    "██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝",
    "██████╔╝█████╗░░╚█████╗░╚█████╗░██║░░██║██████╦╝█████╗░░",
    "██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗██║░░██║██╔══██╗██╔══╝░░",
    "██║░░██║███████╗██████╔╝██████╔╝╚█████╔╝██████╦╝███████╗",
    "╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░░╚════╝░╚═════╝░╚══════╝",
    "████████╗███████╗██████╗░███╗░░░███╗██╗███╗░░██╗░█████╗░██╗░░░░░",
    "╚══██╔══╝██╔════╝██╔══██╗████╗░████║██║████╗░██║██╔══██╗██║░░░░░",
    "░░░██║░░░█████╗░░██████╔╝██╔████╔██║██║██╔██╗██║███████║██║░░░░░",
    "░░░██║░░░██╔══╝░░██╔══██╗██║╚██╔╝██║██║██║╚████║██╔══██║██║░░░░░",
    "░░░██║░░░███████╗██║░░██║██║░╚═╝░██║██║██║░╚███║██║░░██║███████╗",
    "\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D ".concat(version),
    "<br>",
    "Type 'help' to see list of available commands",
];
var software = [
    "".concat(left_side, " OS: ").concat(close_right, " Arch Linux ").concat(close_div),
    "".concat(left_side, " Shell: ").concat(close_right, " Fish ").concat(close_div),
    "".concat(left_side, " Window Manager: ").concat(close_right, " Dwm ").concat(close_div),
    "".concat(left_side, " Text Editor: ").concat(close_right, " Neovim  ").concat(close_div),
    "".concat(left_side, " Web Browser: ").concat(close_right, " Brave ").concat(close_div),
    "".concat(left_side, " Terminal:  ").concat(close_right, " Alacritty ").concat(close_div),
    "".concat(left_side, " Terminal Font: ").concat(close_right, " Hack Nerd Font ").concat(close_div),
];
var about = [
    "I am a Linux enthusiast (mainly I use Arch and Gentoo). Mostly, I would be sitting at a terminal, fixing things, making them work and experimenting.I love tweaking my environment and creating things which are useful/fun.",
];
