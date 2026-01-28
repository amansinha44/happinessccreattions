import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Whatsapp, Youtube, Send, Calendar, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 animate-fade-in-down">
          <span className="text-purple-400 tracking-widest uppercase text-xs font-bold mb-2 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Start Your Journey to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-lg">
              Happiness Today
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you need a consultation or just want to say hi, we are here to guide you towards a better future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT SIDE: INFO & MAP --- */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Contact Details Cards */}
            <div className="grid gap-6">
              <ContactCard 
                icon={<MapPin className="text-red-400" />} 
                title="Visit Us" 
                value="Sector 51, Noida, Uttar Pradesh, India"

http://googleusercontent.com/map_location_reference/1
                subValue="[Sector 51](http://googleusercontent.com/map_location_reference/0)"
              />
              <ContactCard 
                icon={<Mail className="text-blue-400" />} 
                title="Email Us" 
                value="9amitgupta99@gmail.com" 
                isLink={true} 
                href="mailto:9amitgupta99@gmail.com"
              />
              <ContactCard 
                icon={<Phone className="text-green-400" />} 
                title="Phone / WhatsApp" 
                value="+91-7428552116" 
                isLink={true} 
                href="https://wa.me/917428552116"
              />
            </div>

            {/* Social Media Section */}
            <div className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-gray-400 text-sm mb-6">Follow us for daily tips and lucky numbers.</p>
              
              <div className="flex gap-4">
                <SocialBtn 
                  icon={<Youtube size={20} />} 
                  label="YouTube" 
                  color="hover:bg-red-600" 
                  href="https://www.youtube.com/@happinessccreattions9" 
                />
                <SocialBtn 
                  icon={<Instagram size={20} />} 
                  label="Instagram" 
                  color="hover:bg-pink-600" 
                  href="https://www.instagram.com/happinessccreattions/" 
                />
                <SocialBtn 
                  icon={<Facebook size={20} />} 
                  label="Facebook" 
                  color="hover:bg-blue-600" 
                  href="https://www.facebook.com/9amitgupta" 
                />
                <SocialBtn 
                  icon={<Whatsapp size={20} />} 
                  label="Whatsapp" 
                  color="hover:bg-blue-600" 
                  href="https://whatsapp.com/channel/0029VbBwGqG6LwHtOqjVnu3h" 
                />
                
              </div>
            </div>

            {/* Google Map (Dark Theme Filtered) */}
            <div className="h-64 w-full rounded-3xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay pointer-events-none z-10"></div>
              <iframe 
                src="https://maps.google.com/maps?q=Sector+51,+Noida&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                title="Office Location"
              ></iframe>
            </div>

          </div>

          {/* --- RIGHT SIDE: CONSULTATION FORM --- */}
          <div className="bg-[#0f1014] border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group animate-fade-in-up delay-200">
            
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 relative z-10">Book a Consultation</h3>
            
            <form className="space-y-5 relative z-10">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:bg-white/10 outline-none transition-all" />
              </div>

              {/* Birth Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1 flex items-center gap-1"><Calendar size={12}/> Date of Birth</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:border-purple-500 focus:text-white outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1 flex items-center gap-1"><Clock size={12}/> Time of Birth</label>
                  <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 focus:border-purple-500 focus:text-white outline-none transition-all" />
                </div>
              </div>

              {/* Place of Birth */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1 flex items-center gap-1"><Globe size={12}/> Place of Birth</label>
                <input type="text" placeholder="City, State, Country" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:bg-white/10 outline-none transition-all" />
              </div>

              {/* Service Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Service Required</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 outline-none appearance-none cursor-pointer">
                    <option className="bg-[#1e293b]">Select a Service...</option>
                    <option className="bg-[#1e293b]">Personal Reading</option>
                    <option className="bg-[#1e293b]">Business Numerology</option>
                    <option className="bg-[#1e293b]">Name Change / Correction</option>
                    <option className="bg-[#1e293b]">Vastu Consultation</option>
                    <option className="bg-[#1e293b]">Relationship Compatibility</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:bg-white/10 outline-none transition-all resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2">
                Submit Request <Send size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Reusable Components ---

const ContactCard = ({ icon, title, value, isLink, href, subValue }) => (
  <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
    <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide">{title}</h4>
      {isLink ? (
        <a href={href} className="text-lg font-semibold text-white hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <p className="text-lg font-semibold text-white">{value}</p>
      )}
       {subValue && <p className="text-xs text-gray-500 mt-1">{subValue}</p>}
    </div>
  </div>
);

const SocialBtn = ({ icon, label, color, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl border border-white/10 transition-all hover:-translate-y-1 ${color} group`}
  >
    <div className="text-white group-hover:scale-110 transition-transform">{icon}</div>
    <span className="font-medium text-sm hidden md:block">{label}</span>
  </a>
);

export default Contact;
