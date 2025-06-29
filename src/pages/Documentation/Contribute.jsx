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

      <main className="flex-1 py-20 px-6">
        <section className="max-w-4xl mx-auto text-white bg-[#1e293b]/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl">
          <DocSection title="🤝 How to Contribute" id="contribute">
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              We love community contributions! Whether it's fixing a bug, improving docs, or adding new features, here's how you can help improve <span className="text-white font-semibold">Cluster</span>:
            </p>

            <ol className="list-decimal pl-5 space-y-6 text-base text-gray-300">
              <li>
                <p className="mb-2">
                  <span className="text-blue-400 font-semibold">Fork</span> the repository on GitHub to your own account. <br />
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
                  Create a new branch for your changes:
                </p>
                <CodeBlock>git checkout -b feature/AmazingFeature</CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Make your changes and commit them with a meaningful message:
                </p>
                <CodeBlock>git commit -m "✨ Add some amazing feature"</CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Push your changes to your forked repository:
                </p>
                <CodeBlock>git push origin feature/AmazingFeature</CodeBlock>
              </li>

              <li>
                <p className="mb-2">
                  Open a{' '}
                  <a
                    href="https://github.com/CLUSTER-DS-Club/cluster/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Pull Request
                  </a>{' '}
                  to the <code className="bg-gray-800 px-1 py-0.5 rounded text-white">main</code> branch.
                </p>
              </li>
            </ol>

            <div className="mt-8 text-sm text-gray-400 leading-relaxed border-t border-gray-700 pt-6">
              📌 <strong>Note:</strong> Before contributing, please review our{' '}
              <a
                href="https://github.com/CLUSTER-DS-Club/cluster/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300"
              >
                CONTRIBUTING.md
              </a>{' '}
              and check{' '}
              <a
                href="https://github.com/CLUSTER-DS-Club/cluster/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 underline hover:text-yellow-200"
              >
                open issues
              </a>{' '}
              to see what’s already being worked on.
            </div>
          </DocSection>
        </section>
      </main>
    </div>
  );
}

export default Contribute;