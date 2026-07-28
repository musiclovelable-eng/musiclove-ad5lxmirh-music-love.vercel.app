import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Services from './components/Services';
import ApplicationForm from './components/ApplicationForm';
import FAQ from './components/FAQ';
import News from './components/News';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminPanel from './components/AdminPanel';

import ArtistPanel from './components/ArtistPanel';

function App() {
  const [userRole, setUserRole] = useState<'admin' | 'artist' | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [demoSubmissions, setDemoSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const session = localStorage.getItem('music_love_session');
    const savedDemos = localStorage.getItem('music_love_demos');
    
    if (session === 'admin') setUserRole('admin');
    if (session === 'artist') setUserRole('artist');
    if (savedDemos) setDemoSubmissions(JSON.parse(savedDemos));
  }, []);

  const handleLogin = (role: 'admin' | 'artist') => {
    setUserRole(role);
    setIsLoginModalOpen(false);
    localStorage.setItem('music_love_session', role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('music_love_session');
    window.scrollTo(0, 0);
  };

  const addDemo = (demo: any) => {
    const newDemos = [...demoSubmissions, { ...demo, id: Date.now(), status: 'Новое', date: new Date().toLocaleDateString() }];
    setDemoSubmissions(newDemos);
    localStorage.setItem('music_love_demos', JSON.stringify(newDemos));
  };

  if (userRole === 'admin') {
    return (
      <main className="min-h-screen bg-[#050505] font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">
        <div className="noise-bg" />
        <AdminPanel onLogout={handleLogout} demos={demoSubmissions} />
      </main>
    );
  }

  if (userRole === 'artist') {
    return (
      <main className="min-h-screen bg-[#050505] font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">
        <div className="noise-bg" />
        <ArtistPanel onLogout={handleLogout} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] font-sans selection:bg-primary selection:text-white relative overflow-x-hidden">
      <div className="noise-bg" />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <Hero />
      <About />
      <Artists />
      <Services />
      <News />
      <FAQ />
      <ApplicationForm onDemoSubmit={addDemo} />
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLogin}
      />
    </main>
  );
}

export default App;
