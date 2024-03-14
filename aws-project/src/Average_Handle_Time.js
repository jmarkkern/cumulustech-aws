// Page1.js
import React, { useState, useEffect } from 'react';
import amazonLogo from "./assets/imgs/amazonLogo.svg";
import './global.css'; // Import CSS file for styling

const Average_Handle_Time = () => {
    const [names, setNames] = useState([
        { name: 'John', time: '00:14:22' },
        { name: 'Alice', time: '00:17:38' },
        { name: 'Bob', time: '00:18:11' },
        { name: 'Eve', time: '00:12:57' },
        { name: 'Charlie', time: '00:19:21' },
        { name: 'Jane', time: '00:14:08' },
        { name: 'Allison', time: '00:19:14' },
        { name: 'Charlie', time: '00:12:19' },
        { name: 'William', time: '00:17:10' }
    ]);

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

    useEffect(() => {
        sortNames();
    }, []);

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
        return () => clearInterval(timer);
    }, [visibleRows]);

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
                                <td style={{ paddingLeft: '15px', textAlign: 'left', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>{index + 1}</td>
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

export default Average_Handle_Time;
