import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Download, Briefcase, FolderCheck, Smile,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// const stats = [
//   { icon: Briefcase, value: '1+', label: 'Years Experience' },
//   { icon: FolderCheck, value: '20+', label: 'Projects Completed' },
//   { icon: Smile, value: '10+', label: 'Happy Clients' },
// ];

const skillTags = [
  'Quality Assurance',
  'Frontend Development',
  'UI/UX Design',
  'React',
  'TypeScript',
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 xl:py-28 flex items-center overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl xl:max-w-8xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
        <motion.div
          className="lg:col-span-7 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 border border-white/20 bg-white/5 text-white px-5 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-6 md:mb-8 lg:mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            About Me
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 md:mb-8 lg:mb-10"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.06)' }}
          >
            Crafting Digital
            <br />
            Experiences With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-400">
              Purpose.
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 mb-6 md:mb-8"
          >
            <span className="w-[3px] h-16 md:h-20 shrink-0 bg-gradient-to-b from-white to-transparent rounded-full" />
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-8 md:leading-9 lg:leading-10 max-w-2xl lg:max-w-3xl">
              I'm a Software Engineer focused on Quality Assurance, Front-End
              Development, and UI/UX Design, building intuitive, responsive, and
              reliable digital experiences.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-base lg:text-lg leading-8 max-w-2xl lg:max-w-3xl mb-6 md:mb-8"
          >
            I combine clean development, thoughtful design, and a strong focus on
            software quality to turn complex ideas into user-friendly solutions
            that are both functional and visually engaging.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/80 font-medium italic mb-8 md:mb-10"
          >
            "Always learning, always building."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10 lg:mb-12"
          >
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 text-xs md:text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-10 md:mb-12 lg:mb-14"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-2xl p-4 md:p-5 lg:p-6 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div className="hidden sm:flex bg-white/5 border border-white/10 w-10 h-10 lg:w-12 lg:h-12 rounded-xl items-center justify-center mb-3 lg:mb-4">
                  <stat.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{stat.value}</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs lg:text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-8"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-white to-gray-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] text-black font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-2xl transition-all duration-300 w-full sm:w-auto text-sm lg:text-base"
            >
              Let's Build Something
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 px-8 lg:px-10 py-4 lg:py-5 text-sm lg:text-base"
            >
              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 order-1 lg:order-2 w-full max-w-lg lg:max-w-none mx-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 via-transparent to-white/20 rounded-[36px] sm:rounded-[44px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

            <div className="relative border border-white/15 rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 lg:p-8 bg-[#050505] overflow-hidden">
              <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 grid grid-cols-8 gap-2 sm:gap-3 opacity-20 pointer-events-none">
                {[...Array(40)].map((_, i) => (
                  <span key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
                ))}
              </div>

              <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-20 inline-flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium text-white animate-float">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Work
              </div>

              <img
                src="/Images/about.jpeg"
                alt="Profile photo of Pulindu Godage"
                className="relative z-10 w-full h-auto max-h-[350px] md:max-h-[450px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
              />

              <div className="relative z-20 mt-4 sm:mt-6 flex items-center gap-3 border border-white/10 bg-black/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4">
                <div className="flex -space-x-2.5">
                  {[
                    { label: 'QA', bg: '#3b82f6' },
                    { label: 'FE', bg: '#f59e0b' },
                    { label: 'UX', bg: '#ec4899' },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#050505] flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ backgroundColor: chip.bg }}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  QA Engineer · Frontend Developer · UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;