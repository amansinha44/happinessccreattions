import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Components Import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 2. Pages Import (Check karein ki ye line 100% hai)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Journey from './pages/Journey';
import Contact from './pages/Contact'; 

function App() {
  return (
    <Router>
    <ScrollToTop />
      
      <div className="bg-[#0f172a] min-h-screen text-white font-sans selection:bg-purple-500/30">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
