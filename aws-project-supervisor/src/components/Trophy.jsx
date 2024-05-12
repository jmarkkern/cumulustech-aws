import TrophyCards from "./TrophyCards";
import TrophyDistribution from "./TrophyDistribution";
import TrophyTrend from "./TrophyTrend";
import React, { useState } from "react";


// will remove later and instead use fakedata
const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];


function Trophy(){
        const [showDistribution, setShowDistribution] = useState(true);

  const handleDistributionClick = () => {
    setShowDistribution(true);
  };

  const handleTrendClick = () => {
    setShowDistribution(false);
  };

  return (
    <div className="trophyPage">
      <div className="trophyAnalysis">
        <h1>Trophy Overview Analysis</h1>
        <button onClick={handleDistributionClick}>Distribution</button>
        <button onClick={handleTrendClick}>Trend</button>
        {showDistribution ? <TrophyDistribution greenData={greenData} /> : <TrophyTrend />}
      </div>
      <div className="trophyCards">
        <h1>Trophies</h1>
        <TrophyCards />
      </div>
    </div>
  );
}
export default Trophy;
