import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#fafafa] flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-headline font-bold text-[#191c1d] tracking-tight mb-4">
          Mulai Transformasi Kulitmu Sekarang
        </h2>
        <p className="text-slate-600 text-base sm:text-lg italic mb-10 font-medium">
          Klik di bawah untuk menjadwalkan konsultasi dengan ahli kami.
        </p>

        <a
          href="https://wa.me/628111111111?text=Halo%20Aura%20Dermacare,%20saya%20ingin%20segera%20konsultasi!"
          className="bg-[#2ce071] text-[#0a2e16] hover:bg-[#28cc66] transition-all duration-200 py-4 px-10 rounded-full font-bold text-xl flex items-center gap-3 w-full sm:w-auto justify-center active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-2xl font-medium">forum</span>
          Chat WhatsApp
        </a>

        <div className="mt-10 flex flex-col items-center">
          <span className="text-emerald-800 text-[11px] font-black uppercase tracking-[0.15em] mb-2.5">
            BALASAN CEPAT JAM 09:00 - 21:00
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>Jakarta Selatan, Kebayoran Baru No. 45</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
