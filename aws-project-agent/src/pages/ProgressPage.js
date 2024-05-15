import AgentTrophies from '../components/AgentTrophies.js';
import agentpic from '../assets/imgs/agent_default_icon.png';
import AgentMetric from '../components/AgentMetric.js';

function ProgressPage() {
    return (
        <div>
            <div class="containerAgentDashboard">
                <div></div>
                <div class="agentDashPic">
                    <img src={agentpic}></img>
                </div>
                <div class="agentDashName">
                    <h1>Agent First Last Name</h1>
                </div>
                <div></div><div></div>
                <AgentTrophies/>
                <div></div>
                <div class="agentDashTitle">
                    <h1>Metric Ranks</h1>
                </div>
                <div></div><div></div>
                <AgentMetric type="avg_handle_time"/>
                <AgentMetric type="avg_active_time"/>
                <AgentMetric type="avg_nontalk_time"/>
                <div></div>
            </div>
        </div>
    )
}

export default ProgressPage;