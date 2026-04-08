import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_20px_40px_rgba(25,28,29,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <span className="text-xl font-black text-emerald-900 tracking-tighter font-headline uppercase">
          Aura Dermacare
        </span>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-emerald-900 border-b-2 border-emerald-500 pb-1 font-headline font-bold tracking-tight" href="#">Treatments</a>
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors duration-300" href="#">Pricing</a>
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors duration-300" href="#">Process</a>
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors duration-300" href="#">Testimonials</a>
          <a className="text-slate-600 font-medium hover:text-emerald-600 transition-colors duration-300" href="#">FAQ</a>
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
