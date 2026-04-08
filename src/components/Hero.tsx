import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[921px] flex items-center pt-12 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto editorial-grid">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase animate-fade-in">
              Skin Revolution
            </span>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1]">
              Kulit lebih bersih & glowing mulai <span className="text-primary italic">4 minggu</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl font-medium">
              Konsultasi dulu, baru tindakan. Solusi personal untuk jerawat, bruntusan, bekas, flek, dan kulit kusam.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg active:scale-95 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined">forum</span>
              Chat WhatsApp untuk Konsultasi
            </button>
            <button className="border-2 border-outline-variant/30 text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all">
              Lihat Paket
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest"></div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high"></div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container"></div>
            </div>
            <p className="text-sm font-bold text-on-surface-variant tracking-tight uppercase">
              +5000 pasien • Review 4.8+ • Tenaga berpengalaman
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <div className="asymmetric-border overflow-hidden bg-surface-container-low h-[500px] lg:h-[600px] relative shadow-2xl">
            <img 
              alt="Luxury clinic space" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItBVr5Cenf2-qh7aYUxyJMU9B0FojB6Dy__hUDJgE8yrCxH8CmAAW8xB9jdYK-Nfjz6nS-p_cCvYGxWO8c4PF_eqLZXi2ribtdzlKIXCb64EJfpMEPeYUPafqanLkHGRb6e4YkgJ2zeJ6UyGlpErGB9cRilAalFGjrfcexqrZXL1hRlKJC_z65Rf6RU8_Zik9Q-GQHDPrteukBrVTtaSFOSARiSeTl0e1LtICKwQACUNLuY43Ce_qtkM3aLnRDV3XSwJsLEEQ9gKH" 
            />
            <div className="absolute bottom-6 -left-12 bg-white p-4 rounded-xl shadow-xl max-w-[240px] border border-surface-container-high">
              <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Real Results</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded bg-slate-100 h-24 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEOx5A8yysFo3cDAdgJCBGGd3y212DmMc2h2Vte3tpDWQ6iHMZsE0VnNyxnlymyWq79ZaJmc5srBBj-Sm-qaEy2zzGs7MBMfaIN5jflYa928HzWa5GkAz-XlXejCdRipQeiuEstsBAi1jR6FSPd2CQbgem95FDwoDryBffceHT3QP5DUaEeq3rNJGKC6u-tJpJXI-rykPmGv2dvKLUdHbMwYmLBWMZ52tsp3iFYd8Kdggksk5YUsVcEh_nUeiqneoM6zr9Tylh7T-O" 
                  />
                </div>
                <div className="rounded bg-slate-100 h-24 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUOFUDwsqV345ni69al_GwbhBcfU3y_V8wlqAKe7gUPgjBmdyLmcZJjyev7pGvGcZURfnLlbcbtcBfauGuV9RcLpfwZvqMQN_pK2XXSoYsj6xGXtwGy0g5twJDlXPbd0vWpTr5FSV8tjRv-i6IeRJqA3coj-7Zo9TXidA_lwcpdpH1Y0DPsDtva-2bWEu2nw2pB4PKCKSqO9kySEYaP9-yRGr5OSyv8MqLs7vU_0DliKUhnAIvdet_s79hvHOsEFd5SsBinEjVkQs" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
