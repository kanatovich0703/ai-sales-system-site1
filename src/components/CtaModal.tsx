import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Loader2, Sparkles } from "lucide-react";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import Markdown from "react-markdown";

interface CtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CtaModal({ isOpen, onClose }: CtaModalProps) {
  const [businessType, setBusinessType] = useState("");
  const [problem, setProblem] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !problem) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `
        Ты эксперт по внедрению систем привлечения и обработки клиентов (лидогенерация, CRM, скрипты продаж).
        Клиент хочет разобрать свою ситуацию.
        Ниша бизнеса: ${businessType}
        Текущая проблема: ${problem}
        
        Проанализируй ситуацию и дай краткий, структурированный ответ (3-4 абзаца):
        1. В чем вероятная причина потери клиентов (где просадка).
        2. Что нужно внедрить в первую очередь (CRM, бот, скрипты, регламенты).
        3. Призыв к действию (записаться на полноценную консультацию).
        
        Пиши профессионально, уверенно, но без воды. Используй форматирование Markdown.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
        },
      });

      setAnalysisResult(response.text);
    } catch (error) {
      console.error("Error analyzing:", error);
      setAnalysisResult("Произошла ошибка при анализе. Пожалуйста, попробуйте позже или свяжитесь со мной напрямую.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">AI-Разбор ситуации</h3>
                </div>

                {!analysisResult ? (
                  <form onSubmit={handleAnalyze} className="space-y-5">
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">
                        Какая у вас ниша? (Например: салон красоты, онлайн-школа)
                      </label>
                      <input
                        type="text"
                        id="business"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        placeholder="Опишите ваш бизнес..."
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="problem" className="block text-sm font-medium text-slate-700 mb-1">
                        В чем главная проблема сейчас?
                      </label>
                      <textarea
                        id="problem"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        rows={3}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                        placeholder="Например: заявки идут, но менеджеры не успевают отвечать..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isAnalyzing}
                      className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Анализируем...
                        </>
                      ) : (
                        "Получить разбор"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="prose prose-sm prose-indigo max-w-none text-slate-600">
                      <Markdown>{analysisResult}</Markdown>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-full rounded-lg bg-slate-900 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
                    >
                      Записаться на внедрение
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
