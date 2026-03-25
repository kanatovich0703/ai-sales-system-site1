import { motion } from "motion/react";

const results = [
  "Ни одна заявка не теряется",
  "Быстрая обработка клиентов",
  "Понятная система работы",
  "Больше клиентов доходят до сделки",
];

export function ResultsAndCTA({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="bg-[#050505] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-12">
              Что вы получаете
            </h2>
            <ul className="flex flex-col gap-6">
              {results.map((result, index) => (
                <motion.li 
                  key={result} 
                  className="flex items-center gap-4 text-lg text-zinc-300 font-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  {result}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            className="bg-[#0a0a0a] border border-white/5 p-10 lg:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">
              Готовы перестать терять клиентов?
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-10">
              Если вы уже привлекаете клиентов или планируете запуск — разберём, где у вас сейчас просадка и что можно улучшить.
            </p>
            <button
              onClick={onCtaClick}
              className="w-full bg-white text-black px-8 py-5 text-sm font-medium hover:bg-zinc-200 transition-colors uppercase tracking-widest text-center"
            >
              Разобрать свою ситуацию
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
