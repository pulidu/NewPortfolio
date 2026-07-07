import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Database, Sparkles, type LucideIcon } from 'lucide-react';

interface HighlightItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const highlights: HighlightItem[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Java | Spring Boot | React | MySQL',
    icon: Code2,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Figma | Responsive Design',
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: 'Database Design',
    description: 'MySQL | SQL | ER Diagrams',
    icon: Database,
  },
  {
    id: 4,
    title: 'Continuous Learner',
    description: 'Always exploring modern technologies.',
    icon: Sparkles,
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

export default function HighlightsCard() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <h3 className="text-lg font-bold text-white mb-6">
        Learning Highlights
        <span className="block w-8 h-[2px] bg-gradient-to-r from-[#00e5c0] to-transparent mt-2" />
      </h3>

      <div className="space-y-5">
        {highlights.map((item, i) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group flex items-start gap-4 p-3 -mx-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:border hover:border-[#00e5c0]/10"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00e5c0]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00e5c0]/20 group-hover:shadow-[0_0_15px_rgba(0,229,192,0.15)]">
              <item.icon className="w-4 h-4 text-[#00e5c0]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-white group-hover:text-[#00e5c0] transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
