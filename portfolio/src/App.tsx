import { JSX, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionProgress from './components/SectionProgress'
import LoadingScreen from './components/LoadingScreen'

export default function App(): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [showBlog, setShowBlog] = useState(false)

  const handleBlogClick = useCallback(() => setShowBlog(prev => !prev), [])
  const handleBlogClose = useCallback(() => setShowBlog(false), [])

  useEffect(() => {
    if (showBlog) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showBlog])

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <motion.div
          className="min-h-screen bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionProgress />
          <Navbar onBlogClick={handleBlogClick} showBlog={showBlog} onBlogClose={handleBlogClose} />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <Service />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />

          <AnimatePresence>
            {showBlog && <Blog onClose={handleBlogClose} />}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  )
}
