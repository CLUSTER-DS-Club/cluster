import React, { useState } from 'react';

const ContributorCarousel = ({ contributors }) => {
  const [current, setCurrent] = useState(0);
  if (!contributors || contributors.length === 0) return null;

  const prev = () => setCurrent((prev) => (prev === 0 ? contributors.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === contributors.length - 1 ? 0 : prev + 1));

  const contributor = contributors[current];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative flex items-center justify-center w-full max-w-xs mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-slate-700/70 hover:bg-cyan-500/70 text-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Previous contributor"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="flex flex-col items-center w-full transition-transform duration-500">
          <a
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            title={`View ${contributor.login} on GitHub`}
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-cyan-200 mb-1 hover:underline"
          >
            {contributor.login}
          </a>
          <span className="text-cyan-400 text-sm font-medium mb-2">
            {contributor.contributions} contributions
          </span>
        </div>
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-slate-700/70 hover:bg-cyan-500/70 text-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Next contributor"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div className="mt-4 text-slate-400 text-xs">
        {current + 1} / {contributors.length}
      </div>
    </div>
  );
};

export default ContributorCarousel; 