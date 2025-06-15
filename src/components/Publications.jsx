import React from 'react';
import './Publications.css';
import publications from '../data/publications.js';

const Publications = () => {
  return (
    <div className="publications-page">
      <h1>All Publications</h1>
      <div className="publications-list">
        {publications.map((pub, idx) => (
          <a className="publication-card" href={pub.link} target="_blank" rel="noopener noreferrer" key={idx}>
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
