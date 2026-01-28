import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
// Optional: create this file later
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-purple-500/30">
        <Navbar />

        <main className="pb-12"> {/* ← optional: give some breathing room before footer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all route - recommended */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;