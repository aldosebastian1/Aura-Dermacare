import React from 'react';

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
    <section id="testimonials" className="py-24 bg-surface-container-lowest px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-[2rem] space-y-6 text-left">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
