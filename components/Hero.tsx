/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Play } from "lucide-react";

interface HeroProps {
  setIsTierTab?: (tab: string) => void;
}

export default function Hero({ setIsTierTab }: HeroProps) {
  return (
    <header className='relative min-h-screen flex items-center overflow-hidden bg-background pt-20'>
      {/* Background patterns - subtle and editorial */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>

      <div className='mx-auto max-w-7xl px-6 w-full relative z-10 py-20 lg:py-32'>
        <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
          <div className='mb-12 inline-flex items-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000'>
            <span className='h-px w-10 bg-primary'></span>
            <span className='text-[10px] md:text-xs font-sans font-black tracking-[0.4em] text-secondary uppercase'>
              Seni Kemitraan
            </span>
            <span className='h-px w-10 bg-primary'></span>
          </div>

          <h1 className='text-5xl md:text-8xl lg:text-[120px] font-serif font-light text-secondary leading-[0.85] tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200'>
            Membangun <br />
            <span className='italic'>Keunggulan</span> Bersama.
          </h1>

          <p className='mt-12 max-w-2xl text-lg md:text-xl font-serif font-semibold text-secondary leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400'>
            Di Lamonte, kami percaya bahwa sukses sejati dibangun di atas
            kepercayaan dan kualitas tanpa kompromi. Temukan kemitraan yang
            memberdayakan Anda untuk tumbuh lebih dari sekadar angka.
          </p>

          <div className='mt-16 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-600'>
            <div className='flex flex-col gap-4'>
              <a
                href='#tiers'
                className='px-10 py-5 bg-primary text-secondary text-[11px] font-sans font-black tracking-[0.4em] uppercase hover:bg-yellow-300 hover:shadow-2xl transition-all duration-500 shadow-lg rounded-xl'>
                Lihat Semua Paket
              </a>
              <div className='text-center'>
                <span className='text-[12px] text-gray-600 font-sans font-semibold tracking-wide uppercase block mb-2'>
                  Paket Mulai dari
                </span>
                <span className='text-3xl font-serif font-black text-primary'>
                  Rp 1 Juta
                </span>
              </div>
            </div>

            <a
              href='https://www.youtube.com/watch?v=i8ol6RhnD60&list=PLS-ocOMZnLn77hvXu6rdq4KeFHg-ul9ES'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 group'>
              <div className='h-14 w-14 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500'>
                <Play size={18} fill='currentColor' strokeWidth={0} />
              </div>
              <div className='text-left'>
                <span className='block text-[10px] font-sans font-black tracking-[0.2em] text-zinc-400 uppercase mb-1'>
                  Filosofi Kami
                </span>
                <span className='text-sm font-serif italic text-secondary'>
                  Tonton cerita kami
                </span>
              </div>
            </a>
          </div>

          <div className='mt-20 w-full bg-linear-to-r from-primary/10 to-yellow-100 border-2 border-primary/30 rounded-3xl p-8 md:p-12'>
            <p className='text-center text-sm text-secondary font-sans font-bold tracking-widest mb-10 uppercase'>
              Paket Rekomendasi untuk Pemula
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-white rounded-2xl p-6 shadow-md border-2 border-primary/20'>
                <h3 className='text-2xl font-serif font-bold text-secondary mb-4'>
                  Paket Hemat
                </h3>
                <div className='flex items-baseline gap-2 mb-4'>
                  <span className='text-sm font-sans text-primary font-semibold'>
                    Rp
                  </span>
                  <span className='text-4xl font-serif font-black text-primary'>
                    650 Ribu
                  </span>
                  <span className='text-xs text-gray-600 font-sans'>
                    /bulan
                  </span>
                </div>
                <p className='text-sm text-gray-700 mb-6 font-sans font-semibold'>
                  Untuk memulai usaha pertama Anda
                </p>
                <button
                  onClick={() => {
                    setIsTierTab?.("Hemat");
                    document
                      .getElementById("tiers")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='w-full text-center py-3 bg-primary/10 text-primary font-sans font-bold text-sm uppercase rounded-lg hover:bg-primary/20 transition-all duration-300'>
                  Pelajari Paket
                </button>
              </div>

              <div className='bg-linear-to-br from-primary to-primary/90 rounded-2xl p-6 shadow-2xl border-3 border-yellow-300 relative -translate-y-3'>
                <div className='absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-300 text-primary px-8 py-2 rounded-full text-[13px] font-sans font-black whitespace-nowrap'>
                  ⭐ PALING POPULER
                </div>
                <h3 className='text-2xl font-serif font-bold text-white mb-4 mt-2'>
                  Paket Populer
                </h3>
                <div className='flex items-baseline gap-2 mb-4'>
                  <span className='text-sm font-sans text-yellow-200 font-semibold'>
                    Rp
                  </span>
                  <span className='text-4xl font-serif font-black text-white'>
                    1.8 Juta
                  </span>
                  <span className='text-xs text-yellow-100 font-sans'>
                    /bulan
                  </span>
                </div>
                <p className='text-sm text-white mb-6 font-sans font-semibold'>
                  Pilihan terbaik untuk pertumbuhan maksimal
                </p>
                <button
                  onClick={() => {
                    setIsTierTab?.("Populer");
                    document
                      .getElementById("tiers")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='w-full text-center py-3 bg-white text-primary font-sans font-bold text-sm uppercase rounded-lg hover:bg-yellow-100 transition-all duration-300'>
                  Pilih Paket Ini
                </button>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-md border-2 border-primary/20'>
                <h3 className='text-2xl font-serif font-bold text-secondary mb-4'>
                  Paket Serius
                </h3>
                <div className='flex items-baseline gap-2 mb-4'>
                  <span className='text-sm font-sans text-primary font-semibold'>
                    Rp
                  </span>
                  <span className='text-4xl font-serif font-black text-primary'>
                    2.25 Juta
                  </span>
                  <span className='text-xs text-gray-600 font-sans'>
                    /bulan
                  </span>
                </div>
                <p className='text-sm text-gray-700 mb-6 font-sans font-semibold'>
                  Untuk yang serius membangun bisnis
                </p>
                <button
                  onClick={() => {
                    setIsTierTab?.("Serius");
                    document
                      .getElementById("tiers")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className='w-full text-center py-3 bg-primary/10 text-primary font-sans font-bold text-sm uppercase rounded-lg hover:bg-primary/20 transition-all duration-300'>
                  Pelajari Paket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Featured Image - Editorial Style */}
      <div className='absolute right-0 bottom-0 w-full lg:w-1/3 h-1/2 lg:h-[70%] hidden lg:block overflow-hidden animate-in fade-in slide-in-from-right duration-[1.5s]'>
        <img
          src='https://images.unsplash.com/photo-1543332164-6e82f3557e4e?auto=format&fit=crop&q=80&w=1200'
          alt='Kerajinan Busana Anak'
          className='w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-[2s]'
        />
        <div className='absolute inset-0 bg-background/20'></div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30'>
        <span className='text-[8px] font-sans font-black tracking-[0.4em] text-secondary uppercase'>
          Gulir
        </span>
        <div className='h-10 w-px bg-secondary'></div>
      </div>
    </header>
  );
}
