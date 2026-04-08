import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['beranda', 'perawatan', 'proses-perawatan', 'paket-harga', 'galeri-hasil', 'tanya-jawab'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (window.location.hash === '#semua-galeri') {
      window.location.hash = '#' + targetId;
      setIsMobileMenuOpen(false);
      
      // Delay scrolling until App re-renders the home component
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#' + targetId);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Perawatan', href: '#perawatan', id: 'perawatan' },
    { name: 'Proses Kami', href: '#proses-perawatan', id: 'proses-perawatan' },
    { name: 'Paket Harga', href: '#paket-harga', id: 'paket-harga' },
    { name: 'Galeri Hasil', href: '#galeri-hasil', id: 'galeri-hasil' },
    { name: 'Tanya Jawab', href: '#tanya-jawab', id: 'tanya-jawab' },
  ];

  return (
    <nav className="h-21 sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.04)]">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <a 
          href="#beranda" 
          onClick={(e) => handleNavClick(e, 'beranda')}
          className="text-xl font-black text-emerald-900 tracking-tighter font-headline uppercase relative z-[60]"
        >
          Aura Dermacare
        </a>
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`nav-link-animated font-headline tracking-tight ${activeSection === link.id
                ? 'active text-emerald-900 font-bold'
                : 'text-slate-600 font-bold hover:text-emerald-800'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 relative z-[60]">
          <a className="hidden sm:flex bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold active:scale-95 transition-all duration-200 shadow-sm items-center gap-2" href="https://wa.me/628111111111?text=Halo%20Aura%20Dermacare!">
            <WhatsAppIcon size={20} />
            Chat WhatsApp
          </a>
          <button 
            className="lg:hidden text-emerald-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 ease-in-out border-t border-slate-100 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-xl font-headline tracking-tight transition-colors ${
                activeSection === link.id
                  ? 'text-emerald-900 font-bold'
                  : 'text-slate-600 font-bold hover:text-emerald-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a className="flex justify-center bg-primary-container text-on-primary-container px-6 py-3.5 mt-2 rounded-full font-bold active:scale-95 transition-all duration-200 shadow-sm items-center gap-2" href="https://wa.me/628111111111?text=Halo%20Aura%20Dermacare!">
            <WhatsAppIcon size={20} />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
