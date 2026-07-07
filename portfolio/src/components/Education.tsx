import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import Timeline from './Timeline';
import EducationCard from './EducationCard';
import QuoteCard from './QuoteCard';
import HighlightsCard from './HighlightsCard';

interface EducationItem {
  id: number;
  degree: string;
  institute: string;
  year: string;
  badge: string;
  icon: 'GraduationCap' | 'BookOpen' | 'Award';
  logo: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'HND in Software Engineering',
    institute: 'IJSE',
    year: '2024 \u2013 Present',
    badge: 'Higher National Diploma',
    icon: 'GraduationCap',
    logo: 'https://placehold.co/64x64/0B1120/00e5c3?text=IJSE&font=inter',
    description:
      'Focusing on enterprise application development, advanced Java concepts, full-stack web architecture, and database management systems.',
  },
  {
    id: 2,
    degree: 'Diploma in Information Technology',
    institute: 'NIBM',
    year: '2023 \u2013 2024',
    badge: 'Diploma',
    icon: 'BookOpen',
    logo: 'https://placehold.co/64x64/0B1120/00e5c3?text=NIBM&font=inter',
    description:
      'Comprehensive study of information technology fundamentals, programming principles, networking, and modern computing systems.',
  },
  {
    id: 3,
    degree: 'Advanced Certificate in ICT',
    institute: 'NIBM',
    year: '2022 \u2013 2023',
    badge: 'Certificate',
    icon: 'Award',
    logo: 'https://placehold.co/64x64/0B1120/00e5c3?text=NIBM&font=inter',
    description:
      'Foundation in information and communication technology, including computer applications, MS Office tools, and introductory programming.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const timelineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 xl:py-28"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00e5c0]/[0.03] blur-[150px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl xl:max-w-8xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 border border-[#00e5c0]/30 bg-[#00e5c0]/10 text-[#00e5c0] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0] animate-pulse" />
            {'\uD83C\uDF93'} My Journey
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Education{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">
              &amp; Qualifications
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            My academic journey and continuous learning path that shaped my
            skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[70fr_30fr] gap-8 xl:gap-12 mt-12 md:mt-16">
          <div className="relative min-h-[400px]">
            <Timeline progress={timelineHeight} />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-8 md:space-y-10"
            >
              {educationData.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </motion.div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <QuoteCard />
            <HighlightsCard />
          </div>
        </div>

      </div>
    </section>
  );
}
