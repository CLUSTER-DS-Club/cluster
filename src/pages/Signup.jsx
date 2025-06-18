import React, { useState } from 'react';
import { UserPlus, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'member',
    preferences: {
      aiMl: false,
      dataAnalytics: false,
      research: false
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          [name]: checked
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare preferences array from boolean object
    const preferencesArray = [];
    if (formData.preferences.aiMl) preferencesArray.push('AI/ML Training');
    if (formData.preferences.dataAnalytics) preferencesArray.push('Data Analytics');
    if (formData.preferences.research) preferencesArray.push('Research Hub');

    // Validate password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const signupData = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      preferences: preferencesArray,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'Signup failed');
        return;
      }
      navigate('/login')
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2>Create Account</h2>
        <p className="subtitle">Join our community</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="     Enter your full name"
                required
                className="pl-10"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="     Enter your email"
                required
                className="pl-10"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="     Create a password"
                required
                className="pl-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="    Confirm your password"
                required
                className="pl-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="member">Member</option>
              <option value="core">Core</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Interests (Select all that apply)</label>
            <div className="preferences-row">
              <label className="preference-option">
                <input
                  type="checkbox"
                  name="aiMl"
                  checked={formData.preferences.aiMl}
                  onChange={handleChange}
                />
                <span>AI/ML Training</span>
              </label>
              <label className="preference-option">
                <input
                  type="checkbox"
                  name="dataAnalytics"
                  checked={formData.preferences.dataAnalytics}
                  onChange={handleChange}
                />
                <span>Data Analytics</span>
              </label>
              <label className="preference-option">
                <input
                  type="checkbox"
                  name="research"
                  checked={formData.preferences.research}
                  onChange={handleChange}
                />
                <span>Research Hub</span>
              </label>
            </div>
          </div>

          <div className="form-options">
            <label className="terms">
              <input type="checkbox" required />
              <span>I agree to the Terms of Service and Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
