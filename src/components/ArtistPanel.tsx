import { useState } from 'react';
import { 
  Music, 
  Wallet, 
  Headset, 
  BarChart3, 
  Rocket, 
  FileText, 
  LogOut, 
  Upload, 
  Play, 
  Settings, 
  Menu, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { id: 'dashboard', label: 'Кабинет', icon: <BarChart3 size={20} /> },
  { id: 'releases', label: 'Мои Релизы', icon: <Music size={20} /> },
  { id: 'distribution', label: 'Дистрибуция', icon: <Rocket size={20} /> },
  { id: 'balance', label: 'Баланс', icon: <Wallet size={20} /> },
  { id: 'contracts', label: 'Контракты', icon: <FileText size={20} /> },
  { id: 'support', label: 'Поддержка', icon: <Headset size={20} /> },
];

const ArtistPanel = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Всего стримов', value: '45.2K', change: '+5%', color: 'text-primary' },
                { label: 'Ваш баланс', value: '$1,240', change: '+$340', color: 'text-green-500' },
                { label: 'Активные треки', value: '8', change: '0', color: 'text-blue-500' },
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="glass-card p-8 rounded-[32px]"
                >
                  <p className="text-white/40 text-[10px] font-display uppercase tracking-widest mb-4">{stat.label}</p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-display font-black tracking-tight">{stat.value}</h3>
                    <span className={`text-[10px] font-display font-black ${stat.color}`}>{stat.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-10 rounded-[48px]">
                <div className="flex justify-between items-center mb-10">
                  <h4 className="font-display font-black uppercase text-xs tracking-[0.3em]">Последний релиз</h4>
                  <button className="text-primary text-[10px] font-display font-black uppercase tracking-widest">Детали</button>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center relative overflow-hidden group">
                     <Play className="text-white relative z-10" fill="white" size={32} />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-2">Midnight City</h3>
                    <p className="text-white/40 text-[10px] font-display uppercase tracking-widest mb-6">Released: 12.05.2024</p>
                    <div className="flex gap-4">
                      <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[8px] font-display font-black uppercase">Apple Music</div>
                      <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[8px] font-display font-black uppercase">Spotify</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-10 rounded-[48px] flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Upload size={24} />
                 </div>
                 <h3 className="text-xl font-display font-black uppercase tracking-tighter mb-4">Новый релиз</h3>
                 <p className="text-white/40 text-xs mb-8 max-w-xs">Загрузите свой новый трек для дистрибуции на все мировые площадки.</p>
                 <button className="px-10 py-4 bg-white text-black font-display font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">Загрузить</button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="glass-card p-20 rounded-[48px] flex flex-col items-center justify-center text-center">
             <Settings className="text-white/10 mb-6 animate-spin-slow" size={48} />
             <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-4">Раздел скоро будет</h3>
             <p className="text-white/40">Мы обновляем функционал "{sidebarItems.find(i => i.id === activeTab)?.label}".</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        w-72 border-r border-white/10 p-8 flex flex-col fixed h-full bg-[#050505] z-[95] transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-2xl flex items-center justify-center">
            <Music className="text-white w-6 h-6" />
          </div>
          <span className="text-white font-display font-black text-sm tracking-tighter uppercase">Music Love</span>
        </div>

        <nav className="space-y-4 flex-1 overflow-y-auto pr-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-display font-black text-[10px] uppercase tracking-widest ${
                activeTab === item.id 
                  ? 'bg-white text-black' 
                  : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={onLogout}
          className="flex items-center gap-4 px-6 py-4 text-white/40 hover:text-primary transition-colors font-display font-black text-[10px] uppercase tracking-widest mt-auto"
        >
          <LogOut size={20} />
          Выйти
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6 md:p-12 lg:p-16 min-w-0">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-2">
              Привет, Артист
            </h1>
            <p className="text-white/20 text-[10px] font-display flex items-center gap-2 uppercase tracking-widest">
              Статус: <span className="text-green-500 font-black">Проверен</span>
            </p>
          </div>
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:border-primary transition-colors overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ArtistPanel;
