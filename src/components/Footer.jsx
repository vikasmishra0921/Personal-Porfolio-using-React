import { PROFILE } from "../data";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: Github,    href: PROFILE.github,                        label: "GitHub"    },
    { icon: Linkedin,  href: PROFILE.linkedin,                      label: "LinkedIn"  },
    { icon: Instagram, href: PROFILE.instagram,                     label: "Instagram" },
    { icon: Mail,      href: `mailto:${PROFILE.email}`,             label: "Email"     },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="container-px max-w-6xl mx-auto py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Logo / Name */}
          <div className="text-lg font-bold tracking-tight">
            <span className="text-white">Vikas</span>
            <span className="text-cyan-400">.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} Vikas Mishra. All rights reserved.</div>
            <div className="flex items-center gap-1">
              Built with <Heart size={11} className="text-cyan-400 mx-1 fill-cyan-400" /> using React, Vite & Framer Motion
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}