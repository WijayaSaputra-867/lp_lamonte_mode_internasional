/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
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
              <span className='text-[10px] text-primary font-sans font-bold tracking-widest uppercase text-center'>
                Mulai dari Rp1 juta
              </span>
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

          <div className='mt-20 w-full max-w-4xl border-t-2 border-primary/30 pt-12'>
            <p className='text-sm text-secondary font-sans font-bold tracking-widest mb-8 uppercase'>
              Paket yang Kami Tawarkan:
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <div className='text-center'>
                <div className='text-3xl font-serif font-black text-primary mb-3'>
                  4
                </div>
                <p className='text-sm font-sans font-semibold text-secondary'>
                  Kategori Paket
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-serif font-black text-primary mb-3'>
                  10+
                </div>
                <p className='text-sm font-sans font-semibold text-secondary'>
                  Pilihan Harga
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-serif font-black text-primary mb-3'>
                  7
                </div>
                <p className='text-sm font-sans font-semibold text-secondary'>
                  Modul Lengkap
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-serif font-black text-primary mb-3'>
                  ∞
                </div>
                <p className='text-sm font-sans font-semibold text-secondary'>
                  Custom Paket
                </p>
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
