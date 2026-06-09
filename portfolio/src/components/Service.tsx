import { Pen, Code2, Server, Cloud, LayoutDashboard, Rocket, LucideIcon } from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: "01",
    icon: Pen,
    title: "UI/UX Design",
    description:
      "User-centered interface design, wireframing, prototyping, and usability testing to create intuitive digital experiences.",
  },
  {
    id: "02",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive, performance-focused websites using React, Next.js, Tailwind CSS, and modern frontend technologies.",
  },
  {
    id: "03",
    icon: Server,
    title: "Backend Development",
    description:
      "Robust server-side logic, RESTful APIs, database management, and authentication systems for scalable web applications.",
  },
  {
    id: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying applications to the cloud with CI/CD pipelines and modern DevOps practices for reliability and scalability.",
  },
  {
    id: "05",
    icon: LayoutDashboard,
    title: "Website Optimization",
    description:
      "Improving website speed, performance, and SEO to ensure better user experience and higher search rankings.",
  },
  {
    id: "06",
    icon: Rocket,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and support to keep your applications secure, fast, and up-to-date.",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="relative group rounded-2xl border border-[#1a2a2a] bg-[#0a0a0a] p-7 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:border-[#00e5c0]/40 hover:bg-[#0d1a1a]">
      {/* Background number */}
      <span className="absolute bottom-4 right-5 text-[5rem] font-black text-white/[0.04] select-none leading-none pointer-events-none">
        {service.id}
      </span>

      {/* Icon box */}
      <div className="w-14 h-14 rounded-xl bg-[#0a0a0a] border border-[#1a3535] flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:border-[#00e5c0]/30 group-hover:bg-[#0d2828]">
        <Icon size={24} className="text-[#00e5c0]" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-white font-bold text-xl leading-tight">{service.title}</h3>
        <p className="text-[#8a9e9e] text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Learn more */}
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
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="min-h-screen w-full bg-[#000000] relative overflow-hidden py-20 px-6">
      {/* Static white wave lines — top-right (like the image) */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute top-0 right-0 w-[700px] h-[400px]"
          viewBox="0 0 700 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 18, 36, 54, 72, 90, 108, 126].map((offset, i) => (
            <path
              key={i}
              d={`M${700 - offset} 0 C${520 - offset} ${60 + i * 6}, ${380 - offset} ${130 + i * 4}, ${230 - offset} ${180 + i * 3} S${80 - offset} ${280 + i * 2} ${-offset} 400`}
              stroke="white"
              strokeWidth="0.6"
              opacity={0.18 - i * 0.015}
            />
          ))}
        </svg>

        {/* Static white wave lines — bottom-left mirror */}
        <svg
          className="absolute bottom-0 left-0 w-[500px] h-[300px]"
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 18, 36, 54, 72, 90].map((offset, i) => (
            <path
              key={i}
              d={`M${offset} 300 C${120 + offset} ${220 - i * 5}, ${260 + offset} ${150 - i * 4}, ${380 + offset} ${100 - i * 3} S${480 + offset} ${40 - i * 2} ${500 + offset} 0`}
              stroke="white"
              strokeWidth="0.6"
              opacity={0.12 - i * 0.012}
            />
          ))}
        </svg>

        {/* Very subtle teal glow at top-right corner only */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00e5c0]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14 gap-4">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5c0]/30 bg-[#00e5c0]/10 px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00e5c0]" />
          <span className="text-[#00e5c0] text-xs font-semibold tracking-widest uppercase">
            What I Do
          </span>
        </div>

        {/* Title */}
        <h2 className="text-white text-6xl md:text-7xl font-black tracking-tight leading-none">
          SERVICES
        </h2>

        {/* Subtitle */}
        <p className="text-[#8a9e9e] text-base max-w-lg leading-relaxed">
          I provide UI/UX design, frontend development, and modern web experiences tailored to your
          needs.
        </p>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
