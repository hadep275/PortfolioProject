// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../css/ThemeProvider.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        {/* Toggle {isDarkMode ? 'Light' : 'Dark'} Mode */}
      </button>
    </div>
  );
};

export default ThemeToggle;
