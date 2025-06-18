import React from 'react'
import { useEffect } from 'react';
import './Cookies.css';


function Cookies() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="cookies-container">
      <h1 className="cookies-title">Cookie Policy</h1>
      <p className="cookies-text">
        This Cookie Policy explains how we use cookies and similar technologies on our website to provide you with a better browsing experience.
      </p>

      <h2 className="cookies-subtitle">What Are Cookies?</h2>
      <p className="cookies-text">
        Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.
      </p>

      <h2 className="cookies-subtitle">Types of Cookies We Use</h2>
      <p className="cookies-text">
        We use both session and persistent cookies. Session cookies are temporary and expire when you close your browser, while persistent cookies remain on your device until deleted.
      </p>

      <h2 className="cookies-subtitle">How We Use Cookies</h2>
      <p className="cookies-text">
        We use cookies to personalize content, analyze site traffic, and improve your experience. Some cookies are essential for site functionality.
      </p>

      <h2 className="cookies-subtitle">Managing Cookies</h2>
      <p className="cookies-text">
        You can manage cookie preferences through your browser settings. Disabling cookies may affect the functionality of some parts of our site.
      </p>

      <h2 className="cookies-subtitle">Updates to This Policy</h2>
      <p className="cookies-text">
        We may update this Cookie Policy from time to time. Any changes will be posted on this page.
      </p>

      <p className="cookies-updated">Last updated: June 2025</p>
    </div>
  )
}

export default Cookies
