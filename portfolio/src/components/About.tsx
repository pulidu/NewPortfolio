import {
  CalendarDays,
  Code2,
  Users,
  Download,
  ArrowRight,
  Target,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        
        {/* LEFT SIDE (Content) - Takes 12 cols on mobile, 7 cols on large screens */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Badge */}
          <button className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide mb-6 md:mb-8 pointer-events-none">
            • ABOUT ME
          </button>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Building Digital Solutions
            <br />
            That{" "}
            <span className="text-emerald-400">
              Make an Impact.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base sm:text-lg leading-8 md:leading-9 max-w-2xl mb-8 md:mb-10">
            I'm a full-stack software engineer with a passion for building
            scalable, user-focused web applications. I enjoy turning complex
            problems into simple, beautiful, and intuitive solutions.
            <br />
            <span className="text-emerald-400/80 font-medium">Always learning, always building.</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-10 md:mb-12">
            {/* Card 1 */}
            <div className="bg-[#0b0b0b] border border-emerald-500/10 rounded-2xl p-5 hover:border-emerald-400/30 transition duration-300">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <CalendarDays className="text-emerald-400" size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">1+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Years Experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b0b0b] border border-emerald-500/10 rounded-2xl p-5 hover:border-emerald-400/30 transition duration-300">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="text-emerald-400" size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">20+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Projects Completed
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b0b0b] border border-emerald-500/10 rounded-2xl p-5 hover:border-emerald-400/30 transition duration-300">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-emerald-400" size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">10+</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300 w-full sm:w-auto">
              Let’s Build Something
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center justify-center gap-3 text-white hover:text-emerald-400 transition duration-300 py-3 sm:py-0">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Image & Socials) - Takes 5 cols on large screens */}
        <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-6 md:gap-8 order-1 lg:order-2 w-full">
          
          {/* Main Image Container */}
          <div className="flex-1 w-full border border-emerald-500/20 rounded-[24px] sm:rounded-[30px] p-4 sm:p-6 bg-[#050505] relative overflow-hidden">
            
            {/* Glow effect */}
            <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-400/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

            {/* Dots Grid */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 grid grid-cols-8 gap-2 sm:gap-3 opacity-20 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full"
                ></span>
              ))}
            </div>

            {/* Profile Image */}
            <img
              src="/Images/about.jpeg"
              alt="profile"
              className="relative z-10 w-full h-auto max-h-[350px] md:max-h-[450px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />

            {/* Bottom Floating Card */}
            <div className="relative z-20 mt-4 sm:mt-6 border border-emerald-500/20 bg-black/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-emerald-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-emerald-400" size={20} />
                </div>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  Passionate about clean code, user experience, and smart solutions.
                </p>
              </div>
              <div className="bg-emerald-400 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 hidden sm:flex">
                <Users className="text-black" size={20} />
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA SIDEBAR / ROW (Adapts automatically) */}
          <div className="flex flex-row md:flex-col lg:flex-col items-center justify-center gap-4 sm:gap-5 w-full md:w-auto py-2">
            {/* Label - Hidden on small mobile devices, visible as row on tablet, vertical on desktop */}
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 md:[writing-mode:vertical-lr] hidden sm:inline">
              FOLLOW ME
            </span>
            
            {/* Divider line - Hidden on mobile */}
            <div className="hidden md:block w-[1px] h-10 bg-gray-800"></div>
            <div className="block md:hidden h-[1px] w-8 bg-gray-800 hidden sm:block"></div>

            {/* Social Buttons (Sizes and padding adjusted for mobile touch) */}
            <a href="#" aria-label="Behance" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1769ff] flex items-center justify-center font-bold text-xs sm:text-sm text-white hover:scale-110 active:scale-95 transition duration-200">
              Bē
            </a>

            <a href="#" aria-label="Dribbble" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ea4c89] flex items-center justify-center hover:scale-110 active:scale-95 transition duration-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.118-10.424c-.298-.112-2.613-.815-5.277-.373.107.292.21.589.305.889.3.935.553 1.916.749 2.925 2.451-1.071 3.961-2.617 4.223-3.441zm-1.63 4.908c-.208.539-1.4 1.832-3.414 2.766-.15-.794-.372-1.579-.659-2.348-.1-.269-.206-.535-.317-.798 2.503-.435 4.18.239 4.39.38zm-8.212 4.23c2.449 0 4.673-.918 6.357-2.425-.19-.877-.42-1.74-.693-2.57-.091-.274-.188-.546-.291-.815-2.884.778-5.696.697-5.918.687-.015.342-.021.683-.016 1.023.016 1.071.109 2.122.274 3.141.424.039.852.059 1.287.059zm-2.886-.777c-.161-.926-.252-1.884-.271-2.859-.001-.064 0-.127.002-.191-2.288.106-4.636-.554-4.821-.61-.17.659-.263 1.35-.263 2.062 0 3.327 2.158 6.151 5.153 6.643zm-5.184-8.868c.218.058 2.148.552 4.606.324.039-.462.086-.934.143-1.413.076-.642.176-1.289.299-1.93-2.73-.787-4.887-.133-5.08-.069-.125.434-.189.891-.189 1.362 0 .611.11 1.2.311 1.748zm.802-3.791c.217-.061 1.942-.519 4.41.168.411-.849.886-1.688 1.418-2.5-1.921-.77-3.771-.564-3.953-.541-1.077.67-1.956 1.597-2.585 2.684zm6.052-3.32c.162-.016.326-.024.492-.024 1.761-.001 3.394.555 4.733 1.498-.363.666-.757 1.365-1.173 2.091-.497-.197-1.037-.374-1.614-.528-.485-.129-.988-.228-1.503-.298-.124.636-.231 1.272-.317 1.905-.044.331-.081.659-.111.984.14.004.288.006.444.006.516 0 1.053-.016 1.606-.05 2.766-.169 5.253.374 5.568.448.012-.132.022-.266.026-.401.03-1.01-.131-2.036-.481-3.033-.189-.538-.431-1.057-.723-1.55-.386.136-1.127.368-2.188.368a5.53 5.53 0 0 1-1.085-.108c-.732-.82-1.507-1.564-2.31-2.222l-.121-.09z"/>
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 active:scale-95 transition duration-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>

            <a href="#" aria-label="GitHub" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#24292e] flex items-center justify-center hover:scale-110 active:scale-95 transition duration-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;



