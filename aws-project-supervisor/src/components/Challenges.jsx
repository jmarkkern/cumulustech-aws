import React from "react"
import ChallengeCard from "./ChallengeCard";



function Challenges(){
    return(
    <div className="challengesPage">
        <div className="challengeTitles">
            <h1>Challenges</h1>
            <button> + Create New Challenges</button>
        </div>

       <div className="challengesColumns">
            <p>Active Satus</p>
            <p>Name</p>
            <p>Date Created</p>
            <p>Trophy</p>
            <p>Point</p> 
       </div>
       <div>
            <ChallengeCard />
        </div>


    </div>
    );
}
export default Challenges;