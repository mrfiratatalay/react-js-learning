import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export const useTheme = () => {
    return useContext(ThemeContext);
}

export default ThemeContext;
