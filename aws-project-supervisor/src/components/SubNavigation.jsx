import React from "react"
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import ChallengePage from './Challenges'


function SubNavigation(){
    return(
        <div className="item thin_nav_bar">
            <div className="supervisor_links">
                <Link to="/team">Team View</Link>
                <Link to="/trophy">Trophies</Link>
                <Link to="/challenges">Challenges</Link>
            </div>
        </div>
    );
}
export default SubNavigation;


// function SubNavigation(){
//     return(
//         <div className="item thin_nav_bar">
//             <div className="supervisor_links">
//                 <a href="/team" >My Team</a>
//                 <a href="/trophy" >Trophy</a>
//                 <a href="/challenges">Challenges</a>
//             </div>
//         </div>
//     );
// }
// export default SubNavigation;
{/* <a href="agentDashboard.html" class="active">My Team</a> */}
