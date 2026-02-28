/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CatalogProps {
  isMobile: boolean;
}

const CATALOG_ITEMS = [
  {
    title: "Busana Main Kasual",
    category: "Lokal Premium",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Set Esensial",
    category: "Pilihan Impor",
    image:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Gaun Andalan",
    category: "Seri Andalan",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dasar Nyaman",
    category: "Busana Harian",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Catalog({ isMobile }: CatalogProps) {
  const fallbackImage =
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800";

  return (
    <section id='catalog' className='py-32 bg-white'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
          <div className='max-w-xl'>
            <span className='text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block'>
              Koleksi Terpilih
            </span>
            <h2 className='text-4xl md:text-7xl font-serif font-light text-secondary leading-tight'>
              Pilihan Karya <span className='italic'>Abadi.</span>
            </h2>
          </div>
          <p className='text-base font-serif italic text-secondary/60 max-w-xs md:mb-4'>
            Setiap koleksi dikurasi untuk memberikan kenyamanan maksimal bagi si
            kecil, tanpa melupakan estetika yang menawan.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16'>
          {CATALOG_ITEMS.map((item, i) => (
            <div key={i} className='group cursor-pointer'>
              <div className='relative aspect-3/4 overflow-hidden bg-surface-muted mb-6'>
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(event) => {
                    const imageElement = event.currentTarget;
                    if (imageElement.src !== fallbackImage) {
                      imageElement.src = fallbackImage;
                    }
                  }}
                  className='w-full h-full object-cover grayscale-[0.2] transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110'
                />
                <div className='absolute inset-0 border border-secondary/5 group-hover:border-primary/40 transition-colors duration-700'></div>
                <div className='absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <span className='text-[8px] font-sans font-black tracking-widest text-zinc-300 uppercase mb-2 block'>
                  {item.category}
                </span>
                <h3 className='text-xl font-serif font-light text-secondary'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-24 border-t border-secondary/10 pt-16 flex flex-col items-center'>
          <a
            href='https://wa.me/628111189921'
            className='text-[10px] font-sans font-black uppercase tracking-[0.4em] text-secondary hover:text-primary transition-colors border-b border-primary/20 hover:border-primary pb-2'>
            Unduh Katalog 2026
          </a>
        </div>
      </div>
    </section>
  );
}
