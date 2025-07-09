import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Upload, 
  User, 
  Mail, 
  Tag, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  Send,
  X,
  Plus,
  Trash2
} from 'lucide-react';

const SubmitWhitepaper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    author: '',
    email: '',
    coAuthors: [''],
    tags: [''],
    category: '',
    file: null,
    agreeToTerms: false,
    allowPublicAccess: true
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Web Development',
    'Mobile Development',
    'DevOps',
    'Cybersecurity',
    'Blockchain',
    'Cloud Computing',
    'Software Engineering',
    'UI/UX Design',
    'Database Systems',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          file: 'Please upload a PDF or Word document'
        }));
        return;
      }

      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          file: 'File size must be less than 10MB'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        file: file
      }));
      
      setErrors(prev => ({
        ...prev,
        file: ''
      }));
    }
  };

  const handleArrayInputChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (index, field) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.abstract.trim()) newErrors.abstract = 'Abstract is required';
    if (formData.abstract.length < 100) newErrors.abstract = 'Abstract must be at least 100 characters';
    if (!formData.author.trim()) newErrors.author = 'Author name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.file) newErrors.file = 'Please upload your whitepaper document';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    // Validate tags
    const validTags = formData.tags.filter(tag => tag.trim() !== '');
    if (validTags.length === 0) newErrors.tags = 'At least one tag is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      setFormData({
        title: '',
        abstract: '',
        author: '',
        email: '',
        coAuthors: [''],
        tags: [''],
        category: '',
        file: null,
        agreeToTerms: false,
        allowPublicAccess: true
      });
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setErrors({ submit: 'Failed to submit whitepaper. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Whitepaper Submitted Successfully!</h1>
            <p className="text-slate-300 text-lg mb-8">
              Thank you for your contribution to the CLUSTER community. Your whitepaper has been received and will be reviewed by our team.
            </p>
            <div className="bg-slate-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-white font-semibold mb-3">What happens next?</h3>
              <ul className="text-slate-300 text-left space-y-2">
                <li>• Our review team will evaluate your submission within 5-7 business days</li>
                <li>• You'll receive an email confirmation with a tracking ID</li>
                <li>• If approved, your whitepaper will be published on our platform</li>
                <li>• You'll be notified of any required revisions or feedback</li>
              </ul>
            </div>
            <button
              onClick={() => window.location.href = '/cluster/whitepapers'}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
            >
              View All Whitepapers
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Share Your Research</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Submit Your
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Whitepaper
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Share your research, insights, and technical expertise with the CLUSTER community. 
              Help advance the field by contributing your knowledge and discoveries.
            </p>
          </div>

          {/* Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                    Basic Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Whitepaper Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 ${
                          errors.title ? 'border-red-500' : 'border-slate-600/50 focus:border-cyan-500'
                        }`}
                        placeholder="Enter your whitepaper title"
                      />
                      {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                    </div>

                    {/* Author */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Primary Author *
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 ${
                          errors.author ? 'border-red-500' : 'border-slate-600/50 focus:border-cyan-500'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.author && <p className="text-red-400 text-sm mt-1">{errors.author}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-slate-600/50 focus:border-cyan-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Category */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 ${
                          errors.category ? 'border-red-500' : 'border-slate-600/50 focus:border-cyan-500'
                        }`}
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
                    </div>
                  </div>
                </div>

                {/* Co-Authors */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-cyan-400" />
                    Co-Authors (Optional)
                  </h3>
                  {formData.coAuthors.map((coAuthor, index) => (
                    <div key={index} className="flex gap-3 mb-3">
                      <input
                        type="text"
                        value={coAuthor}
                        onChange={(e) => handleArrayInputChange(index, e.target.value, 'coAuthors')}
                        className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Co-author name"
                      />
                      {formData.coAuthors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField(index, 'coAuthors')}
                          className="px-3 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('coAuthors')}
                    className="flex items-center px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-300 hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Co-Author
                  </button>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-cyan-400" />
                    Tags *
                  </h3>
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="flex gap-3 mb-3">
                      <input
                        type="text"
                        value={tag}
                        onChange={(e) => handleArrayInputChange(index, e.target.value, 'tags')}
                        className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="e.g., React, AI, Machine Learning"
                      />
                      {formData.tags.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayField(index, 'tags')}
                          className="px-3 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayField('tags')}
                    className="flex items-center px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-300 hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Tag
                  </button>
                  {errors.tags && <p className="text-red-400 text-sm mt-1">{errors.tags}</p>}
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Abstract * (minimum 100 characters)
                  </label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none ${
                      errors.abstract ? 'border-red-500' : 'border-slate-600/50 focus:border-cyan-500'
                    }`}
                    placeholder="Provide a comprehensive abstract of your whitepaper (minimum 100 characters)"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.abstract && <p className="text-red-400 text-sm">{errors.abstract}</p>}
                    <p className="text-slate-400 text-sm ml-auto">
                      {formData.abstract.length}/100 characters
                    </p>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Upload Document * (PDF or Word, max 10MB)
                  </label>
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    errors.file ? 'border-red-500' : 'border-slate-600/50 hover:border-cyan-500/50'
                  }`}>
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl text-cyan-300 font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                    >
                      Choose File
                    </label>
                    {formData.file && (
                      <p className="text-green-400 mt-2">
                        Selected: {formData.file.name}
                      </p>
                    )}
                    <p className="text-slate-400 text-sm mt-2">
                      Supported formats: PDF, DOC, DOCX
                    </p>
                  </div>
                  {errors.file && <p className="text-red-400 text-sm mt-1">{errors.file}</p>}
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="allowPublicAccess"
                      checked={formData.allowPublicAccess}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300 text-sm">
                      Allow public access to this whitepaper (recommended for community sharing)
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                    />
                    <label className="text-slate-300 text-sm">
                      I agree to the <a href="/cluster/terms" className="text-cyan-400 hover:underline">Terms of Service</a> and confirm that this is my original work or I have permission to share it *
                    </label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  {errors.submit && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                      <p className="text-red-400">{errors.submit}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Whitepaper</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitWhitepaper;