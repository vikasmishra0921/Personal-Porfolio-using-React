import Section from "./Section";
import { EXPERIENCE, EDUCATION } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Roles, hackathons, and impact.">
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-8">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.title + e.period}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
              <div className="glass rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{e.title} • <span className="text-slate-300/80">{e.company}</span></h3>
                  <span className="text-sm text-slate-400">{e.period}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-300/90">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl font-semibold mb-4">Education</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {EDUCATION.map((ed) => (
            <div key={ed.degree} className="glass rounded-xl p-4">
              <div className="font-medium">{ed.degree}</div>
              <div className="text-slate-300/90">{ed.school}</div>
              <div className="text-slate-400 text-sm mt-1">{ed.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}