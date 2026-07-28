import { useState } from 'react';
import { 
  Users, 
  Music, 
  Wallet, 
  Headset, 
  BarChart3, 
  Rocket, 
  FileText,
  LogOut,
  Search,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarItems = [
  { id: 'analytics', label: 'Аналитика', icon: <BarChart3 size={20} /> },
  { id: 'demos', label: 'Демо-записи', icon: <Music size={20} /> },
  { id: 'artists', label: 'Артисты', icon: <Users size={20} /> },
  { id: 'tracks', label: 'Треки', icon: <FileText size={20} /> },
  { id: 'finance', label: 'Финансы', icon: <Wallet size={20} /> },
  { id: 'promo', label: 'Промо', icon: <Rocket size={20} /> },
  { id: 'support', label: 'Поддержка', icon: <Headset size={20} /> },
];

const AdminPanel = ({ onLogout, demos = [] }: { onLogout: () => void; demos?: any[] }) => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Стримы за месяц', value: '1.2M', change: '+12%', color: 'text-primary' },
                { label: 'Доход лейбла', value: '$45,200', change: '+8%', color: 'text-green-500' },
                { label: 'Новые артисты', value: '14', change: '+2', color: 'text-blue-500' },
                { label: 'Активные релизы', value: '248', change: '+15', color: 'text-purple-500' },
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="glass-card p-6 rounded-3xl"
                >
                  <p className="text-white/40 text-[10px] font-display uppercase tracking-widest mb-2">{stat.label}</p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-display font-black tracking-tight">{stat.value}</h3>
                    <span className={`text-[10px] font-display font-black ${stat.color}`}>{stat.change}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 glass-card p-8 rounded-[40px] min-h-[400px]">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-display font-black uppercase text-sm tracking-widest">График активности</h4>
                  <div className="flex gap-2">
                     <button className="text-[10px] font-display font-black bg-white/10 px-3 py-1 rounded-full">НЕДЕЛЯ</button>
                     <button className="text-[10px] font-display font-black bg-primary px-3 py-1 rounded-full text-white">МЕСЯЦ</button>
                  </div>
                </div>
                <div className="h-64 flex items-end gap-2 px-4">
                  {[40, 60, 45, 90, 65, 80, 50, 70, 85, 95, 100, 75].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05 + 0.5, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-lg"
                    />
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-[40px] space-y-6">
                <h4 className="font-display font-black uppercase text-sm tracking-widest">Топ артистов</h4>
                {[
                  { name: 'Kurmur', streams: '450K', img: 'bg-primary' },
                  { name: 'DXPURFARION', streams: '320K', img: 'bg-accent' },
                  { name: 'XANaKY', streams: '210K', img: 'bg-purple-500' },
                  { name: 'Hamshen', streams: '180K', img: 'bg-blue-500' },
                ].map((art, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${art.img} opacity-50`}></div>
                      <div>
                        <p className="font-display font-black uppercase text-[10px]">{art.name}</p>
                        <p className="text-white/40 text-[10px] uppercase">{art.streams} слушателей</p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'demos':
        return (
          <div className="glass-card rounded-[40px] overflow-hidden">
            <div className="p-8 border-b border-white/10 flex justify-between items-center">
              <h4 className="font-display font-black uppercase text-sm tracking-widest">Входящие Демо ({demos.length})</h4>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input 
                  type="text" 
                  placeholder="ПОИСК..." 
                  className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-[10px] font-display outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-[10px] font-display font-black uppercase tracking-widest text-white/30">Артист</th>
                    <th className="p-6 text-[10px] font-display font-black uppercase tracking-widest text-white/30">Инфо</th>
                    <th className="p-6 text-[10px] font-display font-black uppercase tracking-widest text-white/30">Дата</th>
                    <th className="p-6 text-[10px] font-display font-black uppercase tracking-widest text-white/30">Статус</th>
                    <th className="p-6 text-[10px] font-display font-black uppercase tracking-widest text-white/30">Действие</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {demos.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-12 text-center text-white/20 font-display font-black uppercase text-xs">Нет новых заявок</td>
                    </tr>
                  ) : (
                    demos.map((demo, i) => (
                      <tr key={demo.id || i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 font-display font-black uppercase text-[10px]">{demo.nickname || demo.name}</td>
                        <td className="p-6">
                           <p className="text-[8px] text-white/60 uppercase">{demo.email}</p>
                           <p className="text-[8px] text-primary uppercase">{demo.telegram}</p>
                        </td>
                        <td className="p-6 text-[10px] text-white/60">{demo.date}</td>
                        <td className="p-6">
                          <span className={`px-2 py-1 rounded text-[8px] font-display font-black uppercase bg-blue-500`}>{demo.status}</span>
                        </td>
                        <td className="p-6">
                          <a href={demo.link} target="_blank" className="text-[10px] font-display font-black text-primary hover:underline uppercase">Открыть</a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'artists':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="glass-card p-8 rounded-[40px] flex flex-col items-center justify-center border-dashed border-2 hover:border-primary transition-colors group h-[250px]">
              <Plus className="text-white/20 group-hover:text-primary transition-colors mb-4" size={40} />
              <span className="text-[10px] font-display font-black uppercase tracking-widest">Добавить артиста</span>
            </button>
            {['Kurmur', 'Hamshen', 'DXPURFARION', 'XANaKY', 'NURVIC', 'Voron', 'Phantom'].map((art, i) => (
              <div key={i} className="glass-card p-8 rounded-[40px] flex flex-col items-center justify-center h-[250px] group relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-4 flex items-center justify-center text-2xl font-display font-black">
                  {art[0]}
                </div>
                <h4 className="font-display font-black uppercase tracking-tighter text-sm mb-2">{art}</h4>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="text-[8px] font-display font-black uppercase text-primary">Редактировать</button>
                   <button className="text-[8px] font-display font-black uppercase text-red-500">Удалить</button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="glass-card p-20 rounded-[40px] flex flex-col items-center justify-center text-center">
             <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={32} />
             </div>
             <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-4">Раздел находится в разработке</h3>
             <p className="text-white/40 max-w-sm">Мы работаем над функционалом "{sidebarItems.find(i => i.id === activeTab)?.label}". Скоро он будет доступен.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
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
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Music className="text-black w-5 h-5" />
          </div>
          <span className="text-white font-display font-black text-xs tracking-tighter uppercase">Music Love Admin</span>
        </div>

        <nav className="space-y-2 flex-1 overflow-y-auto pr-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-display font-black text-[10px] uppercase tracking-widest ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(255,62,0,0.3)]' 
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
          className="flex items-center gap-4 px-6 py-4 text-white/40 hover:text-red-500 transition-colors font-display font-black text-[10px] uppercase tracking-widest mt-4"
        >
          <LogOut size={20} />
          Выйти
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6 md:p-12 min-w-0">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-2">
              {sidebarItems.find(i => i.id === activeTab)?.label}
            </h1>
            <p className="text-white/40 text-[10px] font-light tracking-wide uppercase">Добро пожаловать в панель управления лейблом</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="font-display font-black uppercase text-[10px]">Администратор</p>
              <p className="text-primary text-[8px] font-display uppercase tracking-widest">Main Office</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]">
               <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center font-display font-black">
                 A
               </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminPanel;
