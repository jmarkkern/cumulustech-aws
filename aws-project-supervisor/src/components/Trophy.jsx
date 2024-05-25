
import TrophyCards from "./TrophyCards";
import React, { useState } from "react";
import TrophyDistribution from "./TrophyDistribution";
import TrophyTrend from "./TrophyTrend";

// will remove later and instead use fakedata
const greenData = [{ x: 'Customer Service Hero', y: 10 }, { x: 'Most Improved', y: 5 }, { x: 'Most Efficient', y: 15 }];
const blueData = [
  { x: 'Customer Service Hero', y: 10, timestamp: '2023-05-01' },
  { x: 'Most Improved', y: 5, timestamp: '2023-05-02' },
  { x: 'Most Efficient', y: 15, timestamp: '2023-05-03' }
];

function Trophy() {
  const [showDistribution, setShowDistribution] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleDistributionClick = () => {
    setShowDistribution(true);
  };

  const handleTrendClick = () => {
    setShowDistribution(false);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter(item => item !== value));
    }
  };

  return (
    <div className="trophyPage">
      <div className="trophyAnalysis">
        <h1>Trophy Overview Analysis</h1>
        {/* distribution button */}
        <button className={`distributionButton ${showDistribution ? 'active' : ''}`} onClick={handleDistributionClick}>
          Distribution
        </button>
        {/* trend button */}
        <button className={`trendButton ${!showDistribution ? 'active' : ''}`} onClick={handleTrendClick}>
          Trend
        </button>
        {/* Checkbox buttons */}
        <div className="checkboxContainer"> {/* Container for checkbox buttons */}
            {/* Checkbox buttons */}
            {greenData.map(item => (
              <label key={item.x}>
                <input
                  type="checkbox"
                  value={item.x}
                  checked={selectedValues.includes(item.x)}
                  onChange={handleCheckboxChange}
                />
                {item.x}
              </label>
            ))}
        </div>
        {/* distribution and trophy will grab data and display it */}
        {showDistribution ? (
          <TrophyDistribution greenData={greenData} selectedValues={selectedValues} />
        ) : (
          <TrophyTrend blueData={blueData} selectedValues={selectedValues} />
        )}
      </div>
      <div className="trophyCards">
        
        <TrophyCards />
      </div>
    </div>
  );
}

export default Trophy;



