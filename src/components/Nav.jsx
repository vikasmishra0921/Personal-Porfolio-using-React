import { useEffect, useState } from "react";
import { Github, Linkedin, Phone, Mail, Instagram, FileDown } from "lucide-react";
import { PROFILE } from "../data";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition ${scrolled ? "backdrop-blur glass border-b" : ""}`}>
      <div className="container-px max-w-6xl mx-auto flex h-16 items-center justify-between">
        <a href="/" className="font-display text-lg font-bold tracking-tight hover:text-accent-strong transition">
          {PROFILE.name.split(" ")[0]}
          <span className="text-accent-strong">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-secondary p-2">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn-secondary p-2">
            <Linkedin size={18} />
          </a>
          <a aria-label="Call" href={`tel:${PROFILE.phone}`} className="btn-secondary p-2 hidden md:inline-flex">
            <Phone size={18} />
          </a>
          <a aria-label="Email" href={`mailto:${PROFILE.email}`} className="btn-secondary p-2">
            <Mail size={18} />
          </a>
          {PROFILE.instagram && (
            <a aria-label="Instagram" href={PROFILE.instagram} target="_blank" rel="noreferrer" className="btn-secondary p-2">
              <Instagram size={18} />
            </a>
          )}
          {/* Resume button in nav */}
          <a
            aria-label="Download Resume"
            href={PROFILE.resume}
            download="Dipesh_Gaikar_Resume.pdf"
            className="btn hidden sm:inline-flex"
          >
            <FileDown size={18} />
            <span className="hidden md:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}