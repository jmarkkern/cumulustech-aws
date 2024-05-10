import React, { useState, useEffect } from "react";


function Leaderboard() {

  const [theTeam, getTeam] = useState("");
  const [theMetric, getMetric] = useState("");
  const [theDuration, getDuration] = useState("");
  const [theSortBy, getSelectedSortBy] = useState("");
  const [sortedDeets, setSortedDeets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/deets');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        setSortedDeets(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data once when component mounts

  const handleTeam = (event) => {
    getTeam(event.target.value);
  };
  const handleMetric = (event) => {
    getMetric(event.target.value);
  };
  const handleDuration = (event) => {
    getDuration(event.target.value);
  };
  const handleSortBy = (event) => {
    getSelectedSortBy(event.target.value);
  };

  const handleButtonClick = () => {
    const sortedDeetsCopy = [...sortedDeets];
    if (theSortBy === 'ABC') {
      sortedDeetsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (theSortBy === 'Level') {
      sortedDeetsCopy.sort((a, b) => b.level - a.level);
    }
    setSortedDeets(sortedDeetsCopy);
  };






  return (
    <div className="grid-item1">
    <div className="flexMain">
        <h1>Leaderboard</h1>
    </div>

    <div class="grid-item2">
    <div class="flexcompareFilters">
        <select class="flex-item" id="selectMetric" onChange={handleMetric}>
            <option value="" disabled selected>Select A Metric</option>
            <option value="Avg Active Time">Average Active Time</option>
            <option value="Avg Handle Time">Average Handle Time</option>
            <option value="Avg Non-Talk Time">Average Non-Talk Time</option>
            <option value="Abandonment Rate">Abandonment Rate</option>
            <option value="After Contact Work">After Contact Work</option>
            <option value="Average Greeting Time Agente">Average Greeting Time Agent</option>
            <option value="Service Level">Service Level</option>
        </select>

    </div>


    <button class="updateButton" id="leaderboardbutton" >All Time</button>
    <button class="updateButton" id="leaderboardbutton1" >This week</button>
</div>



</div>
  );
}

export default Leaderboard;

