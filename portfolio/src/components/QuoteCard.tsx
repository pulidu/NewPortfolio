import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 15 + Math.random() * 70,
  y: 15 + Math.random() * 70,
  size: 2 + Math.random() * 4,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 2,
}));

export default function QuoteCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const iconX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const iconY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 blur-[60px] rounded-full pointer-events-none" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 flex justify-center mb-6">
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/20 border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          style={{ x: iconX, y: iconY }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center">
        <svg
          className="w-6 h-6 text-white/30 mx-auto mb-3"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed italic">
          &ldquo;Education is the foundation that transforms passion into
          professional excellence.&rdquo;
        </p>
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <p className="text-xs text-gray-500 font-medium">
            &mdash; Pulindu Godage
          </p>
        </div>
      </div>
    </div>
  );
}
