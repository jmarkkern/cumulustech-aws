import React, { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function ChallengeCard(props) {
    const [active, setActive] = useState(props.active);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    const handleSwitchChange = (e) => {
        const newValue = e.target.checked;
        setActive(newValue);
        // Perform any other actions based on the new value, such as updating data or triggering events
    };

    return (
        <div className="ChallengeCard">
            <div className="topC">
                {/* Switch component with controlled value */}
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={active} onChange={handleSwitchChange} />}
                        color="warning"
                    />
                </FormGroup>
                <p>{props.name}</p>
                <p>{props.date}</p>
                <p>{props.trophy}</p>
            </div>
            <div className="bottomC">
                <p><strong>Description: </strong> {props.desc}</p>
                <p><strong>How To Win: </strong>{props.howToWin}</p>
                <button onClick={() => props.onDelete(props.name)}>Delete</button> {/* Delete button */}
            </div>
        </div>
    );
}

export default ChallengeCard;
