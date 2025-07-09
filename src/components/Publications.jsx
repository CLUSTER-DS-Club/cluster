import React, { useState, useEffect } from 'react';
import './Publications.css';
import publications from '../data/publications.js';

const categories = [
  'All',
  'Financial Technology',
  'Artificial Intelligence & Machine Learning',
  'Quantum Computing',
  'Smart Cities & IoT',
  'Software & Technology',
  'Healthcare Tech',
  'Security & Blockchain',
];

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle potential data loading errors
  const publicationsData = publications || [];

  const filteredPublications =
    selectedCategory === 'All'
      ? publicationsData
      : publicationsData.filter((pub) => pub.category === selectedCategory);

  return (
    <div
      className={`publications-page transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h1 className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        All Publications
      </h1>

      <div className="pub-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pub-category-btn${selectedCategory === cat ? ' selected' : ''} transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="publications-list">
        {filteredPublications.length === 0 ? (
          <div className="no-pubs">
            {publicationsData.length === 0
              ? 'No publications available at the moment.'
              : 'No publications found in this category.'}
          </div>
        ) : (
          filteredPublications.map((pub, idx) => (
            <a
              className={`publication-card transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${pub.title}-${idx}`}
            >
              <h3>{pub.title}</h3>
              <div className="authors">
                {pub.authors} · {pub.date}
              </div>
              <p>{pub.summary}</p>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Publications;