import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">H</div>
              <span className="text-xl font-bold text-white italic">Happiness Ccreations</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming Lives Through Numerology & Vastu. Unlock your true potential with Amit Gupta's expert guidance.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Youtube size={20} />} href="https://www.youtube.com/@happinessccreattions9" color="hover:bg-red-600" />
              <SocialIcon icon={<Instagram size={20} />} href="https://www.instagram.com/happinessccreattions/" color="hover:bg-pink-600" />
              <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/9amitgupta" color="hover:bg-blue-600" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Amit Gupta" />
              <FooterLink to="/services" text="Our Services" />
              <FooterLink to="/journey" text="Journey" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-purple-400 shrink-0 mt-1" />
                <span>Sector 51, Noida,<br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-purple-400 shrink-0" />
                <span>+91-7428552116</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-purple-400 shrink-0" />
                <span>9amitgupta99@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Bonus) */}
          <div>
            <h3 className="text-white font-bold mb-6">Weekly Wisdom</h3>
            <p className="text-gray-400 text-sm mb-4">Get lucky numbers and vastu tips directly in your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-purple-500 outline-none transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Happiness Creations. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon = ({ icon, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:text-white hover:-translate-y-1 ${color}`}
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-400 text-sm hover:text-purple-400 transition-colors flex items-center gap-2 group">
      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {text}
    </Link>
  </li>
);

export default Footer;
