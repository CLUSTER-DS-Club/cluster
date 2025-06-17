import React from 'react';
import { FaUsers } from 'react-icons/fa';

const CallToAction = ({ isVisible = true }) => (
  <div className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
    <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
            <FaUsers className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Join Our Community</span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Shape the Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Data Science?</span>
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Become part of a global community that's redefining what's possible with data science,
            statistical analysis, and collaborative research. Your journey to excellence starts here.
          </p>
          <div className="flex gap-10 mt-10 flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white px-10 py-4 rounded-xl font-semibold border border-cyan-300/60 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30">
              Join CLUSTER Today
            </button>
            <button className="bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white px-10 py-4 rounded-xl font-semibold border border-cyan-300/60 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30">
              Explore Our Research
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CallToAction;