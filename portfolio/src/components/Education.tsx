import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, ChevronDown } from 'lucide-react';

interface EducationItem {
  id: string;
  degree: string;
  institute: string;
  location: string;
  duration: string;
  gpa?: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institute: 'University of Colombo School of Computing',
    location: 'Colombo, Sri Lanka',
    duration: '2022 - Present',
    gpa: '3.7/4.0',
    description: 'Focusing on software engineering, data structures, algorithms, and web technologies. Active in coding competitions and hackathons.',
  },
  {
    id: '2',
    degree: 'Foundation in Information Technology',
    institute: 'Institute of Java & Software Engineering',
    location: 'Colombo, Sri Lanka',
    duration: '2021 - 2022',
    gpa: '3.8/4.0',
    description: 'Completed foundation courses in programming, databases, networking, and mathematics with distinction.',
  },
  {
    id: '3',
    degree: 'GCE Advanced Level',
    institute: 'Royal College Colombo',
    location: 'Colombo, Sri Lanka',
    duration: '2018 - 2021',
    description: 'Completed Advanced Level in Physical Science stream with credits in Combined Mathematics, Physics, and Chemistry.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const EducationCard = memo(function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      variants={isLeft ? leftItem : rightItem}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={[
        'relative w-full md:w-[calc(50%-2rem)]',
        isLeft ? 'md:pr-8 md:text-right md:self-start' : 'md:pl-8 md:self-end',
      ].join(' ')}
    >
      <div
        className={[
          'relative overflow-hidden rounded-2xl p-6',
          'bg-white/[0.02] backdrop-blur-lg border border-white/[0.06]',
          'transition-all duration-500 hover:-translate-y-1 hover:border-[#00e5c0]/30 hover:shadow-[0_0_30px_rgba(0,229,192,0.1)]',
        ].join(' ')}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#00e5c0]/10 border border-[#00e5c0]/20 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-[#00e5c0]" />
          </div>
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#00e5c0]/70">
              {item.duration}
            </span>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg mb-1">{item.degree}</h3>
        <p className="text-slate-300 text-sm font-medium mb-1">{item.institute}</p>

        <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
          {item.gpa && (
            <span className="flex items-center gap-1 text-emerald-400/80 font-medium">
              GPA: {item.gpa}
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
});

const EducationSection = memo(function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-black py-24 px-6 overflow-hidden"
      aria-label="Education and qualifications"
    >
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0]" />
            <span className="text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase">Qualifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Education{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">& Journey</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            My academic background and continuous learning path.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-[1.125rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/[0.06] overflow-hidden"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-[#00e5c0] via-emerald-500 to-transparent"
              initial={{ height: '0%' }}
              animate={lineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          <div className="relative flex flex-col gap-10 md:gap-12">
            {educationData.map((item, i) => (
              <div key={item.id} className="relative flex items-start gap-6 md:gap-0">
                <motion.div
                  className="relative z-10 w-9 h-9 rounded-full shrink-0 border-2 border-[#00e5c0]/50 bg-black flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00e5c0] shadow-[0_0_8px_rgba(0,229,192,0.5)]" />
                </motion.div>

                <div className="flex-1 md:hidden">
                  <EducationCard item={item} index={i} />
                </div>

                <div className="hidden md:block w-1/2" />
                <div className="hidden md:block w-1/2">
                  <EducationCard item={item} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default EducationSection;
