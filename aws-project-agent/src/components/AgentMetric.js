import React from "react";

function AgentMetric({metric}) {
    const [show, setShow] = React.useState(false);
    var metricName = "Missing Metric"
    var agentRank = 0;
    var currentStreak = 0;
    var topStreak = 0;
    if( typeof metric != "undefined"  && metric != [] ){ 
        metricName =metric.m_name
        agentRank = metric.rank
        currentStreak = metric.currentStreak
        topStreak = metric.topStreak
        
    }

    return(
        <div class="agentDashMetric">
            <h2 onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>{metricName}</h2>
            <div class="agentDashTooltip" style={show? {visibility: "visible"}:{}}>
                {""}
            </div>
            <p class="agentDashNum">{agentRank}</p>
            <div class="agentDashStreak">
                <p>Current Streak: <strong><u>{currentStreak} days!</u></strong></p>
                <small>Top Streak: {topStreak} days</small>
            </div>
        </div>
    )
}

export default AgentMetric;