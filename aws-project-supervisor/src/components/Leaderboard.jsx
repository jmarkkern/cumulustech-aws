import React, { useState, useEffect } from "react";
import rank1 from "../ranks/rank1.png"; 
import rank2 from "../ranks/rank2.png";
import rank3 from "../ranks/rank3.png";
import rank4 from "../ranks/rank4.png";
import rank5 from "../ranks/rank5.png";
import '../global.css';



function Leaderboard() {

//current unique code for leaderboard.jsx
  const [theTeam, getTeam] = useState("");
  const [theMetric, getMetric] = useState("");
  const [theDuration, getDuration] = useState("");
  const [theSortBy, getSelectedSortBy] = useState("");
  const [sortedDeets, setSortedDeets] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option

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
    setSelectedOption(event.target.value); // Update selected option when dropdown changes
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


//Code taken from average_active_time.js
    const [names, setNames] = useState([]);
    const [visibleRows, setVisibleRows] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/api/AverageActiveTime")
            .then(response => response.json())
            .then(data => {
                setNames(data.AverageActiveTime)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const convertTimeToSeconds = (time) => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };

    const sortNames = () => {
        const sortedNames = [...names].sort((a, b) => {
            const timeA = convertTimeToSeconds(a.time);
            const timeB = convertTimeToSeconds(b.time);
            return timeB - timeA; //Largest to Smallest
        });
        setNames(sortedNames);
    };

    const incrementVisibleRows = () => {
        setVisibleRows(prevVisibleRows => prevVisibleRows + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            incrementVisibleRows();
        }, 200);

        if (visibleRows === 5) {
            clearInterval(timer);
        }
        sortNames()
        return () => clearInterval(timer);
    }, [visibleRows]);

    const rankBadges = [rank1, rank2, rank3, rank4, rank5];






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




    {/* Code taken from average_active_time.js */}
    <div className="containerLeaderboard1">
            <div className="item title">
              <h1>{selectedOption}</h1> {/* Display selected option as the title */}
            </div>
            <div className="item table">
                <table className="table3" style={{
                    paddingLeft: '20px', paddingRight: "20px", width: '100%', borderSpacing: '0px 20px'
                }}>
                    <tbody>
                        <tr>
                            <th style={{ paddingLeft: '15px', textAlign: 'left' }}>Rank</th>
                            <th style={{ width: '33%' }}>Agent</th>
                            <th style={{ width: '33%' }}>Times</th>
                        </tr>
                        {/* Edited the code here so all ranks can be shown instead of just top 5 and also removed the css reference to "fade-in" from global.css */}
                        {names.map((item, index) => (
                            <tr key={index} >
                                <td style={{ paddingLeft: '15px', textAlign: 'left', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}><img src={rankBadges[index]} className='rank-badge'></img></td>
                                <td style={{ width: '33%' }}>{item.name}</td>
                                <td style={{ width: '33%', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>{item.time}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </div >

</div>
  );
}

export default Leaderboard;

