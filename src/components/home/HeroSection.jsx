import React, { useState, useEffect } from 'react';
import {
  Play,
  ArrowRight,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Zap,
  Database,
  Brain,
  BarChart3,
  ChevronDown,
  Star,
  Globe
} from 'lucide-react';
import GlassCard from '../common/GlassCard.jsx';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typewriter text array
  const typewriterTexts = [
    "Data Science Excellence",
    "AI & Machine Learning",
    "Statistical Analysis",
    "Research Innovation",
    "Community Learning"
  ];

  // Hero stats
  const stats = [
    { icon: Users, value: "100+", label: "Active Members", trend: "+12%" },
    { icon: BookOpen, value: "50+", label: "Research Projects", trend: "+25%" },
    { icon: Award, value: "20+", label: "Publications", trend: "+18%" },
  ];

  // Features highlight
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

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-17 lg:pt-20 md:pb-20 pb-32 lg:pb-4 xl:pb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${20 + (index * 8)}%`,
              animation: `float ${8 + index}s ease-in-out infinite ${index * 0.5}s`
            }}
          >
            <div className={`w-4 h-4 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 ${index % 3 === 0 ? 'rounded-full' : index % 3 === 1 ? 'rotate-45' : 'rounded'
              } animate-pulse`}></div>
          </div>
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Welcome to the Future of Data</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-white">CLUSTER</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>

            {/* Subtitle with typewriter effect */}
            <div className="text-xl lg:text-2xl text-slate-300 mb-2">
              Collaborative Learning Using Statistical Trends &
            </div>
            <div className="text-xl lg:text-2xl text-slate-300 mb-8">
              <span className="text-cyan-400 font-semibold">
                {typewriterTexts[currentTextIndex]}
              </span>
              <span className="animate-blink">|</span>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Join our thriving community of data scientists, researchers, and AI enthusiasts.
              Learn, collaborate, and push the boundaries of what's possible with data.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://discord.gg/6QN83D89vx"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center space-x-2"
              >
                <span className="font-semibold">Join Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <GlassCard
                  key={index}
                  variant="primary"
                  hover="scale"
                  className="p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                  <div className="text-xs text-green-400 mt-1">{stat.trend}</div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
            <div className="relative">
              {/* Main Feature Cards */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <GlassCard
                    key={index}
                    variant="default"
                    hover="lift"
                    glow={true}
                    className="p-6 transform transition-all duration-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-6 -right-6">
                <GlassCard variant="accent" className="p-4 animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold text-sm">#1 Data Community</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-20 md:-bottom-17 lg:bottom-5 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <span className="text-sm">Discover More</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;