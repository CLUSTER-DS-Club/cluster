import React, { useState, useEffect } from 'react';
import './Research.css';

import projects from '../data/researchprojects.js';
import featuredPublications from '../data/featuredPublications.js';

const Research = () => {
  const [popup, setPopup] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fadeTimer = setTimeout(() => setFadeIn(true), 200);
    const slideTimer = setTimeout(() => setSlideIn(true), 500);
    const zoomTimer = setTimeout(() => setZoomIn(true), 800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(slideTimer);
      clearTimeout(zoomTimer);
    };
  }, []);

  return (
    <div className="research-page">
      <section className={`research-header transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-1'}`}>
        <h1>Explore Our Research</h1>
        <p>From innovation to publication — discover the academic side of CLUSTER.</p>
        <div className="research-stats">
          <div className="stat-card"><span>12+</span><small>Research Projects</small></div>
          <div className="stat-card"><span>25+</span><small>Publications</small></div>
          <div className="stat-card"><span>6</span><small>Domains</small></div>
          <div className="stat-card"><span>15</span><small>Collaborators</small></div>
        </div>
      </section>

      <section className={`featured-projects transition-all duration-1000 ease-in-out ${slideIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <h2>Featured Research Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className={`project-card transition-all duration-700 ease-in-out ${zoomIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} key={proj.title}>
              <h3>{proj.title}</h3>
              <p>{proj.summary.slice(0, 55)}...</p>
              <div className="tags">
                {proj.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="year">{proj.year}</div>
              <div className="dev-info">
                <span className="dev-name">{proj.developer}</span>
                <a className="github-id" href={`https://github.com/${proj.github}`} target="_blank" rel="noopener noreferrer">
                  @{proj.github.split('/')[0]}
                </a>
              </div>
              <button className="view-summary" onClick={() => setPopup(idx)}>View Summary</button>
            </div>
          ))}
        </div>
      </section>

      <section className={`publications transition-all duration-1000 ease-in ${zoomIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
        <h2>Publications</h2>
        {featuredPublications.map((pub, idx) => (
          <a className="publication-card" href={pub.link} target="_blank" rel="noopener noreferrer" key={idx}>
            <h3>{pub.title}</h3>
            <div className="authors">{pub.authors} · {pub.date}</div>
            <p>{pub.summary}</p>
          </a>
        ))}
        <div style={{ textAlign: 'right', marginTop: '1.2rem' }}>
          <a href="/cluster/publications" className="view-all-pubs">View All Publications →</a>
        </div>
      </section>

      {popup !== null && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup-window" onClick={e => e.stopPropagation()}>
            <h3>{projects[popup].title}</h3>
            <p>{projects[popup].summary}</p>
            <div className="tags">
              {projects[popup].tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="year">{projects[popup].year}</div>
            <div className="dev-info">
              <span className="dev-name">{projects[popup].developer}</span>
              <a className="github-id" href={`https://github.com/${projects[popup].github}`} target="_blank" rel="noopener noreferrer">
                @{projects[popup].github.split('/')[0]}
              </a>
            </div>
            <button className="close-popup" onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;