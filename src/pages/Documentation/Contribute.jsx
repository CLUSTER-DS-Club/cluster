import React, { useEffect } from 'react';
import SideNav from '../../components/documentation/SideNav';
import DocSection from '../../components/documentation/DocSection';
import CodeBlock from '../../components/documentation/CodeBlock';

function Contribute() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0f172a] mt-16">
      <SideNav />

      <div className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-8 rounded-xl shadow-md border border-gray-700">
          <DocSection title="🤝 How to Contribute" id="contribute">
            <p className="mb-4 text-lg">
              We welcome contributions from everyone! Here's how you can contribute to Cluster:
            </p>

            <ol className="list-decimal pl-5 space-y-6 text-gray-200 text-base">
              <li>Fork the repository on GitHub</li>

              <li>
                Create a new feature branch:
                <CodeBlock>git checkout -b feature/AmazingFeature</CodeBlock>
              </li>

              <li>
                Commit your changes:
                <CodeBlock>git commit -m "Add some amazing feature"</CodeBlock>
              </li>

              <li>
                Push the branch to your fork:
                <CodeBlock>git push origin feature/AmazingFeature</CodeBlock>
              </li>

              <li>Open a Pull Request to the main repository on GitHub</li>
            </ol>

            <p className="mt-6 text-sm text-gray-200">
              Note: Before contributing, please read the{' '}
              <code className="bg-gray-800 px-1 py-0.5 rounded">CONTRIBUTING.md</code> file and check open issues.
            </p>
          </DocSection>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
