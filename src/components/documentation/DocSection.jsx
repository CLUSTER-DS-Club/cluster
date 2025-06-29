import React from 'react';

function DocSection({ title, id, children, level = 2, subtitle }) {
  const Heading = `h${level}`;

  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <Heading className="text-cyan-400 font-bold mb-4 text-3xl md:text-4xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="mb-4 text-gray-400 text-base md:text-lg">{subtitle}</p>
      )}
      <div className="text-sm md:text-base leading-relaxed text-gray-300">
        {children}
      </div>
    </section>
  );
}

export default DocSection;