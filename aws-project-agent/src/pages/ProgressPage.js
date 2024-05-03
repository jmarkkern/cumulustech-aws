import Header from '../components/Header.js';
import NavBar from '../components/NavBar.js';
import AgentInfo from '../components/AgentInfo.js';
import agentpic from '../assets/imgs/agent_default_icon.png';
import AgentMetric from '../components/AgentMetric.js';

function ProgressPage() {
    return (
        <div>
            <Header />
            <NavBar />
            <div class="containerAgentDashboard">
                <div></div>
                <div class="agentDashPic">
                    <img src={agentpic}></img>
                </div>
                <div class="agentDashName">
                    <h1>Agent First Last Name</h1>
                </div>
                <div></div><div></div><div></div>
                <AgentInfo type="level"/>
                <AgentInfo type="achievements"/>
                <AgentInfo type="streak"/>
                <div></div>
                <div class="agentDashProg">
                    <h1>Progress</h1>
                </div>
                <div></div><div></div>
                <AgentMetric type="avg_handle_time"/>
                <AgentMetric type="avg_active_time"/>
                <AgentMetric type="avg_nontalk_time"/>
                <AgentMetric type="avg_greeting_time"/>
                <div></div>
            </div>
        </div>
    )
}

export default ProgressPage;