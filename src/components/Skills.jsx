import Section from "./Section";
import { SKILLS } from "../data";

function SkillGroup({ title, items }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="text-sm uppercase tracking-wide text-slate-400 mb-3">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A pragmatic toolset I use to ship fast and clean.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillGroup title="Languages" items={SKILLS.languages} />
        <SkillGroup title="Frontend" items={SKILLS.frontend} />
        <SkillGroup title="Backend" items={SKILLS.backend} />
        <SkillGroup title="Fullstack" items={SKILLS.fullstack} />
        <SkillGroup title="Libraries" items={SKILLS.libs} />
        <SkillGroup title="Tools" items={SKILLS.tools} />
        <SkillGroup title="Other" items={SKILLS.other} />
      </div>
    </Section>
  );
}