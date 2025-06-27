import React, { useState, useEffect } from 'react';
import './Publications.css';
import publications from '../data/publications.js';

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`publications-page transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h1 className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        All Publications
      </h1>

      <div className="publications-grid">
        {publications.map((pub, idx) => (
          <a
            className={`publication-card transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
          >
            <h3>{pub.title}</h3>
            <div className="authors">{pub.authors} · {pub.date}</div>
            <p>{pub.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
