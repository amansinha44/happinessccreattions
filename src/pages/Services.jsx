import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Briefcase, Heart, Compass, Sparkles, ArrowUpRight, Baby, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Name Correction",
      subtitle: "Identity & Vibration",
      icon: <PenTool size={32} className="text-white" />,
      desc: "Your name is your mantra. We calculate the perfect spelling to ensure your name vibrates on a frequency of success, not struggle.",
      color: "group-hover:shadow-pink-500/50 group-hover:border-pink-500/50",
      bgGradient: "from-pink-500/20 to-purple-500/20",
      iconBg: "bg-pink-500"
    },
    {
      id: "02",
      title: "Business Numerology",
      subtitle: "Brand & Profit",
      icon: <Briefcase size={32} className="text-white" />,
      desc: "A business name decides its turnover. We help you choose a brand name and launch date that aligns with market energies for maximum profit.",
      color: "group-hover:shadow-blue-500/50 group-hover:border-blue-500/50",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500"
    },
    {
      id: "03",
      title: "Relationship Match",
      subtitle: "Love & Harmony",
      icon: <Heart size={32} className="text-white" />,
      desc: "Chemistry is emotional, compatibility is mathematical. We analyze Psychic and Destiny numbers to predict and prevent relationship conflicts.",
      color: "group-hover:shadow-red-500/50 group-hover:border-red-500/50",
      bgGradient: "from-red-500/20 to-rose-500/20",
      iconBg: "bg-red-500"
    },
   
    // --- NEW SERVICE 05 ---
    {
      id: "04",
      title: "New Born Numerology",
      subtitle: "Foundation of Luck",
      icon: <Baby size={32} className="text-white" />,
      desc: "The first gift you give your child is their name. Ensure it resonates with their birth chart to gift them a life of health and fortune.",
      color: "group-hover:shadow-yellow-500/50 group-hover:border-yellow-500/50",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      iconBg: "bg-yellow-500"
    },
    // --- NEW SERVICE 06 ---
    {
      id: "05",
      title: "Child Birth Planning",
      subtitle: "Timing & Destiny",
      icon: <Calendar size={32} className="text-white" />,
      desc: "Planning a C-section? Choose a powerful date and time (Mahurata) that aligns with favorable planetary positions for a Raj-Yoga destiny.",
      color: "group-hover:shadow-indigo-500/50 group-hover:border-indigo-500/50",
      bgGradient: "from-indigo-500/20 to-violet-500/20",
      iconBg: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="animate-fade-in-down">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-purple-500"></span>
              <span className="text-purple-400 uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-lg">
                Your Destiny.
              </span>
            </h1>
          </div>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed text-right md:text-left animate-fade-in-up">
            From the moment of birth to building an empire, we align your vibrations with the universe.
          </p>
        </div>

        {/* --- BENTO GRID CARDS (Now with 6 Items) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative p-8 rounded-[2rem] border border-white/5 bg-[#0f1014] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${service.color}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}></div>

              {/* Giant Number Position Adjusted for 3-Column Layout */}
              <div className="absolute top-0 right-6 text-[8rem] md:text-[10rem] font-bold text-white/5 leading-none select-none group-hover:text-white/10 transition-colors duration-500">
                {service.id}
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>

                <div className="space-y-3 min-h-[140px]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-white/80 transition-colors">{service.subtitle}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-white transition-colors">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-4">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/20 transition-colors">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white">Learn more</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-24 flex justify-center">
            <Link to="/journey" className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey <Sparkles size={20} />
                </span>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
