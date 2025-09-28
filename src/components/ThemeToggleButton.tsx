import React from 'react';
import { Sun, Moon } from 'react-feather';
import { useTheme } from '../contexts/theme-context'; // Import useTheme hook
import './ThemeToggleButton.scss';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-button neumorphic-embossed-icon p-3 mb-3"
      aria-label="Toggle theme"
    >
      {theme === 'light-mode' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggleButton;
