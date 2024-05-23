import React from "react";

function AgentInfo({type}) {
    const [show, setShow] = React.useState(false);

    const agentNum = 0;

    return(
        <div class="agentDashTrophies" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <h2>Trophies</h2>
            <p class="agentDashNum">12</p>
            {/* <p class="agentDashNum">{agentNum}</p> */}
            <div class="agentDashTooltip" style={show? {visibility: "visible"}:{}}>
                This is the number of trophies you've earned. Great job!
            </div>
        </div>
    )
}

export default AgentInfo;