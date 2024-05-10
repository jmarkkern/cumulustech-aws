import React from "react"
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import ChallengePage from './Challenges'


function SubNavigation(){
    return(
        <div className="item thin_nav_bar">
            <div className="supervisor_links">
                <NavLink to="/">Comapre Team</NavLink>
                <NavLink to="/trophy">Trophies</NavLink>
                <NavLink to="/challenges">Challenges</NavLink>
            </div>
        </div>
    );
}
export default SubNavigation;



