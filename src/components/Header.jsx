import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [hamburger, setBurgerMenu] = useState(false);
    return(
        <header>
            <nav className="menu_desktop">
        
                <NavLink to="/" className="poke_icon">
                    <i></i>
                </NavLink>

                <div className="menu_mobile">
                    <NavLink to="/" className="nav_links">Home</NavLink>
                    <NavLink to="/" className="nav_links">Pokedex</NavLink>
                    <NavLink to="/" className="nav_links">Home</NavLink>
                    <NavLink to="/" className="nav_links">About</NavLink>
                </div>
            </nav>
        </header>
    )
}