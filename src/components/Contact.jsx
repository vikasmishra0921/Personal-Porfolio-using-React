import Section from "./Section";
import { PROFILE } from "../data";
import { Github, Linkedin, Mail, Phone, FileDown, Instagram, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xjgeeevv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const links = [
    { icon: Mail,      label: PROFILE.email,   href: `mailto:${PROFILE.email}`, external: false },
    { icon: Phone,     label: PROFILE.phone,   href: `tel:${PROFILE.phone}`,    external: false },
    { icon: Github,    label: "GitHub",         href: PROFILE.github,            external: true  },
    { icon: Linkedin,  label: "LinkedIn",       href: PROFILE.linkedin,          external: true  },
    { icon: Instagram, label: "Instagram",      href: PROFILE.instagram,         external: true  },
    { icon: MapPin,    label: PROFILE.location, href: null,                      external: false },
  ];

  return (
    <Section id="contact" title="Let's build something" subtitle="Reach out for roles, collaborations, or questions.">
      <div className="grid md:grid-cols-2 gap-6">

        {/* Left — Contact Info */}
        <div className="glass rounded-xl p-6 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, href, external }) => (
              <div key={label} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                  <Icon size={16} className="text-cyan-400" />
                </div>
                {href ? (
                  external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300/80 hover:text-white text-sm transition-colors truncate"
                    >
                      {label}
                    </a>
                  ) : (
                    <a
                      href={href}
                      className="text-slate-300/80 hover:text-white text-sm transition-colors truncate"
                    >
                      {label}
                    </a>
                  )
                ) : (
                  <span className="text-slate-300/80 text-sm">{label}</span>
                )}
              </div>
            ))}
          </div>

          {/* Resume */}
          {PROFILE.resume && (
            <a
              href={PROFILE.resume}
              download
              className="btn w-full flex items-center justify-center gap-2"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          )}
        </div>

        {/* Right — Contact Form */}
        <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
              <input
                name="name"
                required
                placeholder="Vikas"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 placeholder:text-slate-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 placeholder:text-slate-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Subject</label>
            <input
              name="subject"
              placeholder="Job opportunity / Collaboration"
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 placeholder:text-slate-600 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Hi Vikas, I'd love to connect about..."
              className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-cyan-400/60 placeholder:text-slate-600 transition-colors resize-none"
            />
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="rounded-lg bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-lg bg-red-400/10 border border-red-400/30 px-4 py-2 text-sm text-red-300">
              ✗ Something went wrong. Try emailing me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={15} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </Section>
  );
}