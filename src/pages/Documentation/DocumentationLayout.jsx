import React, { useEffect } from 'react';
import SideNav from '../../components/documentation/SideNav';
import { Outlet } from 'react-router-dom';

function DocumentationLayout() {
  useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <SideNav />

      {/* Main content area */}
      <main className="flex-1 p-6 pt-24">
        <Outlet />
      </main>
    </div>
  );
}

export default DocumentationLayout;
