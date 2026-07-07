import { memo, useRef, useMemo, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Server, Database, Wrench, User,
  Zap, Shield, Brain, MessageSquare, Clock, TrendingUp,
} from 'lucide-react';
import SkillCard from './SkillCard';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface FocusItem {
  icon: React.ElementType;
  label: string;
  desc: string;
  borderColor: string;
  iconBg: string;
}

interface Skill {
  name: string;
  rating: number;
  icon: string;
}

interface SoftSkill {
  name: string;
  icon: React.ElementType;
  desc: string;
}

const frontendSkills: Skill[] = [
  { name: 'React', rating: 5, icon: 'react' },
  { name: 'Next.js', rating: 4, icon: 'nextjs' },
  { name: 'Tailwind CSS', rating: 5, icon: 'tailwind' },
  { name: 'TypeScript', rating: 4, icon: 'typescript' },
  { name: 'HTML5', rating: 5, icon: 'html' },
  { name: 'CSS3', rating: 4, icon: 'css' },
  { name: 'JavaScript', rating: 4, icon: 'javascript' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', rating: 4, icon: 'nodejs' },
  { name: 'Express.js', rating: 4, icon: 'express' },
  { name: 'GraphQL', rating: 3, icon: 'graphql' },
];

const databaseSkills: Skill[] = [
  { name: 'MongoDB', rating: 4, icon: 'mongodb' },
  { name: 'PostgreSQL', rating: 4, icon: 'postgresql' },
  { name: 'Prisma', rating: 4, icon: 'prisma' },
];

const toolSkills: Skill[] = [
  { name: 'Git', rating: 4, icon: 'git' },
  { name: 'GitHub', rating: 4, icon: 'github' },
  { name: 'VS Code', rating: 5, icon: 'vscode' },
  { name: 'Figma', rating: 3, icon: 'figma' },
  { name: 'Postman', rating: 4, icon: 'postman' },
  { name: 'Docker', rating: 3, icon: 'docker' },
  { name: 'Vercel', rating: 4, icon: 'vercel' },
  { name: 'ESLint', rating: 4, icon: 'eslint' },
];

const softSkills: SoftSkill[] = [
  {
    name: 'Problem Solving',
    icon: Brain,
    desc: 'Analytical mindset to break down complex problems and find effective solutions.',
  },
  {
    name: 'Communication',
    icon: MessageSquare,
    desc: 'Clear and effective communication to collaborate and align with teams and clients.',
  },
  {
    name: 'Time Management',
    icon: Clock,
    desc: 'Efficient in planning, prioritizing and delivering projects on time.',
  },
  {
    name: 'Continuous Learning',
    icon: TrendingUp,
    desc: 'Always exploring new technologies and improving skills to stay up-to-date.',
  },
];

const focusItems: FocusItem[] = [
  {
    icon: Zap, label: 'Performance',
    desc: 'Building fast and optimized web applications.',
    borderColor: 'border-[#00e5c0]/20', iconBg: 'bg-[#00e5c0]/5',
  },
  {
    icon: Shield, label: 'Scalability',
    desc: 'Writing clean, modular and scalable code.',
    borderColor: 'border-emerald-500/20', iconBg: 'bg-emerald-500/5',
  },
  {
    icon: User, label: 'User Experience',
    desc: 'Creating intuitive and engaging interfaces.',
    borderColor: 'border-indigo-500/20', iconBg: 'bg-indigo-500/5',
  },
];

const CategoryTitle = memo(function CategoryTitle({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="flex items-center gap-3 mb-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Icon className="w-4 h-4 text-[#00e5c0]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase shrink-0"
      >
        {label}
      </motion.h2>
      <div className="h-[1px] flex-grow relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full w-full origin-left bg-gradient-to-r from-[#00e5c0]/50 via-slate-700 to-transparent"
        />
      </div>
    </div>
  );
});

const ParticlesBackground = memo(function ParticlesBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 6 + 5,
        delay: Math.random() * 5,
        xDrift: (Math.random() - 0.5) * 40,
        yDrift: (Math.random() - 0.5) * 40,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#00e5c0]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.2, 0],
            x: [0, p.xDrift, 0],
            y: [0, p.yDrift, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const SkillsSection = memo(function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
      setParallax({ x, y });
    },
    [reducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-black text-white font-sans px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 xl:py-28 flex justify-center items-center overflow-hidden selection:bg-[#00e5c0] selection:text-black"
      aria-label="Skills and technologies section"
    >
      <ParticlesBackground />

      <div
        className="relative z-10 w-full"
        style={{
          transform: reducedMotion ? 'none' : `translate(${parallax.x}px, ${parallax.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <motion.div
          className="max-w-7xl xl:max-w-8xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-12 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#091a24] border border-[#00e5c0]/30 text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0] animate-pulse" />
                My Skills
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ textShadow: '0 0 40px rgba(0,229,192,0.08)' }}
              >
                Technologies{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">
                  I Work With
                </span>
              </motion.h1>

              <motion.p
                className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                I use modern technologies and best practices to build fast, scalable,
                and maintainable web applications that deliver real value.
              </motion.p>
            </div>

            <motion.div
              className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase">
                What I Focus On
              </h3>

              {focusItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div
                    className={`w-10 h-10 shrink-0 ${item.iconBg} ${item.borderColor} text-[#00e5c0] rounded-xl flex items-center justify-center border`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold text-sm mb-1">
                      {item.label}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-8 flex flex-col gap-10 w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div>
              <CategoryTitle icon={Monitor} label="Frontend" />
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3" role="list">
                {frontendSkills.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <CategoryTitle icon={Server} label="Backend" />
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3" role="list">
                  {backendSkills.map((skill, i) => (
                    <SkillCard key={skill.name} {...skill} index={i} />
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <CategoryTitle icon={Database} label="Database" />
                <div className="grid grid-cols-3 gap-3" role="list">
                  {databaseSkills.map((skill, i) => (
                    <SkillCard key={skill.name} {...skill} index={i} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <CategoryTitle icon={Wrench} label="Tools & Others" />
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3" role="list">
                {toolSkills.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>

            <div>
              <CategoryTitle icon={User} label="Soft Skills" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00e5c0]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5c0]/50"
                    variants={itemVariants}
                    tabIndex={0}
                    role="article"
                  >
                    <skill.icon className="w-5 h-5 text-[#00e5c0] mb-3" />
                    <h4 className="text-slate-200 font-semibold text-sm mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default SkillsSection;
