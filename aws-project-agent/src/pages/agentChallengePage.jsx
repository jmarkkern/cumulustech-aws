
import Collapse from 'react-bootstrap/Collapse';
import React, { useState, useEffect } from 'react';

// import agentChallengeData from "../data/agentChallengeData"
import AgentChallengeCard from "../components/agentChallengeCard"


function showChallengeCard(challenge) { //loops through the array, and for each challenge it creates a challengeCard when called
    return (
      <AgentChallengeCard
        name={challenge.name}  //left hand is props
        tropy={challenge.trophy} //right hand side is from the array, which is created in challengeForm
        points={challenge.points}
        desc={challenge.descrip}
        howToWin={challenge.howToWin}
        date={challenge.date}

      />
    );
  }

function AgentChallenge(props){ 
    const [open, setOpen] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/agentChallenges")
            .then(response => response.json())
            .then(data => {
                setOpen(data)
                console.log()
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="agentChallenges">
            <h1>Challenges</h1>

            {/* for every visible challenge make a challenge visible to the agent */}
            {open.map(showChallengeCard)}            
        </div>
    );
}
export default AgentChallenge;