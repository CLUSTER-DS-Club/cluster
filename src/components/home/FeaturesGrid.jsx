import React from 'react';
import { Brain, BarChart3, Database } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI/ML Training",
    description: "Advanced machine learning courses and workshops"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Real-world data analysis and visualization projects"
  },
  {
    icon: Database,
    title: "Research Hub",
    description: "Collaborative research and statistical analysis"
  }
];

const FeaturesGrid = () => (
  <section className="py-16 bg-slate-800">
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-slate-900 rounded-xl p-8 shadow-lg flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/30 hover:border hover:border-cyan-400/30">
          <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-slate-300 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesGrid;