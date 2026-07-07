import { JSX } from 'react';

interface TimelineNodeProps {
  logoUrl?: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  institute: string;
}

export default function TimelineNode({
  logoUrl,
  fallbackIcon: Icon,
  institute,
}: TimelineNodeProps): JSX.Element {
  return (
    <div className="timeline-node-wrapper">
      <div className="timeline-image">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={institute}
          />
        ) : (
          <Icon className="h-7 w-7 text-white/40" />
        )}
      </div>
    </div>
  );
}
