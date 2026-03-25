import { motion } from "motion/react";

const problems = [
  {
    id: "01",
    title: "Клиент написал — не ответили вовремя",
    description: "Каждая минута ожидания снижает шанс на продажу. Клиент уходит к конкурентам.",
  },
  {
    id: "02",
    title: "Ответили, но не довели до сделки",
    description: "Нет скриптов, нет понимания, как закрывать возражения. Диалог обрывается.",
  },
  {
    id: "03",
    title: "Заявка потерялась в переписках",
    description: "Менеджер забыл перезвонить или написать. Клиент остыл.",
  },
  {
    id: "04",
    title: "Нет системы, где всё фиксируется",
    description: "Вы не знаете, сколько реально заявок пришло и сколько из них стали клиентами.",
  },
];

export function Problem() {
  return (
    <section className="border-b border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Где бизнес теряет клиентов
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.id} 
              className="p-8 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-zinc-600 font-mono text-sm mb-8 block">{problem.id}</span>
              <h3 className="text-lg font-medium text-white mb-4 leading-snug">{problem.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-zinc-300 font-light">
            В итоге часть клиентов просто <span className="text-white font-medium">не доходит до оплаты.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
