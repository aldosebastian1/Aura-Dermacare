import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: 'Pembersihan Dasar',
      category: 'Detoksifikasi & Perawatan',
      features: ['Pembersihan dalam & komedo', 'Pijat wajah menghidrasi', 'Eksfoliasi asam ringan', 'Estimasi 45-60 menit'],
      isPopular: false
    },
    {
      title: 'Glow Reguler',
      category: 'Pemulihan & Pencerahan',
      features: ['Perawatan Jerawat / Pencerah', 'Injeksi Serum / Mesoterapi', 'Terapi Cahaya LED', 'Estimasi 75-90 menit'],
      isPopular: true
    },
    {
      title: 'Perawatan Intensif',
      category: 'Anti-Penuaan Premium',
      features: ['Microneedling RF / HIFU', 'DNA Salmon / Skin Booster', 'Masker Pemulihan Eksklusif', 'Estimasi 120 menit'],
      isPopular: false
    }
  ];

  return (
    <section id="paket-harga" className="py-16 lg:py-24 px-6 lg:px-8 bg-surface scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight">Pilih Perjalanan Kulitmu</h2>
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`p-6 lg:p-8 rounded-[2rem] border transition-all relative ${
              plan.isPopular 
                ? 'bg-surface-container-lowest border-primary-container shadow-xl scale-100 md:scale-105 z-10' 
                : 'bg-surface-container border-outline-variant/10 hover:border-primary/30'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                Terpopuler
              </div>
            )}
            <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">{plan.category}</p>
            <ul className="space-y-4 text-sm text-on-surface-variant mb-10 text-left">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  {feat}
                </li>
              ))}
            </ul>
            <a 
              href={`https://wa.me/628111111111?text=Halo%20Aura%20Dermacare,%20saya%20tertarik%20dengan%20paket%20${plan.title}!`}
              className={`w-full py-3 rounded-xl font-bold transition-all flex justify-center ${
              plan.isPopular 
                ? 'bg-primary-container text-on-primary-container hover:shadow-lg' 
                : 'border border-primary text-primary hover:bg-primary hover:text-white'
            }`}>
              Pilih Paket
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
