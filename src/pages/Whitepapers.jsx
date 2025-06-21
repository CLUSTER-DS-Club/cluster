import React, { useState, useEffect } from 'react';
import { FileText, Search, Filter, BookOpen, Users, TrendingUp } from 'lucide-react';
import WhitepaperCard from '../components/whitepapers/WhitepaperCard';
import whitepapersData from '../data/whitepapersData';

const Whitepapers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredWhitepapers, setFilteredWhitepapers] = useState(whitepapersData);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Get all unique tags
  const allTags = ['All', ...new Set(whitepapersData.flatMap(paper => paper.tags))];

  // Filter whitepapers based on search term and selected tag
  useEffect(() => {
    let filtered = whitepapersData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(paper =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(paper => paper.tags.includes(selectedTag));
    }

    setFilteredWhitepapers(filtered);
  }, [searchTerm, selectedTag]);

  const stats = [
    { icon: FileText, value: whitepapersData.length, label: "Total Papers", color: "text-cyan-400" },
    { icon: Users, value: new Set(whitepapersData.map(p => p.author)).size, label: "Contributors", color: "text-blue-400" },
    { icon: BookOpen, value: allTags.length - 1, label: "Topics", color: "text-purple-400" },
    { icon: TrendingUp, value: "95%", label: "Quality Score", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Research & Documentation</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Whitepapers &
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Technical Reports
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore in-depth research and documentation by our community. 
              Discover cutting-edge insights, technical analyses, and innovative solutions 
              from our talented contributors.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search whitepapers by title, author, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>

                {/* Tag Filter */}
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-slate-400" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  >
                    {allTags.map(tag => (
                      <option key={tag} value={tag} className="bg-slate-800">
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {(searchTerm || selectedTag !== 'All') && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {searchTerm && (
                    <span className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm('')}
                        className="ml-2 text-cyan-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedTag !== 'All' && (
                    <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                      Tag: {selectedTag}
                      <button
                        onClick={() => setSelectedTag('All')}
                        className="ml-2 text-blue-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-slate-400 text-center">
              Showing {filteredWhitepapers.length} of {whitepapersData.length} whitepapers
              {selectedTag !== 'All' && ` in "${selectedTag}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Whitepapers Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredWhitepapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWhitepapers.map((whitepaper, index) => (
                  <div
                    key={whitepaper.id}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <WhitepaperCard {...whitepaper} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 max-w-md mx-auto">
                  <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Whitepapers Found</h3>
                  <p className="text-slate-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag('All');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Have Research to Share?
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join our community of researchers and contributors. Submit your whitepaper 
                  and help advance the field with your insights.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 font-semibold hover:scale-105">
                  Submit Your Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepapers;