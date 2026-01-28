import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Journey = () => {
  const plans = [
    {
      name: "Basic Reading",
      price: "₹1,100",
      icon: <Star className="text-blue-400" size={32} />,
      features: ["Name Analysis", "Basic Personality Traits", "Lucky Numbers & Colors", "Email Report"],
      popular: false,
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/30"
    },
    {
      name: "Complete Destiny",
      price: "₹5,100",
      icon: <Zap className="text-purple-400" size={32} />,
      features: ["Full Numerology Chart", "Career & Relationship Guide", "Name Correction Suggestion", "1-on-1 Call (30 Mins)"],
      popular: true, // Ye card highlight hoga
      gradient: "from-purple-600 to-pink-600",
      border: "border-purple-500"
    },
    {
      name: "Life Coaching",
      price: "₹11,000",
      icon: <Check className="text-green-400" size={32} />,
      features: ["Everything in Destiny Plan", "3 Monthly Coaching Calls", "Business Numerology", "Personalized Remedies"],
      popular: false,
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
        <h2 className="text-purple-400 font-bold tracking-widest uppercase text-sm animate-pulse-slow">Start Your Transformation</h2>
        <h1 className="text-5xl md:text-6xl font-bold">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Path</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Whether you need a quick answer or a complete life overhaul, we have a journey designed for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className={`relative group p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'bg-[#1e293b]/80 border-purple-500/50 shadow-purple-900/20' : 'bg-[#1e293b]/40 border-white/10 hover:border-white/20'}`}>
            
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
              {plan.icon}
            </div>

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
            </div>

            <ul className="space-y-4 mb-8 text-gray-400 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
                    <Check size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;