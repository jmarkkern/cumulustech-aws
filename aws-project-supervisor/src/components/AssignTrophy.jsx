import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import agentDetail from "../data/fakeMembers"
import Button from "react-bootstrap/esm/Button";


function AwardTrophyForm({ trophyName, onSubmit}) {
    const [selectedAgents, setSelectedAgents] = useState([]);
    const [selectedAgentNames, setSelectedAgentNames] = useState([]);  //selectedAgentNames is the list of names

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Map selected agent IDs to their names
      const selectedAgentNames = selectedAgents.map(agentId => {
        const selectedAgent = agentDetail.find(agent => agent.id === agentId);
        return selectedAgent ? selectedAgent.name : null;
      }).filter(name => name !== null); // Filter out null values
    
      // Pass both trophy name and selected agent names to onSubmit
      onSubmit({ trophyName, selectedAgentNames });
    };
  
    const handleCheckboxChange = (agentId) => {
      setSelectedAgents((prevSelectedAgents) =>
        prevSelectedAgents.includes(agentId)
          ? prevSelectedAgents.filter((id) => id !== agentId)
          : [...prevSelectedAgents, agentId]
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