import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Airmen from './components/Airmen';
import Reflections from './components/Reflections';

function App() {
  return (
    <div className="isolate font-sans scroll-smooth">
      <Navbar />
      <Home />
      <Airmen />
      <Reflections />
    </div>
  );
}

export default App;
