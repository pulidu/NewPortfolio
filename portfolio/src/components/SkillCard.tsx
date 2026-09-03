import { memo, useRef, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SkillCardProps {
  name: string;
  rating: number;
  icon: string;
  index: number;
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1 + 0.3,
      type: 'spring' as const,
      stiffness: 300,
      damping: 15,
    },
  }),
};

const SkillCard = memo(function SkillCard({ name, rating, icon, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);
  const handleFocus = useCallback(() => setHovered(true), []);
  const handleBlur = useCallback(() => setHovered(false), []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.06 },
    },
  }), [index]);

  const spotlightBg = hovered && !reducedMotion
    ? { background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)` }
    : {};

  const centerX = cardRef.current ? cardRef.current.offsetWidth / 2 : 60;
  const centerY = cardRef.current ? cardRef.current.offsetHeight / 2 : 60;
  const tiltX = hovered && !reducedMotion ? (mousePos.y - centerY) / -12 : 0;
  const tiltY = hovered && !reducedMotion ? (mousePos.x - centerX) / 12 : 0;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="relative"
      style={{
        transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: hovered && !reducedMotion
          ? 'transform 0.1s ease-out'
          : 'transform 0.5s ease-out',
      }}
      role="listitem"
      tabIndex={0}
    >
      <div
        className={[
          'relative overflow-hidden rounded-xl p-4 flex flex-col items-center justify-between',
          'aspect-square w-full min-w-[90px] max-w-[130px]',
          'bg-white/[0.03] backdrop-blur-lg',
          'border border-white/[0.06]',
          'transition-all duration-500 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
          hovered
            ? '-translate-y-2 scale-105 shadow-[0_0_30px_rgba(255,255,255,0.25)] border-white/40'
            : '',
        ].join(' ')}
        style={spotlightBg}
      >
        <div
          className={[
            'absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none',
            hovered ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent 60%)',
          }}
        />

        <div
          className={[
            'absolute -inset-[1px] rounded-xl opacity-0 transition-opacity duration-500 pointer-events-none',
            hovered ? 'opacity-100' : '',
          ].join(' ')}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.1))',
            zIndex: -1,
            filter: 'blur(3px)',
          }}
        />

        <div className="w-12 h-12 flex items-center justify-center relative">
          <motion.img
            src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
            alt={`${name} logo`}
            className="w-10 h-10 object-contain"
            loading="lazy"
            animate={
              reducedMotion
                ? {}
                : {
                    y: [0, -4, 0],
                    ...(hovered
                      ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1.15, 1] }
                      : { rotate: 0, scale: 1 }),
                  }
            }
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
          />
        </div>

        <div className="flex flex-col items-center w-full mt-2">
          <span className="text-slate-200 text-xs font-medium mb-2 text-center truncate w-full px-1">
            {name}
          </span>
          <div className="flex gap-1 justify-center" aria-label={`Rating: ${rating} out of 5`}>
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i < rating
                    ? 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]'
                    : 'bg-slate-800'
                }`}
                animate={
                  hovered && i < rating && !reducedMotion
                    ? {
                        scale: [1, 1.4, 1],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.1,
                        },
                      }
                    : {}
                }
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default SkillCard;
