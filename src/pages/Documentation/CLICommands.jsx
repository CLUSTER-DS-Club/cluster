import React, { useEffect } from 'react';
import SideNav from '../../components/documentation/SideNav';
import DocSection from '../../components/documentation/DocSection';
import CodeBlock from '../../components/documentation/CodeBlock';

function CLICommands() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0f172a] mt-16">
      <SideNav />

      <main className="flex-1 py-20 px-6">
        <section className="max-w-4xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl">
          <DocSection title="💻 CLI Commands & Project Structure" id="cli">
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              Here's a quick guide to using essential CLI commands and understanding the folder structure of the <span className="text-white font-semibold">Cluster</span> project.
            </p>

            <div className="space-y-10">
              {/* Step 1: Install Dependencies */}
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">🔧 Step 1: Install Dependencies</h3>
                <p className="text-base text-gray-300 mb-2">
                  First, install all the required packages:
                </p>
                <CodeBlock>npm install</CodeBlock>
              </div>

              {/* Step 2: Start Dev Server */}
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">🚀 Step 2: Start Development Server</h3>
                <p className="text-base text-gray-300 mb-2">
                  Run the app locally with hot module reloading:
                </p>
                <CodeBlock>npm run dev</CodeBlock>
              </div>

              {/* Step 3: Build Project */}
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">🏗️ Step 3: Build for Production</h3>
                <p className="text-base text-gray-300 mb-2">
                  Generate an optimized build for deployment:
                </p>
                <CodeBlock>npm run build</CodeBlock>
              </div>

              {/* Project Structure */}
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4">📁 Project Directory Structure</h3>
                <p className="text-base text-gray-300 mb-2">
                  A clean and modular structure designed for scalability:
                </p>
                <CodeBlock>
{`cluster/
├── public/              # Static assets (favicon, images, etc.)
├── src/                 
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages/routes
│   └── App.jsx          # Root application component
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration file
└── package.json         # Project metadata and scripts`}
                </CodeBlock>
              </div>
            </div>
          </DocSection>
        </section>
      </main>
    </div>
  );
}

export default CLICommands;