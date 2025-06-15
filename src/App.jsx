import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <>
      <AnimatedBackground />
      <FloatingElements />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesGrid />
                <TestimonialsCarousel />
                <CallToAction />
              </>
            }
          />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
