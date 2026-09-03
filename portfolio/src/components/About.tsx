import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CalendarDays, Code2, Users, Download, ArrowRight, Target,
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

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 xl:py-28 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl xl:max-w-8xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
        <motion.div
          className="lg:col-span-7 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="border border-white/30 bg-white/10 text-white px-5 md:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wide mb-6 md:mb-8 lg:mb-10 w-fit"
          >
            • ABOUT ME
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 lg:mb-10"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.06)' }}
          >
            Building Digital Solutions
            <br />
            That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">
              Make an Impact.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg lg:text-xl leading-8 md:leading-9 lg:leading-10 max-w-2xl lg:max-w-3xl mb-8 md:mb-10 lg:mb-12"
          >
          I’m a passionate Software Engineer focused on Quality Assurance, Front-End Development, and UI/UX Design. 
          I enjoy building intuitive, responsive, and reliable digital experiences by combining clean development, thoughtful design, and a strong focus on software quality. 
          I turn complex ideas into user-friendly solutions that are both functional and visually engaging.
            <br />
            <span className="text-white/80 font-medium">Always learning, always building.</span>
          </motion.p>

          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-10 md:mb-12 lg:mb-16"
          >
            {[
              { icon: CalendarDays, value: '1+', label: 'Years Experience' },
              { icon: Code2, value: '20+', label: 'Projects Completed' },
              { icon: Users, value: '10+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-2xl p-5 md:p-6 lg:p-7 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div className="bg-white/10 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{stat.value}</h2>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 lg:gap-8"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-white to-gray-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] text-black font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto text-sm lg:text-base"
            >
              Let's Build Something
              <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 text-white hover:text-gray-300 transition duration-300 py-3 sm:py-0 text-sm lg:text-base"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 order-1 lg:order-2 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex-1 w-full border border-white/20 rounded-[24px] sm:rounded-[30px] p-4 sm:p-6 lg:p-8 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 grid grid-cols-8 gap-2 sm:gap-3 opacity-20 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <span key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
              ))}
            </div>

            <img
              src="/Images/about.jpeg"
              alt="Profile photo of Pulindu Godage"
              className="relative z-10 w-full h-auto max-h-[350px] md:max-h-[450px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />

            <motion.div
              className="relative z-20 mt-4 sm:mt-6 border border-white/20 bg-black/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 flex items-center justify-between gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={20} />
                </div>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  Passionate about clean code, user experience, and smart solutions.
                </p>
              </div>
              <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 hidden sm:flex">
                <Users className="text-black" size={20} />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-row md:flex-col lg:flex-col items-center justify-center gap-4 sm:gap-5 w-full md:w-auto py-2">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 md:[writing-mode:vertical-lr] hidden sm:inline">
              FOLLOW ME
            </span>
            <div className="hidden md:block w-[1px] h-10 bg-gray-800" />
            <div className="block md:hidden h-[1px] w-8 bg-gray-800 hidden sm:block" />

            {[
              { label: 'Behance', bg: '#1769ff', content: 'Bē' },
              { label: 'Dribbble', bg: '#ea4c89', content: 'Dr' },
              { label: 'LinkedIn', bg: '#0077b5', content: 'in' },
              { label: 'GitHub', bg: '#24292e', content: 'GH' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-white hover:scale-110 active:scale-95 transition-all duration-200"
                style={{ backgroundColor: social.bg }}
              >
                {social.content}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
