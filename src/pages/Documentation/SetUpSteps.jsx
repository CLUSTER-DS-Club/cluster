import React, { useEffect } from 'react';
import SideNav from '../../components/documentation/SideNav';
import DocSection from '../../components/documentation/DocSection';
import CodeBlock from '../../components/documentation/CodeBlock';

function GettingStarted() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div className="flex min-h-screen bg-[#0f172a] mt-16">
      <SideNav />

      <div className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-gray-700">
          <DocSection title="📦 Setup steps" id="setup-steps">
            <p className="mb-4 text-lg">
              Follow these steps to set up the project locally:
            </p>

            <ol className="list-decimal text-base pl-5 mb-4 space-y-3">
              <li>Fork the repository on GitHub</li>
              <li>Clone your forked copy:</li>
            </ol>

            <CodeBlock>
              git clone https://github.com/your-username/cluster.git
            </CodeBlock>

            <ol className="list-decimal text-base pl-5 space-y-3" start={3}>
              <li>Navigate to the project directory:</li>
            </ol>

            <CodeBlock>cd cluster</CodeBlock>

            <ol className="list-decimal text-base pl-5 space-y-3" start={4}>
              <li>Install dependencies:</li>
            </ol>

            <CodeBlock>npm install</CodeBlock>

            <ol className="list-decimal text-base pl-5 space-y-3" start={5}>
              <li>Run the development server:</li>
            </ol>

            <CodeBlock>npm run dev</CodeBlock>
          </DocSection>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
