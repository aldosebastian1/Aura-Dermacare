import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = ['treatments', 'pricing', 'process', 'testimonials', 'faq'];

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

  const navLinks = [
    { name: 'Treatments', href: '#treatments', id: 'treatments' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <nav className="h-21 sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <span className="text-xl font-black text-emerald-900 tracking-tighter font-headline uppercase">
          Aura Dermacare
        </span>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link-animated font-headline tracking-tight ${activeSection === link.id
                ? 'active text-emerald-900 font-bold'
                : 'text-slate-600 font-bold hover:text-emerald-800'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold active:scale-95 transition-all duration-200 shadow-sm flex items-center gap-2" href="https://wa.me/">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Chat WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
