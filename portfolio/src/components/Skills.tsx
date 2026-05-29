import React from 'react';
// Lucide icons (install using: npm i lucide-react)
import { 
  Monitor, 
  Database, 
  Server, 
  Wrench, 
  User, 
  Zap, 
  Shield, 
  ArrowRight,
  Brain,
  MessageSquare,
  Clock,
  TrendingUp
} from 'lucide-react';

const SkillsSection = () => {
  // Skill Card Component for reuse
  const SkillCard = ({ name, rating, iconPlaceholder }: { name: string; rating: number; iconPlaceholder: string }) => {
    return (
      <div className="bg-[#090d16] border border-slate-800/80 rounded-xl p-4 flex flex-col items-center justify-between aspect-square w-full min-w-[100px] max-w-[130px] hover:border-emerald-500/40 transition-all duration-300 group">
        <div className="w-12 h-12 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-300">
          {/* මෙතැනට අදාළ Technology එකේ SVG එකක් හෝ Image එකක් දාන්න පුළුවන් */}
          <span className="text-xs text-slate-500 font-mono">{iconPlaceholder}</span>
        </div>
        <div className="flex flex-col items-center w-full mt-2">
          <span className="text-slate-300 text-sm font-medium mb-2 text-center truncate w-full">{name}</span>
          {/* Rating Dots */}
          <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`w-2 h-2 rounded-full ${i < rating ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]' : 'bg-slate-800'}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-12 flex justify-center items-center selection:bg-emerald-500 selection:text-black">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-4 lg:sticky lg:top-12 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#091a24] border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              My Skills
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Technologies <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">I Work With</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm">
              I use modern technologies and best practices to build fast, scalable, and maintainable web applications that deliver real value.
            </p>
          </div>

          {/* Focus Section */}
          <div className="bg-[#050912] border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 max-w-sm">
            <h3 className="text-emerald-400 text-xs font-bold tracking-wider uppercase">What I Focus On</h3>
            
            {/* Focus Item 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#091a1e] border border-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-200 font-semibold text-sm mb-1">Performance</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Building fast and optimized web applications.</p>
              </div>
            </div>

            {/* Focus Item 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#071a19] border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-200 font-semibold text-sm mb-1">Scalability</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Writing clean, modular and scalable code.</p>
              </div>
            </div>

            {/* Focus Item 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#0c1424] border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-200 font-semibold text-sm mb-1">User Experience</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Creating intuitive and engaging interfaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-8 flex flex-col gap-10 w-full">
          
          {/* FRONTEND SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-5 h-5 text-teal-400" />
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Frontend</h2>
              <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent flex-grow ml-2"></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
              <SkillCard name="React" rating={5} iconPlaceholder="⚛️" />
              <SkillCard name="Next.js" rating={4} iconPlaceholder="N" />
              <SkillCard name="Tailwind CSS" rating={5} iconPlaceholder="🌊" />
              <SkillCard name="TypeScript" rating={4} iconPlaceholder="TS" />
              <SkillCard name="HTML5" rating={5} iconPlaceholder="🔥" />
              <SkillCard name="CSS3" rating={4} iconPlaceholder="🎨" />
              <SkillCard name="JavaScript" rating={4} iconPlaceholder="JS" />
            </div>
          </div>

          {/* BACKEND & DATABASE ROW */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Backend */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Backend</h2>
                <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent flex-grow ml-2"></div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <SkillCard name="Node.js" rating={4} iconPlaceholder="JS" />
                <SkillCard name="Express.js" rating={4} iconPlaceholder="ex" />
                <SkillCard name="REST API" rating={5} iconPlaceholder="{...}" />
                <SkillCard name="GraphQL" rating={3} iconPlaceholder="⬢" />
              </div>
            </div>

            {/* Database */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-5 h-5 text-teal-400" />
                <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Database</h2>
                <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent flex-grow ml-2"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <SkillCard name="MongoDB" rating={4} iconPlaceholder="🍃" />
                <SkillCard name="PostgreSQL" rating={4} iconPlaceholder="🐘" />
                <SkillCard name="Prisma" rating={4} iconPlaceholder="▲" />
              </div>
            </div>
          </div>

          {/* TOOLS & OTHERS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-5 h-5 text-teal-400" />
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Tools & Others</h2>
              <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent flex-grow ml-2"></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              <SkillCard name="Git" rating={4} iconPlaceholder="🌲" />
              <SkillCard name="GitHub" rating={4} iconPlaceholder="🐙" />
              <SkillCard name="VS Code" rating={5} iconPlaceholder="💻" />
              <SkillCard name="Figma" rating={3} iconPlaceholder="🎨" />
              <SkillCard name="Postman" rating={4} iconPlaceholder="🚀" />
              <SkillCard name="Docker" rating={3} iconPlaceholder="🐳" />
              <SkillCard name="Vercel" rating={4} iconPlaceholder="▲" />
              <SkillCard name="ESLint" rating={4} iconPlaceholder="🚨" />
            </div>
          </div>

          {/* SOFT SKILLS SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Soft Skills</h2>
              <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent flex-grow ml-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Problem Solving */}
              <div className="bg-[#090d16] border border-slate-800/60 rounded-xl p-5 hover:border-emerald-500/20 transition-all">
                <Brain className="w-5 h-5 text-teal-400 mb-3" />
                <h4 className="text-slate-200 font-semibold text-sm mb-2">Problem Solving</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Analytical mindset to break down complex problems and find effective solutions.</p>
              </div>
              {/* Communication */}
              <div className="bg-[#090d16] border border-slate-800/60 rounded-xl p-5 hover:border-emerald-500/20 transition-all">
                <MessageSquare className="w-5 h-5 text-teal-400 mb-3" />
                <h4 className="text-slate-200 font-semibold text-sm mb-2">Communication</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Clear and effective communication to collaborate and align with teams and clients.</p>
              </div>
              {/* Time Management */}
              <div className="bg-[#090d16] border border-slate-800/60 rounded-xl p-5 hover:border-emerald-500/20 transition-all">
                <Clock className="w-5 h-5 text-teal-400 mb-3" />
                <h4 className="text-slate-200 font-semibold text-sm mb-2">Time Management</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Efficient in planning, prioritizing and delivering projects on time.</p>
              </div>
              {/* Continuous Learning */}
              <div className="bg-[#090d16] border border-slate-800/60 rounded-xl p-5 hover:border-emerald-500/20 transition-all">
                <TrendingUp className="w-5 h-5 text-teal-400 mb-3" />
                <h4 className="text-slate-200 font-semibold text-sm mb-2">Continuous Learning</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Always exploring new technologies and improving skills to stay up-to-date.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SkillsSection;