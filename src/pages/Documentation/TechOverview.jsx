import React, { useEffect } from 'react';
import SideNav from '../../components/documentation/SideNav';
import DocSection from '../../components/documentation/DocSection';

function TechOverview() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0f172a] mt-16">
      <SideNav />

      <main className="flex-1 py-20 px-6">
        <section className="max-w-4xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl">
          <DocSection title="🧠 Tech Stack Overview" id="tech-overview">
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Cluster</span> is built with modern technologies focused on performance, flexibility, and ease of collaboration. Below is a quick overview of the core stack:
            </p>

            <ul className="list-inside space-y-4 text-base text-gray-300">
              <li>
                <span className="text-blue-400 font-semibold">⚛️ <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">React.js</a></span> – Powerful JavaScript library for building dynamic UIs.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">🎨 <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">Tailwind CSS</a></span> – Utility-first CSS framework for building custom interfaces efficiently.
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">⚡ <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">Vite</a></span> – Fast, modern frontend build tool with instant HMR (Hot Module Replacement).
              </li>
              <li>
                <span className="text-pink-400 font-semibold">🧭 <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-300">React Router</a></span> – Enables seamless client-side routing for a single-page app experience.
              </li>
              <li>
                <span className="text-gray-400 font-semibold">🐙 <a href="https://github.com/CLUSTER-DS-Club/cluster" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">GitHub</a></span> – Provides version control, collaboration, and issue tracking for team workflows.
              </li>
            </ul>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              This tech stack was carefully chosen to balance <span className="text-white font-medium">developer experience</span>, <span className="text-white font-medium">performance</span>, and <span className="text-white font-medium">scalability</span> for open-source and team collaboration.
            </p>
          </DocSection>
        </section>
      </main>
    </div>
  );
}

export default TechOverview;