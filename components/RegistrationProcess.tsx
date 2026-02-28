"use client";

import React from "react";
import { ClipboardCheck, MessageCircle, CreditCard, Rocket, ArrowRight, Star } from "lucide-react";

const STEPS = [
  {
    title: "Pilih Paket Kemitraan",
    desc: "Tentukan level bisnis yang sesuai dengan modal dan target profit Anda. Dari paket hemat sampai strategic.",
    icon: ClipboardCheck,
    color: "bg-primary",
    shadow: "shadow-primary/20",
  },
  {
    title: "Hubungi Admin via WA",
    desc: "Klik tombol daftar untuk terhubung langsung dengan tim sukses kami. Kami akan kirimkan form pendaftaran.",
    icon: MessageCircle,
    color: "bg-pink-500",
    shadow: "shadow-pink-500/20",
  },
  {
    title: "Konfirmasi & Aktivasi",
    desc: "Lakukan pembayaran paket dan kirim bukti transfer. Akun mitra Anda akan segera diaktifkan oleh tim kami.",
    icon: CreditCard,
    color: "bg-sky-500",
    shadow: "shadow-sky-500/20",
  },
  {
    title: "Langsung Mulai Jualan",
    desc: "Dapatkan akses ke materi marketing, grup mentoring, dan katalog produk. Anda siap raih profit pertama!",
    icon: Rocket,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20",
  },
];

export default function RegistrationProcess() {
  return (
    <section id="registration" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(#f4e04d_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] rotate-12 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] shadow-sm">
            <Star size={14} fill="currentColor" /> Simple Registration
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl outfit leading-none mb-6">
            Cara Bergabung <br /> <span className="text-gradient">Menjadi Mitra Kami</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Hanya butuh 4 langkah mudah untuk memulai bisnis fashion anak Anda sendiri bersama Lamonte.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-1 bg-zinc-50 border-y border-zinc-100 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {STEPS.map((step, i) => (
              <div key={i} className="group flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-6 lg:gap-0">
                <div className={`relative shrink-0 mb-0 lg:mb-8 h-16 w-16 lg:h-24 lg:w-24 flex items-center justify-center rounded-2xl lg:rounded-[2rem] ${step.color} text-zinc-900 shadow-xl lg:shadow-2xl ${step.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <step.icon size={32} className="w-8 h-8 lg:w-10 lg:h-10" />
                  <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 h-7 w-7 lg:h-10 lg:w-10 flex items-center justify-center rounded-lg lg:rounded-2xl bg-zinc-900 text-white text-[10px] lg:text-sm font-black shadow-xl">
                    {i + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-extrabold text-zinc-900 outfit mb-1 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-zinc-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <div className="h-6 w-px bg-zinc-100"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="bg-surface rounded-[3rem] p-8 md:p-12 w-full max-w-4xl border-2 border-dashed border-primary/20 text-center relative overflow-hidden group shadow-sm">
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-zinc-900 outfit mb-4 leading-tight">
                Punya Pertanyaan Sebelum Memulai?
              </h4>
              <p className="text-zinc-500 mb-8 font-medium">
                Tim konsultasi bisnis kami siap membantu menjelaskan detail operasional, <br className="hidden md:block" /> estimasi profit, dan sistem pengiriman produk.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20konsultasi%20peluang%20usaha."
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-sm font-black text-zinc-900 hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight size={18} />
              </a>
            </div>
            
            {/* Playful Floating Pattern for Box */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-40 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
