import React, { useState, useEffect } from 'react';
import './Research.css';

// Local data fallback
const defaultProjects = [
  {
    title: 'AI-based Waste Detection',
    summary: 'A machine learning system for classifying waste using image data. Uses CNNs for real-time waste detection and classification.',
    tags: ['AI', 'Computer Vision'],
    year: 2024,
    developer: 'Tejaswini H.',
    github: 'tejaswini-h/waste-detection',
  },
  {
    title: 'Blockchain Voting System',
    summary: 'A decentralized app to enable secure student council elections using blockchain technology for tamper-proof voting.',
    tags: ['Blockchain', 'Security'],
    year: 2023,
    developer: 'Rahul S.',
    github: 'rahuls/voting-blockchain',
  },
];

const defaultFeaturedPublications = [
  {
    title: 'Optimizing Deep Neural Networks for Waste Classification',
    authors: 'Tejaswini H. et al.',
    date: 'May 2024',
    summary: 'This paper presents an optimized CNN architecture for real-time waste detection.',
    link: 'https://ieeexplore.ieee.org/document/1234567',
  },
];

// Try to import external data, fallback to local data
let projects, featuredPublications;
try {
  projects = require('../data/researchprojects.js').default || defaultProjects;
  featuredPublications = require('../data/featuredPublications.js').default || defaultFeaturedPublications;
} catch (error) {
  projects = defaultProjects;
  featuredPublications = defaultFeaturedPublications;
}

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
            <div
              className={`project-card transition-all duration-700 ease-in-out ${zoomIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              key={proj.title}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="card-content">
                <h3>{proj.title}</h3>
                <p>{proj.summary.slice(0, 85)}...</p>
                <div className="tags">
                  {proj.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="year">{proj.year}</div>
                <div className="dev-info">
                  <span className="dev-name">{proj.developer}</span>
                  <a
                    className="github-id"
                    href={`https://github.com/${proj.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{proj.github.split('/')[0]}
                  </a>
                </div>
              </div>
              <button className="view-summary" onClick={() => setPopup(idx)}>
                View Summary
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={`publications transition-all duration-1000 ease-in ${zoomIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
        <h2>Publications</h2>
        <div className="publications-grid">
          {featuredPublications.map((pub, idx) => (
            <a
              className="publication-card"
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
        <div style={{ textAlign: 'right', marginTop: '1.2rem' }}>
          <a href="/#/publications" className="view-all-pubs">View All Publications →</a>
        </div>
      </section>

      {popup !== null && (
        <div className="popup-overlay" onClick={() => setPopup(null)}>
          <div className="popup-window" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-medium text-cyan-400 mb-2 ">{projects[popup].title}</h3>
            <p className="text-sm text-gray-200 mb-4 mt-4">{projects[popup].summary}</p>
            <div className="tags flex flex-wrap justify-center gap-2 mb-">
              {projects[popup].tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="year">{projects[popup].year}</div>
            <div className="dev-info">
             <span className='dev-name'>by - </span>
             
              <a
                className="github-id"
                href={`https://github.com/${projects[popup].github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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