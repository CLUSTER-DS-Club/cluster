import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'getting-started',
    title: '📦 Getting Started Guide',
    description: 'Set up the project locally and understand the folder structure.',
    route: '/docs/setup-steps',
  },
  {
    id: 'contribute',
    title: '🤝 How to Contribute',
    description: 'Fork the repo, open issues, and submit PRs.',
    route: '/docs/contribute',
  },
  {
    id: 'tech-overview',
    title: '🧠 Tech Stack Overview',
    description: 'Explore the core technologies powering Cluster.',
    route: '/docs/tech-overview',
  },
  {
    id: 'cli',
    title: '💻 CLI & Project Structure',
    description: 'Helpful commands and a breakdown of the codebase.',
    route: '/docs/cli',
  },
];

function TableOfContents() {
  return (
    <div
      className="pt-4 px-4 min-h-screen bg-[#0f172a] text-white"
      aria-label="Documentation table of contents"
    >
      <h2 className="text-2xl font-bold text-cyan-400 mb-10 text-center">
        📚 Table of Contents
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.route}
            className="block p-6 rounded-xl bg-[#1e293b]/80 backdrop-blur-md hover:bg-cyan-900/90 hover:border-cyan-400 transition duration-300 border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
            <p className="text-sm text-gray-300">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TableOfContents;