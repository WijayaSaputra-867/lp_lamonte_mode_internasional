"use client";

import React from "react";

const STATS_DATA = [
  { label: "Balik Modal Cepat", value: "85%", detail: "Mitra di Bulan Pertama" },
  { label: "Toko & Reseller Aktif", value: "700+", detail: "Berjualan Tiap Hari" },
  { label: "Produk Laris", value: "50k+", detail: "Potong Terjual Bulanan" },
  { label: "Potongan Royalti", value: "0%", detail: "Keuntungan 100% Milik Anda" },
];

export default function Stats() {
  return (
    <section className='py-32 bg-white'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-20'>
          {STATS_DATA.map((item, i) => (
            <div
              key={i}
              className='flex flex-col items-center text-center group'>
              <span className='text-[8px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block transition-all group-hover:text-primary'>
                {item.label}
              </span>
              <div className='text-5xl md:text-7xl font-serif font-light text-secondary mb-4 leading-none'>
                {item.value}
              </div>
              <div className='h-px w-8 bg-primary mb-4'></div>
              <span className='text-[10px] font-serif italic text-secondary/40'>
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
