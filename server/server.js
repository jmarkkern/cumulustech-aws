const express = require("express")
const cors = require('cors');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const app = express()
app.use(cors());
app.use(express.json());

//GET FUNCTIONS
app.get("/api/AverageActiveTime", (req, res) => {
    const filePath = path.join(__dirname, 'data/leaderboard/AverageActiveTime.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});



app.get("/api/AverageHandleTime", (req, res) => {
    const filePath = path.join(__dirname, 'data/leaderboard/AverageHandleTime.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});


app.get("/api/AverageNonTalkTime", (req, res) => {
    const filePath = path.join(__dirname, 'data/leaderboard/AverageNonTalkTime.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});


app.get("/api/deets", (req, res) => {
    const filePath = path.join(__dirname, 'data/supervisor/allAgents.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

//Manipulate ranking before returned 
app.get("/api/jessicaLyn", (req, res) => {
    const filePath = path.join(__dirname, 'data/agents/jessicaLyn.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

//get for challenge data
app.get("/agentChallenges", (req, res) => {
    const filePath = path.join(__dirname, 'data/supervisor/challenge.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

//get for trophy data
app.get("/trophy-data", (req, res) => {
    const filePath = path.join(__dirname, 'data/supervisor/trophy.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});



//  POST DATA HANDLING --------------------------------------------------------------------------------------------------------------------------------------
// Post to Challenge.json
app.post('/challenge-data', async (req, res) => {
    filePath = path.join(__dirname, 'data/supervisor/challenge.json');
    try {
        const jsonData = JSON.stringify(req.body, null, 2); 
        await fsp.writeFile(filePath, jsonData);
        console.log(`Challenge Data written successfully to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
    res.json({ "message": "Challenge Data Form Submitted Successfully to Server" })
});


//Post to trophy.json
app.post('/trophy-data', async (req, res) => {
    filePath = path.join(__dirname, 'data/supervisor/trophy.json');
    try {
        const jsonData = JSON.stringify(req.body, null, 2); 
        await fsp.writeFile(filePath, jsonData);
        console.log(`Trophy Data written successfully to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
    //implement add trophy title to all agents
    res.json({ "message": "Trophie Form Submitted Successfully to Server" })
});





app.listen(4000, () => { console.log("server started in port 4000") })