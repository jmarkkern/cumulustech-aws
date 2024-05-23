
import Collapse from 'react-bootstrap/Collapse';
import React, { useState, useEffect } from 'react';

// import agentChallengeData from "../data/agentChallengeData"
import AgentChallengeCard from "../components/agentChallengeCard"



function showChallengeCard(challenge) { //loops through the array, and for each challenge it creates a challengeCard when called
    return (
        <AgentChallengeCard
            name={challenge.name}
            tropy={challenge.trophy}
            desc={challenge.descrip}
            howToWin={challenge.howToWin}
            date={challenge.date}
            progressCurrent ={challenge.progressCurrent}
            progressTotal = {challenge.progressTotal}

        />
    );
}

function AgentChallenge(props) {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/agentChallenges")
            .then(response => response.json())
            .then(data => {

                const fliteredData = data.filter(challenge => challenge.active !== false)
                setChallenges(fliteredData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="agentChallenges">
            <h1>Challenges</h1>
            {/* for every visible challenge make a challenge visible to the agent */}

            {challenges.length > 0 ? challenges.map(showChallengeCard) : <h2 id="emptyChallenges">No Challenges Yet!</h2>}

        </div>
    );
}
export default AgentChallenge;