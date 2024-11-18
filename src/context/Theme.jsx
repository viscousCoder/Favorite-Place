/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleDarkMode, currentUser, setCurrentUser }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
