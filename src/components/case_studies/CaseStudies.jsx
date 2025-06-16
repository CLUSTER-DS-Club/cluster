import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Users, 
  Code, 
  Zap, 
  Globe, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Star,
  ArrowRight,
  TrendingUp,
  Brain,
  Database,
  BarChart3,
  BookOpen,
  Target,
  Lightbulb,
  Trophy
} from 'lucide-react';
import GlassCard from '../common/GlassCard';
import caseStudies from '../../assets/data/casestudies.json'

const CaseStudiesPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // const [caseStudies, setCaseStudies] = useState([]);

  // useEffect(() => {
  //   fetch('/data/caseStudies.json')
  //       .then(res => res.json())
  //       .then(data => setCaseStudies(data));
  //   },[]);

  //   console.log(caseStudies)

  const heroStats = [
    { icon: Users, value: "25+", label: "Active Projects", trend: "+40%" },
    { icon: Globe, value: "50K+", label: "Lives Impacted", trend: "+85%" },
    { icon: Award, value: "15+", label: "Awards Won", trend: "+120%" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", trend: "+15%" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotating stats effect
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % heroStats.length);
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

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const TechBadge = ({ tech }) => (
    <GlassCard variant="primary" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-cyan-400 mr-2 mb-2">
      <Code className="w-3 h-3 mr-1" />
      {tech}
    </GlassCard>
  );

  const TagBadge = ({ tag, variant = "default" }) => (
    <GlassCard variant={variant} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white mr-2">
      #{tag}
    </GlassCard>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${5 + (index * 8)}%`,
              top: `${10 + (index * 7)}%`,
              animation: `float ${6 + index}s ease-in-out infinite ${index * 0.3}s`
            }}
          >
            <div className={`w-3 h-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 ${
              index % 4 === 0 ? 'rounded-full' : 
              index % 4 === 1 ? 'rotate-45' : 
              index % 4 === 2 ? 'rounded' : 'rounded-full'
            } animate-pulse`}></div>
          </div>
        ))}
      </div>

      {/* Interactive cursor glow */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Badge */}
            <GlassCard variant="primary" className="inline-flex items-center space-x-2 px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Real-World Impact Through Innovation</span>
            </GlassCard>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-bold mb-8">
              <span className="block text-white mb-4">Case</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Explore how our community-driven projects solve real problems, inspire collaboration, and create meaningful change in people's lives.
            </p>

            {/* Dynamic Stats */}
            <div className="flex justify-center mb-12">
              <GlassCard variant="accent" className="px-8 py-4">
                <div className="flex items-center space-x-4">
                  {heroStats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-500 ${
                        currentStatIndex === index ? 'opacity-100 scale-110' : 'opacity-60 scale-95'
                      }`}
                    >
                      <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-slate-300">{stat.label}</div>
                      <div className="text-xs text-green-400">{stat.trend}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">Pitch Your Idea</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <GlassCard variant="default" hover="glow" className="px-8 py-4 cursor-pointer">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Users className="w-5 h-5" />
                  <span>Join Our Initiative</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {caseStudies.map((project, index) => (
            <GlassCard 
              key={project.id} 
              variant="default" 
              hover="lift"
              glow={true}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Card Header */}
              <div className="p-8 cursor-pointer" onClick={() => toggleProject(project.id)}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative group">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                      <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                          <span className="text-sm text-slate-400">({project.year})</span>
                        </div>
                        {project.badge && (
                          <GlassCard variant="accent" className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white mb-4">
                            {project.badge.text}
                          </GlassCard>
                        )}
                      </div>
                      <button className="p-3 hover:bg-white/10 rounded-full transition-colors duration-300">
                        {expandedProject === project.id ? 
                          <ChevronUp className="w-6 h-6 text-cyan-400" /> : 
                          <ChevronDown className="w-6 h-6 text-slate-400" />
                        }
                      </button>
                    </div>
                    
                    <p className="text-slate-300 text-lg leading-relaxed">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <TagBadge 
                          key={tagIndex} 
                          tag={tag} 
                          variant={tagIndex % 2 === 0 ? "primary" : "accent"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Project Details */}
              {expandedProject === project.id && (
                <div className="border-t border-white/10 p-8">
                  <div className="space-y-10">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap">
                        {project.techStack.map((tech, index) => (
                          <TechBadge key={index} tech={tech} />
                        ))}
                      </div>
                    </div>

                    {/* Problem */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Target className="w-6 h-6 mr-3 text-red-400" />
                        Problem
                      </h4>
                      <GlassCard variant="default" className="p-6">
                        <p className="text-slate-300 leading-relaxed text-lg">{project.problem}</p>
                      </GlassCard>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" />
                        Solution
                      </h4>
                      <GlassCard variant="primary" className="p-6">
                        <p className="text-slate-300 leading-relaxed text-lg">{project.solution}</p>
                      </GlassCard>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Globe className="w-6 h-6 mr-3 text-green-400" />
                        Impact & Results
                      </h4>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <GlassCard variant="success" className="p-6">
                          <h5 className="font-semibold text-white mb-4 flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                            Key Metrics
                          </h5>
                          <div className="space-y-3">
                            {project.impact.metrics.map((metric, index) => (
                              <div key={index} className="flex items-center text-slate-300">
                                <Star className="w-4 h-4 mr-3 text-yellow-400 fill-current" />
                                {metric}
                              </div>
                            ))}
                          </div>
                        </GlassCard>
                        <GlassCard variant="accent" className="p-6">
                          <h5 className="font-semibold text-white mb-4 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-purple-400" />
                            Community Impact
                          </h5>
                          <p className="text-slate-300 leading-relaxed">{project.impact.community}</p>
                        </GlassCard>
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">🔗 Project Links</h4>
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={project.links.github}
                          className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          <span className="font-medium">GitHub Repository</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a 
                          href={project.links.demo}
                          className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          <span className="font-medium">Live Demo</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a 
                          href={project.links.blog}
                          className="group flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <BookOpen className="w-5 h-5 mr-2" />
                          <span className="font-medium">Case Study Blog</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard variant="primary" glow={true} className="p-12 text-center">
            <div className="mb-8">
              <Database className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Impact?</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Join our community of innovators, researchers, and builders creating solutions that transform lives and shape the future.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Join Our Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <GlassCard variant="default" hover="glow" className="px-8 py-4 cursor-pointer">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Github className="w-5 h-5" />
                  <span>Follow on GitHub</span>
                </div>
              </GlassCard>
            </div>
            
            <p className="text-cyan-400 font-medium">
              💡 Have an idea that could change the world? Let's build it together.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CaseStudiesPage;