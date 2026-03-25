import { motion } from "motion/react";
import { AlertCircle, Clock, MessageSquareOff, Database } from "lucide-react";

const problems = [
  {
    title: "Клиент написал — не ответили вовремя",
    description: "Каждая минута ожидания снижает шанс на продажу. Клиент уходит к конкурентам.",
    icon: Clock,
  },
  {
    title: "Ответили, но не довели до сделки",
    description: "Нет скриптов, нет понимания, как закрывать возражения. Диалог обрывается.",
    icon: MessageSquareOff,
  },
  {
    title: "Заявка потерялась в переписках",
    description: "Менеджер забыл перезвонить или написать. Клиент остыл.",
    icon: AlertCircle,
  },
  {
    title: "Нет системы, где всё фиксируется",
    description: "Вы не знаете, сколько реально заявок пришло и сколько из них стали клиентами.",
    icon: Database,
  },
];

export function Problem() {
  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Суровая реальность</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Где бизнес теряет клиентов
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Вы тратите деньги на рекламу, заявки идут, но выручка не растет. Вот почему это происходит:
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {problems.map((problem, index) => (
              <motion.div 
                key={problem.title} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <problem.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {problem.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{problem.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        
        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-inset ring-slate-200">
            <p className="text-xl font-semibold text-slate-900">
              В итоге часть клиентов просто <span className="text-red-500">не доходит до оплаты</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
