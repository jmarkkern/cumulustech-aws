import React from "react"
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ChallengePage from './Challenges'

function SubNavigation(){
    return(
        <div className="item thin_nav_bar">
            <div className="supervisor_links">
                <NavLink to="/">Compare Team</NavLink>
                <NavLink to="/trophy">Trophies</NavLink>
                <NavLink to="/challenges">Challenges</NavLink>
                <NavLink to="/leaderboard">Team Leaderboard</NavLink>
            </div>
        </div>
    );
}
export default SubNavigation;



