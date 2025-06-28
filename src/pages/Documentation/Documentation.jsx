import React, { useEffect } from 'react';
import TableOfContents from '../../components/documentation/TableOfContents';
import SideNav from '../../components/documentation/SideNav';

function Documentation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <SideNav />

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="mt-12 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center">
          📄 Documentation
        </h1>

        <div className="max-w-3xl mx-auto">
          <TableOfContents />
        </div>
      </main>
    </div>
  );
}

export default Documentation;