import { motion } from 'framer-motion';
import { Globe, Music, Play, Rocket, PieChart } from 'lucide-react';

const services = [
  {
    icon: <Music className="w-8 h-8" />,
    title: "Дистрибьюция",
    description: "Размещение вашего творчества на всех ключевых стриминговых сервисах.",
    color: "bg-blue-500"
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Видео контент",
    description: "Продакшн клипов и коротких видео (Shorts, Reels, TikTok) для продвижения.",
    color: "bg-primary"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Промо",
    description: "Помощь в попадании в плейлисты и рекламные кампании для ваших релизов.",
    color: "bg-accent"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "200+ площадок",
    description: "Весь мир услышит твой звук. Доставляем музыку в каждый уголок планеты.",
    color: "bg-purple-500"
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Роялти 80/20",
    description: "Честные условия сотрудничества. Артист получает 80% от всего дохода.",
    color: "bg-green-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-40 bg-[#0a0a0a] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase leading-[1.1] tracking-tighter mb-8">
              Почему <br /> <span className="text-white/20">Music Love?</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Мы разработали идеальный стек инструментов для современного независимого артиста. Больше никаких скрытых комиссий и сложных контрактов.
            </p>
          </div>
          <div className="hidden lg:block text-[150px] font-display font-black leading-none opacity-5 select-none">
            УСЛУГИ
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 rounded-[40px] group relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}></div>
              
              <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">{service.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{service.description}</p>
              </div>

              <div className="flex justify-between items-center relative z-10 mt-auto">
                <span className="text-[10px] font-display font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">Подробнее</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
