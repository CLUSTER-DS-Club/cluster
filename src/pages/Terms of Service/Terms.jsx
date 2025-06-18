import React, { useEffect } from 'react';
import './Terms.css';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-text">
        These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to comply with and be bound by these terms.
      </p>

      <h2 className="terms-subtitle">User Responsibilities</h2>
      <p className="terms-text">
        Users are expected to provide accurate information and interact respectfully within the platform. Misuse, harassment, or unlawful activity is strictly prohibited.
      </p>

      <h2 className="terms-subtitle">Prohibited Conduct</h2>
      <p className="terms-text">
        You must not use the platform to distribute harmful content, attempt unauthorized access, or engage in any activity that could damage or disrupt our services or users.
      </p>

      <h2 className="terms-subtitle">Intellectual Property</h2>
      <p className="terms-text">
        All content and materials provided on this platform are owned by us or our licensors. You may not copy, modify, or distribute without prior permission.
      </p>

      <h2 className="terms-subtitle">Termination</h2>
      <p className="terms-text">
        We reserve the right to suspend or terminate user accounts at any time for violation of these terms or other misconduct.
      </p>

      <h2 className="terms-subtitle">Modifications to Terms</h2>
      <p className="terms-text">
        These terms may be updated from time to time. We encourage users to review them periodically. Continued use of the service constitutes agreement to any changes.
      </p>

      <p className="terms-updated">Last updated: June 2025</p>
    </div>
  );
}

export default Terms;