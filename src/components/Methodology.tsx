import React from 'react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const steps = [
    { num: '01', title: 'Pemeriksaan', subtitle: 'Konsultasi & Skin Assessment', desc: 'Analisa mendalam menggunakan teknologi scanner terbaru.' },
    { num: '02', title: 'Rekomendasi', subtitle: 'Rekomendasi Paket', desc: 'Pilihan treatment yang hanya fokus pada masalah target.' },
    { num: '03', title: 'Prosedur', subtitle: 'Treatment Sesuai Prosedur', desc: 'Eksekusi steril oleh tenaga ahli profesional kami.' },
    { num: '04', title: 'Pemantauan', subtitle: 'Evaluasi & Follow Up', desc: 'Memastikan hasil bertahan lama dan kulit tetap sehat.' },
  ];

  return (
    <section id="proses-perawatan" className="py-16 lg:py-24 bg-surface-container-low px-6 lg:px-8 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto editorial-grid flex flex-col lg:grid items-center gap-12 lg:gap-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-5 order-2 lg:order-1 w-full"
        >
          <div className="relative">
            <img
              alt="Metodologi Perawatan Klinik Kecantikan Aura Dermacare"
              className="rounded-[2.5rem] w-full aspect-square object-cover shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEgEiz17thm2xHyezVgnwa1nTamfkfRqmdt5SgzlEF5ERgF_zW0FL7MnBamTnTW1rQgCZu8S-2OcBKM2Xt5Bx_6l05IK61LqM6y2itWGnFC47EVj9G6JisDPWjln2NlwT_rO41gqn0ge88INVJ-wSJ2Onv9yF7N5B52Q8qhmUFsKRZH85xNkqyurSuANv2_EW8xp6GJdcNjkkxKtBnTwuOHEJ4K394XxP6LJB00sqyOqiB7wp3pljJqcdqOy6uc1rViFi6RDcYr-Vp"
            />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ml-10 col-span-12 lg:col-span-7 order-1 lg:order-2 space-y-8 lg:space-y-10"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold tracking-tight mb-4 lg:mb-6 leading-tight">Perawatan sesuai kondisi kulit kamu</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed italic">
              "Kami percaya bahwa setiap wajah memiliki cerita dan kebutuhan yang berbeda. Tidak ada 'one-size-fits-all' di Aura Dermacare."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-primary font-bold text-lg">{step.num}. {step.title}</span>
                <h4 className="font-bold">{step.subtitle}</h4>
                <p className="text-sm text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
