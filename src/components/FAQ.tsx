import React from 'react';

const FAQ: React.FC = () => {
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

  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-bold text-center mb-16">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 text-left">
              <button className="w-full flex justify-between items-center text-left font-bold text-lg group">
                {faq.q}
                <span className="material-symbols-outlined transition-transform duration-300 group-focus:rotate-180">expand_more</span>
              </button>
              <div className="mt-4 text-on-surface-variant text-sm leading-relaxed">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
