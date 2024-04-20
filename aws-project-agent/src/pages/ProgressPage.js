import NavBar from '../components/NavBar.js'
import agentpic from '../assets/imgs/agent_default_icon.png'

function ProgressPage() {
    return (
        <div>
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
                <div class="agentDashInfo">
                    <h2>Rank</h2>
                    <p class="agentDashNum">12</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Achievements</h2>
                    <p class="agentDashNum">123</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Streak</h2>
                    <p class="agentDashNum">12</p>
                </div>
                <div></div>
                <div class="agentDashProg">
                    <h1>Progress</h1>
                </div>
                <div></div><div></div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 12</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 12</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 12</p>
                </div>
                <div class="agentDashInfo">
                    <h2>Metric</h2>
                    <p>Level 12</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProgressPage;