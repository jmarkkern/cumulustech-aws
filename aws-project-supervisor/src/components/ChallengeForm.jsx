import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

import { addChallengeData } from '../data/dataChallenge';
import { trophyNameData } from '../data/trophyNames';



import React from "react"

function ChallengeForm({ show, setShow }) {

  const handleClose = () => {
    setShow(false);
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
    if (!name || !selectedTrophyValue || !howTo) {
      alert("Please fill in all required fields.");
      return;
    }

    //CHALLENGE ARRAY, when they hit save the form is added to the array of challenges in the data folder
    addChallengeData({
      // key:id,
      // status:activeLvl, might put elsewhere
      active: active,
      name: name,
      trophy: selectedTrophyValue,
      descrip: description,
      howToWin: howTo,
      date: formattedDate
    });
    handleClose();
  }

  // FOR DROP DOWN FORMS

  const [selectedTrophyValue, setSelectedTrophyValue] = useState('');
  const handleTrophySelect = (value) => {
    setSelectedTrophyValue(value);

  }

  // FOR TEXT FORMS

  const [active, setActive] = useState(false);
  function handleActiveChange(event) {
    setActive(event.target.checked)

  }
  const [name, setName] = useState('');
  function handleNameChange(event) {
    setName(event.target.value);
  }

  const [description, setDescription] = useState('');
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  const [howTo, setHowTo] = useState('');
  function handleHowToChange(event) {
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
            placeholder="Enter Unique Challenger Name"
            value={name}
            onChange={handleNameChange}   //when they type update the name variable
          />

          <Form.Label>Active Status</Form.Label>
          <Form.Check
            type="checkbox"
            id="active-switch"
            label="Active"
            checked={active}
            onChange={handleActiveChange}
          />

          <br />
          <Form.Label htmlFor="inputPassword5">Which Trophy will be awarded?</Form.Label>
          <Form.Text className="text-danger">*</Form.Text>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder='Choose a Trophy'
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
              {/* DEFAULT TROPHY OPTIONS, might remove? */}
              <Dropdown.Item onClick={() => handleTrophySelect('Customer Service Hero')}>Customer Service Hero</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTrophySelect('Most Improved')}>Most Improved</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTrophySelect('Most Effient')}>Most Effient</Dropdown.Item>

              {/* TESTER, SEE ALL TROPHYIES CREATED */}
              <Dropdown.Item onClick={() => handleTrophySelect('Others') & console.log(trophyNameData)}>Click to see custom trophies</Dropdown.Item>

              {/* THIS IS HOW TO GET THE LIST OF TROPHY NAMES, remember to import trophyNameData array from data folder*/}
              {trophyNameData.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleTrophySelect(item.singleTrophy.name)}
                >
                  {item.singleTrophy.name}
                </Dropdown.Item>
              ))}

              {/* <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
            </DropdownButton>
          </InputGroup>


          <FloatingLabel controlId="floatingTextarea2" label={<span className="floating-label">Challenge Description</span>}>
            <Form.Text className="text-danger">   *</Form.Text>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              required={true}
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