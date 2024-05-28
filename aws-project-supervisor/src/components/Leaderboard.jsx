import React, { useState, useEffect } from "react";
import rank1 from "../assets/ranks/rank1.png";
import rank2 from "../assets/ranks/rank2.png";
import rank3 from "../assets/ranks/rank3.png";
import rank4 from "../assets/ranks/rank4.png";
import rank5 from "../assets/ranks/rank5.png";
import '../global.css';
import { fetchData } from '../fetchData.js';

const Leaderboard = () => {
  const [selectedOption, setSelectedOption] = useState("Avg Active Time");
  const [names, setNames] = useState([]);

  useEffect(() => {
    if (selectedOption) {
      let url = '';
      let dataName = ''
      if (selectedOption === "Avg Active Time") {
        url = "http://localhost:4000/api/AverageActiveTime";
        dataName = "AverageActiveTime"
      } else if (selectedOption === "Avg Handle Time") {
        url = "http://localhost:4000/api/AverageHandleTime";
        dataName = "AverageHandleTime"
      } else if (selectedOption === "Avg Non-Talk Time") {
        url = "http://localhost:4000/api/AverageNonTalkTime";
        dataName = "AverageNonTalkTime"
      }
      fetchData(url, (data) => {
        if (data) {
          if (dataName === "AverageActiveTime") {
            data = data.AverageActiveTime
          }
          else if (dataName === "AverageHandleTime") {
            data = data.AverageHandleTime
          }
          else if (dataName === "AverageNonTalkTime") {
            data = data.AverageNonTalkTime
          }
          if (Array.isArray(data)) {
            const sortedData = sortNames(data);
            setNames(sortedData); // Updated for reading maps error
          }
          else {
            setNames([])
          }
        }
      });
    }
  }, [selectedOption]);

  const convertTimeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const sortNames = (data) => {
    const sortedNames = [...data].sort((a, b) => {
      const timeA = convertTimeToSeconds(a.time);
      const timeB = convertTimeToSeconds(b.time);
      return selectedOption === "Avg Active Time" ? timeB - timeA : timeA - timeB;
    });
    return sortedNames;
  };

  const handleMetric = (event) => {
    setSelectedOption(event.target.value);
  };

  const rankBadges = [rank1, rank2, rank3, rank4, rank5];

  return (
    <div className="grid-item1">
      <div className="flexMain">
        <h1>Leaderboard</h1>
      </div>
      <div className="grid-item2">
        <div className="flexcompareFilters">
          <select className="flex-item" id="selectMetric" onChange={handleMetric}>
            {/* <option value="" disabled selected>Select A Metric</option> */}
            <option value="Avg Active Time">Average Active Time</option>
            <option value="Avg Handle Time">Average Handle Time</option>
            <option value="Avg Non-Talk Time">Average Non-Talk Time</option>
          </select>
        </div>
      </div>
      <div className="containerLeaderboard1">
        <div className="item title">
          <h1>{selectedOption}</h1>
        </div>
        <div className="item table">
          {names.length > 0 ? (
            <table className="table3">
              <tbody>
                <tr>
                  <th>Rank</th>
                  <th>Agent</th>
                  <th>Time</th>
                </tr>
                {names.map((item, index) => (
                  <tr key={index} >
                    <td>
                      {index < 5 ? (
                        rankBadges[index] && <img src={rankBadges[index]} className='rank-badge' alt={`rank${index + 1}`} />
                      ) : (
                        index + 1
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
