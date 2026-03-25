import { motion } from "motion/react";
import { CheckCircle2, Bot, Database, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    name: "Привлекаем клиентов через рекламу",
    description: "Настраиваем целевой трафик, который приносит горячие заявки.",
    icon: Target,
  },
  {
    name: "Обрабатываем заявки (AI + ответы)",
    description: "Внедряем умных ботов и скрипты для моментального ответа 24/7.",
    icon: Bot,
  },
  {
    name: "Фиксируем всё в CRM",
    description: "Каждая заявка автоматически попадает в систему. Никто не забыт.",
    icon: Database,
  },
  {
    name: "Не теряем клиентов и увеличиваем количество сделок",
    description: "Менеджеры работают только с теплыми лидами, доводя их до оплаты.",
    icon: TrendingUp,
  },
];

export function Solution() {
  return (
    <section className="py-24 bg-slate-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Решение</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Я выстраиваю систему под ключ
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            От привлечения клиентов до обработки заявок и фиксации в CRM. Вы получаете прозрачный и управляемый поток продаж.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.name} 
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">{step.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
