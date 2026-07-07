import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const reducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16"
    >
      <div className="absolute top-1/4 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-teal-500/5 blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00e5c0]/[0.015] blur-[200px] -z-10" />

      <motion.div
        className="my-auto mx-auto w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium text-emerald-400 backdrop-blur-md mb-6 md:mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open for New Opportunities
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-white leading-none"
          style={{ textShadow: '0 0 60px rgba(0,229,192,0.08)' }}
        >
          Pulindu Godage
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r cursor-default from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Building Scalable Apps_
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 md:mt-8 max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-400"
        >
          Full-stack software engineer with 1+ years of experience building
          scalable web applications that solve real-world problems and delight users.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-10 lg:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative inline-flex h-12 md:h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 md:px-8 text-sm md:text-base font-medium text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/30 active:scale-[0.98]"
          >
            Let's Build Something
          </a>
          <a
            href="#projects"
            className="inline-flex h-12 md:h-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 md:px-8 text-sm md:text-base font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-16 flex flex-col items-center gap-2 text-slate-500 transition-colors duration-300 hover:text-emerald-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-current p-1.5">
          <div className="h-2 w-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
