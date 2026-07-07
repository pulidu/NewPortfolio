import { JSX } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface TimelineProps {
  progress: MotionValue<string>;
}

export default function Timeline({ progress }: TimelineProps): JSX.Element {
  return (
    <div className="timeline-container" aria-hidden="true">
      <div className="timeline-track" />
      <motion.div
        className="timeline-progress"
        style={{ height: progress }}
      />
    </div>
  );
}
