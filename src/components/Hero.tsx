import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 border border-white/10 glass-card rounded-full text-[10px] font-display uppercase tracking-[0.3em] mb-12">
            Цифровая Эволюция Музыки
          </div>
          
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[150px] font-display font-black text-white leading-[1] md:leading-[1.1] tracking-[-0.05em] uppercase mb-12 block break-words">
            <span className="inline-block relative">Music</span>
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Love</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Мы объединяем талант и технологии, создавая будущее звука. 
            Ваша музыка заслуживает того, чтобы её услышал мир.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="#apply"
              className="group relative px-12 py-6 bg-white text-black font-display font-black uppercase tracking-widest text-[10px] rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Подать заявку</span>
            </a>
            
            <a
              href="#artists"
              className="flex items-center gap-3 text-white font-display font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors group"
            >
              <span>Наши артисты</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
