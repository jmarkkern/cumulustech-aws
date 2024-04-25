// Page1.js
import React, { useState, useEffect } from 'react';
import amazonLogo from "./assets/imgs/amazonLogo.svg";
import './global.css'; // Import CSS file for styling
import rank1 from "./assets/ranks/rank1.png";
import rank2 from "./assets/ranks/rank2.png";
import rank3 from "./assets/ranks/rank3.png";
import rank4 from "./assets/ranks/rank4.png";
import rank5 from "./assets/ranks/rank5.png";

const AverageHandleTime = () => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/api/AverageHandleTime")
            .then(response => response.json())
            .then(data => {
                setNames(data.AverageHandleTime)
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
            return timeA - timeB; //Smallest to Largest
        });
        setNames(sortedNames);
    };



    // State to track the number of rows to show gradually
    const [visibleRows, setVisibleRows] = useState(0);

    // Function to increment the number of visible rows
    const incrementVisibleRows = () => {
        setVisibleRows(prevVisibleRows => prevVisibleRows + 1);
    };

    useEffect(() => {
        // Start showing rows gradually
        const timer = setInterval(() => {
            incrementVisibleRows();
        }, 200); // Adjust the interval as needed

        // Clear interval when all rows are visible
        if (visibleRows === 5) {
            clearInterval(timer);
        }

        // Clear interval on component unmount
        sortNames()
        return () => clearInterval(timer);
    }, [visibleRows]);

    const rankBadges = [rank1, rank2, rank3, rank4, rank5];

    return (
        <div className="containerLeaderboard1">
            <div className="item nav_bar">
                <img className="logo" src={amazonLogo} alt="AWS Logo" />
            </div>
            <div className="item title">
                <h1>Average Handle Time</h1>
            </div>
            <div className="item table">
                <table className="table3" style={{
                    paddingLeft: '20px', paddingRight: "20px", width: '100%', borderSpacing: '0px 20px'
                }}>
                    < tbody >
                        <tr>
                            <th style={{ paddingLeft: '15px', textAlign: 'left' }}>Rank</th>
                            <th style={{ width: '33%' }}>Pic/Agent</th>
                            <th style={{ width: '33%' }}>Times</th>
                        </tr>
                        {/* Map over sorted names and render them */}
                        {names.slice(0, visibleRows).map((item, index) => (
                            <tr key={index} className="fade-in" >
                                <td style={{ paddingLeft: '15px', textAlign: 'left', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}><img src={rankBadges[index]} className='rank-badge'></img></td>
                                <td style={{ width: '33%' }}>{item.name}</td>
                                <td style={{ width: '33%', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>{item.time}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AverageHandleTime;
