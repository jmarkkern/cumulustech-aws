import React, { useState, useContext } from 'react';
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled, { css } from "styled-components";





function TrophyCards() {

  const { trophies, addTrophy } = useContext(TrophyContext); // Use the context
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
    addTrophy(newTrophy);
    setShowAddFormModal(false);
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


//   const { trophies, addTrophy } = useContext(TrophyContext); // Use the context

//   // State for managing visibility of add question card
//   const [showAddFormCard, setShowAddFormCard] = useState(false);

//   // State for managing modal visibility
//   const [showAddFormModal, setShowAddFormModal] = useState(false);

  

//   // State for managing question and answer inputs
//   const [nameInput, setNameInput] = useState('');
//   const [descriptionInput, setDescriptionInput] = useState('');


//   // State for storing created trophies
//   // const [trophies, setTrophies] = useState([]);
//   const [isCardExpanded, setIsCardExpanded] = useState(false); // State for tracking card expansion

//   const handleExpandedClick = (event) => {
//     // Prevent the click event from propagating to the parent container
//     event.stopPropagation();
//   };

//   // Function to handle adding a flashcard
//   const handleAddTrophyCard = () => {
//     setShowAddFormModal(true);
//     setNameInput('');
//     setDescriptionInput('');

//   };

//   // Function to handle saving a flashcard
//   const handleSaveTrophyCard = () => {
//     // Create a new trophy object
//     const newTrophy = {
//       name: nameInput,
//       description: descriptionInput
//     };
//     // Add the new trophy to the list of trophies
//     setTrophies([...trophies, newTrophy]);
//     // Implement logic to save flashcard
//     setShowAddFormModal(false); // Close modal after saving
//     setNameInput('');
//     setDescriptionInput('');

//   };

//    // Function to get the list of created trophies
//    //!!not toooo big of a deal but this func breaks encapsulation by exposing internal state, so we should change so we are passing props
//    //HOLD ON thinking about how to do this properly so it can be used easily by multiple files - waynelle 
//    const getSavedTrophies = () => {
//     return trophies;
//   };

//   // Function to edit a flashcard
//   const handleEditTrophy = (index) => {
//     // Implement edit functionality
//     console.log('Editing trophy at index:', index);
//   };

//   // Function to delete a flashcard
//   const handleDeleteTrophy = (index) => {
//     // Implement delete functionality
//     console.log('Deleting trophy at index:', index);
//   };

//  // Individual trophy card component
//  const TrophyCard = ({ trophy }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//     const toggleExpanded = () => {
//       setIsExpanded(!isExpanded);
//       setIsCardExpanded(!isExpanded); // Update isCardExpanded state
//     };

//     const handleClose = () => {
//       setIsExpanded(false); // Close the expanded card
//       setIsCardExpanded(false); // Update isCardExpanded state
//     };

//   return (
//     <TrophyCardContainer
//       layout
//       onClick={toggleExpanded}
//       isExpanded={isExpanded}
//       // whileHover={{ scale: 1.05 }}
//     >
//       <div className="card-body">
//         <h5 className="card-title">Name:</h5>
//         <p className="card-text">{trophy.name}</p>
//         <h5 className="card-title">Description:</h5>
//         <p className="card-text">{trophy.description}</p>
//       </div>
//       {isExpanded && (
//         <ExpandedCardContent
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={handleExpandedClick} // Handle click on the expanded content


//         >
//           {/* <CloseButton onClick={handleExpandedClick}>&times;</CloseButton> */}
//           {/* Content to display when card is expanded */}
//           <h5 className="card-title">Name:</h5>
//           <p className="card-text">{trophy.name}</p>
//           <h5 className="card-title">Description:</h5>
//           <p className="card-text">{trophy.description}</p>
//         </ExpandedCardContent>
//       )}
//     </TrophyCardContainer>
//   );
//   };


//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-end py-4">
//         <button className="btn btn-primary" onClick={handleAddTrophyCard} disabled={isCardExpanded}>Create New Trophy</button>
//       </div>


//       {/* Modal for adding trophy */}
//       <Modal show={showAddFormModal} onHide={() => setShowAddFormModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Create Custom Trophy</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <label htmlFor="name" className="mt-3">
//             Name:
//           </label>
//           <textarea
//             className="form-control"
//             id="name"
//             value={nameInput}
//             onChange={(e) => setNameInput(e.target.value)}
//             placeholder="Type the name here..."
//             rows="2"
//           />
//           <label htmlFor="description" className="mt-3">
//             Description:
//           </label>
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
//           <Button variant="secondary" onClick={() => setShowAddFormModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveTrophyCard}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>

        

//       {/* Container for trophy cards */}
//       <div className="card-list-container" style={{ display: "flex", flexWrap: "wrap" }}>
//         {/* Render the trophies */}
//         {trophies.map((trophy, index) => (
//           <TrophyCard key={index} trophy={trophy} />
//         ))}
//       </div>

     

//       </div>

      
//   );
// }


// // Styled components for trophy card
// const TrophyCardContainer = styled(motion.div)`
// background-color: #637E9E;

// width: 400px; 
// height: 300px; 
//   margin: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   position: relative;
//   transition: all 0.3s ease-in-out;

//   ${({ isExpanded }) =>
//     isExpanded &&
//     `

//   `}
// `;

// const ExpandedCardContent = styled(motion.div)`
// background-color: #637E9E;
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
//   pointer-events: none;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   font-size: 20px;
//   background: none;
//   border: none;
//   color: #fff;
//   cursor: pointer;
// `;

// export default TrophyCards;


