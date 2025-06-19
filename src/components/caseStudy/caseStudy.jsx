import React, { useState } from 'react';
import { Github, BarChart3, Users, Award, Search, X, Linkedin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// GlassCard component with modern styling
const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

// Modern Project Modal Component
const ProjectModal = ({ project, onClose, similarProjects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-all duration-200 shadow-md"
        >
          <X size={20} className="text-slate-300" />
        </button>

        <div className="p-8">
          <div className="aspect-video rounded-xl overflow-hidden mb-8 relative group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-700 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Project Summary</h3>
                <pre className="text-md whitespace-pre-wrap text-slate-300 font-sans leading-relaxed">
                  {project.summary}
                </pre>
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-[250px]">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold mb-4 text-white">Project Details</h3>
                <p className="text-slate-300 mb-6">{project.fullDetails}</p>
                
                <h3 className="text-lg font-semibold mb-3 text-white">Developers</h3>
                <div className="space-y-4">
                  {project.developers.map((dev, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <p className="text-md font-medium">{dev.name}</p>
                        <p className="text-sm text-slate-400">{dev.role}</p>
                      </div>
                      <div className="flex gap-3">
                        <a href={dev.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          <Github size={20} className="text-slate-400" />
                        </a>
                        <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                          <Linkedin size={20} className="text-slate-400" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {similarProjects.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Similar Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {similarProjects.map((similarProject, idx) => (
                  <GlassCard key={idx}>
                    <div className="p-4 h-full">
                      <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <img 
                          src={similarProject.image} 
                          alt={similarProject.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-md font-medium text-cyan-400 mb-1">{similarProject.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2">{similarProject.summary.split('\n')[0]}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {similarProject.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const caseStudies = [
  {
    title: 'Smart Waste Segregator',
    summary: 'Problem: Manual waste sorting is inefficient and hazardous.\nSolution: AI-powered smart bin classifies waste automatically.\nImpact: Reduced landfill input and improved recycling efficiency.',
    fullDetails: 'This project was developed over 6 months with a team of 3 engineers. The system uses computer vision to classify waste into 5 categories with 92% accuracy. We deployed 15 units across campus, resulting in a 40% reduction in landfill waste. The technology stack includes Python, TensorFlow, Raspberry Pi, and custom mechanical components.',
    image: '/images/waste-project.jpg',
    tags: ['AI', 'Computer Vision', 'IoT', 'Sustainability'],
    developers: [
      { name: 'Alex Chen', role: 'AI Engineer', github: '#', linkedin: '#' }
    ],
    links: { github: '#'}
  },
  {
    title: 'Urban Traffic Optimization',
    summary: 'Problem: City traffic congestion wastes time and fuel.\nSolution: ML algorithm that optimizes traffic light timing.\nImpact: Reduced average commute time by 22%.',
    fullDetails: 'Developed in collaboration with the city transportation department, this system uses real-time traffic data and machine learning to dynamically adjust traffic light patterns. The system reduced peak hour congestion by 22% and decreased emissions in the pilot area by 15%. Built with Python, TensorFlow, and integrated with existing city infrastructure.',
    image: '/images/traffic-project.jpg',
    tags: ['Machine Learning', 'Smart Cities', 'Data Science'],
    developers: [
      { name: 'Maria Rodriguez', role: 'Data Scientist', github: '#', linkedin: '#' }
    ],
    links: { github: '#' }
  },
  {
    title: 'Precision Agriculture Drone',
    summary: 'Problem: Inefficient crop monitoring leads to wasted resources.\nSolution: Autonomous drones with multispectral imaging.\nImpact: Increased crop yield by 18% while reducing water usage.',
    fullDetails: 'Our precision agriculture solution uses autonomous drones equipped with multispectral cameras to monitor crop health. The system provides farmers with actionable insights, helping them optimize irrigation and fertilizer use. The technology stack includes computer vision, drone control systems, and a farmer-friendly dashboard. Field tests showed an 18% increase in yield while reducing water consumption by 30%.',
    image: '/images/agriculture-project.jpg',
    tags: ['Drones', 'Computer Vision', 'Agriculture Tech'],
    developers: [
      { name: 'Sarah Johnson', role: 'Computer Vision Engineer', github: '#', linkedin: '#' },
    ],
    links: { github: '#'}
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    summary: 'Problem: Early disease detection is challenging in rural areas.\nSolution: Portable device with AI diagnostic capabilities.\nImpact: Detected early-stage conditions with 89% accuracy.',
    fullDetails: 'This portable diagnostic device uses machine learning to analyze medical images and patient data for early detection of diseases. Designed for use in rural clinics with limited resources, the system achieved 89% accuracy in clinical trials for detecting early-stage conditions. The project involved developing both the hardware device and the AI models, with a focus on creating an intuitive interface for healthcare workers.',
    image: '/images/medical-project.jpg',
    tags: ['Healthcare', 'Machine Learning', 'Edge Computing'],
    developers: [
      { name: 'Raj Patel', role: 'Embedded Systems', github: '#', linkedin: '#' }
    ],
    links: { github: '#' }
  },
  {
    title: 'Renewable Energy Forecasting',
    summary: 'Problem: Unpredictable renewable energy generation.\nSolution: Deep learning models for accurate energy forecasting.\nImpact: Improved grid stability and reduced energy waste.',
    fullDetails: 'Our deep learning models predict renewable energy generation from solar and wind sources with 94% accuracy, helping grid operators better manage energy distribution. The system integrates weather data, historical generation patterns, and real-time sensor inputs. Implemented for a regional utility company, the solution reduced energy waste by 25% and improved grid stability during peak demand periods.',
    image: '/images/energy-project.jpg',
    tags: ['Deep Learning', 'Energy', 'Time Series Forecasting'],
    developers: [
      { name: 'Thomas Lee', role: 'ML Engineer', github: '#', linkedin: '#' },
    ],
    links: { github: '#' }
  },
];

const stats = [
  { icon: Users, value: '200+', label: 'Members Impacted' },
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: BarChart3, value: '20+', label: 'Projects Deployed' },
];

const caseStudy = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const PROJECTS_PER_PAGE = 6;

  const filteredProjects = caseStudies.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const allTags = [...new Set(caseStudies.flatMap(project => project.tags))];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const findSimilarProjects = (currentProject) => {
    return caseStudies
      .filter(project => 
        project.title !== currentProject.title && 
        project.tags.some(tag => currentProject.tags.includes(tag))
      )
      .slice(0, 3);
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Impact-Driven Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Explore our portfolio of innovative solutions addressing real-world challenges
          </motion.p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-md -z-10"></div>
            <div className="relative flex items-center">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full pl-12 pr-10 py-3 bg-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-700"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedTags([])}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedTags.length === 0
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              All Projects
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-2xl text-slate-400 mb-4">No projects found</div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedTags([]);
              }}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white font-medium transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentProjects.map((project, i) => (
                <motion.div
                  key={i}
                  id={`project-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="h-full"
                >
                  <GlassCard className="h-full hover:scale-[1.02] transition-transform duration-300">
                    <div 
                      className="p-6 flex flex-col h-full cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="aspect-video rounded-xl overflow-hidden mb-5 relative group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-cyan-400 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-slate-700 rounded-full text-xs hover:bg-cyan-500 hover:text-white transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mb-5 flex-grow">
                        <pre className="text-sm whitespace-pre-wrap text-slate-300 font-sans leading-relaxed line-clamp-4">
                          {project.summary}
                        </pre>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                        >
                          Read More <ChevronDown size={16} className="mt-0.5" />
                        </button>
                        <div className="flex gap-2">
                          {project.links.github && (
                            <a 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                              <Github size={16} className="text-slate-300" />
                            </a>
                          )}
                          {project.links.demo && (
                            <a 
                              href={project.links.demo} 
                              target="_blank" 
                              rel="noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm font-medium text-slate-300"
                            >
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length > PROJECTS_PER_PAGE && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  &lt;
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  if (totalPages > 5) {
                    if (currentPage < 3) {
                      return i + 1;
                    } else if (currentPage > totalPages - 2) {
                      return totalPages - 4 + i;
                    } else {
                      return currentPage - 2 + i;
                    }
                  } else {
                    return i + 1;
                  }
                }).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      currentPage === page
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  &gt;
                </button>
              </div>
            )}
          </>
        )}

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden text-center p-6 hover:bg-white/10 transition-colors"
            >
              <stat.icon className="w-8 h-8 mx-auto text-cyan-400 mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            similarProjects={findSimilarProjects(selectedProject)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default caseStudy;