import React from "react";

function AgentInfo({type}) {
    const [show, setShow] = React.useState(false);

    const agentNum = 0;

    return(
        <div class="agentDashTrophies">
            <h2 onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>Trophies</h2>
            <div class="agentDashTooltip" style={show? {visibility: "visible"}:{}}>
                Trophies are earned through individual efforts toward skills and collaboration. Keep it up!
            </div>
            <p class="agentDashNum">{agentNum}</p>
        </div>
    )
}

export default AgentInfo;