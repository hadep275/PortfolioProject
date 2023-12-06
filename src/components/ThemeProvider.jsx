import React, { createContext, useState, useContext, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.isDarkMode ? '#1a1a1a' : '#f69cc1')};
    color: ${props => (props.theme.isDarkMode ? '#f69cc1' : '#000000')};
    /* Add any other global styles you want to change based on the theme */
  }
`;

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      // You can set a default theme here
      // setDarkMode(false); // for light mode
      // setDarkMode(true); // for dark mode
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={{ isDarkMode }}>
        <GlobalStyle />
      {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
