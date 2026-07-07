import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Pen, Code2, Server, LucideIcon } from 'lucide-react';

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: '01',
    icon: Pen,
    title: 'UI/UX Design',
    description:
      'User-centered interface design, wireframing, prototyping, and usability testing to create intuitive digital experiences.',
  },
  {
    id: '02',
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Responsive, performance-focused websites using React, Next.js, Tailwind CSS, and modern frontend technologies.',
  },
  {
    id: '03',
    icon: Server,
    title: 'Backend Development',
    description:
      'Robust server-side logic, RESTful APIs, database management, and authentication systems for scalable web applications.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ServiceCard = memo(function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative group rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg p-7 flex flex-col gap-5 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#00e5c0]/40 hover:shadow-[0_0_30px_rgba(0,229,192,0.08)]"
    >
      <span className="absolute bottom-4 right-5 text-[5rem] font-black text-white/[0.04] select-none leading-none pointer-events-none">
        {service.id}
      </span>

      <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#00e5c0]/30 group-hover:bg-[#00e5c0]/5">
        <Icon size={24} className="text-[#00e5c0]" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-[#00e5c0] text-sm font-medium mt-1 w-fit group/link"
      >
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </motion.div>
  );
});

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen w-full bg-black relative overflow-hidden py-20 px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute top-0 right-0 w-[700px] h-[400px]" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 18, 36, 54, 72, 90, 108, 126].map((offset, i) => (
            <path
              key={i}
              d={`M${700 - offset} 0 C${520 - offset} ${60 + i * 6}, ${380 - offset} ${130 + i * 4}, ${230 - offset} ${180 + i * 3} S${80 - offset} ${280 + i * 2} ${-offset} 400`}
              stroke="white" strokeWidth="0.6" opacity={0.18 - i * 0.015}
            />
          ))}
        </svg>
        <svg className="absolute bottom-0 left-0 w-[500px] h-[300px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 18, 36, 54, 72, 90].map((offset, i) => (
            <path
              key={i}
              d={`M${offset} 300 C${120 + offset} ${220 - i * 5}, ${260 + offset} ${150 - i * 4}, ${380 + offset} ${100 - i * 3} S${480 + offset} ${40 - i * 2} ${500 + offset} 0`}
              stroke="white" strokeWidth="0.6" opacity={0.12 - i * 0.012}
            />
          ))}
        </svg>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00e5c0]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-14 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00e5c0]" />
          <span className="text-[#00e5c0] text-xs font-semibold tracking-widest uppercase">What I Do</span>
        </div>
        <h2 className="text-white text-5xl md:text-7xl font-black tracking-tight leading-none">
          SERVICES
        </h2>
        <p className="text-slate-400 text-base max-w-lg leading-relaxed">
          I provide UI/UX design, frontend development, and modern web experiences tailored to your needs.
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
