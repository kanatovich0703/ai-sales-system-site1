import { motion } from "motion/react";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 border-b border-white/5 overflow-hidden bg-[#050505]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-indigo-500 text-xs font-medium tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              Системный подход к продажам
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-white mb-10 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Вы привлекаете клиентов, <br className="hidden sm:block" />
            но часть из них <span className="text-zinc-600">теряется после заявки.</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl leading-relaxed text-zinc-400 mb-12 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Я выстраиваю систему — от привлечения клиентов до их обработки и фиксации в CRM. Каждая заявка под контролем. Больше клиентов доходят до сделки.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onCtaClick}
              className="bg-white text-black px-10 py-5 text-sm font-medium hover:bg-zinc-200 transition-colors uppercase tracking-widest"
            >
              Разобрать свою ситуацию
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
