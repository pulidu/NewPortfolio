import { JSX } from 'react';

interface EducationItem {
  id: number;
  institute: string;
  degree: string;
  duration: string;
  description: string;
  logoUrl?: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  grade?: string;
}

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps): JSX.Element {
  return (
    <div className="education-card">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 bg-gray-950/20 border border-gray-900/30 px-2.5 py-0.5 rounded-full uppercase">
          {item.duration}
        </span>
        {item.grade && (
          <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
            // {item.grade}
          </span>
        )}
      </div>
      <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
        {item.degree}
      </h3>
      <p className="text-xs text-zinc-400 font-medium mt-0.5">
        {item.institute}
      </p>
      <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed font-light">
        {item.description}
      </p>
    </div>
  );
}
