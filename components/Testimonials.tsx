"use client";

import React from "react";

const TESTIMONIALS_DATA = [
  {
    name: "Rahmawati",
    role: "Mitra Paket Hemat",
    text: "Awalnya cuma berani coba Paket Hemat 650 ribu karena takut gak laku. Eh, ternyata baru posting di WA story 3 hari langsung ludes! Sekarang udah upgrade ke Paket Populer.",
  },
  {
    name: "Surya Pratama",
    role: "Mitra Paket Buka Toko",
    text: "Lamonte ngasih fasilitas gila-gilaan. Ngambil paket Buka Toko udah dapet spanduk, bimbingan karyawan, plus baju-baju yang kualitas jahitan butik banget. Bulan kedua udah buka cabang.",
  },
  {
    name: "Maya Kartika",
    role: "Mitra Paket Usaha Campur",
    text: "Jujur milih paket ini karena ada Akademi Kontennya. Saya gaptek, tapi diajarin jualan di TikTok dan dapet materi mentahan video HD tiap hari. Pelanggan saya ngira ini baju impor mahal.",
  },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-32 bg-white overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-24 text-center'>
          <span className='text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block'>
            Suara Bersama
          </span>
          <h2 className='text-5xl md:text-8xl font-serif font-light text-secondary leading-tight tracking-tight'>
            Cerita <span className='italic'>Kemajuan.</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {TESTIMONIALS_DATA.map((testimonial, i) => (
            <div key={i} className='flex flex-col group'>
              <div className='grow mb-12'>
                <div className='h-px w-8 bg-primary mb-8 transition-all duration-700 group-hover:w-full'></div>
                <p className='text-xl font-serif italic text-secondary leading-relaxed'>
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              <div>
                <span className='block text-lg font-serif font-medium text-secondary'>
                  {testimonial.name}
                </span>
                <span className='text-[10px] font-sans font-black tracking-widest text-zinc-300 uppercase'>
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-32 flex justify-center'>
          <div className='max-w-2xl text-center p-12 border border-secondary/5 bg-surface-muted italic'>
            <p className='text-base font-serif text-secondary/60 leading-relaxed mb-8'>
              &quot;Kesuksesan sejati bukan diukur dari seberapa banyak yang
              kita ambil, tapi dari seberapa besar dampak yang kita beri kepada
              sesama.&quot;
            </p>
            <span className='text-[10px] font-sans font-black tracking-widest text-secondary uppercase'>
              Ikrar Lamonte
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
