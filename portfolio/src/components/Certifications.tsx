import { memo, useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Download, ExternalLink, Award } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  image: string;
  category: 'programming' | 'cloud' | 'design' | 'database' | 'other';
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    issueDate: 'Mar 2025',
    credentialId: 'ABC123XYZ',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
    category: 'programming',
  },
  {
    id: '2',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: 'Jan 2025',
    credentialId: 'AWS-CP-2025-001',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
    category: 'cloud',
  },
  {
    id: '3',
    title: 'Google UX Design',
    issuer: 'Google (Coursera)',
    issueDate: 'Nov 2024',
    credentialId: 'GUX-2024-567',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80',
    category: 'design',
  },
  {
    id: '4',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    issueDate: 'Sep 2024',
    credentialId: 'MDB-DEV-890',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
    category: 'database',
  },
  {
    id: '5',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    issueDate: 'Jul 2024',
    credentialId: 'FCC-JS-2024-123',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
    category: 'programming',
  },
];

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'programming', label: 'Programming' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'design', label: 'Design' },
  { value: 'database', label: 'Database' },
  { value: 'other', label: 'Other' },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

const CertCard = memo(function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={[
          'relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-lg',
          'border border-white/[0.06] transition-all duration-500',
          hovered ? '-translate-y-2 shadow-[0_0_30px_rgba(0,229,192,0.12)] border-[#00e5c0]/30' : '',
        ].join(' ')}
      >
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className={[
              'w-full h-full object-cover transition-all duration-700',
              hovered ? 'scale-110' : 'scale-100',
            ].join(' ')}
          />
          <div className="absolute top-3 right-3 z-20">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Award className="w-4 h-4 text-[#00e5c0]" />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{cert.title}</h3>
          <p className="text-[#00e5c0] text-xs font-medium mb-3">{cert.issuer}</p>

          <div className="flex items-center justify-between text-[10px] text-slate-500 mb-4 pb-3 border-b border-white/[0.06]">
            <span>Issued {cert.issueDate}</span>
            <span className="truncate ml-2 max-w-[140px]">ID: {cert.credentialId}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className={[
                'flex items-center gap-1.5 text-[11px] font-medium px-3 py-2 rounded-lg',
                'bg-[#00e5c0]/10 text-[#00e5c0] hover:bg-[#00e5c0]/20 transition-all duration-300',
              ].join(' ')}
            >
              <ExternalLink className="w-3 h-3" />
              Verify
            </a>
            <a
              href="#"
              className={[
                'flex items-center gap-1.5 text-[11px] font-medium px-3 py-2 rounded-lg',
                'text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300',
              ].join(' ')}
            >
              <Download className="w-3 h-3" />
              PDF
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const CertificationsSection = memo(function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () => filter === 'all' ? certifications : certifications.filter(c => c.category === filter),
    [filter],
  );

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative bg-black py-24 px-6 overflow-hidden"
      aria-label="Certifications"
    >
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#00e5c0]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0]" />
            <span className="text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Certifications{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">& Awards</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Professional certifications and credentials that validate my expertise.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={[
                'px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300',
                filter === opt.value
                  ? 'bg-[#00e5c0]/10 border-[#00e5c0]/40 text-[#00e5c0]'
                  : 'bg-transparent border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/[0.15]',
              ].join(' ')}
            >
              {opt.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={filter}
        >
          {filtered.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default CertificationsSection;
