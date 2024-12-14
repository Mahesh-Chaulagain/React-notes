import React, {useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
    const theme = useContext(ThemeContext)

    return(
        <nav style={{ backgroundColor: theme.background }}>
            <ul>
                <li style={{ color:theme.text}}>Home</li>
                <li style={{ color: theme.text}}>About</li>
            </ul>
        </nav>
    )
}

export default Navbar;