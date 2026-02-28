"use client";

import React from "react";

const STEPS = [
  {
    title: "Discovery Call",
    desc: "Hubungi spesialis kami melalui WhatsApp untuk mendiskusikan visi dan kebutuhan bisnis Anda secara personal.",
  },
  {
    title: "Visi & Seleksi",
    desc: "Pilih paket kemitraan yang paling sesuai dengan target pertumbuhan Anda. Kami akan membantu proses verifikasi.",
  },
  {
    title: "Onboarding",
    desc: "Terima paket fisik dan akses digital ke seluruh ekosistem Lamonte. Sesi mentoring pertama dimulai di sini.",
  },
  {
    title: "Legacy Built",
    desc: "Mulai perjalanan Anda membangun bisnis yang tidak hanya menguntungkan, tapi juga membanggakan.",
  },
];

export default function RegistrationProcess() {
  return (
    <section id='registration' className='py-32 bg-surface-muted'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-start'>
          <div>
            <span className='text-[10px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mb-6 block'>
              Perjalanan Dimulai
            </span>
            <h2 className='text-4xl md:text-7xl font-serif font-light text-secondary leading-tight mb-12'>
              Langkah Menuju <br />{" "}
              <span className='italic'>Kemitraan Sejati.</span>
            </h2>
            <p className='text-lg font-serif italic text-secondary/60 leading-relaxed max-w-md'>
              Proses yang sederhana untuk memastikan kita memiliki visi yang
              sama dalam membangun masa depan fashion anak.
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
