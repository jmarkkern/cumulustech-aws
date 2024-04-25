import React from "react"
import Member from "./MemberCard"
import deets from "../data/fakeMembers"
import { useState, useEffect } from 'react';


function createCard(person) {
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
      />
    );
}

function Comparison(){
  // when u select from drop down use useState to update the____ to hold selected item
  //[variable/state, function] 
    const [theTeam, getTeam] = useState("");

    const [theMetric, getMetric] = useState("");
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



    useEffect(() => {
      // Sort the data whenever the sort criteria change
      const sortedDeets = [...deets];
      if (theSortBy === "ABC") {
        sortedDeets.sort((a, b) => a.name.localeCompare(b.name));
      } else if (theSortBy === "Level") {
        sortedDeets.sort((a, b) => a.level - b.level);
      }
      setSortedDeets(sortedDeets);
    }, [theSortBy]); // This effect will re-run whenever theSortBy changes
    const [sortedDeets, setSortedDeets] = useState([...deets]); // Initialize with unsorted data
    



    const handleButtonClick = () => {
      window.alert(theTeam);
      window.alert(theMetric);
      window.alert(theDuration);
      window.alert(theSortBy);
      window.alert(`${theTeam}, ${theMetric}, ${theDuration}, ${theSortBy}`);
      // console.log("Selected Item 2:", selectedItem2);
      // console.log("Selected Item 3:", selectedItem3);
    }



    // const sortedDeets = [...deets];
    // if (theSortBy !== "") {
    //     const sortedDeets = [...deets];
    //     if (theSortBy === "ABC") {  // Sort by alph name
    //       sortedDeets.sort((a, b) => a.name.localeCompare(b.name));
    //       window.alert("resorting by abc");} 
    //     else if (theSortBy === "Level") {
    //       // Sort by level
    //       sortedDeets.sort((a, b) => a.level - b.level)};
    //     }

    
      
      
      


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
            <option value="avgActive">Average Active Time</option>
            <option value="avgHandle">Average Handle Time</option>
            <option value="avgNonTalk">Average Non-Talk Time</option>
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
    {sortedDeets.map(createCard)}
</div>



</div>   

    );
}
export default Comparison;