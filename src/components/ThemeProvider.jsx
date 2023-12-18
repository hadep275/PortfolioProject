import React, { createContext, useState, useContext, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.isDarkMode ? '#1a1a1a' : '#f69cc1')};
    color: ${props => (props.theme.isDarkMode ? '#f69cc1' : '#000000')};
  }
  h2{
    color: ${props => (props.theme.isDarkMode ? ' #f69 ' : '#fff')};
  }
  a: hover{
    color: ${props => (props.theme.isDarkMode ? ' turquoise ' : '#000')};
  }
  input{
    color: ${props => (props.theme.isDarkMode ? ' #000 ' : '#fff')};
    background-color: ${props => (props.theme.isDarkMode ? ' #f8c9eb ' : '#500549')};
  }
  input:hover{
    background-color: ${props => (props.theme.isDarkMode ? ' #fff ' : '#000')};
  }
  textarea{
    color: ${props => (props.theme.isDarkMode ? ' #000 ' : '#fff')};
    background-color: ${props => (props.theme.isDarkMode ? ' #f8c9eb ' : '#500549')};
  }
  textarea:hover{
    background-color: ${props => (props.theme.isDarkMode ? ' #fff ' : '#000')};
  }
  .project-item{
    background-color: ${props => (props.theme.isDarkMode ? ' #000 ' : '#002')};
    color: ${props => (props.theme.isDarkMode ? ' #f69 ' : '#fff')};
    box-shadow: ${props => (props.theme.isDarkMode ? ' 0 0 20px rgba(0, 0, 0, 0.9) ' : '0 0 20px rgba(0, 0, 0, 0.6)')};
    a{
      color: ${props => (props.theme.isDarkMode ? ' #f69 ' : '#fff')};
    }}
  .project-item:hover {
    background-color: ${props => (props.theme.isDarkMode ? ' #fff ' : '#b31e50')};
    color: ${props => (props.theme.isDarkMode ? ' #000 ' : '#f69cc1')};
    box-shadow: ${props => (props.theme.isDarkMode ? ' 0 0 20px rgba(0, 0, 0, 0.9) ' : '0 0 20px rgba(0, 0, 0, 0.6)')};
  a{
    color: ${props => (props.theme.isDarkMode ? ' #000 ' : '#f69aa0')};
  }
  a: hover{
    color: ${props => (props.theme.isDarkMode ? ' magenta ' : 'blue')};
  }
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
