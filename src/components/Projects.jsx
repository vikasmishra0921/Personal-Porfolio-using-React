import { motion, useMotionValue, useTransform } from "framer-motion";
import Section from "./Section";
import { PROJECTS } from "../data";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function onMouseMove(e) {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px / 6);
    y.set(py / 6);
  }
  function onMouseLeave() {
    x.set(0); y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      className="glass rounded-2xl p-5 border-white/10 shadow-glow will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A few things I've built recently.">
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.05 }}
          >
            <TiltCard>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn-secondary p-2" title="Open">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-slate-300/90 mt-2">{p.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="badge">{t}</li>
                  ))}
                </ul>
                {p.highlights?.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-slate-300/80 list-disc pl-5">
                    {p.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                ) : null}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}