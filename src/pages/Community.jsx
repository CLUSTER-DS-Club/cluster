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
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400 drop-shadow-lg">Welcome to the CLUSTER Community</h1>
      <p className="max-w-2xl text-lg md:text-xl mb-8 text-center text-slate-300">
        Connect, collaborate, and grow with fellow data scientists, researchers, and AI enthusiasts. Join our events, discussions, and projects to be part of a thriving, innovative community!
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="https://discord.gg/6QN83D89vx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.077.077 0 0 0-.082.038c-.357.63-.755 1.453-1.037 2.104a18.524 18.524 0 0 0-5.532 0 12.76 12.76 0 0 0-1.05-2.104.077.077 0 0 0-.082-.038A19.736 19.736 0 0 0 3.684 4.369a.07.07 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c2.128 1.565 4.2 2.51 6.29 3.155a.077.077 0 0 0 .084-.027c.484-.66.915-1.356 1.276-2.084a.076.076 0 0 0-.041-.104c-.692-.263-1.35-.588-1.975-.966a.077.077 0 0 1-.008-.127c.133-.1.266-.204.392-.308a.074.074 0 0 1 .077-.01c4.163 1.899 8.671 1.899 12.79 0a.075.075 0 0 1 .078.009c.127.104.26.208.393.308a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.976.966.076.076 0 0 0-.04.105c.36.727.792 1.423 1.275 2.083a.076.076 0 0 0 .084.028c2.09-.645 4.162-1.59 6.291-3.155a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.637-3.548-13.625a.061.061 0 0 0-.03-.028ZM8.02 15.331c-1.252 0-2.285-1.148-2.285-2.561 0-1.414 1.012-2.562 2.285-2.562 1.284 0 2.307 1.167 2.285 2.562 0 1.413-1.012 2.561-2.285 2.561Zm7.974 0c-1.252 0-2.285-1.148-2.285-2.561 0-1.414 1.012-2.562 2.285-2.562 1.284 0 2.307 1.167 2.285 2.562 0 1.413-1.012 2.561-2.285 2.561Z"/></svg>
          Join Our Discord
        </a>
        <a
          href="https://github.com/cluster-ds-club/cluster"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg text-lg font-semibold shadow-lg hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
          View on GitHub
        </a>
      </div>
      {/* About Section */}
      <div className="mt-12 max-w-7xl w-full bg-slate-800/80 rounded-xl shadow-lg p-8 text-center border border-cyan-500/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300">About the CLUSTER Community</h2>
        <p className="text-slate-200 text-lg mb-4">
          The CLUSTER Community is a vibrant network of data scientists, AI enthusiasts, and researchers dedicated to collaborative learning and innovation. Our mission is to foster growth, share knowledge, and drive impactful research in the fields of data science, machine learning, and artificial intelligence.
        </p>
        <p className="text-slate-400">
          We believe in inclusivity, open collaboration, and the power of diverse perspectives. Whether you're a beginner or an expert, you'll find opportunities to learn, contribute, and connect through events, workshops, and open-source projects. Join us as we shape the future of data together!
        </p>
      </div>
      {/* Team Showcase */}
      <div className="pt-0 mt-0 rounded-2xl bg-slate-900/70 pt-20 pb-0 min-h-[700px] px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <TeamGrid />
      </div>
      {/* Contributors Section */}
      <div className="mt-0 mb-0 pb-0 max-w-5xl w-full bg-slate-800/80 rounded-xl shadow-lg p-8 text-center border border-cyan-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300">Contributors</h2>
        <p className="text-slate-200 text-lg mb-8">We appreciate everyone who has contributed to CLUSTER! Here are our amazing contributors:</p>
        {loading && <div className="text-cyan-400">Loading contributors...</div>}
        {error && <div className="text-red-400">{error}</div>}
        {!loading && !error && contributors.length > 0 && (
          <div className="relative w-full flex flex-col items-center">
            <ContributorCarousel contributors={contributors} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Community; 