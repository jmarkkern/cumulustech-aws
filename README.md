# AWS Gamified Call Center
by CumulusTech: Emily Boo, Waynelle Ize-Iyamu, Jaime Markkern, Kevin Li, Namit Srivastava
Sponsor: Rosa Thomas - Amazon Connect (AWS) Sr. Software Development Manager

## Overview
This software was designed to enhance agents' performance and motivation through the implementation of gamification techniques in call centers utilizing Amazon Connect, fostering a spirit of healthy competition and collaboration within the work environment.
This project was developed using the React framework, for functionality, and Bootstrap, for material design.

## The Repository
The files are organized by individual parts of the project, which include the centralized leaderboard (`aws-project-leaderboard`), supervisor dashboard (`aws-project-supervisor`), agent dashboard (`aws-project-agent`), and data server (`server`).

# Running the Code
In order to run the code, you must install [React](https://react.dev). To do so, you need to have [Node](https://nodejs.org/en/download/package-manager) installed. You can check what version of Node you have by running:
```
node --version
```
Then you can install React by running:
```
npm install -g create-react-app
```
There are independencies for each part of the project. Navigate into the folders from the main project folder (`cd aws-project-leaderboard`, `cd aws-project-supervisor`, `cd aws-project-agent`, `cd server`), individually, and run:
```
npm install
```
First, run the server. Data will be fetched from the server in order to be displayed on the front-end. If you forget to run the server, nothing will show up in the interface. Start the server by running:
```
npm run dev
```
Then, you are able to run the user interfaces of the project!
Running the centralized leaderboard:
```
cd aws-project-leaderboard
npm start --open
```
Running the supervisor dashboard:
```
cd aws-project-supervisor
npm start --open
```
Running the agent dashboard:
```
cd aws-project-agent
npm start --open
```
