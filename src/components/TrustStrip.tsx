import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip: React.FC = () => {
  const items = [
    { icon: 'stethoscope', text: 'Konsultasi Terlebih Dahulu' },
    { icon: 'sanitizer', text: 'Prosedur Steril & Higienis' },
    { icon: 'medical_information', text: 'Tenaga Medis Berpengalaman' },
    { icon: 'diversity_2', text: 'Paket Sesuai Tipe Kulit' },
    { icon: 'rate_review', text: 'Follow up Berkala' },
  ];

  return (
    <section className="bg-surface-container-low py-7 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 items-start md:items-center">
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3"
          >
            <span className="material-symbols-outlined text-primary text-3xl md:text-2xl">{item.icon}</span>
            <span className="text-xs md:text-sm font-bold tracking-tight uppercase text-on-surface-variant">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
