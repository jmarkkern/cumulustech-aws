import React, { useState } from 'react';
import '../index.css'



function AgentTrophy({numTrophies}) {
    const [show, setShow] = React.useState(false);


    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle the list visibility
    const toggleList = () => {
        setIsExpanded(!isExpanded);
    };
    if (typeof numTrophies === 'undefined' ){
        numTrophies = []
    }

    const countTrophies =  numTrophies.length

    

    return(
        <div class="agentTrophies">
            <h2 onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>Trophies</h2>
            <div>
              <p>Trophies Earned:</p>
              <div class="agentNumbers">{countTrophies}</div>
            </div>
            <div className="dropdown">
              {/* Dropdown button */}
              <button onClick={toggleList} className="dropdown-btn">
                {isExpanded ?  "Hide Trophy List": "Show Trophy List"}
              </button>
              {/* Dropdown list */}
              {isExpanded && (
                <div className="dropdown-content">
                  <ul className="scrollable-list">
                    {numTrophies.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div class="agentTooltip" style={show? {visibility: "visible"}:{}}>
                Trophies are earned through individual efforts toward skills and collaboration. Keep it up!
            </div>
        </div>
    )
}

export default AgentTrophy;