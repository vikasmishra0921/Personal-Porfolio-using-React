export default function Footer() {
  return (
    <footer className="container-px max-w-6xl mx-auto py-12 text-sm text-slate-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Dipesh Gaikar. All rights reserved.</div>
        <div className="text-slate-500">
          Built with React + Vite • Animations by Framer Motion • 3D by R3F
        </div>
      </div>
    </footer>
  );
}