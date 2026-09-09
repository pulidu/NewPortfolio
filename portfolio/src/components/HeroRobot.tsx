import { motion } from 'framer-motion';

export default function HeroRobot() {
  return (
    <div
      className="pointer-events-none select-none"
      aria-hidden="true"
    >
      <motion.svg
        className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Shadow */}
        <ellipse cx="72" cy="144" rx="26" ry="5" fill="white" opacity="0.12" />

        {/* Antenna */}
        <line x1="72" y1="34" x2="72" y2="50" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
        <motion.circle
          cx="72"
          cy="30"
          r="4.5"
          fill="white"
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Head */}
        <rect x="42" y="50" width="60" height="38" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <rect x="47" y="58" width="50" height="24" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4.5, times: [0, 0.45, 0.5, 0.55, 1], repeat: Infinity }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <circle cx="59" cy="72" r="4.5" fill="white" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.9))' }} />
          <circle cx="85" cy="72" r="4.5" fill="white" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.9))' }} />
        </motion.g>

        {/* Smile */}
        <path d="M 66 78 q 6 4 12 0" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />

        {/* Neck */}
        <rect x="66" y="88" width="12" height="10" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

        {/* Left arm */}
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="36" y="102" width="8" height="26" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        </motion.g>

        {/* Body */}
        <rect x="46" y="98" width="52" height="42" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />

        {/* Chest panel */}
        <rect x="56" y="110" width="32" height="14" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <circle cx="64" cy="117" r="2" fill="white" opacity="0.7" />
        <circle cx="80" cy="117" r="2" fill="white" opacity="0.35" />

        {/* Right arm (waving) */}
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
          animate={{ rotate: [0, -18, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="98" y="102" width="8" height="26" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        </motion.g>

        {/* Feet */}
        <rect x="54" y="140" width="14" height="8" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="76" y="140" width="14" height="8" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}