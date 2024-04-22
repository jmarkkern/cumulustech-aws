import React from "react"


function Membercard(props){
    return (
        <div className="card">
          <div className="top">
            <img className="img" src={props.img} alt="avatar_img" />
            <h2 className="name">{props.name}</h2>
          </div>
          <div className="bottom">
            <p className="info">{props.name} has {props.achievements} achievements</p>
            {/* <ul>For Metric:
                <li className="info">They have been on the leadeboard for {props.streak}</li>
                <li className="info">Rank: {props.rank}</li>
            </ul> */}
            {props.metrics.map(metric => (
                    <ul className="metricSummary" key={metric.id}> For {metric.m_name}: {/* Add a unique key for each list */}
                        <li className="info">They have been on the leadeboard for {metric.streak}</li>
                        <li className="info">For this metric they have a rank of {metric.rank}</li>
                    </ul>
                ))}
          </div>
        </div>
      );
}
export default Membercard;