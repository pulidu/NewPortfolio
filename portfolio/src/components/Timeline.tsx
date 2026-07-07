import { motion } from 'framer-motion';

interface TimelineProps {
  progress: import('framer-motion').MotionValue<string>;
}

export default function Timeline({ progress }: TimelineProps) {
  return (
    <div className="absolute left-[15px] md:left-[19px] lg:left-[23px] top-0 bottom-0 w-[2px] z-0">
      <div className="absolute inset-0 w-full bg-white/5 rounded-full" />
      <motion.div
        className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#00e5c0] via-emerald-400 to-[#00e5c0]"
        style={{
          height: progress,
          boxShadow: '0 0 12px rgba(0,229,192,0.4), 0 0 30px rgba(0,229,192,0.15)',
        }}
      />
    </div>
  );
}
