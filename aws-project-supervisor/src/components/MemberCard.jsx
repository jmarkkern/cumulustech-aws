import React from "react"


function Membercard(props){
    return (
        <div className="card">
          <div className="top">
            <img className="img" src={props.img} alt="avatar_img" />
          </div>

          <div className="middle">
             <h2 className="name">{props.name}</h2>
          </div>

          <div className="bottom">
            <p className="info">They are rank {props.rank}</p>
            <p className="info">They have {props.achievements} achievements</p>
            <ul>For Metric:
                <li className="info">They have been on the leadeboard for {props.streak}</li>
            </ul>
          </div>
        </div>
      );
}
export default Membercard;