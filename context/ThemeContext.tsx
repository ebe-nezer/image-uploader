import React, { useContext, useState } from "react";

type ThemeProviderInterface = {
  children: React.ReactNode;
};

interface ThemeContextInterface {
  theme: boolean;
  changeTheme: () => void;
}

const DEFAULT_STATE: ThemeContextInterface = {
  theme: false,
  changeTheme: () => {},
};

const ThemeContext = React.createContext<ThemeContextInterface>(DEFAULT_STATE);

const ThemeContextProvider = ({ children }: ThemeProviderInterface) => {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const getThemeContext = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return { theme, changeTheme };
};

export default ThemeContextProvider;
