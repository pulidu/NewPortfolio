import { memo, useState, useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, FolderOpen, ChevronRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  status: 'Completed' | 'Ongoing';
  github: string;
  live: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tags: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    category: 'fullstack',
    status: 'Completed',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, drag-and-drop, team workspaces, and analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    status: 'Completed',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80',
    tags: ['React', 'Chart.js', 'OpenWeather API', 'CSS'],
    category: 'frontend',
    status: 'Completed',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'API Gateway Service',
    description: 'Microservices API gateway with rate limiting, authentication, logging, and request routing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'GraphQL'],
    category: 'backend',
    status: 'Completed',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans, progress charts, and social features.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80',
    tags: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
    category: 'mobile',
    status: 'Ongoing',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Modern developer portfolio with smooth animations, glassmorphism, and premium UI design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tags: ['React', 'Framer Motion', 'Tailwind', 'TypeScript'],
    category: 'frontend',
    status: 'Completed',
    github: '#',
    live: '#',
    featured: false,
  },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' },
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

const ProjectCard = memo(function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || reducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [reducedMotion]);

  const tiltX = hovered && !reducedMotion ? (mousePos.y - 150) / -20 : 0;
  const tiltY = hovered && !reducedMotion ? (mousePos.x - 200) / 20 : 0;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      <div
        className={[
          'relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-lg',
          'border border-white/[0.06] transition-all duration-500',
          'h-full flex flex-col',
          hovered
            ? '-translate-y-2 shadow-[0_0_40px_rgba(0,229,192,0.15)] border-[#00e5c0]/30'
            : '',
        ].join(' ')}
      >
        {project.featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#00e5c0]/10 border border-[#00e5c0]/30 text-[#00e5c0]">
              Featured
            </span>
          </div>
        )}

        <div className="absolute top-3 right-3 z-20">
          <span className={[
            'px-2.5 py-1 text-[10px] font-semibold rounded-full border',
            project.status === 'Completed'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          ].join(' ')}>
            {project.status}
          </span>
        </div>

        <div className="relative overflow-hidden h-48">
          <div
            className={[
              'absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10',
            ].join(' ')}
          />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={[
              'w-full h-full object-cover transition-all duration-700',
              hovered ? 'scale-110' : 'scale-100',
            ].join(' ')}
          />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
            <a
              href={project.github}
              className={[
                'flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg',
                'transition-all duration-300 text-slate-300 hover:text-white hover:bg-white/[0.06]',
              ].join(' ')}
              aria-label={`View ${project.title} source code`}
            >
              <GithubIcon />
              Code
            </a>
            <a
              href={project.live}
              className={[
                'flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg',
                'transition-all duration-300 bg-[#00e5c0]/10 text-[#00e5c0] hover:bg-[#00e5c0]/20',
              ].join(' ')}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>

        <div
          className={[
            'absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none',
            hovered ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{
            background: hovered ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,229,192,0.06), transparent 40%)` : 'none',
          }}
        />
      </div>
    </motion.div>
  );
});

const ProjectsSection = memo(function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(
    () => activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      aria-label="Featured projects"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00e5c0]/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl xl:max-w-8xl">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0]" />
            <span className="text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">Projects</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={[
                'px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300',
                activeFilter === cat.value
                  ? 'bg-[#00e5c0]/10 border-[#00e5c0]/40 text-[#00e5c0] shadow-[0_0_15px_rgba(0,229,192,0.15)]'
                  : 'bg-transparent border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/[0.15]',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          key={activeFilter}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FolderOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
});

export default ProjectsSection;
