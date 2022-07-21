import { Rows } from "./types/types";

export const github: string = "https://github.com/Ressobe";
export const project_repo: string = "https://github.com/Ressobe/terminalSite";
export const youtube: string =
  "https://www.youtube.com/channel/UCcWXlahMIEBY9WR11VVELuQ";
export const version: string = "v1.0";

export const left_side: string = "<div class=left_side>";
const right_side: string = "<div class=right_side>";
export const close_div: string = "</div>";
export const close_right: string = close_div + right_side;

export const loading: string[] = ["Loading ..."];

export const commandsArray: string[] = [
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

export const help: Rows[] = [
  {
    left_side: "about",
    right_side: "Who is Ressobe?",
  },
  {
    left_side: "repo",
    right_side: "Open project repository",
  },
  {
    left_side: "github",
    right_side: "Open my github profile",
  },
  {
    left_side: "youtube",
    right_side: "Open my youtube channel",
  },
  {
    left_side: "neofetch",
    right_side: "Display info about my software",
  },
  {
    left_side: "banner",
    right_side: "Display ascii banner",
  },
  {
    left_side: "time",
    right_side: "Display actual time",
  },
  {
    left_side: "clear",
    right_side: "Clear terminal",
  },
];

export const software: Rows[] = [
  {
    left_side: "OS:",
    right_side: "Arch Linux",
  },
  {
    left_side: "Shell:",
    right_side: "Fish",
  },
  {
    left_side: "Window Manager:",
    right_side: "Dwm",
  },
  {
    left_side: "Text Editor:",
    right_side: "Neovim",
  },
  {
    left_side: "Web Browser:",
    right_side: "Brave",
  },
  {
    left_side: "Terminal:",
    right_side: "Alacritty",
  },
  {
    left_side: "Terminal Font:",
    right_side: "Hack Nerd Font",
  },
];

export const banner: string[] = [
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
  `░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝ ${version}`,
  "<br>",
  "Type 'help' to see list of available commands",
];

export const about: string[] = [
  "I am a Linux enthusiast (mainly I use Arch and Gentoo). Mostly, I would be sitting at a terminal, fixing things, making them work and experimenting.I love tweaking my environment and creating things which are useful/fun.",
];
