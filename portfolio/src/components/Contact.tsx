import { memo, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Send, Mail, Phone, MapPin, CheckCircle, Loader2, Download, MessageSquare,
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#', color: 'hover:border-[#0077b5] hover:text-[#0077b5]' },
  { icon: GithubIcon, label: 'GitHub', href: '#', color: 'hover:border-white hover:text-white' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@pulindu.dev', color: 'hover:border-white hover:text-white' },
  { icon: TwitterIcon, label: 'Twitter', href: '#', color: 'hover:border-[#1DA1F2] hover:text-[#1DA1F2]' },
  { icon: MessageSquare, label: 'Facebook', href: '#', color: 'hover:border-[#1877F2] hover:text-[#1877F2]' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const FloatingLabelInput = memo(function FloatingLabelInput({
  label, name, type = 'text', value, error, onChange, isTextarea = false,
}: {
  label: string; name: string; type?: string; value: string; error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isFloating = focused || hasValue;

  const InputTag = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <InputTag
        name={name}
        type={isTextarea ? undefined : type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={isTextarea ? 4 : undefined}
        className={[
          'w-full bg-white/[0.02] border rounded-xl px-4 pt-6 pb-2 text-sm text-white',
          'transition-all duration-300 outline-none',
          'focus:border-white/50 focus:shadow-[0_0_15px_rgba(255,255,255,0.06)]',
          error ? 'border-red-500/50' : 'border-white/[0.08] hover:border-white/[0.15]',
          isTextarea ? 'resize-none' : '',
        ].join(' ')}
        aria-label={label}
      />
      <label
        className={[
          'absolute left-4 transition-all duration-300 pointer-events-none',
          isFloating ? 'top-2 text-[10px] text-white/70' : 'top-1/2 -translate-y-1/2 text-sm text-slate-500',
          error ? 'text-red-400' : '',
        ].join(' ')}
      >
        {label}
      </label>
      {error && <p className="text-red-400/80 text-[10px] mt-1.5 px-1">{error}</p>}
    </div>
  );
});

const ContactSection = memo(function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback((): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-black overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      aria-label="Contact"
    >
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <style>{`
          .contact-line-move {
            animation: contactLineMove 12s ease-in-out infinite alternate;
          }
          .contact-line-move-delayed {
            animation: contactLineMove 16s ease-in-out infinite alternate-reverse;
          }
          @keyframes contactLineMove {
            0% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(20px) translateY(-14px); }
            100% { transform: translateX(-14px) translateY(10px); }
          }
        `}</style>
        <svg className="contact-line-move absolute top-0 right-0 w-[700px] lg:w-[900px] h-[400px] lg:h-[500px]" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 18, 36, 54, 72, 90, 108, 126].map((offset, i) => (
            <path
              key={i}
              d={`M${700 - offset} 0 C${520 - offset} ${60 + i * 6}, ${380 - offset} ${130 + i * 4}, ${230 - offset} ${180 + i * 3} S${80 - offset} ${280 + i * 2} ${-offset} 400`}
              stroke="white" strokeWidth="0.6" opacity={0.18 - i * 0.015}
            />
          ))}
        </svg>
        <svg className="contact-line-move-delayed absolute bottom-0 left-0 w-[500px] lg:w-[700px] h-[300px] lg:h-[400px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 18, 36, 54, 72, 90].map((offset, i) => (
            <path
              key={i}
              d={`M${offset} 300 C${120 + offset} ${220 - i * 5}, ${260 + offset} ${150 - i * 4}, ${380 + offset} ${100 - i * 3} S${480 + offset} ${40 - i * 2} ${500 + offset} 0`}
              stroke="white" strokeWidth="0.6" opacity={0.12 - i * 0.012}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl xl:max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white text-[10px] font-bold tracking-[0.15em] uppercase">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">Connect</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@pulindu.dev' },
                  { icon: Phone, label: 'Phone', value: '+94 71 234 5678' },
                  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-slate-200 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-sm">Availability</h3>
                <span className="flex items-center gap-1.5 text-[11px] text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Open to Work
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                I'm currently available for freelance projects, full-time positions, and interesting collaborations.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={[
                    'flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium',
                    'bg-white/[0.02] border border-white/[0.06] text-slate-400',
                    'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]',
                    link.color,
                  ].join(' ')}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/20 p-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-slate-300 hover:text-white transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] p-6 md:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingLabelInput label="Your Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
                  <FloatingLabelInput label="Your Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
                </div>
                <FloatingLabelInput label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={handleChange} />
                <FloatingLabelInput label="Your Message" name="message" value={form.message} error={errors.message} onChange={handleChange} isTextarea />

                <button
                  type="submit"
                  disabled={submitting}
                  className={[
                    'w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold',
                    'bg-gradient-to-r from-white to-gray-300 text-black',
                    'transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]',
                    'disabled:opacity-60 disabled:cursor-not-allowed',
                  ].join(' ')}
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
