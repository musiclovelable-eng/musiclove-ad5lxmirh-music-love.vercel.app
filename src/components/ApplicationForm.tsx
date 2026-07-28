import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ApplicationForm = ({ onDemoSubmit }: { onDemoSubmit: (demo: any) => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);
      onDemoSubmit(data);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({
        top: document.getElementById('apply')?.offsetTop,
        behavior: 'smooth'
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="apply" className="py-40 bg-black text-white text-center rounded-t-[60px] relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto px-6"
        >
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-display font-black uppercase mb-6 tracking-tighter">Заявка принята!</h2>
          <p className="text-white/50 mb-10 font-light">Мы получили ваше письмо на Musiclovelable@gmail.com и уже начали слушать ваш материал. Мы вернемся с ответом в ближайшее время.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-12 py-5 bg-white text-black font-display font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            Отправить еще одну
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-40 bg-black text-white rounded-t-[60px] relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase mb-8 leading-[1.1] tracking-tighter"
          >
            Пришли Своё <br /> <span className="text-primary">Демо</span>
          </motion.h2>
          <p className="text-white/40 max-w-lg mx-auto font-light">
            Каждая великая история начинается с первого шага. Покажите нам, на что вы способны.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 group">
              <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors">01. Электронная Почта</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="MAIL@ARTIST.COM"
                className="w-full bg-transparent border-b-2 border-white/10 p-0 py-4 outline-none focus:border-primary transition-colors font-display text-lg tracking-tight placeholder:text-white/5"
              />
            </div>
            <div className="space-y-4 group">
              <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors">02. Никнейм Артиста</label>
              <input 
                required
                name="nickname"
                type="text" 
                placeholder="ВАШ НИК"
                className="w-full bg-transparent border-b-2 border-white/10 p-0 py-4 outline-none focus:border-primary transition-colors font-display text-lg tracking-tight placeholder:text-white/5"
              />
            </div>
            <div className="space-y-4 group">
              <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors">03. Telegram Юзернейм</label>
              <input 
                required
                name="telegram"
                type="text" 
                placeholder="@ВАШ_ЮЗЕР"
                className="w-full bg-transparent border-b-2 border-white/10 p-0 py-4 outline-none focus:border-primary transition-colors font-display text-lg tracking-tight placeholder:text-white/5"
              />
            </div>
            <div className="space-y-4 group">
              <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors">04. Ссылка на Музыку / Портфолио</label>
              <input 
                required
                name="link"
                type="url" 
                placeholder="HTTPS://SOUNDCLOUD.COM/..."
                className="w-full bg-transparent border-b-2 border-white/10 p-0 py-4 outline-none focus:border-primary transition-colors font-display text-lg tracking-tight placeholder:text-white/5"
              />
            </div>
          </div>
          
          <div className="space-y-4 group">
            <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors">05. Расскажи нам свою историю (Необязательно)</label>
            <textarea 
              name="message"
              rows={2}
              placeholder="НАПИШИТЕ ЧТО-НИБУДЬ..."
              className="w-full bg-transparent border-b-2 border-white/10 p-0 py-4 outline-none focus:border-primary transition-colors font-display text-lg tracking-tight placeholder:text-white/5 resize-none"
            ></textarea>
          </div>

          <div className="pt-12">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-10 bg-white text-black font-display font-black uppercase tracking-[0.3em] text-sm overflow-hidden rounded-3xl disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-6 group-hover:text-white transition-colors">
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'} 
                {!isSubmitting && <Send size={24} className="group-hover:translate-x-4 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
