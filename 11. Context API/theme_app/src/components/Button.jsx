import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = ({ changeTheme }) => {
    const theme = useContext(ThemeContext)

    return (
        <button style={{ backgroundColor: theme.background, color: theme.text }}
        onClick={changeTheme}>Toggle Theme</button>
    )
}

export default Button;