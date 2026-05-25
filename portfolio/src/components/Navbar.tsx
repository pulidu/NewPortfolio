import React, { useState, useEffect, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-black/30 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        {/* Logo - responsive text size */}
        <a
          href="#home"
          className="text-2xl font-black uppercase tracking-[0.18em] text-white/95 sm:text-3xl"
        >
          PULINDU<span className="ml-1 text-[#3b82f6]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item: NavItem) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMobileOpen((s) => !s)}
        >
          <span className="text-2xl">{isMobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu - Slide-in from top with animation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-5">
              {navItems.map((item: NavItem, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-full px-4 py-3 text-center text-sm uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={handleLinkClick}
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