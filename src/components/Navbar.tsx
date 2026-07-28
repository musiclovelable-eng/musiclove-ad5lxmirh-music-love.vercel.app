import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Артисты', href: '#artists' },
    { name: 'Услуги', href: '#services' },
    { name: 'Новости', href: '#news' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-3 ${scrolled ? 'bg-white/10 backdrop-blur-2xl border border-white/20' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Music className="text-black w-6 h-6" />
            </div>
            <span className="text-white font-display font-black text-lg tracking-tighter uppercase">Music Love</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-white/60 hover:text-white transition-all text-[10px] font-display uppercase tracking-[0.2em]"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4"
          >
            <button 
              onClick={onLoginClick}
              className="text-white/60 hover:text-white text-[10px] font-display uppercase tracking-[0.2em] transition-colors"
            >
              Войти
            </button>
            <a 
              href="#apply"
              className="group relative px-8 py-3 bg-white text-black font-display font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden rounded-full inline-block"
            >
              <span className="relative z-10 transition-colors group-hover:text-white">Стать артистом</span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 bg-white/10 rounded-full border border-white/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-card rounded-3xl overflow-hidden z-[100]"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white block text-lg font-display uppercase tracking-widest border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-5 bg-white text-black font-display font-black uppercase tracking-widest rounded-2xl"
              >
                Подать заявку
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
