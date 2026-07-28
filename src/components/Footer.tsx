import { Music, Send, Globe, Disc } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <Music className="text-white w-8 h-8" />
              <span className="text-white font-display font-black text-2xl tracking-tighter uppercase">Music Love</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 font-light leading-relaxed">
              Мы создаем будущее музыкальной индустрии, предоставляя артистам лучшие инструменты для роста и успеха. Присоединяйся к семье Music Love.
            </p>
            <div className="flex space-x-6">
              <a href="https://t.me/MusicLoveLable" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Send size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Disc size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Globe size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.2em] mb-8 text-white/30">Навигация</h4>
            <ul className="space-y-4 text-xs font-display font-black uppercase tracking-widest">
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#artists" className="hover:text-primary transition-colors">Артисты</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#apply" className="hover:text-primary transition-colors">Подать заявку</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-display font-black uppercase tracking-[0.2em] mb-8 text-white/30">Контакты</h4>
            <ul className="space-y-4 text-xs font-display font-black uppercase tracking-widest">
              <li className="text-gray-400">ПОЧТА: <br /><a href="mailto:Musiclovelable@gmail.com" className="text-white hover:text-primary transition-colors">MUSICLOVELABLE@GMAIL.COM</a></li>
              <li className="text-gray-400">TG КАНАЛ: <br /><a href="https://t.me/MusicLoveLable" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">@MUSICLOVELABLE</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-display uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} Music Love Label. Все права защищены.
          </p>
          <div className="flex gap-8 text-[10px] font-display uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
