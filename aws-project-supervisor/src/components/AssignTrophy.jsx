import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import agentDetail from "../data/fakeMembers"
import Button from "react-bootstrap/esm/Button";


function AwardTrophyForm({ trophyId, trophyName, onSubmit}) {
    const [selectedAgents, setSelectedAgents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(trophyId, trophyName, selectedAgents);
      };

    const handleCheckboxChange = (agentId) => {
    setSelectedAgents((prevSelectedAgents) =>
        prevSelectedAgents.includes(agentId)
        ? prevSelectedAgents.filter((id) => id !== agentId)
        : [...prevSelectedAgents, agentId]
    );
    };


  return (
    //get checkbox / search of people 
    //sumbit button

      <div>
        <Form>
        {agentDetail.map((agent) => (
          <div key={agent.id} className="mb-3">
            <Form.Check // prettier-ignore
              type={"checkbox"}
              id={agent.id}
              label={agent.name}
              checked={selectedAgents.includes(agent.id)}
              onChange={() => handleCheckboxChange(agent.id)}
            />

          </div>
          
        ))}      
           
      </Form>
      <Button onClick={handleSubmit} variant="primary" type="submit">
      Submit
      </Button>
      </div>
    );
  };

export default AwardTrophyForm;