import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative lg:min-h-[750px] flex items-start pt-12 sm:pt-5 pb-6 px-6 lg:px-8 overflow-hidden bg-white/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto editorial-grid flex flex-col lg:grid">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-7 flex flex-col space-y-8"
        >
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#93f2f2]/30 text-[#006a6a] text-xs font-bold tracking-widest uppercase">
              Revolusi Kulit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter text-[#191c1d] leading-[1.1]">
              Kulit lebih bersih & glowing mulai <span className="text-[#006d2f] italic">4 minggu</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#3c4a3d] max-w-xl font-medium leading-relaxed">
              Konsultasi dulu, baru tindakan. Solusi personal untuk jerawat, bruntusan, bekas, flek, dan kulit kusam.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://wa.me/628111111111?text=Halo%20Aura%20Dermacare,%20saya%20ingin%20berkonsultasi!" className="bg-[#25D366] w-full sm:w-auto justify-center text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg active:scale-95 transition-all flex items-center gap-3">
              <WhatsAppIcon size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
              Chat WhatsApp
            </a>
            <a
              href="#paket-harga"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('paket-harga')?.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#paket-harga');
              }}
              className="bg-[#f8fafa] w-full sm:w-auto justify-center border-2 border-[#e1e3e3] flex items-center text-[#191c1d] px-6 sm:px-8 py-4 rounded-full font-bold text-base hover:bg-[#f2f4f4] transition-all"
            >
              Lihat Paket
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 ">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white bg-[#eceeee] shadow-sm flex items-center justify-center overflow-hidden"
                >
                  <span className="material-symbols-outlined text-[#3c4a3d]/30 text-2xl">person</span>
                </div>
              ))}
            </div>
            <p className="text-xs lg:text-sm font-black text-[#191c1d] tracking-tight uppercase">
              +5000 PASIEN • REVIEW 4.8+ • TENAGA BERPENGALAMAN
            </p>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 lg:col-span-5 relative mt-8 lg:mt-0 w-full aspect-square sm:aspect-auto"
        >
          <div className="rounded-2xl lg:asymmetric-border overflow-hidden bg-[#f2f4f4] h-[350px] sm:h-[550px] lg:h-[650px] relative shadow-[0_32px_64px_rgba(25,28,29,0.12)]">
            <img
              alt="Klinik Kecantikan Aura Dermacare - Fasilitas Mewah dan Steril"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItBVr5Cenf2-qh7aYUxyJMU9B0FojB6Dy__hUDJgE8yrCxH8CmAAW8xB9jdYK-Nfjz6nS-p_cCvYGxWO8c4PF_eqLZXi2ribtdzlKIXCb64EJfpMEPeYUPafqanLkHGRb6e4YkgJ2zeJ6UyGlpErGB9cRilAalFGjrfcexqrZXL1hRlKJC_z65Rf6RU8_Zik9Q-GQHDPrteukBrVTtaSFOSARiSeTl0e1LtICKwQACUNLuY43Ce_qtkM3aLnRDV3XSwJsLEEQ9gKH"
            />

            {/* Overlapping Result Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-4 sm:bottom-10 right-4 sm:right-auto bg-white p-4 sm:p-7 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_40px_rgba(25,28,29,0.08)] w-[85%] sm:w-auto max-w-[260px] border border-[#e6e8e9]"
            >
              <p className="text-[10px] font-black text-[#006d2f] mb-2 sm:mb-4 uppercase tracking-[0.2em]">HASIL NYATA</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg sm:rounded-xl bg-[#f2f4f4] h-16 sm:h-24 overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEOx5A8yysFo3cDAdgJCBGGd3y212DmMc2h2Vte3tpDWQ6iHMZsE0VnNyxnlymyWq79ZaJmc5srBBj-Sm-qaEy2zzGs7MBMfaIN5jflYa928HzWa5GkAz-XlXejCdRipQeiuEstsBAi1jR6FSPd2CQbgem95FDwoDryBffceHT3QP5DUaEeq3rNJGKC6u-tJpJXI-rykPmGv2dvKLUdHbMwYmLBWMZ52tsp3iFYd8Kdggksk5YUsVcEh_nUeiqneoM6zr9Tylh7T-O"
                  />
                </div>
                <div className="rounded-lg sm:rounded-xl bg-[#f2f4f4] h-16 sm:h-24 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUOFUDwsqV345ni69al_GwbhBcfU3y_V8wlqAKe7gUPgjBmdyLmcZJjyev7pGvGcZURfnLlbcbtcBfauGuV9RcLpfwZvqMQN_pK2XXSoYsj6xGXtwGy0g5twJDlXPbd0vWpTr5FSV8tjRv-i6IeRJqA3coj-7Zo9TXidA_lwcpdpH1Y0DPsDtva-2bWEu2nw2pB4PKCKSqO9kySEYaP9-yRGr5OSyv8MqLs7vU_0DliKUhnAIvdet_s79hvHOsEFd5SsBinEjVkQs"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
