

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";

function TrophyCards() {
  const [trophies, setTrophies] = useState([]); // Manage state internally
  const [showAddFormModal, setShowAddFormModal] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleAddTrophyCard = () => {
    setShowAddFormModal(true);
    setNameInput('');
    setDescriptionInput('');
  };

  const handleSaveTrophyCard = () => {
    const newTrophy = {
      name: nameInput,
      description: descriptionInput
    };

    setTrophies([...trophies, newTrophy]);

    setShowAddFormModal(false); // Close modal after saving
    setNameInput('');
    setDescriptionInput('');
  };

  const TrophyCard = ({ trophy }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <TrophyCardContainer onClick={toggleExpanded}>
        <div className="card-body">
          <h5 className="card-title">Name:</h5>
          <p className="card-text">{trophy.name}</p>
          <h5 className="card-title">Description:</h5>
          <p className="card-text">{trophy.description}</p>
        </div>
        {isExpanded && (
          <ExpandedCardContent>
            <h5 className="card-title">Name:</h5>
            <p className="card-text">{trophy.name}</p>
            <h5 className="card-title">Description:</h5>
            <p className="card-text">{trophy.description}</p>
          </ExpandedCardContent>
        )}
      </TrophyCardContainer>
    );
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end py-4">
        <button className="btn btn-primary" onClick={handleAddTrophyCard}>Create New Trophy</button>
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
        {trophies.map((trophy, index) => (
          <TrophyCard key={index} trophy={trophy} />
        ))}
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




// import React, { useState, useContext } from 'react';
// import { motion } from "framer-motion";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import styled, { css } from "styled-components";

// import {addTrophyNameData} from "../data/trophyNames"




// function TrophyCards() {

//   // const { trophies, addTrophy } = useContext(TrophyContext); // Use the context
//   const [showAddFormModal, setShowAddFormModal] = useState(false);
//   const [nameInput, setNameInput] = useState('');
//   const [descriptionInput, setDescriptionInput] = useState('');

//   const handleAddTrophyCard = () => {
//     setShowAddFormModal(true);
//     setNameInput('');
//     setDescriptionInput('');
//   };

//   const handleSaveTrophyCard = () => {
//     const newTrophy = {
//       name: nameInput,
//       description: descriptionInput
//     };
//     // Add the new trophy to the list of trophies
//     setTrophies([...trophies, newTrophy]);

//     addTrophyNameData({
//       singleTrophy:newTrophy
//     });

//     // Implement logic to save flashcard
//     setShowAddFormModal(false); // Close modal after saving
//     setNameInput('');
//     setDescriptionInput('');
//   };

//   const TrophyCard = ({ trophy }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     const toggleExpanded = () => {
//       setIsExpanded(!isExpanded);
//     };

//     return (
//       <TrophyCardContainer onClick={toggleExpanded}>
//         <div className="card-body">
//           <h5 className="card-title">Name:</h5>
//           <p className="card-text">{trophy.name}</p>
//           <h5 className="card-title">Description:</h5>
//           <p className="card-text">{trophy.description}</p>
//         </div>
//         {isExpanded && (
//           <ExpandedCardContent>
//             <h5 className="card-title">Name:</h5>
//             <p className="card-text">{trophy.name}</p>
//             <h5 className="card-title">Description:</h5>
//             <p className="card-text">{trophy.description}</p>
//           </ExpandedCardContent>
//         )}
//       </TrophyCardContainer>
//     );
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-end py-4">
//         <button className="btn btn-primary" onClick={handleAddTrophyCard}>Create New Trophy</button>
//       </div>

//       <Modal show={showAddFormModal} onHide={() => setShowAddFormModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Create Custom Trophy</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <label htmlFor="name" className="mt-3">Name:</label>
//           <textarea
//             className="form-control"
//             id="name"
//             value={nameInput}
//             onChange={(e) => setNameInput(e.target.value)}
//             placeholder="Type the name here..."
//             rows="2"
//           />
//           <label htmlFor="description" className="mt-3">Description:</label>
//           <textarea
//             className="form-control"
//             id="description"
//             value={descriptionInput}
//             onChange={(e) => setDescriptionInput(e.target.value)}
//             placeholder="Type the description here..."
//             rows="4"
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowAddFormModal(false)}>Close</Button>
//           <Button variant="primary" onClick={handleSaveTrophyCard}>Save</Button>
//         </Modal.Footer>
//       </Modal>

//       <div className="card-list-container" style={{ display: "flex", flexWrap: "wrap" }}>
//         {trophies.map((trophy, index) => (
//           <TrophyCard key={index} trophy={trophy} />
//         ))}
//       </div>
//     </div>
//   );
//   }

//   const TrophyCardContainer = styled(motion.div)`
//   background-color: #637E9E;
//   color: #fff;
//   width: 400px;
//   height: 300px;
//   margin: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   position: relative;
//   transition: all 0.3s ease-in-out;
//   `;

//   const ExpandedCardContent = styled.div`
//   background-color: #637E9E;
//   padding: 20px;
//   border-radius: 10px;
//   margin-top: 20px;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
//   width: 1000px;
//   max-height: 1000px;
//   overflow-y: auto;
//   `;

//   export default TrophyCards;


