import React, { useEffect } from 'react';
import './Disclaimer.css';

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="disclaimer-container">
      <h1 className="disclaimer-title">Disclaimer</h1>
      <p className="disclaimer-text">
        The information provided on this website is for general informational purposes only. All content is provided in good faith; however, we make no representations or warranties of any kind, express or implied, regarding the accuracy, adequacy, validity, or completeness of any information.
      </p>

      <h2 className="disclaimer-subtitle">No Professional Advice</h2>
      <p className="disclaimer-text">
        The content on this site does not constitute professional advice (legal, medical, financial, etc.). You should consult the appropriate professionals before acting on any information provided.
      </p>

      <h2 className="disclaimer-subtitle">Limitation of Liability</h2>
      <p className="disclaimer-text">
        Under no circumstance shall the CLUSTER team be held liable for any loss or damage incurred as a result of using the site or relying on the information provided.
      </p>

      <h2 className="disclaimer-subtitle">External Links Disclaimer</h2>
      <p className="disclaimer-text">
        This site may contain links to external websites. We do not guarantee the accuracy, relevance, or safety of any external content and are not responsible for it.
      </p>

      <h2 className="disclaimer-subtitle">Changes to This Disclaimer</h2>
      <p className="disclaimer-text">
        We may update this disclaimer at any time without notice. You are advised to review it periodically.
      </p>

      <h2 className="disclaimer-subtitle">Contact Information</h2>
      <p className="disclaimer-text">
        If you have any questions about this disclaimer, you can contact us at <a href="mailto:support@cluster.com" className="disclaimer-link">support@cluster.com</a>.
      </p>

      <p className="disclaimer-updated">Last updated: June 2025</p>
    </div>
  );
}

export default Disclaimer;