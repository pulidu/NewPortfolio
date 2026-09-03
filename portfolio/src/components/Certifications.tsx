import { memo, useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    issueDate: 'Mar 2025',
    credentialId: 'ABC123XYZ',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  },
  {
    id: '2',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: 'Jan 2025',
    credentialId: 'AWS-CP-2025-001',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    id: '3',
    title: 'Google UX Design',
    issuer: 'Google (Coursera)',
    issueDate: 'Nov 2024',
    credentialId: 'GUX-2024-567',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80',
  },
  {
    id: '4',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    issueDate: 'Sep 2024',
    credentialId: 'MDB-DEV-890',
    image:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
  },
  {
    id: '5',
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    issueDate: 'Jul 2024',
    credentialId: 'FCC-JS-2024-123',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const CertCard = memo(function CertCard({
  cert,
  index,
  onSelect,
}: {
  cert: Certification;
  index: number;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      variants={itemVariants}
      className="group relative flex-shrink-0 w-[280px] sm:w-[300px] text-left"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] transition-all duration-500 ${
          hovered
            ? '-translate-y-2 shadow-[0_0_30px_rgba(255,255,255,0.12)] border-white/30'
            : ''
        }`}
      >
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute top-3 right-3 z-20">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-white font-semibold text-sm mb-1 leading-snug">
            {cert.title}
          </h3>
          <p className="text-white text-xs font-medium mb-3">
            {cert.issuer}
          </p>
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-3 border-t border-white/[0.06]">
            <span>Issued {cert.issueDate}</span>
            <span className="truncate ml-2 max-w-[140px]">
              ID: {cert.credentialId}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
});

function CertViewer({
  certs,
  initialIndex,
  onClose,
}: {
  certs: Certification[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const cert = certs[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : certs.length - 1));
  }, [certs.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i < certs.length - 1 ? i + 1 : 0));
  }, [certs.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 sm:right-2 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.12] transition-all duration-300 z-20"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        {/* Card */}
        <div className="bg-[#0B1016] border border-[#1D2733] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Image */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details bar */}
          <div className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {cert.title}
                </h3>
                <p className="text-white text-sm font-medium mt-0.5">
                  {cert.issuer}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[11px] text-slate-500">
                  Issued {cert.issueDate}
                </span>
                <span className="w-px h-4 bg-white/[0.08]" />
                <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
                  {cert.credentialId}
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3" />
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
          >
            <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-black" />
          </button>

          <span className="text-xs text-slate-500 tabular-nums">
            {index + 1} / {certs.length}
          </span>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const CertificationsSection = memo(function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative bg-black overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase">
              Credentials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Certifications{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">
              & Awards
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Professional certifications and credentials that validate my
            expertise.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative group/carousel">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0B1016] border border-[#1D2733] flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white hover:text-black ${
              canScrollLeft
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-gray-400 group-hover/carousel:hover:text-black" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            {certifications.map((cert, i) => (
              <CertCard
                key={cert.id}
                cert={cert}
                index={i}
                onSelect={() => setViewerIndex(i)}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0B1016] border border-[#1D2733] flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white hover:text-black ${
              canScrollRight
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover/carousel:hover:text-black" />
          </button>
        </div>
      </div>

      {/* Viewer modal */}
      <AnimatePresence>
        {viewerIndex !== null && (
          <CertViewer
            certs={certifications}
            initialIndex={viewerIndex}
            onClose={() => setViewerIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
});

export default CertificationsSection;
