import React, { useEffect } from 'react';
import TableOfContents from '../../components/documentation/TableOfContents';

function Documentation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="flex-1 p-6">
      <h1 className="pt-12 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-10 text-center">
        📄 Documentation
      </h1>

      <section className="max-w-3xl mx-auto">
        <TableOfContents />
      </section>
    </main>
  );
}

export default Documentation;