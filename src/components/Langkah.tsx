import React from 'react';

const Langkah: React.FC = () => {
  const steps = [
    { icon: 'ads_click', text: 'Klik Tombol Chat WA' },
    { icon: 'photo_camera', text: 'Kirim Keluhan + Foto' },
    { icon: 'calendar_month', text: 'Jadwalkan Konsultasi' },
    { icon: 'analytics', text: 'Assessment & Rekomendasi' },
    { icon: 'spa', text: 'Mulai Treatment', highlight: true },
  ];

  return (
    <section className="py-24 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-bold text-center mb-16">5 Langkah Menuju Kulit Impian</h2>
        <div className="relative flex flex-col md:flex-row justify-between gap-12 items-start">
          {/* Progress Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[2px] bg-outline-variant/20 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px] group flex-1">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-surface shadow-md group-hover:scale-110 transition-transform ${
                step.highlight ? 'bg-primary-container' : 'bg-white'
              }`}>
                <span className={`material-symbols-outlined text-3xl ${
                  step.highlight ? 'text-on-primary-container' : 'text-primary'
                }`}>
                  {step.icon}
                </span>
              </div>
              <p className="mt-6 font-bold text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Langkah;
