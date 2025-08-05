import React, { useState } from "react";

const ThemeContext = React.createContext();

function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme sadece ThemeProvider icinde kullanilabilir!")
    }
    return context;
}


function ThemeButton() {
    const theme = useTheme();

    return (
        <button
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                padding: "10px",
                border: "2px solid gray"
            }}
        >
            Ben {theme} temayi kullaniyorum!
        </button>
    )
}

function TemaJs() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Tema: {theme}</h1>
                <button onClick={() => setTheme("dark")}>
                    Koyu Yap
                </button>

                <br />
                <br />
                <ThemeButton />
            </div>
        </ThemeContext.Provider>
    )
}

export default TemaJs;
