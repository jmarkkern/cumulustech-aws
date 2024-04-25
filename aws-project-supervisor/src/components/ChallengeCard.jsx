import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function ChallengeCard(){
    return(
       <div className="ChallengeCard">
            <div className="topC">
                
                <FormGroup>
                    {/* label="Active" */}
                    <FormControlLabel control={<Switch defaultChecked />}  color="warning" /> 
                </FormGroup>
                {/* <p>[Name]</p>
                <p>[Date]</p>
                <p>[Trophy]</p>
                <p>[Point]</p> */}
                <p>[Go Beyond Your Limits]</p>
                <p>[Mar 17, 2024]</p>
                <p>[Most Improved]</p>
                <p>[+3]</p>
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