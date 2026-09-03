import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ArrowUpRight, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  Award,
};

interface EducationItem {
  id: number;
  degree: string;
  institute: string;
  year: string;
  badge: string;
  icon: keyof typeof iconMap;
  logo: string;
  description: string;
}

interface EducationCardProps {
  item: EducationItem;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, mass: 0.8 },
  },
};

export default function EducationCard({ item }: EducationCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex gap-3 md:gap-4 lg:gap-6 group"
    >
      <div className="flex flex-col items-center w-8 md:w-10 lg:w-12 flex-shrink-0">
        <motion.div
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#050505] border-2 border-white shadow-[0_0_16px_rgba(255,255,255,0.4)] flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </motion.div>
        <div className="flex-1 w-[2px] bg-white/[0.04] rounded-full mt-2" />
      </div>

      <div className="flex-1 min-w-0 pb-2">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:border-white/30 group/card">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4">
                <Icon className="w-3 h-3" />
                {item.badge}
              </span>

              <div className="flex items-center gap-2 mt-3">
                <img
                  src={item.logo}
                  alt={item.institute}
                  className="w-6 h-6 object-contain rounded flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {item.degree}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                <span className="text-sm text-gray-400 font-medium">
                  {item.institute}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block" />
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>

              <p className="mt-4 text-sm text-gray-400/80 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>

            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover/card:bg-white group-hover/card:border-white group-hover/card:shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-1">
              <ArrowUpRight className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover/card:text-black group-hover/card:rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
