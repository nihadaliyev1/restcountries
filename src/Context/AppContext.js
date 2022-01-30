import React, { useState, useEffect } from "react";

export const AppContext = React.createContext({});

const AppContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "dark" ? true : false
  );
  const [countryFilter, setCountryFilter] = useState("");
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const darkModePreference = localStorage.getItem("darkMode");
  const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  useEffect(() => {
    if (darkModePreference) {
      darkModePreference === "light" ? setDarkMode(false) : setDarkMode(true);
    } else {
      setDarkMode(systemMode);
      localStorage.setItem("darkMode", systemMode ? "dark" : "light");
    }
  }, [darkMode, darkModePreference, systemMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        countryFilter,
        setCountryFilter,
        countrySearchQuery,
        setCountrySearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
