import { motion } from "framer-motion";
import StarsBg from "./StarsBg";
import { PROFILE } from "../data";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <StarsBg />
      <div className="container-px max-w-6xl mx-auto py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="badge">Open to Relocation</span>
            <span className="badge">MERN</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Building scalable web apps with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-accent to-blue-400">
              {" "}delightful UX
            </span>
          </h1>

          <p className="text-slate-300/90 mt-5 text-lg">
            {PROFILE.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
            <a href={`mailto:${PROFILE.email}?subject=Hello ${PROFILE.name}`} className="btn-secondary">
              Email Me
            </a>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            {PROFILE.location} • {PROFILE.role}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
    </div>
  );
}