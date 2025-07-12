// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Airmen from './components/Airmen';
import Reflections from './components/Reflections';

function App() {
  return (
    <Router>
      <div className="isolate font-sans scroll-smooth">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airmen" element={<Airmen />} />
          <Route path="/reflections" element={<Reflections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
