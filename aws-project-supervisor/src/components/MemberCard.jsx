import React from "react"
import { useState } from "react"

import Icon from "../assets/ranks/svg/diamond.jsx"
import BronzeIcon from "../assets/ranks/svg/bronze.jsx"
import Rank1Icon from "../assets/ranks/svg/rank1.jsx"
import Rank2Icon from "../assets/ranks/svg/rank2.jsx"
import Rank3Icon from "../assets/ranks/svg/rank3.jsx"
import Rank4Icon from "../assets/ranks/svg/rank4.jsx"
import Rank5Icon from "../assets/ranks/svg/rank5.jsx"



// takes all the props that are named in Comparison.jsx 
function Membercard(props) {
  console.log("Props:", props);
  console.log("Metrics:", props.metrics);

  let filteredMetrics;

  if (props.selectedMetric !== "") {
    filteredMetrics = props.metrics.filter((metric) => metric.m_name === props.selectedMetric);
  }
  else {
    filteredMetrics = props.metrics;
  }




  return (
    <div className="card">
      <div className="top">
        <img className="img" src={props.img} alt="avatar_img" />
        <h2 className="name">{props.name}</h2>
      </div>
      <div className="bottom">
        <p className="info">{props.name} has <strong>{props.achievements} trophies!</strong></p>
        {/* <ul>For Metric:
                <li className="info">They have been on the leadeboard for {props.streak}</li>
                <li className="info">Rank: {props.rank}</li>
            </ul> */}
        {/* {props.metrics.map(metric => ( */}


        {/* {agentDetail.metrics.map(metric => (
            <div key={metric.id}>
              <p>Metric Name: {metric.m_name}</p>
              <p>Max Streak: {metric.maxStreak}</p>
              <p>Current Streak: {metric.currStreak}</p>
              <p>Rank: {metric.rank}</p>
            </div>
          ))}; */}



        {filteredMetrics.map((metric) => (
          <div>

            <div className="rankIcons">
              <h3>{metric.m_name}</h3>
              {metric.rank === 1 && <Rank1Icon />}
              {metric.rank === 2 && <Rank2Icon />}
              {metric.rank === 3 && <Rank3Icon />}
              {metric.rank === 4 && <Rank4Icon />}
              {metric.rank === 5 && <Rank5Icon />}
              {metric.rank > 5 && <BronzeIcon number={metric.rank} />}
              <div className="memberStreaks">
                <p id="currentStreak-top">Current Streak: {metric.currStreak} </p>
                <p id="maxStreak-bottom">Max Streak: {metric.maxStreak}</p>
                {/* <p>Current Streak: {metric.currStreak} </p>
                      <p>Max Streak: {metric.maxStreak}</p> */}
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
}
export default Membercard;