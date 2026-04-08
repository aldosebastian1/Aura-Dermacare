import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Apakah konsultasi ini gratis?',
      a: 'Ya, sesi konsultasi awal dengan tim medis kami adalah gratis jika Anda melakukan booking melalui WhatsApp hari ini.'
    },
    {
      q: 'Apakah aman untuk kulit sensitif?',
      a: 'Tentu. Produk dan prosedur kami disesuaikan dengan kondisi kulit masing-masing pasien, termasuk kulit sensitif.'
    },
    {
      q: 'Kapan hasilnya mulai terlihat?',
      a: 'Hasil awal biasanya terlihat setelah 4 minggu perawatan rutin, namun bisa bervariasi tergantung kondisi kulit.'
    },
    {
      q: 'Ada efek samping seperti kulit mengelupas?',
      a: 'Beberapa treatment ringan mungkin menyebabkan sedikit pengelupasan sebagai bagian dari regenerasi, namun tim kami akan memberikan panduan purna-tindakan yang detail.'
    }
  ];

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-bold text-center mb-16 tracking-tight">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen ? 'border-primary/20 shadow-lg' : 'border-outline-variant/10 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 flex justify-between items-center text-left font-bold text-lg hover:bg-surface-container-lowest transition-colors group"
                >
                  <span className={`${isOpen ? 'text-primary' : 'text-on-surface'} transition-colors`}>
                    {faq.q}
                  </span>
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`material-symbols-outlined text-2xl ${isOpen ? 'text-primary' : 'text-on-surface-variant'}`}
                  >
                    expand_more
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
