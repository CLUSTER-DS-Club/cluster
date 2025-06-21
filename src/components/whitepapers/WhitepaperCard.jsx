import React from 'react';
import { Calendar, User, Download, ExternalLink, Tag } from 'lucide-react';

const WhitepaperCard = ({ title, abstract, author, date, tags, url }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    // For now, just show an alert since these are dummy URLs
    alert('Download functionality will be implemented when real whitepapers are available.');
  };

  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden h-full flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {abstract}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 backdrop-blur-sm"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author and Date */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 text-sm text-slate-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="font-medium text-slate-300">{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl text-cyan-300 text-sm font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 group/btn"
          >
            <Download className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            Download PDF
          </button>
          <a
            href={url}
            className="flex items-center justify-center px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-slate-300 text-sm font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 group/btn"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            View Online
          </a>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default WhitepaperCard;