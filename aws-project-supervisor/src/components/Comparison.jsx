import React from "react"
import Member from "./MemberCard"
import deets from "../data/fakeMembers"
import { useState, useEffect } from 'react';


function createCard(person, theMetric) {
    return (
      <Member
        key={person.id}
        name={person.name}
        img={person.imgURL}
        rank={person.rank}
        streak={person.streak}
        metrics={person.metrics}
        achievements ={person.achievements}
        level ={person.level}

        selectedMetric={theMetric} // Pass the selected metric as a prop
      />
    );
}

//parent
function Comparison(){
  // when u select from drop down use useState to update the____ to hold selected item
  //[variable/state, function] 
    const [theTeam, getTeam] = useState("");

    const [theMetric, getMetric] = useState("");  //want to send theMetric to memberCard.jsx
    const [theDuration, getDuration] = useState("");
    const [theSortBy, getSelectedSortBy] = useState("");

    const handleTeam = (event) =>{
      getTeam(event.target.value);

    }
    const handleMetric = (event) =>{
      getMetric(event.target.value);

    }
    const handleDuration = (event) =>{
      getDuration(event.target.value);

    }
    const handleSortBy = (event) =>{
      getSelectedSortBy(event.target.value);

    }



    // Sort the data whenever the button is clicked and sort criteria is changed
    const handleButtonClick = () => {
      const sortedDeets = [...deets];
      if (theSortBy === 'ABC') {
        sortedDeets.sort((a, b) => a.name.localeCompare(b.name));
      } else if (theSortBy === 'Level') {
        sortedDeets.sort((a, b) => b.level - a.level);
      }
      setSortedDeets(sortedDeets);

    };
  
    const [sortedDeets, setSortedDeets] = useState([...deets]); // Initialize with unsorted data
    
  // TEST how userState works with this
    // const handleButtonClick = () => {
    //   window.alert(theTeam);
    //   window.alert(theMetric);
    //   window.alert(theDuration);
    //   window.alert(theSortBy);
    //   window.alert(`${theTeam}, ${theMetric}, ${theDuration}, ${theSortBy}`);
    // }
    
      
      
      


    return(

<div className="gridContainerCompare">
{/* <p>{whatMetric}</p> */}

<div className="grid-item1">
    <div className="flexMain">
        <h1>Comparison</h1>
        <select id="selectTeam" onChange={handleTeam}>
            <option value="team connections">Team Super</option>
            <option value="team connections">Team Connections</option>
        </select>
    </div>
</div>


<div class="grid-item2">
    <div class="flexcompareFilters">
        <select class="flex-item" id="selectMetric" onChange={handleMetric}>
            <option value="" disabled selected>--Select A Metric--</option>
            <option value="Avg Active Time">Average Active Time</option>
            <option value="Avg Handle Time">Average Handle Time</option>
            <option value="Avg Non-Talk Time">Average Non-Talk Time</option>
        </select>

        <select class="flex-item" id="selectDuration" onChange={handleDuration}>
            <option value="" disabled selected>--Duration--</option>
            <option value="7">Past 7 days</option>
            <option value="30">Past 30 days</option>
            <option value="60">Past 60 days</option>
            <option value="90">Past 90 days</option>
        </select>

        <select class="flex-item" id="selectFilterBy"  onChange={handleSortBy}>
            <option value="" disabled selected>--Sort By--</option>
            <option value="Level">By Level</option>
            <option value="ABC">By ABC</option>
        </select>

        {/* <label class="flex-item" id="compareAll">
            <input type="checkbox" checked="false" />
            <span class="spacer"></span>
              Compare ALL
        </label> */}

        <button class="updateButton" onClick={handleButtonClick}>Apply</button>
    </div>
</div>



<div class="grid-item3">
    {/* {sortedDeets.map(createCard)} */}
    {/* NOTE updates the props to pass to MemberCard as selectedMetric */}
    {sortedDeets.map(person => createCard(person, theMetric))}   
</div>



</div>   

    );
}
export default Comparison;