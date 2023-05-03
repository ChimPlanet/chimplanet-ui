import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ThemeProvider, PropTypes, ChimplanetThemePlatte } from "@/libs";

import { lightTheme, darkTheme } from "@/theme";

const themeUpdateContext = createContext<(() => void) | null>(null);

/**
 * @param {{children: JSX.Element}}
 */
export const CPThemeProvider: React.FC<
  PropsWithChildren<{ onlyLight?: boolean }>
> = ({ children, onlyLight }) => {
  const [theme, toggle] = useCPTheme();

  return (
    <ThemeProvider
      theme={onlyLight || theme === "light" ? lightTheme : darkTheme}
    >
      <themeUpdateContext.Provider value={toggle}>
        {children}
      </themeUpdateContext.Provider>
    </ThemeProvider>
  );
};

export const useThemeUpdater = () => useContext(themeUpdateContext);

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useCPTheme(): [string, () => void] {
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
