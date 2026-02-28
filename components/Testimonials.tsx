"use client";

import React from "react";
import { Star, TrendingUp, Quote } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    name: "Ibu Rahma",
    role: "Agen - Bekasi",
    text: "Dulu bingung mau mulai bisnis apa. Setelah gabung Lamonte, saya dibimbing dari nol. Sekarang penghasilan bulanan sudah jauh melebihi gaji waktu kerja dulu.",
    image: "https://i.pravatar.cc/150?u=rahma",
    stars: 5,
    success: "Profit Rp 25jt+/bln",
    color: "amber",
  },
  {
    name: "Bapak Surya",
    role: "Distributor - Surabaya",
    text: "Sistem otomatisnya juara! Saya bisa pantau stok dan orderan sambil tetap mengurus hal lain. Support sistemnya juga sangat membantu perkembangan tim saya.",
    image: "https://i.pravatar.cc/150?u=surya",
    stars: 5,
    success: "700+ Reseller Aktif",
    color: "sky",
  },
  {
    name: "Ibu Maya",
    role: "Reseller - Bandung",
    text: "Kualitas bajunya beneran premium! Pelanggan saya selalu balik lagi buat order. Marketing kit-nya sangat membantu promosi saya di media sosial.",
    image: "https://i.pravatar.cc/150?u=maya",
    stars: 5,
    success: "Repeat Order 80%",
    color: "pink",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-1.5 text-[10px] font-black text-pink-600 uppercase tracking-[0.2em] shadow-sm">
            Mitra Stories
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl outfit leading-none mb-6">
            Voices of <br /> <span className="pink-gradient">Success</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Join hundreds of entrepreneurs who have transformed their lives through the Lamonte partnership ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS_DATA.map((testimonial, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center lg:items-start p-10 rounded-[3rem] bg-white border-2 border-zinc-50 shadow-2xl shadow-zinc-200/40 hover:-translate-y-4 transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-zinc-100 group-hover:text-primary/20 transition-colors">
                <Quote size={60} fill="currentColor" stroke="none" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-primary"
                    fill="currentColor"
                  />
                ))}
              </div>
              
              <p className="text-zinc-900 text-lg md:text-xl font-bold italic leading-relaxed mb-10 grow relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-zinc-50 w-full">
                <div className={`h-16 w-16 rounded-[1.5rem] overflow-hidden border-4 border-${testimonial.color}-100 shadow-xl group-hover:rotate-6 transition-transform`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 outfit text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-extrabold uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className={`mt-6 inline-flex items-center gap-2 rounded-2xl bg-${testimonial.color}-50 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-${testimonial.color}-600`}>
                <TrendingUp size={16} />
                <span>{testimonial.success}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="group relative bg-white rounded-[3.5rem] p-10 md:p-14 max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-10 border-2 border-primary/20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(244,224,77,0.2)]">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/10 rotate-12 translate-x-1/2 blur-3xl pointer-events-none"></div>
            
            <div className="flex -space-x-5 overflow-hidden relative z-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="inline-block h-16 w-16 overflow-hidden rounded-3xl border-4 border-white bg-zinc-100 shadow-xl hover:translate-y-1 transition-transform cursor-pointer"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 40}`}
                    alt="avatar"
                  />
                </div>
              ))}
              <div className="h-16 w-16 flex items-center justify-center rounded-3xl bg-primary border-4 border-white text-zinc-900 text-xs font-black shadow-xl">
                +700
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <h4 className="text-3xl font-black text-zinc-900 outfit leading-none mb-2">
                Join the Circle.
              </h4>
              <p className="text-zinc-500 font-medium">
                Start your success story alongside 700+ partners <br className="hidden lg:block"/> across Indonesia.
              </p>
            </div>
            
            <a
              href="https://wa.me/6281234567890"
              className="relative z-10 w-full md:w-auto text-center rounded-3xl bg-primary px-10 py-5 text-sm font-black text-zinc-900 hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
            >
              Ready to Win?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
