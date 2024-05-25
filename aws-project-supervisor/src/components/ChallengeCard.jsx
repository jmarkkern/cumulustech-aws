import React, { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import LinearProgress from '@mui/material/LinearProgress';


function ChallengeCard(props) {
    const [active, setActive] = useState(props.active);
    
    

    const handleSwitchChange = (e) => {
        const newValue = e.target.checked;
        setActive(newValue);
        props.onSwitch(props.name)
        // Perform any other actions based on the new value, such as updating data or triggering events
    };

    return (
        <div className="ChallengeCard">
            <div className="topC">
                {/* Switch component with controlled value */}
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={active} color="primary" onChange={handleSwitchChange} />}
                        
                    />
                </FormGroup>

                <p>{props.name}</p>
                <p>{props.date}</p>
                <p>{props.trophy}</p>
            </div>
            <div className="bottomC">
                <p><strong>Description: </strong> {props.desc}</p>
                <p><strong>How To Win: </strong>{props.howToWin}</p>
                <p><strong>Progress Completed: </strong>{((props.progressCurrent/props.progressTotal)*100).toFixed(0)}%
                <LinearProgress id="progressBar" variant="determinate" value={props.progressCurrent}  sx={{ height: 10, backgroundColor: '#A9A9A9', '& .MuiLinearProgress-bar': {
      backgroundColor: '#FF9900',}}}  /></p>
                <button id="deleteChallenge" onClick={() => props.onDelete(props.name)}>Delete</button> {/* Delete button */}
            </div>
        </div>
    );
}

export default ChallengeCard;
