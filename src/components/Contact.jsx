import Section from "./Section";
import { PROFILE } from "../data";
import { Github, Linkedin, Mail, Phone, FileDown, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Let's build something" subtitle="Reach out for roles, collaborations, or questions.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <div className="space-y-3 text-slate-300/90">
            <div className="flex items-center gap-3"><Mail size={18} /> <a className="hover:text-white" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <div className="flex items-center gap-3"><Phone size={18} /> <a className="hover:text-white" href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
            <div className="flex items-center gap-3"><Github size={18} /> <a className="hover:text-white" href={PROFILE.github} target="_blank" rel="noreferrer">{PROFILE.github}</a></div>
            <div className="flex items-center gap-3"><Linkedin size={18} /> <a className="hover:text-white" href={PROFILE.linkedin} target="_blank" rel="noreferrer">{PROFILE.linkedin}</a></div>
            <div className="flex items-center gap-3"><Instagram size={18} /> <a className="hover:text-white" href={PROFILE.instagram} target="_blank" rel="noreferrer">{PROFILE.instagram}</a></div>
          </div>

          {/* Resume button */}
          <div className="mt-6">
            <a
              href={PROFILE.resume}
              download="Dipesh_Gaikar_Resume.pdf"
              className="btn w-full md:w-auto"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <form
          className="glass rounded-xl p-6 space-y-4"
          method="POST"
          action="mailto:dipeshgaikar23@gmail.com"
        >
          <div>
            <label className="text-sm text-slate-400">Name</label>
            <input name="name" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/50" />
          </div>
          <div>
            <label className="text-sm text-slate-400">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/50" />
          </div>
          <div>
            <label className="text-sm text-slate-400">Message</label>
            <textarea name="message" rows={4} required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/50" />
          </div>
          <button className="btn w-full">Send</button>
          <p className="text-xs text-slate-400">
            Tip: Replace form action with Formspree/Resend for a real inbox.
          </p>
        </form>
      </div>
    </Section>
  );
}