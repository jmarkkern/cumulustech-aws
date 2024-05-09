import React from "react"
import ChallengeCard from "./ChallengeCard";
import ChallengeForm from "./ChallengeForm"
import { useState } from 'react';

import challengeData from "../data/dataChallenge";



function createChallengeCard(challenge) { //loops through the array, and for each challenge it creates a challengeCard when called
    return (
      <ChallengeCard
        name={challenge.name}  //left hand is props
        tropy={challenge.trophy} //right hand side is from the array, which is created in challengeForm
        points={challenge.points}
        desc={challenge.descrip}
        howToWin={challenge.howToWin}
        date={challenge.date}

      />
    );
  }

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
            {/* <ChallengeCard /> */}
            {/* constant-time operation */}
            {challengeData.length > 0 ? challengeData.map(createChallengeCard) : <h2 id="emptyChallenges">No challenges created yet!</h2>}
            {/* {challengeData.map(createChallengeCard)} */}
        </div>
        <ChallengeForm show={show} setShow={setShow} />


    </div>
    );
}
export default Challenges;