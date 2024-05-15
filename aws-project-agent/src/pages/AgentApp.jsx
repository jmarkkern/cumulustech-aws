import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header.js';
import NavBar from '../components/NavBar.js';
import AgentTrophies from '../components/AgentTrophies.js';
import agentpic from '../assets/imgs/agent_default_icon.png';
import AgentMetric from '../components/AgentMetric.js';
import ProgressPage from "./ProgressPage.js";
import AgentChallenge from "./agentChallengePage.jsx"


function AgentApp() {
    return (
        <BrowserRouter>  {/* Wrap the entire application with Router */}
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<ProgressPage />} />
                {/* <Route path="/teamLeaderboard" element={<TeamLeaderboard />} /> */}
                <Route path="/challenges" element={<AgentChallenge />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default AgentApp;
