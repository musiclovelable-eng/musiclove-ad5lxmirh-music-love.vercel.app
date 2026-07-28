import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, User, Music, ArrowRight } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: (role: 'admin' | 'artist') => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'MusicLove2010' && password === 'MusicLove2010') {
      onLogin('admin');
    } else if (username === 'zapoccii' && password === 'zapoccii') {
      onLogin('artist');
    } else {
      setError('Неверный логин или пароль');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-card rounded-[40px] overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-12">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <Music className="text-black w-8 h-8" />
                </div>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-2">Админ-панель</h3>
                <p className="text-white/40 text-xs font-light tracking-wide uppercase">Введите учетные данные лейбла</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors ml-1">Логин</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      required
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="ENTER LOGIN"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-primary transition-colors font-display text-xs tracking-widest placeholder:text-white/5"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-white/30 group-focus-within:text-primary transition-colors ml-1">Пароль</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input 
                      required
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="ENTER PASSWORD"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-primary transition-colors font-display text-xs tracking-widest placeholder:text-white/5"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-primary text-[10px] font-display font-black uppercase text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  className="group relative w-full py-6 bg-white text-black font-display font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden rounded-2xl mt-4"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                    Авторизация <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
