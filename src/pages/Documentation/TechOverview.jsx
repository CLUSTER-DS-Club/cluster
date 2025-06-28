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

      <div className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-gray-700">
          <DocSection title="🧠 Tech Stack Overview" id="tech-overview">
            <p className="mb-4 text-lg ">
              The Cluster project uses modern tools and libraries for performance, maintainability, and community contributions.
            </p>

            <ul className="list-disc list-inside text-lg space-y-2 text-gray-300">
              <li><strong>React.js</strong> – UI framework for building interactive components</li>
              <li><strong>Tailwind CSS</strong> – Utility-first CSS framework for fast UI styling</li>
              <li><strong>Vite</strong> – Lightning-fast dev server and build tool</li>
              <li><strong>React Router</strong> – For client-side routing and navigation</li>
              <li><strong>GitHub</strong> – Collaboration, version control, and issue tracking</li>
            </ul>

            <p className="mt-6 text-lg text-gray-300">
              The tech stack is chosen for speed, flexibility, and scalability across contributors and deployments.
            </p>
          </DocSection>
        </div>
      </div>
    </div>
  );
}

export default TechOverview;
