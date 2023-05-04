import React from "react"
import { useUser } from "./ThemeContext"

export const Switch = () => {
 
    const {theme, toggleTheme} = useUser()
    return (
        <div>
            <label>
                <input 
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
                />
            </label>
        </div>
    )
}