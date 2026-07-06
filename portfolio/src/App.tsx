import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import LoadingScreen from './components/LoadingScreen'

export default function App(): JSX.Element {
  const [loading, setLoading] = useState(true)

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
          <Navbar />
          <main className="overflow-hidden">
            <Hero />
            <About />
            <Service />
            <Skills />
          </main>
        </motion.div>
      )}
    </>
  )
}