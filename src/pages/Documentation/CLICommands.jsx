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

      <div className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-gray-700">
          <DocSection title="💻 CLI Commands & Project Structure" id="cli">
            <p className="mb-6 text-lg">
              Use the following commands to set up and run the project:
            </p>

            <ol className="list-decimal pl-5 space-y-6 text-gray-200">
              <li>
                <p className="mb-2 text-base">Install dependencies:</p>
                <CodeBlock>npm install</CodeBlock>
              </li>

              <li>
                <p className="mb-2 text-base">Run the development server:</p>
                <CodeBlock>npm run dev</CodeBlock>
              </li>

              <li>
                <p className="mb-2 text-base">Build the project:</p>
                <CodeBlock>npm run build</CodeBlock>
              </li>

              
                <p className="mb-2 text-lg">Project Directory Structure:</p>
                <CodeBlock>
{`cluster/
├── public/              # Static assets
├── src/                 
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages
│   └── App.jsx          # Root component
├── index.html
├── vite.config.js
└── package.json`}
                </CodeBlock>
              
            </ol>
          </DocSection>
        </div>
      </div>
    </div>
  );
}

export default CLICommands;
