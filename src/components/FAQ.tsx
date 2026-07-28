import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Как долго ждать ответа на заявку?",
    answer: "Обычно мы прослушиваем все входящие демо в течение 7-14 рабочих дней. Если ваш материал нас заинтересует, мы обязательно свяжемся с вами по указанным контактам."
  },
  {
    question: "На какие площадки вы выгружаете музыку?",
    answer: "Мы доставляем контент на более чем 200 мировых площадок, включая Spotify, Apple Music, YouTube Music, VK Music, Yandex Music, TikTok, Boom и многие другие."
  },
  {
    question: "Какая доля роялти остается артисту?",
    answer: "Мы работаем по прозрачной схеме 80/20. 80% от всех доходов с дистрибьюции и монетизации получает артист, 20% удерживает лейбл за свои услуги и поддержку."
  },
  {
    question: "Нужен ли эксклюзивный контракт?",
    answer: "Да, для полноценного продвижения и дистрибьюции мы заключаем эксклюзивный контракт на конкретные релизы, чтобы обеспечить максимальную поддержку и защиту авторских прав."
  },
  {
    question: "Вы помогаете с продвижением в соцсетях?",
    answer: "Да, наша команда по промо поддержке помогает с созданием стратегии продвижения в социальных сетях, а также с подачей заявок на редакционные плейлисты."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full py-8 md:py-10 flex justify-between items-center text-left transition-all gap-4"
      >
        <span className={`text-lg md:text-3xl font-display font-black uppercase tracking-tighter transition-all duration-500 ${isOpen ? 'text-primary translate-x-2 md:translate-x-4' : 'group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary border-primary rotate-180' : ''}`}>
           <ChevronDown className={`w-4 h-4 md:w-6 md:h-6 transition-colors ${isOpen ? 'text-white' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-4 md:pl-8 max-w-2xl">
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-40 bg-white text-black relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-4">
          <h2 className="text-5xl md:text-[120px] font-display font-black uppercase leading-none tracking-tighter">FAQ</h2>
          <p className="text-gray-400 font-display font-black uppercase tracking-widest text-[10px]">Часто задаваемые вопросы</p>
        </div>
        
        <div className="divide-y divide-black/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
