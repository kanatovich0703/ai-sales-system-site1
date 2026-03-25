import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const results = [
  "Ни одна заявка не теряется",
  "Быстрая обработка клиентов",
  "Понятная система работы",
  "Больше клиентов доходят до сделки",
];

interface CTAProps {
  onCtaClick: () => void;
}

export function ResultsAndCTA({ onCtaClick }: CTAProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Результаты</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Что вы получаете
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl mb-24">
          <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:gap-y-6">
            {results.map((result, index) => (
              <motion.li 
                key={result} 
                className="flex items-center gap-x-3 text-lg text-slate-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CheckCircle2 className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                {result}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div 
          className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-16 sm:p-16 lg:flex lg:items-center lg:justify-between"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Готовы перестать терять клиентов?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-6 text-slate-300">
              Если вы уже привлекаете клиентов или планируете запуск — разберём, где у вас сейчас просадка и что можно улучшить.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
            <button
              onClick={onCtaClick}
              className="flex w-full items-center justify-center rounded-full bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all gap-2 group"
            >
              Разобрать свою ситуацию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
