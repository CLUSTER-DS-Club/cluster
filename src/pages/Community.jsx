import React, { useEffect, useState } from 'react';
import TeamGrid from '../components/about/TeamGrid';
import ContributorCarousel from '../components/about/ContributorCarousel';

const GITHUB_REPO = 'cluster-ds-club/cluster';
const CONTRIBUTORS_API = `https://api.github.com/repos/${GITHUB_REPO}/contributors`;

const Community = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(CONTRIBUTORS_API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributors');
        return res.json();
      })
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 flex flex-col items-center space-y-16">
      {/* Header */}
      <header className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 drop-shadow-lg">
          Welcome to the CLUSTER Community
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Connect, collaborate, and grow with fellow data scientists, researchers, and AI enthusiasts. Join our events, discussions, and projects to be part of a thriving, innovative community!
        </p>
      </header>

      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <CTAButton
          href="https://discord.gg/6QN83D89vx"
          gradientFrom="cyan-500"
          gradientTo="blue-500"
          hoverFrom="cyan-600"
          hoverTo="blue-600"
          iconType="discord"
          label="Join Our Discord"
        />
        <CTAButton
          href="https://github.com/cluster-ds-club/cluster"
          gradientFrom="gray-700"
          gradientTo="gray-900"
          hoverFrom="gray-800"
          hoverTo="black"
          iconType="github"
          label="View on GitHub"
        />
      </div>

      {/* About Section */}
      <section className="max-w-5xl w-full bg-slate-800/80 rounded-xl shadow-lg p-8 text-center border border-cyan-500/20 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-300">
          About the CLUSTER Community
        </h2>
        <p className="text-slate-200 text-lg">
          The CLUSTER Community is a vibrant network of data scientists, AI enthusiasts, and researchers dedicated to collaborative learning and innovation.
        </p>
        <p className="text-slate-400">
          We believe in inclusivity, open collaboration, and the power of diverse perspectives. Whether you're a beginner or an expert, you'll find opportunities to learn, contribute, and connect through events, workshops, and open-source projects.
        </p>
      </section>

      {/* Team Section */}
      <section className="w-full pt-16 pb-0 min-h-[700px] px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden rounded-2xl shadow-inner">
        <TeamGrid />
      </section>

      {/* Contributors Section */}
      <section className="max-w-5xl w-full bg-slate-800/80 rounded-xl shadow-lg p-8 text-center border border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300">
          Contributors
        </h2>
        <p className="text-slate-200 text-lg mb-6">
          We appreciate everyone who has contributed to CLUSTER! Here are our amazing contributors:
        </p>
        {loading && <p className="text-cyan-400">Loading contributors...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && contributors.length > 0 && (
          <div className="mt-6">
            <ContributorCarousel contributors={contributors} />
          </div>
        )}
      </section>
    </div>
  );
};

const CTAButton = ({ href, gradientFrom, gradientTo, hoverFrom, hoverTo, iconType, label }) => {
  const icons = {
    discord: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.369A19.791 19.791..." />
      </svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484..." />
      </svg>
    )
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white rounded-lg text-lg font-semibold shadow-lg hover:from-${hoverFrom} hover:to-${hoverTo} transition-all duration-300 flex items-center gap-2`}
    >
      {icons[iconType]} {label}
    </a>
  );
};

export default Community;