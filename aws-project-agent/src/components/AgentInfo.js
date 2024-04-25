import React from "react";

const infoType = {
    level: {
        name: "Level",
        desc: "Your level is based on your progress on metrics and assigned challenges.",
    },
    achievements: {
        name: "Achievements",
        desc: "This is the number of badges and trophies you've earned. Great job!",
    },
    streak: {
        name: "Streak",
        desc: "This is the number of days you have been on a leaderboard. Keep it up!",
    },
};

function AgentInfo({type}) {
    const [show, setShow] = React.useState(false);

    return(
        <div class="agentDashInfo" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <h2>{infoType[type].name}</h2>
            <p class="agentDashNum">00</p>
            <div class="agentDashTooltip" style={show? {visibility: "visible"}:{}}>
                {infoType[type].desc}
            </div>
        </div>
    )
}

export default AgentInfo;