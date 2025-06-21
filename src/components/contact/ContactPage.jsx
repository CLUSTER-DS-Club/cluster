import React, { useState, useEffect } from 'react';
import '../../App.css';
import AnimatedBackground from '../common/AnimatedBackground';
import GlassCard from '../common/GlassCard';
import { FiMail, FiUser, FiPhone, FiEdit, FiSend } from 'react-icons/fi';

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
      className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
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
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    validationErrors: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.validationErrors.length > 0) {
      setStatus((prev) => ({
        ...prev,
        validationErrors: prev.validationErrors.filter((err) => !err.includes(name)),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      loading: true,
      success: false,
      error: null,
      validationErrors: [],
    });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400 && data.details) {
          setStatus((prev) => ({
            ...prev,
            loading: false,
            validationErrors: data.details,
          }));
        } else {
          throw new Error(data.details || data.error || 'Failed to send message');
        }
        return;
      }

      setStatus({
        loading: false,
        success: true,
        error: null,
        validationErrors: [],
      });

      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || 'An unexpected error occurred',
        validationErrors: [],
      });
    }
  };

  const getFieldError = (field) =>
    status.validationErrors.find((err) => err.toLowerCase().includes(field.toLowerCase()));

  const InputField = ({ label, name, type = 'text', placeholder, Icon }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3.5 text-cyan-400" />}
        <input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          required
          placeholder={placeholder}
          className={`pl-10 pr-4 py-2 rounded-xl bg-slate-800/60 border ${
            getFieldError(name) ? 'border-red-500' : 'border-cyan-500/30'
          } text-white w-full placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-md shadow-cyan-500/10 transition-all duration-300`}
        />
      </div>
      {getFieldError(name) && <p className="mt-1 text-sm text-red-400">{getFieldError(name)}</p>}
    </div>
  );

  return (
    <div className="min-h-screen relative py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse delay-1000"></div>
      </div>
      <CursorGlow />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-2">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300">We’d love to hear from you. Let’s connect!</p>
        </div>

        {status.success && (
          <div className="mb-6 p-4 rounded-lg bg-green-600/10 border border-green-400/30 text-green-400 text-center">
            Message sent successfully. We’ll reply soon!
          </div>
        )}

        {status.error && (
          <div className="mb-6 p-4 rounded-lg bg-red-600/10 border border-red-400/30 text-red-400 text-center">
            {status.error}
          </div>
        )}

        <GlassCard
          className="no-hover-effect p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 ring-2 ring-cyan-400/20 backdrop-blur-xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label="Name" name="name" placeholder="Your name" Icon={FiUser} />
              <InputField label="Email" name="email" type="email" placeholder="you@example.com" Icon={FiMail} />
              <InputField label="Phone" name="number" type="tel" placeholder="+91 1234567890" Icon={FiPhone} />
              <InputField label="Subject" name="subject" placeholder="What's this about?" Icon={FiEdit} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className={`w-full p-4 rounded-xl bg-slate-800/60 border ${
                  getFieldError('message') ? 'border-red-500' : 'border-cyan-500/30'
                } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-md shadow-cyan-500/10 transition-all duration-300`}
              />
              {getFieldError('message') && (
                <p className="mt-1 text-sm text-red-400">{getFieldError('message')}</p>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                disabled={status.loading}
                className={`inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                  status.loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
                {!status.loading && <FiSend />}
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default ContactPage;