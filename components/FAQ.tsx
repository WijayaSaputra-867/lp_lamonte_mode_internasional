"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Kalau barangnya tidak memuaskan atau ada yang cacat/reject?",
    a: "Jangan khawatir! Kami memberikan Garansi Retur 100%. Jika ada baju cacat produksi, Anda berhak menukarnya maksimal 3 hari setelah paket sampai. Risiko Anda kami ambil alih.",
  },
  {
    q: "Saya pemula dan belum pernah jualan, apakah pasti laku?",
    a: "Semua paket kami dilengkapi fitur pendampingan (Mentoring, Akademi Konten, dll). Ribuan mitra kami awalnya juga pemula. Anda tinggal 'copy-paste' materi jualan dan strategi yang sudah sering terbukti laris.",
  },
  {
    q: "Apakah nanti target pasarnya jelas dan mudah dijual?",
    a: "Baju anak adalah kebutuhan pokok yang tidak mengenal tren musiman. Selama ada anak-anak, pasar Anda selalu tumbuh. Koleksi kami juga diisi dengan tren terbaru agar Anda jadi trendsetter di kota Anda.",
  },
  {
    q: "Apakah ada biaya pendaftaran, admin bulanan, atau potong royalti?",
    a: "TIDAK ADA SAMA SEKALI! 100% uang yang Anda bayar adalah untuk isi dalam Paket (baju, banner, sertifikat, dll). Setelah bajunya laku terjual, 100% margin keuntungannya mutlak milik Anda tanpa bagi hasil.",
  },
];

export default function FAQ() {
  return (
    <section
      id='faq'
      className='py-32 bg-background border-t border-secondary/5'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
          <div>
            <span className='text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block'>
              Pertanyaan
            </span>
            <h2 className='text-4xl md:text-7xl font-serif font-light text-secondary leading-tight mb-8'>
              Detail <span className='italic'>Penting.</span>
            </h2>
            <p className='text-lg font-serif italic text-secondary/60 leading-relaxed max-w-sm mb-12'>
              Jawaban untuk pertanyaan yang paling sering diajukan untuk
              membantu kelancaran operasional bisnis Anda.
            </p>
            <a
              href='https://wa.me/628111189921'
              className='text-[10px] font-sans font-black uppercase tracking-[0.4em] text-primary border-b border-primary/20 pb-2'>
              Ajukan Pertanyaan Personal
            </a>
          </div>

          <div className='divide-y divide-secondary/10'>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className='group py-8 cursor-pointer'>
                <summary className='flex items-center justify-between gap-6 list-none [&::-webkit-details-marker]:hidden'>
                  <h3 className='text-xl font-serif font-light text-secondary'>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={20}
                    className='text-zinc-300 transition-transform duration-500 group-open:rotate-180'
                    strokeWidth={1.5}
                  />
                </summary>
                <div className='mt-6 max-w-md'>
                  <p className='text-base font-serif italic text-secondary/60 leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
