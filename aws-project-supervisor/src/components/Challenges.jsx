import React from "react"
import ChallengeCard from "./ChallengeCard";
import ChallengeForm from "./ChallengeForm"
import { useState } from 'react';



function Challenges(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return(
    <div className="challengesPage">
        <div className="challengeTitles">
            <h1>Challenges</h1>
            <button onClick={handleShow}> + Create New Challenges</button>
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
        <ChallengeForm show={show} setShow={setShow} />


    </div>
    );
}
export default Challenges;