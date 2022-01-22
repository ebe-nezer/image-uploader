import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContextProvider, { getThemeContext } from "../context/ThemeContext";
import { GlobalSyles } from "../styled-components/Global";
import { LayoutContainer, LayoutMain } from "../styled-components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout: FC = ({ children }) => {
  const { theme } = getThemeContext();
  return (
    <ThemeProvider theme={{ theme: theme ? "dark" : "light" }}>
      <LayoutContainer>
        <ToastContainer />
        <GlobalSyles />
        <LayoutMain>{children}</LayoutMain>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
