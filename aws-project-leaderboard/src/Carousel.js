// Carousel.js
import React, { useState, useEffect } from 'react';
import AverageNonTalkTime from './Average_Non_Talk_Time.js';
import AverageActiveTime from './Average_Active_Time.js';
import AverageHandleTime from './Average_Handle_Time.js';

const Carousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [<AverageNonTalkTime />, <AverageActiveTime />, <AverageHandleTime />];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPage(prevPage => (prevPage + 1) % pages.length);
        }, 8000); // 1000ms = 1sec
        return () => clearInterval(intervalId);
    }, [pages.length]);

    return (
        <div className="carousel-container">
            {pages[currentPage]}
        </div>
    );
};

export default Carousel;
