import baseTheme from "@/theme/base";

const lightColors = {
  main: "#101C33",
  sub: "#868E96",
  logo: "#00BD2F",
  border: "#DBDEE2",
  borderSpecial: "#DBDEE2",
  borderPoint: "#DBDEE2",
  black: "#000000",
  help: "#8e94a0",
};

const lightBackgroundColor = {
  main: "#fff",
  header: "#fff",
  modal: "#fff",
  input: "#f5f6f7",
  sub: "#f5f6f7",
  searchbarActive: "#f5f6f7",
  searchbar: "#fff",
};

export const lightTheme = {
  colors: lightColors,
  backgroundColor: lightBackgroundColor,
  ...baseTheme,
};
