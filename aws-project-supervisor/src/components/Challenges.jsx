import React, { useState, useEffect } from "react";
import ChallengeCard from "./ChallengeCard";
import ChallengeForm from "./ChallengeForm";
import { getChallengeData, setChallengeData } from '../data/dataChallenge';

function createChallengeCard(challenge) {
  return (
    <ChallengeCard
      key={challenge.id} // Ensure each card has a unique key
      name={challenge.name}
      trophy={challenge.trophy}
      points={challenge.points}
      desc={challenge.descrip}
      howToWin={challenge.howToWin}
      date={challenge.date}
    />
  );
}

function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:4000/agentChallenges");
        const data = await response.json();
        setChallengeData(data); 
        setChallenges(data);    // Update local state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchChallenges();
  }, []);

  return (
    <div className="challengesPage">
      <div className="challengeTitles">
        <h1>Challenges</h1>
        <button onClick={handleShow}> + Create New Challenges</button>
      </div>

      <div className="challengesColumns">
        <p>Active Status</p>
        <p>Name</p>
        <p>Date Created</p>
        <p>Trophy</p>
        <p>Points</p>
      </div>

      <div>
        {challenges.length > 0 ? challenges.map(createChallengeCard) : <h2 id="emptyChallenges">No challenges created yet!</h2>}
      </div>

      <ChallengeForm show={show} setShow={setShow} />
    </div>
  );
}

export default Challenges;
