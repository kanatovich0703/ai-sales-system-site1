import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract-dark/1920/1080?blur=10')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-8">
              Система привлечения и обработки клиентов
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Вы привлекаете клиентов, но часть из них <span className="text-indigo-400">теряется после заявки</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Я выстраиваю систему — от привлечения клиентов до их обработки и фиксации в CRM, где каждая заявка под контролем и больше клиентов доходят до сделки.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={onCtaClick}
              className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Разобрать свою ситуацию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.p 
            className="mt-4 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Покажу, где у вас теряются заявки и что можно улучшить
          </motion.p>
        </div>
      </div>
    </section>
  );
}
