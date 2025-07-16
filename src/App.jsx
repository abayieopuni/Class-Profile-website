// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only Routes and Route
import Navbar from './components/Navbar';
import Home from './components/Home';
import Airmen from './components/Airmen';
import Reflections from './components/Reflections';

function App() {
  return (
    <div className="isolate font-sans scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airmen" element={<Airmen />} />
        <Route path="/reflections" element={<Reflections />} />
      </Routes>
    </div>
  );
}

export default App;
