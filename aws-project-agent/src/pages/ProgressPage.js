import AgentMetric from '../components/AgentMetric.js';
import { useState, useEffect } from 'react';
import AgentTrophy from '../components/AgentTrophies.js';
import Motivation from '../components/motivation.jsx'

function ProgressPage() {
    const [agent, setAgent] =useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/jessicaLyn")
            .then(response => response.json())
            .then(data => {
                setAgent(data)
       
            })
            .catch(error => {
                console.error('Error fetching agent data:', error);
            });
    }, []);


    
   
    const listofTrophies = agent.Trophies ? agent.Trophies : [];
    const metrics = agent.metrics ? agent.metrics : [];


    return (
        <div>
            <div class="containerAgentDashboard">
                <div></div>
                <div class="agentDashPic">
                    <img src={agent.imgURL}></img>
                </div>

                <div class="agentDashName">
                    <h1>{agent.FirstName} {agent.LastName}</h1>
                </div>
               
                <AgentTrophy numTrophies={listofTrophies}/>
               
                <div class="agentDashTitle">
                    <h1>Metric Ranks</h1>
                </div>

                <div></div><div></div>

                {metrics.map(metric => (
              <AgentMetric metric ={metric}/>   //show the metrics rank+top streak
                ))}
                
                <div></div>
               
            </div>


            <div className="agentMotivation">
                <Motivation />
            </div>
            
        </div>
    )
}

export default ProgressPage;