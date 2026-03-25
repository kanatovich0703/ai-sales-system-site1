import { motion } from "motion/react";
import { ArrowRight, Cpu, Database, Target, MessageSquare } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-white/5 overflow-hidden bg-[#050505]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & CTA */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-indigo-500 text-xs font-mono tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-indigo-500"></span>
                Системный подход
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-medium tracking-tighter text-white mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Превращаем хаос <br/>
              в <span className="text-zinc-500">управляемую</span> <br/>
              систему продаж.
            </motion.h1>
            
            <motion.p 
              className="text-lg leading-relaxed text-zinc-400 mb-10 font-light max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Внедрение связки: Таргетированная реклама + AI-ассистенты + CRM. 
              Ни одна заявка не потеряется, каждый лид доводится до сделки.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={onCtaClick}
                className="bg-white text-black px-8 py-4 text-sm font-medium hover:bg-zinc-200 transition-colors uppercase tracking-widest flex items-center gap-3"
              >
                Разобрать систему
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual System */}
          <motion.div 
            className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto border border-white/10 bg-[#0a0a0a] p-6 sm:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
            
            {/* Connecting Lines (Vertical) */}
            <div className="absolute left-1/2 top-12 bottom-12 w-px bg-white/10 -translate-x-1/2 z-0 hidden sm:block"></div>

            {/* Top row: Traffic */}
            <div className="relative z-10 flex justify-start w-full">
              <div className="border border-white/10 bg-[#050505] p-4 flex items-center gap-4 w-48 shadow-2xl">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center">
                  <Target className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 mb-1">SOURCE</div>
                  <div className="text-sm font-medium text-white">Таргет</div>
                </div>
              </div>
              {/* Horizontal connecting line */}
              <div className="hidden sm:block absolute left-48 top-1/2 right-1/2 h-px bg-white/10"></div>
            </div>
            
            {/* Middle row: AI & Messages */}
            <div className="relative z-10 flex justify-center w-full my-8 sm:my-0">
              <div className="border border-indigo-500/30 bg-indigo-500/5 p-5 flex items-center gap-4 w-56 shadow-2xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-indigo-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-indigo-400/70 mb-1">PROCESSING</div>
                  <div className="text-sm font-medium text-white">AI-Ассистент</div>
                </div>
              </div>
            </div>

            {/* Bottom row: CRM */}
            <div className="relative z-10 flex justify-end w-full">
              {/* Horizontal connecting line */}
              <div className="hidden sm:block absolute right-48 top-1/2 left-1/2 h-px bg-white/10"></div>
              <div className="border border-white/10 bg-[#050505] p-4 flex items-center gap-4 w-48 shadow-2xl">
                <div className="w-8 h-8 bg-white/5 flex items-center justify-center">
                  <Database className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 mb-1">STORAGE</div>
                  <div className="text-sm font-medium text-white">CRM</div>
                </div>
              </div>
            </div>

            {/* Floating elements for depth */}
            <div className="absolute -right-4 top-1/4 border border-white/10 bg-[#050505] p-2 sm:p-3 shadow-2xl hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase">Новый лид</span>
              </div>
            </div>
            <div className="absolute -left-4 bottom-1/4 border border-white/10 bg-[#050505] p-2 sm:p-3 shadow-2xl hidden sm:block">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3 h-3 text-indigo-400" />
                <span className="text-[9px] font-mono text-zinc-400 uppercase">Ответ отправлен</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
