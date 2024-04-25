import React from "react";
import Heading from "./Header";
import SubNav from "./SubNavigation"
import Compare from "./Comparison"
import ChallengePage from './Challenges'

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
          {/* Other routes for your application */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;