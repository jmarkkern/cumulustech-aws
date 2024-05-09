import React from "react"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { getChallengeData } from '../data/dataChallenge'; 


function ChallengeCard(props){
    console.log("Props:", props); 
    const inputData = getChallengeData(); // Get the array from dataChallenge.js
    console.log(inputData);


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
                <p>{props.name}</p>
                <p>{props.date}</p>
                <p>{props.tropy}</p>
                <p>{props.points}</p>
            </div>
            
            <div className="bottomC">
                <p><strong>Descpition: </strong> {props.desc}</p>
                <p><strong>How To Win: </strong>{props.howToWin}</p>
                <p><strong>Point Allocation: </strong></p> 
            </div>
       </div>
    );
}
export default ChallengeCard;