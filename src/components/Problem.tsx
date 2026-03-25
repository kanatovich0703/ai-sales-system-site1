import { motion } from "motion/react";

const problems = [
  {
    id: "ERR_01",
    title: "Долгий ответ",
    description: "Клиент написал — не ответили вовремя. Каждая минута ожидания снижает шанс на продажу.",
  },
  {
    id: "ERR_02",
    title: "Слив диалога",
    description: "Нет скриптов, нет понимания, как закрывать возражения. Диалог обрывается.",
  },
  {
    id: "ERR_03",
    title: "Потеря контакта",
    description: "Менеджер забыл перезвонить или написать. Клиент остыл и ушел к конкурентам.",
  },
  {
    id: "ERR_04",
    title: "Слепая зона",
    description: "Нет системы, где всё фиксируется. Вы не знаете реальную конверсию из заявки в оплату.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase mb-4">Анализ потерь</p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Где бизнес теряет деньги
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm text-sm">
            Отсутствие системы на этапе обработки заявок приводит к потере до 60% потенциальной выручки.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.id} 
              className="p-8 border-r border-b border-white/5 hover:bg-[#0a0a0a] transition-colors relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-indigo-500/0 group-hover:bg-indigo-500/50 transition-colors"></div>
              <span className="text-red-500/70 font-mono text-xs mb-8 block">{problem.id}</span>
              <h3 className="text-lg font-medium text-white mb-3 leading-snug">{problem.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
