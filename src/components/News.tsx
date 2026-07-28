import { motion } from 'framer-motion';

const news = [
  {
    date: "28 Июля, 2026",
    title: "Music Love начинает свой путь",
    description: "Сегодня официально открываются двери нашего лейбла. Мы готовы менять музыкальную индустрию вместе с вами.",
    category: "Событие"
  }
];

const News = () => {
  return (
    <section id="news" className="py-40 bg-[#0a0a0a] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-primary font-display font-black text-[10px] uppercase tracking-[0.5em] block mb-4">Последние Обновления</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase leading-[1.1] tracking-tighter">
              Внутри <br /> <span className="text-white/20">Лейбла</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/20 rounded-full font-display font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Все истории
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
          {news.map((item, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-[#0a0a0a] p-12 hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-display font-black uppercase tracking-widest py-2 px-4 border border-white/20 rounded-full group-hover:border-black/20 group-hover:text-black transition-colors">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-white/30 group-hover:text-black/30 transition-colors">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-black uppercase leading-tight group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-white/40 font-light leading-relaxed group-hover:text-black/60 transition-colors">
                  {item.description}
                </p>
                
                <div className="pt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-black font-display font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                    Читать далее <span className="text-xl">→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
