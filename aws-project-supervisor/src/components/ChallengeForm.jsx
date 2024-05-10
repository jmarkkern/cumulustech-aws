import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

import { addChallengeData } from '../data/dataChallenge'; 



import React from "react"

function ChallengeForm({ show, setShow }) {
    
  const handleClose = () => {
      setShow(false);
      setSelectedPointValue('');
      setSelectedTrophyValue('');
      setName('');
      setDescription('');
      setHowTo('');
    };

    const handleShow = () => setShow(true);

    const handleSave = (event) => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      event.preventDefault();
      if (!name || !selectedTrophyValue || !selectedPointValue || !howTo) {
        alert("Please fill in all required fields.");
        return;
      }

      //CHALLENGE ARRAY, when they hit save the form is added to the array of challenges in the data folder
      addChallengeData({
        // key:id,
        // status:activeLvl, might put elsewhere
        name: name,
        trophy: selectedTrophyValue,
        points:selectedPointValue,
        descrip: description,
        howToWin:howTo,
        date: formattedDate
      });
      handleClose();
    }

    // FOR DROP DOWN FORMS
    const [selectedPointValue, setSelectedPointValue] = useState('');
    const handlePointSelect = (value) => {
      setSelectedPointValue(value);
    };

    const [selectedTrophyValue, setSelectedTrophyValue] = useState('');
    const handleTrophySelect = (value) => {
      setSelectedTrophyValue(value);

    }
    
    
     // FOR TEXT FORMS
     const [name, setName] = useState('');
    function handleNameChange(event){
      setName(event.target.value);
    }

    const [description, setDescription] = useState('');
    function handleDescriptionChange(event){
      setDescription(event.target.value);
    }

    const [howTo, setHowTo] = useState('');
    function handleHowToChange(event){
      setHowTo(event.target.value);
    }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Creat New Challenge</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Label htmlFor="inputPassword5">Challenge Name</Form.Label>
            <Form.Text className="text-danger">*</Form.Text>
            <Form.Control
                type="name"
                id="inputPassword5"
                required={true}
                aria-describedby="Place to enter Challenge Name"
                placeholder="Team Player"
                value={name}
                onChange={handleNameChange}   //when they type update the name variable
            />




            <br />
            <Form.Label htmlFor="inputPassword5">Which Trophy will be awarded?</Form.Label>
            <Form.Text className="text-danger">*</Form.Text>
            <InputGroup className="mb-3">
                <Form.Control 
                  aria-label="Text input with dropdown button" 
                  value={selectedTrophyValue} 
                  onChange={(e) => setSelectedTrophyValue(e.target.value)}
                  required={true}
                  readOnly
                  />

                <DropdownButton
                variant="outline-secondary"
                title="Trophy"
                id="input-group-dropdown-2"
                >
                <Dropdown.Item onClick={() => handleTrophySelect('Customer Service Hero')}>Customer Service Hero</Dropdown.Item>
                <Dropdown.Item onClick={() => handleTrophySelect('Most Improved')}>Most Improved</Dropdown.Item>
                <Dropdown.Item onClick={() => handleTrophySelect('Most Effient')}>Most Effient</Dropdown.Item>
                {/* <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                </DropdownButton>
            </InputGroup>




            <Form.Label htmlFor="inputPassword5">How many point will be given?</Form.Label>
            <Form.Text className="text-danger">*</Form.Text>
            <InputGroup className="mb-3">
            {/* flip this and when they click an item fill in blank*/}
                <Form.Control 
                  aria-label="Text input with dropdown button" 
                  value={selectedPointValue} 
                  onChange={(e) => setSelectedPointValue(e.target.value)}
                  required={true}
                />

                <DropdownButton
                variant="outline-secondary"
                title="Point Allocation"
                id="input-group-dropdown-2">
                    <Dropdown.Item onClick={() => handlePointSelect('1')}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => handlePointSelect('5')}>5</Dropdown.Item>
                    <Dropdown.Item onClick={() => handlePointSelect('15')}>15</Dropdown.Item>
                    {/* <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                </DropdownButton>
            </InputGroup>


            <FloatingLabel controlId="floatingTextarea2" label="Challenge Description">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={description}
                onChange={handleDescriptionChange}   //when they type update the description variable
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label={<span className="floating-label">How To Win</span>}>
            <Form.Text className="text-danger">   *</Form.Text>
            
                <Form.Control
                as="textarea"
                placeholder="How To Win"
                style={{ height: '100px' }}
                required={true}
                value={howTo}
                onChange={handleHowToChange}   //when they type update the HowTo variable
                />
             
            </FloatingLabel>
            
            </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChallengeForm;