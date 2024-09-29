import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import LandingPage from './Components/LandingPage';
import Instructions from './Components/Instructions.tsx';
import ComponentsUsed from './Components/ComponentsUsed.tsx';
import ViewEmergencyUses from './Components/ViewEmergencyUses.tsx';
import Parameters from './Components/Parameters';
import AboutUs from './Components/AboutUs'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/components-used" element={<ComponentsUsed />} />
          <Route path="/view-emergency-uses" element={<ViewEmergencyUses />} />
          <Route path="/view-parameters" element={<Parameters />} />
          <Route path="/about-us" element={<AboutUs />} /> 
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
