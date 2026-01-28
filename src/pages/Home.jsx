import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, PenTool, Briefcase, Heart, Sun, ShieldCheck } from 'lucide-react';

const Home = () => {
  // --- BACKGROUND ANIMATION CONFIG (Gold Numbers) ---
  const numbersConfig = [
    { num: 7, left: '5%', size: '6rem', duration: '12s', delay: '0s' },
    { num: 3, left: '25%', size: '8rem', duration: '15s', delay: '2s' },
    { num: 9, left: '45%', size: '5rem', duration: '10s', delay: '4s' },
    { num: 1, left: '65%', size: '7rem', duration: '14s', delay: '1s' },
    { num: 5, left: '85%', size: '6rem', duration: '11s', delay: '3s' },
    { num: 8, left: '15%', size: '10rem', duration: '20s', delay: '5s' },
    { num: 6, left: '35%', size: '9rem', duration: '18s', delay: '7s' },
    { num: 2, left: '55%', size: '11rem', duration: '22s', delay: '6s' },
    { num: 4, left: '75%', size: '12rem', duration: '19s', delay: '8s' },
    { num: 3, left: '10%', size: '15rem', duration: '30s', delay: '1s' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* FIX: 'pt-32' add kiya hai taaki mobile par content navbar ke niche na dabbe */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
        
        {/* Background Animation */}
        <div className="absolute inset-0">
          {numbersConfig.map((item, index) => (
            <div
              key={index}
              className="absolute font-bold opacity-0 animate-float-gold pointer-events-none"
              style={{
                left: item.left,
                fontSize: item.size,
                animation: `floatUpGold ${item.duration} linear infinite`,
                animationDelay: item.delay,
                color: 'rgba(255, 215, 0, 0.4)', // Gold Color
                textShadow: '0 0 25px rgba(255, 223, 0, 0.3)',
                bottom: '-20%'
              }}
            >
              {item.num}
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/20 rounded-full text-yellow-400 text-sm font-medium backdrop-blur-md mb-4 animate-fade-in-down">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-xs md:text-sm text-left">Professional Numerology & Vastu Solutions</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight animate-fade-in-up">
            Align Your Numbers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-2xl">
              Transform Your Life.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Professional Numerology & Vastu Solutions by Amit Gupta. Unlock your true potential through the ancient science of numbers.
          </p>

          <div className="pt-8 animate-fade-in-up delay-200">
            <Link to="/journey">
              <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center gap-3 mx-auto">
                Get Your Personal Reading <ArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Fade for smooth transition */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>


      {/* --- INTRODUCTION SECTION (With Cosmic Wheel) --- */}
      <section className="py-24 px-6 bg-[#0a0f1e] relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute right-0 top-20 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="relative group z-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Happiness Ccreattions</span></h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Are you struggling with career blockages, relationship issues, or financial instability? The answers often lie in the <span className="text-yellow-400">vibrations</span> of your name and birth date.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Led by <strong>Amit Gupta</strong>, a renowned Numerologist in Ghaziabad, we combine the logic of Numerology with the wisdom of Vastu to align your life with success.
              </p>
              
              <div className="mt-8 flex gap-4">
                <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">10+</span>
                   <span className="text-xs text-gray-500 uppercase tracking-widest">Years Exp.</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white">500+</span>
                   <span className="text-xs text-gray-500 uppercase tracking-widest">Lives Changed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: The Cosmic Wheel */}
          <div className="flex justify-center items-center relative h-[400px]">
             
             {/* Center Glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-yellow-500/10 rounded-full blur-[60px] animate-pulse"></div>

             {/* Ring 1: Outer Orbit (Slow Rotate) */}
             <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full animate-spin-slow flex justify-center items-center">
                <div className="absolute top-0 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_purple]"></div>
                <div className="absolute bottom-0 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_purple]"></div>
             </div>

             {/* Ring 2: Middle Gold Orbit (Reverse Spin) */}
             <div className="absolute w-[280px] h-[280px] border border-dashed border-yellow-500/30 rounded-full animate-reverse-spin flex justify-center items-center">
                <div className="absolute left-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_20px_gold]"></div>
             </div>

             {/* Ring 3: Inner Circle */}
             <div className="absolute w-[200px] h-[200px] border border-white/10 rounded-full flex justify-center items-center bg-[#0f172a]/50 backdrop-blur-sm">
                {/* Sacred Geometry Triangle */}
                <div className="absolute w-[140px] h-[140px] border border-purple-400/30 rotate-45 transform"></div>
                <div className="absolute w-[140px] h-[140px] border border-pink-400/30 rotate-12 transform"></div>
             </div>

             {/* Center Core: The Main Symbol */}
             <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#1e293b] to-black rounded-full border border-white/20 flex items-center justify-center shadow-2xl shadow-purple-900/50">
                <Sparkles size={40} className="text-yellow-400 animate-pulse" />
             </div>

             {/* Floating Numbers around the wheel */}
             <div className="absolute top-10 right-20 text-white/20 font-bold text-xl animate-float-slow">3</div>
             <div className="absolute bottom-20 left-10 text-white/20 font-bold text-2xl animate-float-slow" style={{animationDelay: '1s'}}>9</div>
             <div className="absolute top-1/2 right-0 text-white/20 font-bold text-xl animate-float-slow" style={{animationDelay: '2s'}}>6</div>

          </div>
        </div>
      </section>


      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain size={40} className="text-blue-400" />}
              title="Scientific Approach"
              desc="We use logical, time-tested numerology methods, not superstition."
            />
            <FeatureCard 
              icon={<Sparkles size={40} className="text-yellow-400" />}
              title="Personalized Remedies"
              desc="No two charts are the same. Your solutions are custom-made for you."
            />
            <FeatureCard 
              icon={<ShieldCheck size={40} className="text-green-400" />}
              title="Holistic Guidance"
              desc="From Vastu Shastra to Name Correction, we offer complete occult solutions under one roof."
            />
          </div>
        </div>
      </section>


      {/* --- SERVICES OVERVIEW --- */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 tracking-widest uppercase text-sm font-semibold">Our Expertise</span>
            <h2 className="text-4xl font-bold mt-2">Services We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Sun size={32} />}
              title="Personal Numerology"
              desc="Discover your Life Path, Destiny, and Soul Urge numbers."
              color="text-orange-400"
            />
            <ServiceCard 
              icon={<PenTool size={32} />}
              title="Name Correction"
              desc="Is your name lucky? We adjust spellings to attract success."
              color="text-pink-400"
            />
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Business Numerology"
              desc="Choose the right brand name and launch dates for profit."
              color="text-blue-400"
            />
            <ServiceCard 
              icon={<Heart size={32} />}
              title="Relationship Match"
              desc="Check vibration matching before saying 'I Do'."
              color="text-red-400"
            />
          </div>
        </div>
      </section>

      {/* Internal Styles for Animation */}
      <style>{`
        @keyframes floatUpGold {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
      `}</style>
    </div>
  );
};

// --- Reusable Components ---

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-[#1e293b]/40 border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-2 group">
    <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc, color }) => (
  <div className="relative overflow-hidden bg-[#1e293b] p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group">
    <div className={`mb-4 ${color} transform group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

export default Home;
