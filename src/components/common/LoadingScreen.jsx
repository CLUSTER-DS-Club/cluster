import React, { useState, useEffect } from 'react';
import { Database } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');

  const loadingTexts = [
    'Initializing CLUSTER...',
    'Loading Neural Networks...',
    'Syncing Data Algorithms...',
    'Connecting Research Database...',
    'Preparing Analytics Engine...',
    'Calibrating AI Models...',
    'Establishing Secure Connections...',
    'Loading Community Hub...',
    'Finalizing System Setup...',
    'Welcome to the Future of Data Science!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        const textIndex = Math.floor(newProgress / 10);
        setText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1500);
        }
        return Math.min(newProgress, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Main Loading Animation */}
        <div className="relative">
          <div className="w-40 h-40 border-4 border-cyan-500/20 rounded-full animate-spin">
            <div className="absolute inset-3 border-4 border-purple-500/30 rounded-full animate-spin reverse">
              <div className="absolute inset-3 border-4 border-pink-500/40 rounded-full animate-pulse">
                <div className="absolute inset-3 border-4 border-blue-400/50 rounded-full animate-bounce">
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/25"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Database className="w-12 h-12 text-white animate-pulse drop-shadow-lg" />
          </div>

          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* CLUSTER Title */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            CLUSTER
          </h1>

          {/* Loading Text */}
          <div className="min-h-[2rem]">
            <p className="text-white/90 text-xl font-medium transition-all duration-500 transform">
              {text}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto space-y-3">
            <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full bg-white/20 animate-pulse rounded-full"></div>
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-cyan-400 font-medium">{Math.round(progress)}%</span>
              <span className="text-white/60">Loading...</span>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;