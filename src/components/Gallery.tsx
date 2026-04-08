import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1J_865CI28-slARSyPpeClqQ1EooHyKnSvvdmw0w_a3f7VGyCquyyKWJsmQU6_owf_uw16EpwVubtA5V3YZJHrq8e6ELfmky4CBQ5-EBCz2J-wh2JrKSbO2d5ZHhGKbFkjrEfhBgG24oKHExqfuGfg-znog578JHObPvIe_lfgp6LEP6b19zHc-YfH7bVi7a6TendVEBqT_ALquHbBUeWEfgbpXDI7SgSTlLPTEyBc503VHPG049WgXN2tEmIyYL_4w0S8IxfM7w1",
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-MWI6Oofm4xyJY-liXtBGe1j2apG0SI_SqujRdat6worFK6xlMKQED4U27_Fzu0za53-jPEnQ8rpted0Vm3W_l3-J4-h752ONfMrvU9F42o_1PKr6fSVyN2giqR8F8lVxTPiH_Xc-BB3xN6G0rFkQLX_L844y9UTtpPHHHGPXl-Lk5VEIOcj7JYV_XuLZqSUQD3FjHoGFggVrCfQOnhuGztZKt4I7Ac54S9zARSCvtwL7e1FDSmZj-FqB2K6QTVds54d-7nN9CKE",
      tag: "Acne Clearing Program - 6 Sesi"
    },
    {
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtfJB2hyJHsI65cxmy0q_TdaqNNRGtlobV1bQ3ff-jTAYpITkVpmB6a4WDz3SuPKiIytBUeZWNbYt_MhX3cngKK20U5wlypbXdoCojH1h4N4_XjWBqFtsb770CNsaVfnJWXh_TCtwBO1KvSx_vHL6MXpJx4Ra8RJuiXSuENgWcHzZ_w0kEAmtnHrVuBUFBpKJQTvr1dZ_Sg4L2cfsypIZziPvPZ5meU3a3qlrGPciUYVoJ_3Sm8Nf-LLLZYK2ag6JRRRC8YPRLXULm",
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtw4cTdm05p0Jn3wC4hmBsKiuASvvMLmSf87kDbZJw7nd-_F6XX8xT7990uqog-rTJAZtjQ22Vv7fHLQAUogMLH2iLIHWHUQy4tq6FzarDDi7OY-lP_Hdmq8_sia_WN_tBkZ57kuDMwN8Z_HyHKnrVhJjsh_PaYHrQa9D2ZPRV_LHfOt1cDyF_bAmuQKwKBlfFoEuVuMaawW1dkoWgf02wOZH5eQKRujW3Tpoh6z-RqnK9s7svXhIsYHUg-Mt4QBpaxSuqhmM03nXb",
      tag: "Melasma & Brightening - 4 Sesi"
    },
    {
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuC95y0ZJFtwOt3IxuOT64czY9sytEsS8BG3apkYqok21eHOfn795Lzv3n09IO3PHkiCaacidhOaVxwsDJobQEqtv0B4drKblM2TIIjajMYtfjtntJAzqZX1ottm0_rJ9mmqQFNJlZVEi_kUQ12A-a91wCr8S38OafMqwRbVw2MaB8ewHjl2WG2pVvIYCTX183mF8HPznmPZDpRt5mtxIUttUBQ1KBZJ0JDlNZXlFCzQ4M5-SuYETc_WOvego8PyOdH6GwY6Zk6cLMX7",
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsoDiA3AA5YZCTlk9aPKMoTYd9J3UmzDNhhmhq6TjZSlGoP-ElJUGTRJopkxcY6SwXFkjFTNRIMiwKt0YAfiohCkI6QoBfE4Mc-4VTVBGzcXzld8eFY4A2VoCUEUERxtIYaRj12tpZtMCereMSLjr13Glg8THBXaPCMlGYaQx3FAhWVyJailEN5DSHFlaMF_Bkjyax1TZuIvVTADtiFH3-05aU3HfFTdDN-svWQZ9V-6rdA7pCDXxYtSoXuLZ-EkUnNgkhziLiyE76",
      tag: "Pore Tightening - 3 Sesi"
    }
  ];

  return (
    <section id="results" className="py-16 lg:py-24 px-6 lg:px-8 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-16 gap-4 lg:gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight">Hasil yang bisa kamu harapkan</h2>
            <p className="text-on-surface-variant mt-4">Bukti nyata transformasi pasien kami melalui pendekatan medis yang presisi.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            Lihat Lebih Banyak <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="space-y-4">
              <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden shadow-sm h-64">
                <img className="w-full h-full object-cover" src={img.before} alt={`Sebelum ${img.tag} - Aura Dermacare`} />
                <img className="w-full h-full object-cover" src={img.after} alt={`Sesudah ${img.tag} - Aura Dermacare`} />
              </div>
              <p className="text-sm font-bold text-center">{img.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
