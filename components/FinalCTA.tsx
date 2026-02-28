"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className='py-32 lg:py-48 bg-white overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col items-center text-center'>
          <div className='mb-12 inline-flex items-center gap-4'>
            <span className='h-px w-10 bg-primary'></span>
            <span className='text-[10px] font-sans font-black tracking-[0.4em] text-secondary uppercase'>
              Wujudkan Bisnis Anda
            </span>
            <span className='h-px w-10 bg-primary'></span>
          </div>

          <h2 className='text-5xl md:text-8xl lg:text-[100px] font-serif font-light text-secondary leading-[0.9] tracking-tight mb-16'>
            Pilih Paket Anda <br />{" "}
            <span className='italic'>Sekarang!</span>
          </h2>

          <p className='text-xl md:text-2xl font-serif italic text-secondary/60 max-w-2xl leading-relaxed mb-20'>
            Jangan tunda kesuksesan Anda. Hubungi kami hari ini dan mulailah
            menghasilkan profit dari bisnis busana anak.
          </p>

          <a
            href='https://wa.me/628111189921'
            className='group flex flex-col items-center gap-6'>
            <div className='h-24 w-24 flex items-center justify-center rounded-full border border-secondary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-700'>
              <ArrowRight size={32} strokeWidth={1} />
            </div>
            <span className='text-xs font-sans font-black tracking-[0.5em] text-secondary uppercase'>
              Hubungi Spesialis Paket
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
