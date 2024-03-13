// Carousel.js
import React, { useState, useEffect } from 'react';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';

const Carousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [<Page1 />, <Page2 />, <Page3 />];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPage(prevPage => (prevPage + 1) % pages.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [pages.length]);

    return (
        <div className="carousel-container">
            {pages[currentPage]}
        </div>
    );
};

export default Carousel;
