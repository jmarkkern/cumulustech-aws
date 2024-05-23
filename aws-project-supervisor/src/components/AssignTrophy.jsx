import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import agentDetail from "../data/fakeMembers"
import Button from "react-bootstrap/esm/Button";


function AwardTrophyForm({ trophyName, onSubmit}) {
    const [selectedAgents, setSelectedAgents] = useState([]);
    const [selectedAgentNames, setSelectedAgentNames] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(trophyName, selectedAgents);
      };

    //for selecting and unselcting the checkbox, and thus updating the states and names
    const handleCheckboxChange = (agentId, agentName) => {
        setSelectedAgents((prevSelectedAgents) =>
            prevSelectedAgents.includes(agentId)
            ? prevSelectedAgents.filter((id) => id !== agentId)
            : [...prevSelectedAgents, agentId]
        );

        setSelectedAgentNames((prevSelectedAgentNames) =>
        prevSelectedAgentNames.includes(agentName)
          ? prevSelectedAgentNames.filter((name) => name !== agentName)
          : [...prevSelectedAgentNames, agentName]
      );

    };


  return (
    //get checkbox
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
              onChange={() => handleCheckboxChange(agent.id, agent.name)}
            />

          </div>
          
        ))}      
           
      </Form>
      //when they sumbit a checklist of names, we get a local list of names in selectedAgentNames
      //immediatly assigns to people, so Trophy.Name is added to the trophy list of each person in fakeMembers.js or json
      <Button onClick={handleSubmit} variant="primary" type="submit">  
      Submit
      </Button>
      </div>
    );
  };

export default AwardTrophyForm;