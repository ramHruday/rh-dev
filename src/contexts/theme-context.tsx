import React, { useState, useEffect, useContext } from "react";

export type Theme = 'light-mode' | 'dark-mode';

export interface ThemeContextState {
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextState>(null!);

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [isLight, setIsLight] = useState(() => {
    // Initialize theme based on system preference or a stored value
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'light-mode';
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  useEffect(() => {
    const currentTheme = isLight ? 'light-mode' : 'dark-mode';
    document.body.className = currentTheme; // Set the class on body
    localStorage.setItem('theme', currentTheme); // Store preference
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(prevIsLight => !prevIsLight);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: isLight ? 'light-mode' : 'dark-mode', toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
