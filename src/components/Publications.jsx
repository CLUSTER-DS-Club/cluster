import React, { useState } from 'react';
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

  // Handle potential data loading errors
  const publicationsData = publications || [];

  const filteredPublications =
    selectedCategory === 'All'
      ? publicationsData
      : publicationsData.filter((pub) => pub.category === selectedCategory);

  return (
    <div className="publications-page">
      <h1>All Publications</h1>
      <div className="pub-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pub-category-btn${selectedCategory === cat ? ' selected' : ''}`}
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
              className="publication-card"
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
