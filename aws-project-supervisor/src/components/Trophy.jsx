import React from "react"
import TrophyCards from "./TrophyCards";


function Trophy(){
    return(
        <div className="trophyPage">
        <div className="trophyAnalysis">
            <h1>Trophy Overview Analysis</h1>
            {/* onClick={} show distribution component or trend component*/}
            <button> Distribution </button>
            <button>Trend</button>
        </div>
        <div className="trophyCards">
            <h1>Trophies</h1>
            <TrophyCards />
        </div>

        </div>
    );
}
export default Trophy;
