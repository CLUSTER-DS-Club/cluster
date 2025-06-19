import React, { useState, useEffect } from 'react';
import '../../App.css'
import AnimatedBackground from '../common/AnimatedBackground';
import GlassCard from '../common/GlassCard';

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
    <div className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300">
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

        <GlassCard className="p-8 bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20">
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
                  className={`mt-1 block w-full rounded-md bg-slate-700/50 border ${
                    getFieldError('name') ? 'border-red-500' : 'border-slate-600'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-sm`}
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
                  className={`mt-1 block w-full rounded-md bg-slate-700/50 border ${
                    getFieldError('email') ? 'border-red-500' : 'border-slate-600'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-sm`}
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
                  className={`mt-1 block w-full rounded-md bg-slate-700/50 border ${
                    getFieldError('phone') ? 'border-red-500' : 'border-slate-600'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-sm`}
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
                  className={`mt-1 block w-full rounded-md bg-slate-700/50 border ${
                    getFieldError('subject') ? 'border-red-500' : 'border-slate-600'
                  } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-sm`}
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
                className={`mt-1 block w-full rounded-md bg-slate-700/50 border ${
                  getFieldError('message') ? 'border-red-500' : 'border-slate-600'
                } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-sm`}
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
                className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 ${
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