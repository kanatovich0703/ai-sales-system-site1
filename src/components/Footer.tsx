import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SystemPro</span>
          </div>
          
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} SystemPro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
