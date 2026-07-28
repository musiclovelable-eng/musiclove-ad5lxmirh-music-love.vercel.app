import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-40 bg-white text-black rounded-[60px] relative z-20 -mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[1.1] tracking-tighter mb-10"
            >
              Больше чем <br /> 
              <span className="text-primary">Музыкальный</span> <br />
              Лейбл
            </motion.h2>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-light leading-snug tracking-tight"
            >
              Music Love — это не просто посредник. Это технологический хаб и творческая семья, где каждый звук обретает форму и аудиторию.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-black/10"
            >
              <div className="space-y-4">
                <h4 className="font-display font-black text-xs uppercase tracking-widest text-primary">Миссия</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Разрушать барьеры между артистом и глобальным рынком, предоставляя доступ к лучшим технологиям дистрибьюции.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-display font-black text-xs uppercase tracking-widest text-primary">Видение</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Стать главной точкой входа для независимых артистов, которые ценят честность и качество сервиса.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Dynamic decorative element */}
      <motion.div 
        style={{ rotate: 15 }}
        whileInView={{ rotate: 45 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -right-20 bottom-0 opacity-5 pointer-events-none select-none"
      >
        <span className="text-[300px] font-display font-black">LOVE</span>
      </motion.div>
    </section>
  );
};

export default About;
