import Header from '../components/Header.js';
import NavBar from '../components/NavBar.js';
import AgentInfo from '../components/AgentInfo.js';
import agentpic from '../assets/imgs/agent_default_icon.png';

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
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 00</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 00</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 00</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 00</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProgressPage;