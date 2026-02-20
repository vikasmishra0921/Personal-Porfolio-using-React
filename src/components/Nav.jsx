import { useEffect, useState } from "react";
import { Github, Linkedin, Phone, Mail, Instagram, FileDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../data";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills"   },
  { href: "#contact",  label: "Contact"  },
];

const SOCIALS = [
  { icon: Github,    href: PROFILE.github,              label: "GitHub",    external: true  },
  { icon: Linkedin,  href: PROFILE.linkedin,            label: "LinkedIn",  external: true  },
  { icon: Instagram, href: PROFILE.instagram,           label: "Instagram", external: true  },
  { icon: Phone,     href: `tel:${PROFILE.phone}`,      label: "Call",      external: false },
  { icon: Mail,      href: `mailto:${PROFILE.email}`,   label: "Email",     external: false },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-slate-900/70 border-b border-white/5" : ""
        }`}
      >
        <div className="container-px max-w-6xl mx-auto flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="font-display text-lg font-bold tracking-tight hover:text-white transition-colors"
          >
            {PROFILE.name.split(" ")[0]}
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setActive(n.href)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                  active === n.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {active === n.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/10"
                  />
                )}
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-1.5">
              {SOCIALS.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Divider */}
            {PROFILE.resume && (
              <div className="hidden md:block w-px h-5 bg-white/10 mx-1" />
            )}

            {/* Resume button */}
            {PROFILE.resume && (
              <a
                href={PROFILE.resume}
                download
                className="hidden sm:inline-flex btn items-center gap-1.5 text-sm px-3 py-1.5"
              >
                <FileDown size={14} />
                Resume
              </a>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 inset-x-0 z-30 backdrop-blur-md bg-slate-900/90 border-b border-white/5 md:hidden"
          >
            <div className="container-px max-w-6xl mx-auto py-4 flex flex-col gap-1">
              {/* Nav links */}
              {NAV_LINKS.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => { setActive(n.href); setMenuOpen(false); }}
                  className="px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {n.label}
                </a>
              ))}

              <div className="h-px bg-white/5 my-2" />

              {/* Socials */}
              <div className="flex items-center gap-2 px-3">
                {SOCIALS.map(({ icon: Icon, href, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Resume */}
              {PROFILE.resume && (
                <a
                  href={PROFILE.resume}
                  download
                  className="btn flex items-center justify-center gap-2 mx-3 mt-2"
                >
                  <FileDown size={14} />
                  Download Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}