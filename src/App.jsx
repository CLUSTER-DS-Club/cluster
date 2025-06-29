import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import FloatingElements from './components/common/FloatingElements.jsx';
import LoadingScreen from './components/common/LoadingScreen.jsx';
import AnimatedBackground from './components/common/AnimatedBackground.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

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
import BlogPost from './pages/BlogPost.jsx';
import Whitepapers from './pages/Whitepapers.jsx';
import SubmitWhitepaper from './pages/SubmitWhitepaper.jsx';
import CaseStudy from './components/caseStudy/caseStudy.jsx';
import Disclaimer from './pages/Disclaimer/Disclaimer.jsx';
import About from './pages/About.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);
   const showStars = ["/terms", "/cookies", "/privacy", "/disclaimer"].includes(location.pathname);

  return (
    <>
     {showStars && <div className="stars"></div>}
      <AnimatedBackground />
      <FloatingElements />
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/whitepapers" element={<Whitepapers />} />
              <Route path="/submit-whitepaper" element={<SubmitWhitepaper />} />
              <Route path="/caseStudy" element={<CaseStudy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;