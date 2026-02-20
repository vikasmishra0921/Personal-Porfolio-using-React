import { motion } from "framer-motion";
import StarsBg from "./StarsBg";
import { PROFILE } from "../data";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <StarsBg />

      {/* Subtle background glow — toned down */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-px max-w-5xl mx-auto min-h-[90vh] flex items-center py-20">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Greeting */}
            <motion.p {...fadeUp(0)} className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4">
              Hi, I'm {PROFILE.name}
            </motion.p>

            {/* Headline — cleaner, shorter */}
          <motion.h1 {...fadeUp(0.1)} className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-white">
  Full-Stack · ML · Deep Learning
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
    I build apps that think.
  </span>
</motion.h1>
            {/* Role + location — minimal */}
            <motion.p {...fadeUp(0.2)} className="mt-4 text-slate-400 text-sm tracking-wide">
              {PROFILE.role} &nbsp;·&nbsp; {PROFILE.location}
            </motion.p>

            {/* Badges */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-2 mt-5">
              <span className="badge">Open to Relocation</span>
              <span className="badge">MERN Stack</span>
              <span className="badge">Machine Learning</span>
              <span className="badge">Deep Learning</span>
              <span className="badge">Data Analytics</span>
              <span className="badge">Python</span>
              <span className="badge">Available for Hire</span>



            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn">Explore Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </motion.div>

          </div>

          {/* Right: Photo — simpler, smaller */}
          {PROFILE.avatar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative w-44 h-44 md:w-60 md:h-60">
                {/* Soft glow only */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl scale-110" />
                {/* Thin border ring */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="relative w-full h-full rounded-full object-cover object-top"
                />
              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
}