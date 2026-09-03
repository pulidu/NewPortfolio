import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onFinish: () => void
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}))

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const duration = 2800
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const p = Math.min((elapsed / duration) * 100, 100)
      setProgress(p)
      if (p >= 100) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  const handleExitComplete = useCallback(() => {
    onFinish()
  }, [onFinish])

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-white/20"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo ring */}
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              {/* Pulsing glow behind logo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full">
                <motion.div
                  className="absolute inset-0 rounded-full blur-[6px]"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent, #ffffff 20%, transparent 40%, #ffffff 60%, transparent 80%)',
                    WebkitMask:
                      'radial-gradient(circle, transparent 44%, black 46%, black 54%, transparent 56%)',
                    mask:
                      'radial-gradient(circle, transparent 44%, black 46%, black 54%, transparent 56%)',
                    opacity: 0.6,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent, #ffffff 20%, transparent 40%, #ffffff 60%, transparent 80%)',
                    WebkitMask:
                      'radial-gradient(circle, transparent 45%, black 47%, black 53%, transparent 55%)',
                    mask:
                      'radial-gradient(circle, transparent 45%, black 47%, black 53%, transparent 55%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* PG initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-white/90 tracking-tight">
                  PG
                </span>
              </div>
            </div>

            {/* Texts */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                Pulindu Godage
              </motion.h1>
              <motion.p
                className="text-xs md:text-sm text-white/70 tracking-[0.2em] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                Software &amp; IT Professional
              </motion.p>
            </div>

            {/* Loading bar */}
            <motion.div
              className="flex items-center gap-3 w-48 md:w-56"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-white to-white/70 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs font-mono text-white/50 tabular-nums w-8 text-right">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
