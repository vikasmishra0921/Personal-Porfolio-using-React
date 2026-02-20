import { motion } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "../data";
import {
  Code2, Library, Brain, BarChart2, PieChart,
  Layout, Server, Database, Layers, Package, Wrench, Cpu
} from "lucide-react";

const GROUPS = [
  { key: "languages",        title: "Languages",           icon: Code2,     items: SKILLS.languages        },
  { key: "frontend",         title: "Frontend",            icon: Layout,    items: SKILLS.frontend         },
  { key: "backend",          title: "Backend",             icon: Server,    items: SKILLS.backend          },
  { key: "databases",        title: "Databases",           icon: Database,  items: SKILLS.databases        },
  { key: "fullstack",        title: "Full Stack",          icon: Layers,    items: SKILLS.fullstack        },
  { key: "machineLearning",  title: "Machine Learning",    icon: Brain,     items: SKILLS.machineLearning  },
  { key: "dataAnalysis",     title: "Data Analysis",       icon: BarChart2, items: SKILLS.dataAnalysis     },
  { key: "dataVisualization",title: "Data Visualization",  icon: PieChart,  items: SKILLS.dataVisualization},
  { key: "libraries",        title: "Libraries",           icon: Library,   items: SKILLS.libraries        },
  { key: "libs",             title: "JS Libraries",        icon: Package,   items: SKILLS.libs             },
  { key: "tools",            title: "Tools",               icon: Wrench,    items: SKILLS.tools            },
  { key: "other",            title: "Other",               icon: Cpu,       items: SKILLS.other            },
];

function SkillGroup({ title, icon: Icon, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      className="group glass rounded-xl p-5 border border-white/5 hover:border-cyan-400/20 transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
          <Icon size={13} className="text-cyan-400" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">{title}</span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300/80 font-mono hover:border-cyan-400/30 hover:text-cyan-300 transition-colors duration-150 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A pragmatic toolset I use to ship fast and clean.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, i) => (
          <SkillGroup
            key={g.key}
            title={g.title}
            icon={g.icon}
            items={g.items}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}