import React, { useState } from "react";
import { DARK_THEME, LIGHT_THEME, Theme } from "../skill-page/models";

export interface ThemeContextState {
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextState>(null!);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <ThemeContext.Provider
      value={{ theme: isLight ? LIGHT_THEME : DARK_THEME, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
