// from the server collect challenge info in the same manner as supervisor info

import React from "react"
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinearProgress from '@mui/material/LinearProgress';

// this is the indiviual agent challenge Card Component, that is replicated for every active challenge
function AgentChallengeCard(props){
    const [open, setOpen] = useState(false);

    return(
        <div className="agentChallengeCards">
            <div className="listChallenges">
                <strong><p className="challengeTop" id="nameOfChallenge">{props.name}</p></strong>
                <ExpandMoreIcon id="moreArrow" onClick={() => setOpen(!open)} >make this an arrow</ExpandMoreIcon>
            </div>

            {/* when u click on the button it shows u extra details like:  */}
            <Collapse in={open}>
                <div className="extraDetails">
                    <p><strong>Description:</strong> {props.desc}</p>
                    <p><strong>How To Win:</strong> {props.howToWin}</p>
                    Progress Completed: {((props.progressCurrent/props.progressTotal)*100).toFixed(0)}%
                    <LinearProgress variant="determinate" value={props.progressCurrent}  sx={{ height: 10, backgroundColor: '#A9A9A9', '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FF9900',}}}  /> 
                </div>
            </Collapse>
        </div>
    );
}
export default AgentChallengeCard;