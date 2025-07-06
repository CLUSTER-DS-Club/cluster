// React and routing imports
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Global stylesheet
import './App.css';

// Common layout components
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import FloatingElements from './components/common/FloatingElements.jsx';
import LoadingScreen from './components/common/LoadingScreen.jsx';
import AnimatedBackground from './components/common/AnimatedBackground.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import ChatBot from './components/common/ChatBot.jsx';

// Page components
import Home from './components/home/HomePage.jsx';
import FAQPage from './components/faq/FAQPage.jsx';
import Research from './components/Research.jsx';
import Publications from './components/Publications.jsx';
import ContactPage from './components/contact/ContactPage.jsx';
import Alumni from './pages/Alumni.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import Cookies from './pages/Cookies/Cookies.jsx';
import Terms from './pages/Terms of Service/Terms.jsx';
import Blog from './pages/Blog.jsx';
import Events from './pages/Events.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Community from './pages/Community.jsx';
import About from './pages/About.jsx';
import Whitepapers from './pages/Whitepapers.jsx';
import SubmitWhitepaper from './pages/SubmitWhitepaper.jsx';
import CaseStudy from './components/caseStudy/caseStudy.jsx';
import Disclaimer from './pages/Disclaimer/Disclaimer.jsx';

// Documentation-related components and layout
import DocumentationLayout from './pages/Documentation/DocumentationLayout.jsx';
import SetUpSteps from './pages/Documentation/SetUpSteps.jsx';
import Contribute from './pages/Documentation/Contribute.jsx';
import TechOverview from './pages/Documentation/TechOverview.jsx';
import CLICommands from './pages/Documentation/CLICommands.jsx';

function App() {
  const [loading, setLoading] = useState(true); // Loading state for initial screen
  const location = useLocation(); // Get current route path

  // Simulated loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const showStars = ["/terms", "/cookies", "/privacy", "/disclaimer"].includes(location.pathname);
  return (
    <>
      {showStars && <div className="stars"></div>}
      <AnimatedBackground />
      <FloatingElements />

      {/* Show loading screen for 2 seconds, then render content */}
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Site-wide components */}
          <Header />
          <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
          <ChatBot /> {/* Chatbot Assistant */}

          {/* Main routing logic for all pages */}
          <main>
            <Routes>
              {/* Homepage and general info */}
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/about" element={<About />} />
              <Route path="/community" element={<Community />} />
              <Route path="/events" element={<Events />} />

              {/* Blog and dynamic post view */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Whitepapers and case studies */}
              <Route path="/whitepapers" element={<Whitepapers />} />
              <Route path="/submit-whitepaper" element={<SubmitWhitepaper />} />
              <Route path="/caseStudy" element={<CaseStudy />} />

              {/* Legal and policy pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />

              {/* Documentation routes using nested layout */}
              <Route path="/docs" element={<DocumentationLayout />}>
                <Route index element={<SetUpSteps />} /> {/* Default docs page */}
                <Route path="setup-steps" element={<SetUpSteps />} />
                <Route path="contribute" element={<Contribute />} />
                <Route path="tech-overview" element={<TechOverview />} />
                <Route path="cli" element={<CLICommands />} />
              </Route>
            </Routes>
          </main>

          {/* Footer shown on all pages */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;