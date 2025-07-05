import React, { useState, useEffect, useMemo, useCallback } from 'react';

const ContributorCarousel = ({ contributors, interval = 2000, visibleCount = 5 }) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  if (!contributors || contributors.length === 0) {
    return null;
  }

  const visibleContributors = useMemo(() => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (current + i) % contributors.length;
      result.push(contributors[index]);
    }
    return result;
  }, [current, contributors, visibleCount]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % contributors.length);
  }, [contributors.length]);

  // Set up the timer for automatic scrolling, but pause on hover
  useEffect(() => {
    if (isHovering) {
      return; // Do nothing if the user is hovering
    }
    const timer = setTimeout(next, interval);
    return () => clearTimeout(timer);
  }, [current, next, interval, isHovering]);


  return (
    <div
      className="w-full flex justify-center py-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-center items-start gap-8">
        {visibleContributors.map((contributor, index) => (
          <div
            key={`${contributor.id}-${index}`} // Unique key for rendering
            className="flex flex-col items-center w-full transition-all duration-500"
          >
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
            <span className="text-cyan-400 text-sm font-medium">
              {contributor.contributions} contributions
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorCarousel;