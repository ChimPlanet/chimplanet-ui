import { PropsWithChildren, useState } from "react";
import { ThemeProvider as __ThemeProvider, PropTypes } from "@/libs";

import { lightTheme, darkTheme } from "@/theme";

/**
 * @param {{children: JSX.Element}}
 */
export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme] = useTheme();

  return (
    <__ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </__ThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useTheme() {
  // browser theme information
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  let initTheme = isBrowserDarkMode ? "dark" : "light";

  // custom theme mode
  const userTheme = localStorage.getItem("theme");

  // priority
  if (userTheme) {
    initTheme = userTheme;
  }

  const [theme, setTheme] = useState(initTheme);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === "light" ? "dark" : "light");

  return [theme, toggleTheme];
}
