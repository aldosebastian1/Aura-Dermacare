import React from 'react';

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
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">{item.icon}</span>
            <span className="text-sm font-bold tracking-tight uppercase text-on-surface-variant">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
