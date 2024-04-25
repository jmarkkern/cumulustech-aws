import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function ChallengeCard(){
    return(
       <div className="ChallengeCard">
            <div className="topC">
                
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Active" color="warning" />
                </FormGroup>
                <p>[Name]</p>
                <p>[Date]</p>
                <p>[Trophy]</p>
                <p>[Point]</p>
            </div>
            
            <div className="bottomC">
                <p><em>Descpition:</em></p>
                <p><em>How To Win:</em></p>
                <p><em>Point Allocation:</em></p> 
            </div>
       </div>
    );
}
export default ChallengeCard;