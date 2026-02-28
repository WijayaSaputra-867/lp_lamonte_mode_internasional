"use client";

import React from "react";

const STEPS = [
  {
    title: "Konsultasi",
    desc: "Hubungi tim ahli kami melalui WhatsApp untuk mendapatkan rekomendasi paket yang paling pas dengan budget Anda.",
  },
  {
    title: "Pilih Paket",
    desc: "Tentukan paket usaha yang Anda inginkan. Kami menyediakan dari skala coba-coba hingga paket buka toko.",
  },
  {
    title: "Pembayaran & Pengiriman",
    desc: "Selesaikan administrasi, dan paket berisi stok baju siap jual beserta atribut branding akan segera kami kirim.",
  },
  {
    title: "Mulai Berjualan",
    desc: "Ikuti panduan strategi jualan dan mentoring eksklusif dari kami untuk segera meraup keuntungan pertama Anda.",
  },
];

export default function RegistrationProcess() {
  return (
    <section id='registration' className='py-32 bg-surface-muted'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-start'>
          <div>
            <span className='text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block'>
              Mulai Berbisnis
            </span>
            <h2 className='text-4xl md:text-7xl font-serif font-light text-secondary leading-tight mb-12'>
              Cara Memesan <br />{" "}
              <span className='italic'>Paket Anda.</span>
            </h2>
            <p className='text-lg font-serif italic text-secondary/60 leading-relaxed max-w-md'>
              Hanya butuh 4 langkah mudah untuk memulai bisnis baju anak Anda
              sendiri bersama Lamonte.
            </p>
          </div>

          <div className='space-y-16'>
            {STEPS.map((step, i) => (
              <div key={i} className='flex gap-12 group'>
                <div className='flex flex-col items-center'>
                  <span className='text-2xl font-serif font-light text-primary mb-4'>
                    0{i + 1}
                  </span>
                  <div className='h-full w-px bg-secondary/10 group-last:bg-transparent'></div>
                </div>
                <div className='pb-8 border-b border-secondary/5 group-last:border-0 w-full'>
                  <h3 className='text-2xl font-serif font-light text-secondary mb-4'>
                    {step.title}
                  </h3>
                  <p className='text-base font-serif italic text-secondary/60 leading-relaxed'>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
