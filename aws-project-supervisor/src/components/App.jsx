import React from "react";
import Heading from "./Header";
import SubNav from "./SubNavigation"
import Compare from "./Comparison"
import ChallengePage from './Challenges'
import Trophy from "./Trophy";
import Leaderboard from './Leaderboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <BrowserRouter>  {/* Wrap the entire application with Router */}
      <div>
        <Heading />
        <SubNav />  
        <Routes>
          <Route path="/" element={<Compare />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/trophy" element={<Trophy />} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          {/* Other routes for your application */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;