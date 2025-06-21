import React, { useState, useEffect } from 'react';
import '../../App.css'
import AnimatedBackground from '../common/AnimatedBackground';
import GlassCard from '../common/GlassCard';

// CursorGlow component for interactive background effect
const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div
      className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
      style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192,
      }}
    ></div>
  );
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    validationErrors: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation errors when user starts typing
    if (status.validationErrors.length > 0) {
      setStatus(prev => ({
        ...prev,
        validationErrors: prev.validationErrors.filter(err => !err.includes(name))
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      loading: true,
      success: false,
      error: null,
      validationErrors: []
    });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 && data.details) {
          // Handle validation errors
          setStatus(prev => ({
            ...prev,
            loading: false,
            validationErrors: data.details
          }));
        } else {
          // Handle other errors
          throw new Error(data.details || data.error || 'Failed to send message');
        }
        return;
      }

      setStatus({
        loading: false,
        success: true,
        error: null,
        validationErrors: []
      });
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'An unexpected error occurred',
        validationErrors: []
      });
    }
  };

  const getFieldError = (fieldName) => {
    return status.validationErrors.find(err => 
      err.toLowerCase().includes(fieldName.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${20 + (index * 8)}%`,
              animation: `float ${8 + index}s ease-in-out infinite ${index * 0.5}s`
            }}
          >
            <div className={`w-4 h-4 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 ${index % 3 === 0 ? 'rounded-full' : index % 3 === 1 ? 'rotate-45' : 'rounded'} animate-pulse`}></div>
          </div>
        ))}
      </div>
      {/* Interactive cursor glow */}
      <CursorGlow />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(34,211,238,0.6)]">
            Contact Us
          </h1>
          <p className="text-lg font-medium bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(34,211,238,0.4)]">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {status.success && (
          <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        {status.error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 text-center">
              {status.error}
            </p>
          </div>
        )}

        <GlassCard 
          className="p-8 shadow-2xl shadow-cyan-500/30 border border-cyan-500/40 ring-2 ring-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"
          variant="primary"
          glow={true}
          blur="xl"
          gradient="primary"
          border={true}
          interactive={false}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-xl bg-slate-800/60 border ${
                    getFieldError('name') ? 'border-red-500' : 'border-cyan-500/30'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-300`}
                  placeholder="Your name"
                />
                {getFieldError('name') && (
                  <p className="mt-1 text-sm text-red-400">{getFieldError('name')}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-xl bg-slate-800/60 border ${
                    getFieldError('email') ? 'border-red-500' : 'border-cyan-500/30'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-300`}
                  placeholder="your.email@example.com"
                />
                {getFieldError('email') && (
                  <p className="mt-1 text-sm text-red-400">{getFieldError('email')}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-slate-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-xl bg-slate-800/60 border ${
                    getFieldError('phone') ? 'border-red-500' : 'border-cyan-500/30'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-300`}
                  placeholder="+91 XXXXXXXXXX"
                  pattern="[0-9]{10}"
                />
                {getFieldError('phone') && (
                  <p className="mt-1 text-sm text-red-400">{getFieldError('phone')}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-xl bg-slate-800/60 border ${
                    getFieldError('subject') ? 'border-red-500' : 'border-cyan-500/30'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-300`}
                  placeholder="What is this regarding?"
                />
                {getFieldError('subject') && (
                  <p className="mt-1 text-sm text-red-400">{getFieldError('subject')}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className={`mt-1 block w-full rounded-xl bg-slate-800/60 border ${
                  getFieldError('message') ? 'border-red-500' : 'border-cyan-500/30'
                } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-lg shadow-cyan-500/10 transition-all duration-300`}
                placeholder="Your message here..."
              />
              {getFieldError('message') && (
                <p className="mt-1 text-sm text-red-400">{getFieldError('message')}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status.loading}
                className={`inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-base font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default ContactPage; 