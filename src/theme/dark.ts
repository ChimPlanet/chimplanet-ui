import baseTheme from "@/theme/base";

const darkColors = {
  main: "#fff",
  sub: "#868E96",
  logo: "#00BD2F",
  border: "#3A3B3D",
  borderSpecial: "#DBDEE2",
  borderPoint: "#A4ACB3",
  black: "#000000",
  help: "#fff",
};

const darkBackgroundColor = {
  main: "#1E1E1E",
  header: "#292A2D",
  modal: "#28292B",
  input: "#f5f6f7",
  sub: "#3E4145",
  searchbar: "#28292B",
  searchbarActive: "#242527",
};

export const darkTheme = {
  colors: darkColors,
  backgroundColor: darkBackgroundColor,
  ...baseTheme,
};

export default darkTheme;
