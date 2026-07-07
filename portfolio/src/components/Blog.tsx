import { memo, useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';

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
];

const allCategories = ['All', 'Development', 'CSS', 'Backend', 'Design'];

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
          'border border-white/[0.06] transition-all duration-500 h-full flex flex-col',
          hovered ? '-translate-y-2 shadow-[0_0_30px_rgba(0,229,192,0.1)] border-[#00e5c0]/25' : '',
        ].join(' ')}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
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
            <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-[#00e5c0]/10 border border-[#00e5c0]/30 text-[#00e5c0]">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-[10px] text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-white font-semibold text-base mb-2 leading-snug">{post.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-500">
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          <a
            href={`#${post.slug}`}
            className={[
              'inline-flex items-center gap-2 text-xs font-medium transition-all duration-300 w-fit',
              hovered ? 'text-[#00e5c0] gap-3' : 'text-slate-400',
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

const BlogSection = memo(function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = useMemo(() => {
    let result = blogPosts;
    if (activeCat !== 'All') result = result.filter(p => p.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [search, activeCat]);

  const featured = useMemo(() => blogPosts.find(p => p.featured), []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative bg-black overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      aria-label="Blog"
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl xl:max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0]" />
            <span className="text-[#00e5c0] text-[10px] font-bold tracking-[0.15em] uppercase">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5c0]">Articles</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Thoughts, tutorials, and insights on software development and technology.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00e5c0]/40 focus:shadow-[0_0_15px_rgba(0,229,192,0.08)] transition-all duration-300"
              aria-label="Search articles"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={[
                  'px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-full border transition-all duration-300',
                  activeCat === cat
                    ? 'bg-[#00e5c0]/10 border-[#00e5c0]/40 text-[#00e5c0]'
                    : 'bg-transparent border-white/[0.06] text-slate-400 hover:text-slate-200',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {featured && search === '' && activeCat === 'All' && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#00e5c0]/60 mb-4 block">Featured Article</span>
            <div className="group relative rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#00e5c0]/30 hover:shadow-[0_0_40px_rgba(0,229,192,0.1)]">
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
                      <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-500">{tag}</span>
                    ))}
                  </div>
                  <a href={`#${featured.slug}`} className="inline-flex items-center gap-2 text-xs font-medium text-[#00e5c0] group-hover:gap-3 transition-all duration-300">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {filtered.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            key={`${search}-${activeCat}`}
          >
            {filtered.filter(p => !p.featured || search !== '' || activeCat !== 'All').map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <BookOpen className="w-16 h-16 text-slate-700 mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">No Articles Yet</h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              I'm working on some exciting content. Stay tuned for articles about development, design, and technology.
            </p>
            <div className="relative">
              <span className="px-4 py-2 text-xs font-semibold rounded-full bg-[#00e5c0]/10 border border-[#00e5c0]/30 text-[#00e5c0] animate-pulse">
                Coming Soon
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
});

export default BlogSection;
