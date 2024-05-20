import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div class="navbar">
            <div className="supervisor_links">
                <NavLink to="/">My Progress</NavLink>
                <NavLink to="/leaderboard">Team Leaderboard</NavLink>
                <NavLink to="/challenges">Challenges</NavLink>
            </div>
        </div>
    )
}

export default NavBar;