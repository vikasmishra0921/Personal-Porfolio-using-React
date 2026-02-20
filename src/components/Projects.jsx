import { motion, useMotionValue, useTransform } from "framer-motion";
import Section from "./Section";
import { PROJECTS } from "../data";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function onMouseMove(e) {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 6);
    y.set((e.clientY - rect.top - rect.height / 2) / 6);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-cyan-400/20 transition-colors duration-300 will-change-transform h-full"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/5 to-blue-500/5" />
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A few things I've built recently.">
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="h-full"
          >
            <TiltCard>
              <div className="flex flex-col h-full gap-4">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Index number */}
                    <p className="text-xs font-mono text-cyan-400/60 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                    title="Open project"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Blurb */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.blurb}
                </p>

                {/* Highlights */}
                {p.highlights?.length > 0 && (
                  <ul className="space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-slate-400/80">
                        <CheckCircle2 size={13} className="text-cyan-400/70 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags — pushed to bottom */}
                <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}