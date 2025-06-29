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

      <main className="flex-1 py-20 px-6">
        <section className="max-w-4xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl">
          <DocSection title="📦 Getting Started – Local Setup" id="setup-steps">
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              To get <span className="text-white font-semibold">Cluster</span> running on your local machine, follow these setup instructions step-by-step:
            </p>

            <ol className="list-decimal pl-5 space-y-6 text-base text-gray-300">
              <li>
                <p className="mb-2">
                  <span className="text-blue-400 font-semibold">Fork the repository</span> from GitHub to your personal account. <br />
                  👉{' '}
                  <a
                    href="https://github.com/CLUSTER-DS-Club/cluster/fork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-400"
                  >
                    Fork this repository
                  </a>
                </p>
              </li>

              <li>
                <p className="mb-2">
                  <span className="text-green-400 font-semibold">Clone your forked copy</span> to your local system:
                </p>
                <CodeBlock>
                  git clone https://github.com/your-username/cluster.git
                </CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Move into the project directory:
                </p>
                <CodeBlock>cd cluster</CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Install the necessary dependencies:
                </p>
                <CodeBlock>npm install</CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Start the local development server:
                </p>
                <CodeBlock>npm run dev</CodeBlock>
              </li>
            </ol>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              Once the server starts, visit{' '}
              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-gray-300"
              >
                http://localhost:5173
              </a>{' '}
              in your browser to view the app.
            </p>
          </DocSection>
        </section>
      </main>
    </div>
  );
}

export default GettingStarted;