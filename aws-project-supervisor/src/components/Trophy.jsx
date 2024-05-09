import React from "react"
import TrophyCards from "./TrophyCards";


function Trophy(){
    return(
        <div className="trophyPage">
        <div className="trophyAnalysis">
            <h1>Trophy Overview Analysis</h1>
        </div>
        <div className="trophyCards">
            <h1>Trophies</h1>
            <TrophyCards />
        </div>

        </div>
    );
}
export default Trophy;
