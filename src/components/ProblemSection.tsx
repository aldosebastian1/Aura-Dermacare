import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const problems = [
    { icon: 'coronavirus', title: 'Jerawat Bandel', desc: 'Jerawat hormonal atau aktif yang sulit sembuh dengan skincare biasa.' },
    { icon: 'texture', title: 'Bekas Jerawat/Bopeng', desc: 'Noda kemerahan atau tekstur kulit tidak rata paska penyembuhan jerawat.' },
    { icon: 'blur_on', title: 'Flek/Noda Hitam', desc: 'Hiperpigmentasi akibat sinar matahari atau faktor usia.' },
    { icon: 'opacity', title: 'Kulit Kusam', desc: 'Kulit terlihat lelah, tidak bercahaya, dan kehilangan vitalitasnya.' },
    { icon: 'grain', title: 'Pori-pori Besar', desc: 'Produksi minyak berlebih yang membuat tekstur pori tampak nyata.' },
    { icon: 'emergency_home', title: 'Kulit Sensitif', desc: 'Mudah merah, gatal, atau iritasi terhadap produk berbahan keras.' },
  ];

  return (
    <section id="perawatan" className="py-16 lg:py-20 pt-10 px-6 lg:px-8 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-15"
        >
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Memahami Kondisi Kulit Anda</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mt-4 tracking-tight max-w-2xl">Masalah yang sering dialami oleh pasien kami...</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-16">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-6 transition-colors group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-2xl group-hover:text-on-primary-container transition-colors">
                  {prob.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3">{prob.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-[300px]">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
