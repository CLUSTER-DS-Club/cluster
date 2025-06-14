
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import FloatingElements from './components/common/FloatingElements.jsx'
import LoadingScreen from './components/common/LoadingScreen.jsx'
import AnimatedBackground from './components/common/AnimatedBackground.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'

import Home from './components/home/HomePage.jsx'
import FAQPage from './components/faq/FAQPage.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <>
      <AnimatedBackground />
      <FloatingElements />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
