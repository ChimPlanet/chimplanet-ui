import { createThemePlatte } from "@chimplanet/ui/theme/base";

export default createThemePlatte({
  current: "dark",
  textColors: {
    primary: "#FFFFFF", // main color
    secondary: "#ffffff", // header menu
    tertiary: "#A8A8A8", // JobOffer Detail
    quaternary: "#868E96", // header o search
    quinary: "#101C33",
    senary: "#A8A8A8",
    septenary: "#ffffff",
    octonary: "#8E8E8F",
    footer: "#101C33",
    modalIcon: "#ffffff",
    modalMobileHeader: "#3E4145",
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
    septenary: "#1F2022",
    footer: "#ffffff",
  },
  specialColors: {
    positive: "#00E4B3",
    negative: "#ED2040",
    normal: "#A8A8A8",
    footer: "#2B2C30",
  },
  buttonColors: {
    text: "#DDE3F3",
    background: "#292A2D",
    activeText: "#8E94A0",
    activeBackground: "#ffffff",
  },
});
