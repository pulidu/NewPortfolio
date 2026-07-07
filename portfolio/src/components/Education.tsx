import { JSX, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';
import { FiAward } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';
import Timeline from './Timeline';
import TimelineNode from './TimelineNode';
import EducationCard from './EducationCard';
import './Education.css';

interface EducationItem {
  id: number;
  institute: string;
  degree: string;
  duration: string;
  description: string;
  logoUrl?: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institute: "Institute of Software Engineering (IJSE)",
    degree: "Higher National Diploma (HND) in Software Engineering(GDSE)",
    duration: "2024 - PRESENT",
    description: "Focusing on enterprise application development, advanced Java concepts, full-stack web architecture, and database management systems.",
    logoUrl: "/pictures/ijse-logo.png",
    fallbackIcon: HiOutlineAcademicCap,
    grade: "Current"
  },
  {
    id: 2,
    institute: " Information Technology Campus",
    degree: "Diploma in Information Technology",
    duration: "2024 - 2026",
    description: "Learned basic Information Technology concepts, computer applications, MS Office tools, and introductory networking skills through an IT Certificate Diploma.",
    logoUrl: "/pictures/itc-logo.png",
    fallbackIcon: IoSchoolOutline,
    grade: "Pass"
  },
  {
    id: 3,
    institute: "British Way English Academy – Nugegoda",
    degree: "Diploma in English Language",
    duration: "2024 - 2024",
    description: "Completed Diploma in English Language at British Way English Academy, Nugegoda, developing communication skills, grammar proficiency, and spoken English fluency.",
    logoUrl: "/pictures/bwea-logo.png",
    fallbackIcon: FiAward,
    grade: "Pass"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.8 }
  }
};

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const height = useTransform(smooth, [0, 1], ['0%', '100%']);

  return { progress: height, raw: smooth };
}

export default function EducationSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress } = useScrollProgress(sectionRef);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#050505] to-[#0A0A0A] overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-white backdrop-blur-md mb-4 font-mono tracking-wider">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gray-500" />
            ACADEMIC PATHWAY
          </div>
          <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-5xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Education & <br /> Qualifications
          </h2>
        </div>

        <div className="relative">
          <Timeline progress={progress} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-10"
          >
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                className="card-row"
              >
                <TimelineNode
                  logoUrl={edu.logoUrl}
                  fallbackIcon={edu.fallbackIcon}
                  institute={edu.institute}
                />
                <EducationCard item={edu} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
