import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: '"Awalnya ragu karena sudah coba banyak klinik, tapi di sini benar-benar detail analisanya. Jerawat batu saya kempes total!"',
      author: 'Amanda S. (24)',
      complaint: 'Jerawat Hormonal'
    },
    {
      text: '"Wajah jadi glowing tanpa terlihat berminyak. Prosedurnya juga steril banget, dokternya komunikatif."',
      author: 'Rian D. (30)',
      complaint: 'Kusam & Berminyak'
    },
    {
      text: '"Flek hitam menahun perlahan memudar setelah 3 sesi. Terimakasih Aura Dermacare!"',
      author: 'Maya K. (42)',
      complaint: 'Melasma'
    }
  ];

  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-surface-container-lowest px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-surface-container-low p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] space-y-5 sm:space-y-6 text-left"
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1">star</span>
                ))}
              </div>
              <p className="italic text-on-surface">{rev.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                   <span className="material-symbols-outlined text-primary/40">person</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{rev.author}</h4>
                  <p className="text-xs text-on-surface-variant">Keluhan: {rev.complaint}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
