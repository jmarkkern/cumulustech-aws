import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";

import { addTrophyNameData, setTrophyData, trophyNameData } from '../data/trophyNames';
import AwardTrophyForm from "./AssignTrophy";
import agentDetail from "../data/fakeMembers";


function TrophyCards() {
  const [trophies, setTrophies] = useState([]); // Manage state internally
  const [showAddFormModal, setShowAddFormModal] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  useEffect(() => {
    const fetchTrophies = async () => {
      try {
        const response = await fetch("http://localhost:4000/trophy-data");
        const data = await response.json();
        setTrophyData(data);
        setTrophies(data);  // Update local state with fetched data
      } catch (error) {
        console.error('Error fetching Trophy data:', error);
      }
    };

    fetchTrophies();
  }, []);


      const [showAssignForm, setAssignShowForm] = useState(false);


  //when they click on assign form, show checkboxes
  const assignTrophy = () => {
    setAssignShowForm(true);
  };

  //when they hit save hide checkboxes and get list of names
  const handleAssignTrophySubmit = (selectedAgents) => {
    console.log('Selected agents:', selectedAgents);
    setAssignShowForm(false); // Hide the form after submission
  };

  const handleAddTrophyCard = () => {
    setShowAddFormModal(true);
    setNameInput('');
    setDescriptionInput('');


  };

  const handleSaveTrophyCard = () => {
    const newTrophy = {
      name: nameInput,
      description: descriptionInput,
      agents : ["person 1", "person 2", "person 3"]

    };
    addTrophyNameData(newTrophy)
    setNameInput('');
    setDescriptionInput('');
    setShowAddFormModal(false); // Close modal after saving
    
  };

  const deleteTrophy = (name) =>{
    let newdata = trophies.filter(trophy => trophy.name !== name)
    setTrophyData(newdata);
    setTrophies(newdata)
    addTrophyNameData(null)

  }

  const TrophyCard = ({ trophy }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };



// THIS IS THE TROPHY CARD
    return (
      <TrophyCardContainer onClick={toggleExpanded}>
        <div className="card-body">
          <h5 className="card-title">Name:</h5>
          <p className="card-text">{trophy.name}</p>
          <h5 className="card-title">Description:</h5>
          <p className="card-text">{trophy.description}</p>

          <div>
            <button onClick={() => deleteTrophy(trophy.name)}>Delete</button> {/* Delete button */}
          </div>
          
          <Button onClick={assignTrophy}>Award Trophy</Button>
          {showAssignForm && (
          <AwardTrophyForm onSubmit={handleAssignTrophySubmit} />
        )}
        </div>
        {/* {isExpanded && (
          <ExpandedCardContent>
            <h5 className="card-title">Name:</h5>
            <p className="card-text">{trophy.name}</p>
            <h5 className="card-title">Description:</h5>
            <p className="card-text">{trophy.description}</p>
          </ExpandedCardContent>
        )} */}
      </TrophyCardContainer>
    );
  };


  // THIS IS THE TROPHY FORM
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end py-4">
        <button className="btn btn-primary" onClick={handleAddTrophyCard}>+ Create New Trophy</button>
      </div>

      <Modal show={showAddFormModal} onHide={() => setShowAddFormModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Custom Trophy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <label htmlFor="name" className="mt-3">Name:</label>
          <textarea
            className="form-control"
            id="name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Type the name here..."
            rows="2"
          />


          <label htmlFor="description" className="mt-3">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            placeholder="Type the description here..."
            rows="4"
          />

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddFormModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSaveTrophyCard}>Save</Button>
        </Modal.Footer>
      </Modal>

      <div className="card-list-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {trophies.length > 0 ?trophies.map((trophy, index) => (
          <TrophyCard key={index} trophy={trophy} />
        )): <h2 style={{display:'right'}}>No Trophies created yet!</h2>}
      </div>
    </div>
  );
}

const TrophyCardContainer = styled(motion.div)`
  background-color: #637E9E;
  color: #fff;
  width: 400px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const ExpandedCardContent = styled.div`
  background-color: #637E9E;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 1000px;
  max-height: 1000px;
  overflow-y: auto;
`;

export default TrophyCards;






