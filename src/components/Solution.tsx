import { motion } from "motion/react";
import { Target, MessageCircle, Cpu, Database, CheckCircle2 } from "lucide-react";

const pipeline = [
  {
    id: "01",
    title: "Реклама",
    icon: Target,
    desc: "Целевой трафик",
  },
  {
    id: "02",
    title: "Сообщения",
    icon: MessageCircle,
    desc: "Входящие заявки",
  },
  {
    id: "03",
    title: "Обработка",
    icon: Cpu,
    desc: "AI-квалификация",
  },
  {
    id: "04",
    title: "CRM",
    icon: Database,
    desc: "Фиксация лида",
  },
  {
    id: "05",
    title: "Сделка",
    icon: CheckCircle2,
    desc: "Успешная продажа",
  },
];

export function Solution() {
  return (
    <section className="border-b border-white/5 bg-[#050505] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <p className="text-indigo-500 text-xs font-mono tracking-[0.2em] uppercase mb-4">Архитектура системы</p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Бесперебойный конвейер продаж
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 relative z-10">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  className="relative flex flex-col items-start lg:items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Vertical line for mobile */}
                  {index !== pipeline.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-16 bottom-[-3rem] w-px bg-white/10"></div>
                  )}
                  
                  <div className="bg-[#050505] lg:px-4 flex flex-col items-start lg:items-center w-full lg:w-auto">
                    <div className="w-12 h-12 border border-white/10 bg-[#0a0a0a] flex items-center justify-center mb-6 relative z-10 shadow-xl">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    
                    <div className="lg:text-center ml-16 lg:ml-0 -mt-16 lg:mt-0">
                      <span className="text-xs font-mono text-zinc-600 mb-2 block">{step.id}</span>
                      <h3 className="text-lg font-medium text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-zinc-400 font-light">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
