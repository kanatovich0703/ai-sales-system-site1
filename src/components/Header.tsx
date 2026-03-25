import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Layers } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">SystemPro</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onCtaClick}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Связаться
          </button>
        </div>
      </div>
    </header>
  );
}
