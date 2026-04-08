import React from 'react';

const Bonus: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 text-on-primary relative overflow-hidden text-left">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl font-headline font-bold">Bonus untuk yang booking sekarang!</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">verified</span>
                <span>Free Skin Analysis (Senilai Rp 150rb)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">verified</span>
                <span>First session discount 15%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">verified</span>
                <span>Free trial skin kit samples</span>
              </li>
            </ul>
            <p className="text-sm font-bold text-primary-container animate-pulse">Kuota terbatas hanya untuk 10 orang/hari</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center space-y-4">
            <p className="text-xs uppercase tracking-widest font-bold">Booking via WA</p>
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all">Claim Bonus Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
