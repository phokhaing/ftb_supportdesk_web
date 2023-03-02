"use client";
import { createContext } from "react";

const theme = {
  // backgroundColor: "#0C4DA2",
  backgroundColor: "#0F4FA1",
  textColor: "#c4a006",
  activeColor: "#c4a006",
  ftbLogo: "/static/assets/images/logo/ftb-logo.png",
  backgroundImage: "url(/static/assets/images/ftb_background_login.jpg)",
};

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
