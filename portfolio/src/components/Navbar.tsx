import { useState, useEffect, useCallback, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  isBlog?: boolean;
}

interface NavbarProps {
  onBlogClick: () => void;
  showBlog?: boolean;
  onBlogClose?: () => void;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Blog', href: '#blog', isBlog: true },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onBlogClick, showBlog, onBlogClose }: NavbarProps): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = useCallback(() => setIsMobileOpen(false), []);

  const handleNavClick = useCallback((e: React.MouseEvent, item: NavItem) => {
    if (item.isBlog) {
      e.preventDefault();
      onBlogClick();
      return;
    }

    if (showBlog && onBlogClose) {
      e.preventDefault();
      document.body.style.overflow = '';
      onBlogClose();
      const targetId = item.href.slice(1);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [onBlogClick, showBlog, onBlogClose]);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (showBlog && onBlogClose) {
      e.preventDefault();
      document.body.style.overflow = '';
      onBlogClose();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  }, [showBlog, onBlogClose]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a
          href="#home"
          onClick={handleLogoClick}
          className="flex items-center text-2xl font-black uppercase tracking-[0.18em] text-white/95 sm:text-3xl"
        >
          <span className="mr-2 text-blue-400/80 font-bold">~</span>
          PULINDU<span className="ml-2 text-blue-400/80 font-bold">~</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item: NavItem) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={[
                  'relative px-3 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded-lg',
                  isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.03]',
                ].join(' ')}
              >
                {item.name}
                {item.isBlog && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-blink ml-1" />
                )}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <button
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMobileOpen((s) => !s)}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-white/[0.05] bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-5">
              {navItems.map((item: NavItem, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-xl px-4 py-3 text-center text-sm uppercase tracking-[0.15em] text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={(e) => { handleNavClick(e, item); handleLinkClick(); }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}