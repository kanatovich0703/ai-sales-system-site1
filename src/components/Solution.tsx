import { motion } from "motion/react";

const steps = [
  {
    id: "01",
    name: "Привлекаем клиентов через рекламу",
    description: "Настраиваем целевой трафик, который приносит горячие заявки.",
  },
  {
    id: "02",
    name: "Обрабатываем заявки (AI + ответы)",
    description: "Внедряем умных ботов и скрипты для моментального ответа 24/7.",
  },
  {
    id: "03",
    name: "Фиксируем всё в CRM",
    description: "Каждая заявка автоматически попадает в систему. Никто не забыт.",
  },
  {
    id: "04",
    name: "Увеличиваем количество сделок",
    description: "Менеджеры работают только с теплыми лидами, доводя их до оплаты.",
  },
];

export function Solution() {
  return (
    <section className="border-b border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-indigo-500 text-xs font-medium tracking-[0.2em] uppercase mb-6">Архитектура решения</p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">
              Я выстраиваю систему под ключ
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              От привлечения клиентов до обработки заявок и фиксации в CRM. Вы получаете прозрачный и управляемый поток продаж.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id} 
                  className="group relative flex gap-8 py-10 border-t border-white/5 first:border-t-0 lg:first:pt-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-light text-zinc-700 group-hover:text-indigo-500 transition-colors">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">{step.name}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
