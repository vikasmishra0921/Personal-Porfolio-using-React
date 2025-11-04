import Section from "./Section";
import { ACHIEVEMENTS, CERTS, ACTIVITIES } from "../data";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-xl font-semibold mb-3">Highlights</h3>
          <ul className="space-y-2 list-disc pl-5 text-slate-300/90">
            {ACHIEVEMENTS.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-xl font-semibold mb-3">Certifications & Workshops</h3>
          <ul className="space-y-2 list-disc pl-5 text-slate-300/90">
            {CERTS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="glass rounded-xl p-6 mt-6">
        <h3 className="font-display text-xl font-semibold mb-3">Interests & Activities</h3>
        <ul className="space-y-2 list-disc pl-5 text-slate-300/90">
          {ACTIVITIES.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </Section>
  );
}