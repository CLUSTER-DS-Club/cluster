import React from 'react';

function DocSection({ title, id, children }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">{title}</h2>
      <div className="text-sm leading-relaxed text-gray-300">
        {children}
      </div>
    </section>
  );
}

export default DocSection;
