import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingBag,
  ShoppingCart,
  KanbanSquare,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: typeof ShoppingBag;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'PawCare Pet Shop',
    description:
      'A complete pet shop management system with appointments, inventory and billing.',
    image:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
    tags: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    icon: ShoppingBag,
    github: '#',
    live: '#',
  },
  {
    id: '2',
    title: 'ShopEase E-Commerce',
    description:
      'A modern ecommerce platform with search, cart and secure checkout.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    icon: ShoppingCart,
    github: '#',
    live: '#',
  },
  {
    id: '3',
    title: 'TaskFlow',
    description:
      'Task management platform with Kanban board and productivity tools.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    icon: KanbanSquare,
    github: '#',
    live: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={cardVariants} className="group relative">
      <div className="relative overflow-hidden rounded-3xl bg-[#0B1016] border border-[#1D2733] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out h-full flex flex-col hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(255,255,255,0.08)]">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1016] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <project.icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-medium rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <a
              href={project.live}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-all duration-300 group/link"
            >
              View Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
            <a
              href={project.github}
              className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              aria-label="View on GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#05070A] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-[120px] pb-[120px]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            My Work
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            A selection of projects that showcase my skills and passion for
            building great software solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-white/50 text-white font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
