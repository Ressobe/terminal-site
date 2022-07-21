var root = document.documentElement;
var onedark = {
    background: "#282c34",
    foreground: "#abb2bf",
    error: "#e06c75",
    sucess: "#98c379",
    primary: "#61afef",
    secondary: "#c678dd",
    third: "#56b6c2"
};
var newtheme = {
    background: "black",
    foreground: "green",
    error: "red",
    sucess: "white",
    primary: "blue",
    secondary: "purple",
    third: "pink"
};
var defaultTheme = onedark;
export var sucessColor = defaultTheme.sucess;
export var errorColor = defaultTheme.error;
function changeTheme() {
    for (var key in newtheme) {
        root.style.setProperty(key, newtheme[key]);
    }
}
