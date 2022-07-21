const root = document.documentElement;

const onedark = {
  background: "#282c34",
  foreground: "#abb2bf",
  error: "#e06c75",
  sucess: "#98c379",
  primary: "#61afef",
  secondary: "#c678dd",
  third: "#56b6c2",
};

const newtheme = {
  background: "black",
  foreground: "green",
  error: "red",
  sucess: "white",
  primary: "blue",
  secondary: "purple",
  third: "pink",
};

let defaultTheme = onedark;

export let sucessColor = defaultTheme.sucess;
export let errorColor = defaultTheme.error;

function changeTheme() {
  for (let key in newtheme) {
    root.style.setProperty(key, newtheme[key]);
  }
}
