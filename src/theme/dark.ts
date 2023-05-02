import { createThemePlatte } from "@/theme/base";

export default createThemePlatte({
  textColors: {
    primary: "#FFFFFF", // main color
    secondary: "#ffffff", // header menu
    tertiary: "#A8A8A8", // JobOffer Detail
    quaternary: "#868E96", // header o search
    quinary: "#000000",
    senary: "#A8A8A8",
    septenary: "#ffffff",
  },
  borderColors: {
    primary: "#3A3B3D",
    secondary: "#DBDEE2",
    tertiary: "#A4ACB3",
    quaternary: "#444546",
    quinary: "#A8A8A8", // 검색 태그
  },
  bgColors: {
    primary: "#1e1f21",
    secondary: "#292A2D",
    tertiary: "#3E4145",
    quaternary: "#28292B",
    quinary: "#242527",
    senary: "#F5F6F7",
  },
  specialColors: {
    positive: "#00E4B3",
    negative: "#ED2040",
    normal: "#A8A8A8",
  },
});
