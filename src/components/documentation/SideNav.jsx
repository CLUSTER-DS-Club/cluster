import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: '📦 Setup steps', path: '/docs/setup-steps' },
  { name: '🤝 How to Contribute', path: '/docs/contribute' },
  { name: '🧠 Tech Stack Overview', path: '/docs/tech-overview' },
  { name: '💻 CLI Commands', path: '/docs/cli' },
  
];

function SideNav() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (location.pathname === '/docs') {
      setActivePath('/docs/setup-steps');
    } else {
      setActivePath(location.pathname);
    }
  }, [location.pathname]);

  const filteredItems = navItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<aside className="w-full sm:w-64 max-h-screen overflow-y-auto sticky top-16 p-4 bg-[#1e293b]/90 backdrop-blur-md border-r border-gray-700 text-white scrollbar-custom flex-shrink-0">
      {/* Search bar */}
      <div className="relative mb-4">
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
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

      {/* Section heading below search */}
      <h2 className="text-lg font-bold text-cyan-400 mb-3 pl-1">📘 Getting Started</h2>

      {/* Nav links */}
      <nav className="flex flex-col gap-2" aria-label="Sidebar navigation">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition ${
                activePath === item.path
                  ? 'bg-cyan-700 text-white font-semibold'
                  : 'hover:bg-[#334155]'
              }`}
            >
              {item.name}
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-400 px-2">No matches found.</p>
        )}
      </nav>
    </aside>
  );
}

export default SideNav;
