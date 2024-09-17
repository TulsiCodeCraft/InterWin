import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Interview from './pages/Interview';
import Position from './pages/Position';
import Company from './pages/Company';
import Navbar from './pages/Header';
import PositionDetails from './pages/PositionDetails';
import MockInterview from './pages/MockInterview';


function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Interview />} />
        
        <Route path="/position" element={<Position />} />
        <Route path="/company" element={<Company />} />
        <Route path="/position/:position" element={<PositionDetails />} />
        <Route path="/mock-interview/:position" element={<MockInterview />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;