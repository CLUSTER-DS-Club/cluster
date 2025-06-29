import React, { useEffect, useState } from 'react';
import SideNav from '../../components/documentation/SideNav';
import { Outlet, useLocation } from 'react-router-dom';

function DocumentationLayout() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation on route change
  useEffect(() => {
    if (location !== displayLocation) {
      setIsAnimating(true);  // start fade-out
      const timeout = setTimeout(() => {
        setDisplayLocation(location);  // update content after fade-out
        setIsAnimating(false);          // start fade-in
        window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top on new page
      }, 300); // match duration below

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <SideNav />

      <main className="flex-1 p-6 pt-24 overflow-hidden relative">
        <div
          key={displayLocation.pathname}
          className={`transform transition-all duration-300 ease-in-out
            ${isAnimating ? 'opacity-0 -translate-x-5' : 'opacity-100 translate-x-0'}
          `}
          style={{ willChange: 'opacity, transform' }}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DocumentationLayout;