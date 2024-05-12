// from the server collect challenge info in the same manner as supervisor info

import React from "react"
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// this is the indiviual agent challenge Card Component, that is replicated for every active challenge
function AgentChallengeCard(props){
    const [open, setOpen] = useState(false);

    return(
        <div className="agentChallengeCards">
            <div className="listChallenges">
                <strong><p className="challengeTop" id="nameOfChallenge">{props.name}</p></strong>
                <p className="challengeTop">put in progress bar here*</p>
                {/* progress bar */}
                <ExpandMoreIcon id="moreArrow" onClick={() => setOpen(!open)} >make this an arrow</ExpandMoreIcon>
            </div>

            {/* when u click on the button it shows u extra details like:  */}
            <Collapse in={open}>
                <div className="extraDetails">
                    <p><strong>Description:</strong> {props.desc}</p>
                    <p><strong>How To Win:</strong> {props.howToWin}</p>
                </div>
            </Collapse>
        </div>
    );
}
export default AgentChallengeCard;