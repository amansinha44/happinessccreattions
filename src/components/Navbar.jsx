import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Current page pata karne ke liye

  // Scroll effect detect karne ke liye
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Links Array (Yahan Services add kiya hai)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' }, // <--- Ye Naya Menu Hai
    { name: 'Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform">H</div>
          <span className="text-xl font-bold tracking-tight text-white italic">Happiness Ccreations</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors relative group ${isActive(link.path) ? 'text-purple-400' : 'text-gray-300 hover:text-purple-400'}`}
            >
              {link.name}
              {/* Active/Hover Underline */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] p-6 flex flex-col space-y-4 animate-fade-in-down absolute w-full top-full left-0 shadow-2xl border-t border-white/10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-lg font-medium block ${isActive(link.path) ? 'text-purple-400' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
