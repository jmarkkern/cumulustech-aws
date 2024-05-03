import React from "react";

const infoType = {
    avg_handle_time: {
        name: "Avg Handle Time",
        desc: "The average time, from start to finish, that a contact was connected with an agent (average handle time).",
    },
    avg_active_time: {
        name: "Avg Active Time",
        desc: "The average time, from start to finish, that an agent was working on a contact (average active time).",
    },
    avg_nontalk_time: {
        name: "Avg Non-Talk Time",
        desc: "The average of total non-talk time in a voice conversation.",
    },
    avg_greeting_time: {
        name: "Avg Greeting Time",
        desc: "The average first response time of agents on chat, how quickly they engage with customers after joining the chat."
    }
};

function AgentMetric({type}) {
    const [show, setShow] = React.useState(false);

    const agentLvl = 0;
    const percentage = 15;
    const prog = percentage * 188.5 /100;

    return(
        <div class="agentDashMetric" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <h2>{infoType[type].name}</h2>
            <svg height="137" width="120" id={type + "_canvas"}>
                <circle r="50" cx="60" cy="75" fill="white" stroke="#FF9900" stroke-width="15"></circle>
                <circle r="30" cx="60" cy="75" fill="white" stroke="#FFFFFF" stroke-width="60" stroke-dasharray= {prog +" 188.5"}></circle>
            </svg>
            <p class="metricLvl">Level {agentLvl}</p>
            <div class="agentDashTooltip" style={show? {visibility: "visible"}:{}}>
                {infoType[type].desc}
            </div>
        </div>
    )
}

export default AgentMetric;