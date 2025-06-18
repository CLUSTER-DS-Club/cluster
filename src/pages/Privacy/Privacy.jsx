import React from 'react'
import { useEffect } from 'react';
import './Privacy.css';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy & Policy</h1>
      <p className="privacy-text">
        We value your privacy. This Privacy & Policy page outlines how we handle your personal data and the measures we take to protect it.
      </p>

      <h2 className="privacy-subtitle">Information Collection</h2>
      <p className="privacy-text">
        We may collect personal information such as your name, email address, and any details you provide when contacting us or using features of the site.
      </p>

      <h2 className="privacy-subtitle">Use of Data</h2>
      <p className="privacy-text">
        Your data is used to provide and improve our services. We do not share your information with third parties unless necessary for the service functionality.
      </p>

      <h2 className="privacy-subtitle">Cookies</h2>
      <p className="privacy-text">
        We may use cookies to improve user experience. You can control cookie settings through your browser preferences.
      </p>

      <h2 className="privacy-subtitle">Security</h2>
      <p className="privacy-text">
        We implement strong security measures to protect your data, though no method is completely secure.
      </p>

      <h2 className="privacy-subtitle">Policy Updates</h2>
      <p className="privacy-text">
        This policy may be updated occasionally. Continued use of the site indicates acceptance of the new terms.
      </p>

      <p className="privacy-updated">Last updated: June 2025</p>
    </div>
  )
}

export default Privacy
