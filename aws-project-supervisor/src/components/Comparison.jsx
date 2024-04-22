import React from "react"
import Member from "./MemberCard"
import deets from "../data/fakeMembers"

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
      />
    );
}

function Comparison(){
    return(

<div className="gridContainerCompare">

<div className="grid-item1">
    <div className="flexMain">
        <h1>Comparison</h1>
        <select id="selectTeam">
            <option value="team connections">Team Super</option>
            <option value="team connections">Team Connections</option>
        </select>
    </div>
</div>


<div class="grid-item2">
    <div class="flexcompareFilters">
        <select class="flex-item" id="selectMetric">
            <option value="" disabled selected>--Select A Metric--</option>
            <option value="avgActive">Average Active Time</option>
            <option value="avgHandle">Average Handle Time</option>
            <option value="avgNonTalk">Average Non-Talk Time</option>
        </select>

        <select class="flex-item" id="selectDuration">
            <option value="" disabled selected>--Duration--</option>
            <option value="7">Past 7 days</option>
            <option value="30">Past 30 days</option>
            <option value="60">Past 60 days</option>
            <option value="90">Past 90 days</option>
        </select>

        <select class="flex-item" id="selectFilterBy">
            <option value="" disabled selected>--Sort By--</option>
            <option value="place">By Place</option>
            <option value="ABC">By ABC</option>
        </select>

        <label class="flex-item" id="compareAll">
            <input type="checkbox" checked="false" />
            <span class="spacer"></span>
              Compare ALL
        </label>

        <button class="updateButton">Apply</button>
    </div>
</div>


<div class="grid-item3">
    {/* make sure to import later */}
    {/* <div class="trophy">
        <img src="assets/imgs/trophy.svg" alt="Trophy" />
    </div> */}
    {deets.map(createCard)}
</div>

  {/* <div>
  <button class="super-button">Team Super</button>
  <i class="settings-icon">&#9881;</i>
  </div>


  <div class="row">
    <span id="compare">Comparison</span>
    <select id="metricSelect">
      <option value="metric">Metric</option>
      <option value="abandonmentRate">Abandonment Rate</option>
    </select>
    <select id="durationSelect">
      <option value="duration">Duration</option>
      <option value="1week">1 Week</option>
    </select>
    <select id="sortBySelect">
      <option value="sort">Sort By</option>
      <option value="place">By Place</option>
      <option value="abc">By ABC</option>
      <option value="name">By Name</option>
    </select>
    <button class="update-button">Update</button>
  </div>
  


  <div>
    <input type="checkbox" id="myCheckbox" name="myCheckbox" />
    <label for="myCheckbox">Compare All</label>

  </div>

  <div class="container">
  <div class="card">
    <img src="assets/imgs/Membercard.svg" alt="member1" />
  </div>

  <div class="trophy">
    <img src="assets/imgs/trophy.svg" alt="Trophy" />
  </div>


  <div class="card2">
    <img src="assets/imgs/Membercard2.svg" alt="member2" />
  </div>
</div> */}


</div>   

    );
}
export default Comparison;