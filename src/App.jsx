import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import FloatingElements from './components/common/FloatingElements.jsx'
import LoadingScreen from './components/common/LoadingScreen.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import FeaturesGrid from './components/home/FeaturesGrid.jsx'
import TestimonialsCarousel from './components/home/TestimonialsCarousel.jsx'
import CallToAction from './components/home/CallToAction.jsx'
import AnimatedBackground from './components/common/AnimatedBackground.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import ContactPage from './components/contact/ContactPage.jsx'

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <TestimonialsCarousel />
      <CallToAction />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // simulate loading
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatedBackground />
      <FloatingElements />
      <ScrollToTop />
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App