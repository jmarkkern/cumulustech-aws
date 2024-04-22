import React from "react";
import Heading from "./Header";
import SubNav from "./SubNavigation"
import Compare from "./Comparison"
import ChallengePage from './Challenges'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>  {/* Wrap the entire application with Router */}
      <div>
        <Heading />
        <SubNav />  
        <Routes>
          <Route path="/challenges" element={<ChallengePage />} />
          {/* Other routes for your application */}
        </Routes>
        <Compare />
      </div>
    </Router>
  );
}
export default App;