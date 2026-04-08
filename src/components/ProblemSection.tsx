import React from 'react';

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
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-bold text-primary tracking-[0.2em] uppercase">Understanding Your Skin</span>
          <h2 className="text-4xl font-headline font-bold mt-4 tracking-tight">Masalah yang sering dialami...</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {problems.map((prob, idx) => (
            <div key={idx} className="group">
              <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-6 transition-colors group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-2xl group-hover:text-on-primary-container transition-colors">
                  {prob.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{prob.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
