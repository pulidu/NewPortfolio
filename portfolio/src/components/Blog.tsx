import { memo, useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Tag, BookOpen, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured: boolean;
  slug: string;
}

interface BlogProps {
  onClose: () => void;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Web Apps with React & TypeScript',
    excerpt: 'Learn how to architect large-scale React applications with TypeScript for better developer experience and code quality.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    category: 'Development',
    tags: ['React', 'TypeScript', 'Architecture'],
    readTime: '8 min read',
    date: 'Mar 15, 2025',
    featured: true,
    slug: 'scalable-react-typescript',
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS: Tips & Best Practices',
    excerpt: 'A comprehensive guide to using Tailwind CSS effectively in your projects with practical tips and patterns.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=80',
    category: 'CSS',
    tags: ['Tailwind', 'CSS', 'Design'],
    readTime: '6 min read',
    date: 'Feb 28, 2025',
    featured: false,
    slug: 'mastering-tailwind-css',
  },
  {
    id: '3',
    title: 'Getting Started with Node.js & Express',
    excerpt: 'A beginner-friendly guide to building RESTful APIs with Node.js, Express, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB'],
    readTime: '10 min read',
    date: 'Jan 20, 2025',
    featured: false,
    slug: 'nodejs-express-guide',
  },
  {
    id: '4',
    title: 'Getting Started with Node.js & Express',
    excerpt: 'A beginner-friendly guide to building RESTful APIs with Node.js, Express, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB'],
    readTime: '10 min read',
    date: 'Jan 20, 2025',
    featured: false,
    slug: 'nodejs-express-guide',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const BlogCard = memo(function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={itemVariants}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={[
          'relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-lg',
          'border border-blue-400/10 transition-all duration-500 h-full flex flex-col',
          hovered ? '-translate-y-2 shadow-[0_0_30px_rgba(59,130,246,0.15)] border-blue-400/30' : '',
        ].join(' ')}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className={[
              'w-full h-full object-cover transition-all duration-700',
              hovered ? 'scale-110' : 'scale-100',
            ].join(' ')}
          />
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-100">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-blue-400/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-blue-400/70" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-white font-semibold text-base mb-2 leading-snug">{post.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-md bg-blue-500/10 border border-blue-400/15 text-blue-300">
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          <a
            href={`#${post.slug}`}
            className={[
              'inline-flex items-center gap-2 text-xs font-medium transition-all duration-300 w-fit',
              hovered ? 'text-blue-200 gap-3' : 'text-slate-400',
            ].join(' ')}
          >
            Read Article
            <ArrowRight className={['w-3.5 h-3.5 transition-transform duration-300', hovered ? 'translate-x-1' : ''].join(' ')} />
          </a>
        </div>
      </div>
    </motion.article>
  );
});

const BlogSection = memo(function BlogSection({ onClose }: BlogProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: '-100px' });
  const featured = useMemo(() => blogPosts.find(p => p.featured), []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.section
      id="blog"
      ref={sectionRef}
      className="fixed inset-0 z-40 bg-black overflow-y-auto pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      aria-label="Blog"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <button
        onClick={onClose}
        className="fixed top-24 md:top-28 right-5 z-40 w-11 h-11 rounded-full bg-[#101a33] border border-blue-400/20 flex items-center justify-center text-blue-200 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
        aria-label="Close blog"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative z-10 mx-auto w-full max-w-6xl xl:max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-200 text-[10px] font-bold tracking-[0.15em] uppercase">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Articles</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Thoughts, tutorials, and insights on software development and technology.
          </p>
        </motion.div>

        {featured && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300/80 mb-4 block">Featured Article</span>
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-blue-400/10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{featured.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md bg-blue-500/10 border border-blue-400/15 text-blue-300">{tag}</span>
                    ))}
                  </div>
                  <a href={`#${featured.slug}`} className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 group-hover:gap-3 transition-all duration-300 group-hover:text-white">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {blogPosts.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {blogPosts.filter(p => !p.featured).map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-blue-400/10 text-sm font-medium text-slate-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                View All Articles
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <BookOpen className="w-16 h-16 text-blue-500/60 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">No Articles Yet</h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              I'm working on some exciting content. Stay tuned for articles about development, design, and technology.
            </p>
            <div className="relative">
              <span className="px-4 py-2 text-xs font-semibold rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 animate-pulse">
                Coming Soon
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
});

export default BlogSection;
