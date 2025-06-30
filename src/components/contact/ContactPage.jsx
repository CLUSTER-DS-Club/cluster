import React, { useState, useEffect } from 'react';
import '../../App.css';
import AnimatedBackground from '../common/AnimatedBackground';
import GlassCard from '../common/GlassCard';
import { FiMail, FiUser, FiPhone, FiEdit, FiSend, FiSearch } from 'react-icons/fi';
import { ChevronDown, ChevronUp, MessageCircle, Globe, Phone } from 'lucide-react';
import { SiDiscord, SiLinkedin, SiGithub, SiGmail, SiWhatsapp } from 'react-icons/si';

const InputField = ({ label, name, type = 'text', placeholder, Icon, onChangeOverride, value, error }) => (
  <div className="transition-all duration-700 opacity-100 translate-y-0">
    <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">
      {label} {(name === 'name' || name === 'email') && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-3.5 text-cyan-400" />}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChangeOverride}
        required
        placeholder={placeholder}
        className={`pl-10 pr-4 py-2 rounded-xl bg-slate-800/60 border ${
          error ? 'border-red-500' : 'border-cyan-500/30'
        } text-white w-full placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-md shadow-cyan-500/10 transition-all duration-300`}
      />
    </div>
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

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
// ✅ Confirmation Modal Component
const ConfirmationModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center relative">
      <div className="flex justify-center mb-4">
        <div className="bg-emerald-400 p-3 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Message Sent Successfully!</h2>
      <p className="text-sm mb-6">We’ve received your message! A CLUSTER team member will reach out shortly.</p>
      <button
        onClick={onClose}
        className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-100 transition-all"
      >
        Awesome! 🎉
      </button>
    </div>
  </div>
);


const ContactPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
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

  const [phoneError, setPhoneError] = useState('');

  // FAQ Data
  const faqData = [
    {
      id: 1,
      category: 'General',
      question: 'What is CLUSTER?',
      answer: 'CLUSTER stands for Collaborative Learning Using Statistical Trends & Exploratory Research. It\'s the Data Science Club\'s official platform showcasing events, projects, and opportunities for students to collaborate on data-science-related initiatives.'
    },
    {
      id: 2,
      category: 'Membership',
      question: 'How can I join the Data Science Club?',
      answer: 'You can join by attending one of our recruitment drives or filling out the membership form when recruitment is open. Keep an eye on our social media or GitHub for announcements.'
    },
    {
      id: 3,
      category: 'Tech',
      question: 'What tech stack is used for the CLUSTER website?',
      answer: 'The website is built with React.js for UI, Tailwind CSS for styling, Framer Motion for animations, and React Router for navigation. The backend uses Node.js.'
    },
    {
      id: 4,
      category: 'Contribution',
      question: 'How do I contribute to projects under CLUSTER?',
      answer: 'Browse the GitHub repo\'s Issues page. Issues tagged \'Task\' are planned by maintainers. Comment "May I work on this?" to get assigned.'
    },
    {
      id: 5,
      category: 'Events',
      question: 'How can I know about upcoming events or workshops?',
      answer: 'We announce events on our website\'s Events page and social channels. You can also subscribe to our newsletter or join our Discord server for real-time updates.'
    },
    {
      id: 6,
      category: 'Tech',
      question: 'What programming languages should I know?',
      answer: 'Python is essential for data science. Knowledge of R, SQL, JavaScript, and tools like Jupyter, Pandas, and TensorFlow is highly beneficial.'
    },
    {
      id: 7,
      category: 'Membership',
      question: 'Are there any membership fees?',
      answer: 'No, membership to CLUSTER is completely free. We believe in making data science education accessible to everyone.'
    },
    {
      id: 8,
      category: 'Events',
      question: 'Can I organize my own workshop?',
      answer: 'Yes! We encourage members to organize workshops and share their expertise. Reach out to our team with your proposal.'
    }
  ];

  const categories = ['All', 'General', 'Membership', 'Tech', 'Contribution', 'Events'];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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

  const handlePhoneChange = (e) => {
    const { value } = e.target;

    if (/[^0-9]/.test(value)) {
      setPhoneError('Only numbers are allowed in phone number');
      setFormData(prev => ({ ...prev, number: value.replace(/[^0-9]/g, '') }));
      return;
    }

    if (value.length > 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      setFormData(prev => ({ ...prev, number: value.slice(0, 10) }));
      return;
    }

    if (value.length > 0 && value.length < 10) {
      setPhoneError('Phone number must be exactly 10 digits');
    } else {
      setPhoneError('');
    }

    setFormData(prev => ({ ...prev, number: value }));

    if (status.validationErrors.length > 0) {
      setStatus(prev => ({
        ...prev,
        validationErrors: prev.validationErrors.filter(err => !err.includes('phone'))
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      loading: false,
      success: true,
      error: null,
      validationErrors: [],
    })
setShowConfirmation(true);
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

  const contactInfo = [
    {
      icon: SiGmail,
      label: 'Email',
      value: 'dsclub.cluster@vips.edu',
      link: 'mailto:dsclub.cluster@vips.edu'
    },
    {
      icon: SiWhatsapp,
      label: 'WhatsApp Chat',
      value: '+91 9348223872',
      link: 'https://wa.me/919348223872'
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      value: 'cluster-vips',
      link: 'https://www.linkedin.com/company/cluster-vips/'
    },
    {
      icon: SiDiscord,
      label: 'Discord',
      value: 'Join our community server',
      link: 'https://discord.gg/6QN83D89vx'
    }
  ];

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/CLUSTER-DS-Club/", name: "GitHub" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/company/cluster-vips/", name: "LinkedIn" },
    { icon: SiDiscord, href: "https://discord.gg/6QN83D89vx", name: "Discord" },
    { icon: SiGmail, href: "mailto:dsclub.cluster@vips.edu", name: "Email" }
  ];

  return (
    <div className={`min-h-screen relative py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse delay-1000"></div>
      </div>
      <CursorGlow />

      {/* REMOVE max-w-[1440px] to allow full width usage */}
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto relative z-10">

        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300">We'd love to hear from you. Let's connect and build something amazing together!</p>
        </div>

        {/* Adjusting the main grid to accommodate three columns */}
        <div className="grid lg:grid-cols-12 gap-8"> {/* Changed to lg:grid-cols-3 */}
          {/* Left Column - FAQs */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <GlassCard className="no-hover-effect p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl shadow-xl h-full">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
              <p className="text-slate-300 text-center mb-6">Find answers about CLUSTER's purpose, joining process, tech stack, events, contributions, and more.</p>
              
              {/* Search */}
              <div className="relative mb-6">
                <FiSearch className="absolute left-3 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/60 border border-cyan-500/30 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-700">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="border border-slate-600/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      className="w-full text-left px-4 py-3 bg-slate-800/40 hover:bg-slate-700/40 transition-all duration-300 flex justify-between items-center"
                    >
                      <span className="font-medium text-white text-sm">{faq.question}</span>
                      {expandedFAQ === faq.id ? 
                        <ChevronUp className="w-4 h-4 text-cyan-400" /> : 
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      }
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-4 pb-3 bg-slate-800/20">
                        <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-slate-400">No FAQs found for your search.</p>
                </div>
              )}

              {/* Still have a question */}
              <div className="mt-6 pt-6 border-t border-slate-600/50 text-center">
                <p className="text-slate-300 mb-2">Still have a question?</p>
                <p className="text-slate-400 text-sm">Can't find the answer? <span className="text-cyan-400 font-medium">Contact us</span> using the form.</p>
              </div>
            </GlassCard>
          </div>

          {/* Middle Column - Contact Form */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Success/Error Messages (moved outside GlassCard to be consistent with previous structure) */}
            {status.success && (
              <div className="p-4 rounded-lg bg-green-600/10 border border-green-400/30 text-green-400 text-center mb-6">
                Message sent successfully. We'll reply soon!
              </div>
            )}

{/*             {status.error && (
              <div className="p-4 rounded-lg bg-red-600/10 border border-red-400/30 text-red-400 text-center mb-6">
                {status.error}
              </div>
            )} */}
            
            <GlassCard className="no-hover-effect p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" name="name" placeholder="Your name" Icon={FiUser} value={formData.name} onChangeOverride={handleChange} error={getFieldError("name")} />
                  <InputField label="Email" name="email" type="email" placeholder="you@example.com" Icon={FiMail} value={formData.email} onChangeOverride={handleChange} error={getFieldError("email")} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <InputField
                      label="Phone"
                      name="number"
                      type="tel"
                      placeholder="+91 1234567890"
                      Icon={FiPhone}
                      value={formData.number}
                      onChangeOverride={handlePhoneChange}
                      error={getFieldError("number")}
                    />
                    {phoneError && (
                      <div className="relative">
                        <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-xl shadow-lg w-fit max-w-xs">
                          {phoneError}
                        </div>
                        <div className="absolute left-4 -top-2 w-3 h-3 bg-red-500 rotate-45 transform origin-center"></div>
                      </div>
                      )}
                  </div>
                  <InputField label="Subject" name="subject" placeholder="What's this about?" Icon={FiEdit} value={formData.subject} onChangeOverride={handleChange} error={getFieldError("subject")} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className={`w-full p-4 rounded-xl bg-slate-800/60 border ${getFieldError('message') ? 'border-red-500' : 'border-cyan-500/30'
                      } text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500 shadow-md shadow-cyan-500/10 transition-all duration-300`}
                  />
                  {getFieldError('message') && (
                    <p className="mt-1 text-sm text-red-400">{getFieldError('message')}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 ${status.loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                  {!status.loading && <FiSend />}
                </button>
              </form>
            </GlassCard>
 <div className="p-6 min-w-[220px] sm:min-w-[250px] rounded-xl bg-slate-800/50 text-center">
  <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
  <p className="text-white font-semibold text-base">Quick Response</p>
  <p className="text-slate-400 text-sm">We respond to all queries within 24 hours.</p>
</div>
{/* Submit Button */}
{/* Feedback/Testimonial Block */}
<blockquote className="text-slate-400 italic text-center max-w-xl mx-auto mt-8">
  “Amazing response time and super helpful team. Love what the community is building!”
  <br />
  <span className="text-white font-medium">– Aayush, Cluster Contributor</span>
</blockquote>

          </div>

          {/* Right Column - Contact Information */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <GlassCard className="no-hover-effect p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-slate-800/40 rounded-xl hover:bg-slate-700/40 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <contact.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm">{contact.label}</div>
                      <div className="text-slate-300 text-xs truncate">{contact.value}</div>
                    </div>
                  </a>
                  ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-slate-600/50">
                <p className="text-white font-medium mb-4 text-sm">Connect with us:</p>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
                      title={social.name}
                    >
                      <social.icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors duration-300 mr-2" />
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                    </a>
                    ))}
                </div>
              </div> {/* This div closes the "Social Links section" */}
            </GlassCard> {/* This GlassCard closes the one opened for Contact Information */}
<div className="w-full max-w-7xl mx-auto px-4 mt-10"> {/* ADD this wrapper */}
  <div className="text-center">
    <h3 className="text-2xl font-semibold text-white">Want to join our next event?</h3>
    <p className="text-slate-400 mt-2">Stay updated on community workshops and hackathons.</p>
    <button className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-medium">
      Subscribe to Newsletter
    </button>
  </div>
</div>
          </div> 
        </div>
      </div>
{showConfirmation && (
  <ConfirmationModal onClose={() => setShowConfirmation(false)} />
)}
    </div>
  );
};

export default ContactPage;

