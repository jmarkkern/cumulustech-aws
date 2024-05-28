import React from "react";

function AgentMetric({ metric }) {
    const [show, setShow] = React.useState(false);
    const metricsDesc = {
        "Avg Active Time" : "The average time, from start to finish, that an agent was working on a contact.",
        "Avg Handle Time" : "The average time, from start to finish, that a contact was connected with an agent.",
        "Avg Non-Talk Time" : "The average time of silence between an agent and a contact during a call."
    }

    var metricName = "Missing Metric"
    var agentRank = 0;
    var currentStreak = 0;
    var topStreak = 0;
    var metricDesc = "No Definition Provided"
    if (typeof metric !== "undefined" && metric != []) {
        metricName = metric.m_name
        agentRank = metric.rank
        currentStreak = metric.currentStreak
        topStreak = metric.topStreak
        metricDesc = metricsDesc[metric.m_name]
    }

    return (
        <div class="agentMetric">
            <h2 onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>{metricName}</h2>
            <div class="agentTooltip" style={show ? { visibility: "visible" } : {}}>
                {metricDesc}
            </div>
            <div class="agentNumbers">{agentRank}</div>
            <div class="agentStreak">
                <p>Current Streak: <strong><u>{currentStreak} days!</u></strong></p>
                <small>Top Streak: {topStreak} days</small>
            </div>
        </div>
    )
}

export default AgentMetric;