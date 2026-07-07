import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function SectionProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 top-0 bottom-0 w-[3px] z-[100] origin-top"
      style={{
        scaleY,
        background: 'linear-gradient(to bottom, #00e5c0, #10b981, #00e5c0)',
        boxShadow: '0 0 10px rgba(0,229,192,0.3)',
      }}
      aria-hidden="true"
    />
  );
}
