import React from 'react';
import { Instagram, Youtube, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface w-full pt-16 lg:pt-20 pb-10 text-left border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-body text-sm">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <span className="text-lg font-bold text-emerald-900 tracking-tighter uppercase block">AURA DERMACARE</span>
          <p className="text-slate-500 leading-relaxed font-medium">Pusat estetika medis terpercaya dengan fokus pada kesehatan kulit jangka panjang dan hasil natural.</p>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-emerald-700 uppercase tracking-widest">Clinic Address</h5>
          <p className="text-slate-500 leading-relaxed">
            Gedung Aura Lt. 2<br />
            Jl. Senopati Raya No. 45<br />
            Jakarta Selatan, 12190
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-emerald-700 uppercase tracking-widest">Policies</h5>
          <ul className="space-y-2">
            <li><a className="text-slate-500 hover:text-emerald-600 transition-all hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-emerald-600 transition-all hover:underline" href="#">Reschedule Policy</a></li>
            <li><a className="text-slate-500 hover:text-emerald-600 transition-all hover:underline" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 hover:text-emerald-600 transition-all hover:underline" href="#">Booking Policy</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-emerald-700 uppercase tracking-widest">Legal Info</h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sertifikasi Klinik Pratama: 123/SIP/EST/2023<br />
            Tenaga Medis Terakreditasi IDI & KKI<br />
            Payments: BCA, Mandiri, CC, QRIS
          </p>
          <div className="flex gap-4 opacity-50 ">
            <span className="material-symbols-outlined text-[20px] text-emerald-600">payments</span>
            <span className="material-symbols-outlined text-[20px] text-emerald-600">credit_card</span>
            <span className="material-symbols-outlined text-[20px] text-emerald-600">qr_code</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-xs">© 2024 Aura Dermacare. All rights reserved.</p>
        <div className="flex gap-5 items-center">
          <a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#" aria-label="TikTok">
            <Music2 size={18} />
          </a>
          <a className="text-slate-400 hover:text-emerald-600 transition-colors" href="#" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
