import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';



import React from "react"

function ChallengeForm({ show, setShow }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Creat New Challenge</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
                type="name"
                id="inputPassword5"
                aria-describedby="nameHelpBlock"
                placeholder="Team Player"
            />

            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                variant="outline-secondary"
                title="Trophy"
                id="input-group-dropdown-2"
                align="end"
                >
                <Dropdown.Item href="#">Customer Service Hero</Dropdown.Item>
                <Dropdown.Item href="#">Most Improved</Dropdown.Item>
                <Dropdown.Item href="#">Most Effient</Dropdown.Item>
                {/* <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                </DropdownButton>
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                variant="outline-secondary"
                title="Point Allocation"
                id="input-group-dropdown-2"
                align="end"
                >
                <Dropdown.Item href="#">1</Dropdown.Item>
                <Dropdown.Item href="#">5</Dropdown.Item>
                <Dropdown.Item href="#">15</Dropdown.Item>
                {/* <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                </DropdownButton>
            </InputGroup>


            <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="How To Win"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            
            </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChallengeForm;