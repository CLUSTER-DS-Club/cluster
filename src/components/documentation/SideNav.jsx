import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navStructure = [
  {
    id: 'getting-started',
    category: '📘 Getting Started',
    subItems: [
      { name: '📦 Setup steps', path: '/docs/setup-steps' },
      { name: '🤝 How to Contribute', path: '/docs/contribute' },
      { name: '🧠 Tech Stack Overview', path: '/docs/tech-overview' },
      { name: '💻 CLI Commands', path: '/docs/cli' },
    ],
  },
  // {
  //   id: 'other-category',
  //   category: '📙 Other Category',
  //   subItems: [
  //     { name: '📦 Some Step', path: '/docs/some-step' },
  //     { name: '🤝 Another Step', path: '/docs/another-step' },
  //   ],
  // },
];

function SideNav() {
  const location = useLocation();
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Auto-expand category containing current route, close others
  useEffect(() => {
    const foundCategory = navStructure.find(({ subItems }) =>
      subItems.some((item) => item.path === location.pathname)
    );

    if (foundCategory) {
      setExpandedCategoryId(foundCategory.id);
    } else {
      setExpandedCategoryId(null);
    }
  }, [location.pathname]);

  // Toggle category and close others
  const toggleCategory = (id) => {
    setExpandedCategoryId((current) => (current === id ? null : id));
  };

  // Filter subitems based on search term (search in subitem names)
  const filteredNavStructure = navStructure.map(({ id, category, subItems }) => ({
    id,
    category,
    subItems: subItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <aside className="w-full sm:w-64 max-h-screen overflow-y-auto sticky top-16 p-4 bg-[#1e293b]/90 backdrop-blur-md border-r border-gray-700 text-white scrollbar-custom flex-shrink-0">
      {/* Search bar */}
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          placeholder="Search docs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-md bg-[#0f172a] border border-gray-600 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          aria-label="Search documentation"
        />
      </div>

      {filteredNavStructure.map(({ id, category, subItems }) => (
        <div key={id} className="mb-6">
          {/* Main category header */}
          <button
            onClick={() => toggleCategory(id)}
            className="flex items-center justify-between w-full px-3 py-2 text-lg font-bold text-cyan-400 hover:text-cyan-300 focus:outline-none"
            aria-expanded={expandedCategoryId === id ? 'true' : 'false'}
          >
            <span>{category}</span>

            {/* Down arrow icon */}
            <svg
              className={`w-4 h-4 text-cyan-400 opacity-50 transform transition-transform duration-200 ${
                expandedCategoryId === id ? 'rotate-180 opacity-80' : ''
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Sub items */}
          {expandedCategoryId === id && subItems.length > 0 && (
            <nav className="mt-2 flex flex-col gap-1 ml-4" aria-label={`${category} links`}>
              {subItems.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-1 rounded-md transition-colors text-gray-300 hover:text-white hover:bg-cyan-700 ${
                    location.pathname === path ? 'bg-cyan-700 text-white font-semibold' : ''
                  }`}
                >
                  {name}
                </Link>
              ))}
            </nav>
          )}

          {/* If no matches after search */}
          {expandedCategoryId === id && subItems.length === 0 && (
            <p className="text-gray-500 text-sm ml-4 mt-1">No matches found.</p>
          )}
        </div>
      ))}
    </aside>
  );
}

export default SideNav;