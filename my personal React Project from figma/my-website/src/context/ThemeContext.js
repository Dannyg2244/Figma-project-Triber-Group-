import { createContext, useContext, useState } from "react";
import React from "react"

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider
        value={{
            theme,
            toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useUser = () => useContext(ThemeContext)