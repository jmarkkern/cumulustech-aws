import React, { useState, useEffect } from "react";
import ChallengeCard from "./ChallengeCard";
import ChallengeForm from "./ChallengeForm";
import { addChallengeData, setChallengeData } from "../data/dataChallenge";
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';


function createChallengeCard(challenge, onDelete, onSwitch) {
  return (
    <ChallengeCard

      name={challenge.name}
      trophy={challenge.trophy}
      active={challenge.active}
      desc={challenge.descrip}
      howToWin={challenge.howToWin}
      progressCurrent={challenge.progressCurrent}
      progressTotal={challenge.progressTotal}
      date={challenge.date}
      onDelete={onDelete}
      onSwitch={onSwitch}

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
        setChallenges(data);  // Update local state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchChallenges();
  }, []);

  const handleDelete = (name) => {
    let newdata = challenges.filter(challenge => challenge.name !== name)
    setChallenges(newdata);
    setChallengeData(newdata)
    addChallengeData(null)

  };

  const handleSwitch = (name) => {
    challenges.forEach(challenge => {
      if (challenge.name === name) {
        challenge.active = !challenge.active
        addChallengeData(null)
      }
    });




  };

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
      </div>




      <div>

        {challenges.length > 0 ? challenges.map(challenge => createChallengeCard(challenge, handleDelete, handleSwitch)) : <h2 id="emptyChallenges">No challenges created yet!</h2>}
      </div>

      <ChallengeForm show={show} setShow={setShow} />
    </div>
  );
}

export default Challenges;
