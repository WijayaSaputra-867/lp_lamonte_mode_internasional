"use client";

import React from "react";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-surface-muted border-t border-secondary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-10">
              <span className="text-2xl font-serif font-medium tracking-[0.2em] text-secondary uppercase">
                Lamonte
              </span>
              <span className="text-[8px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mt-1">
                Partnership
              </span>
            </div>
            <p className="max-w-md text-base font-serif italic text-secondary/60 leading-relaxed mb-10">
              Membangun masa depan fashion anak melalui kualitas, integritas, dan dedikasi yang tak tergoyahkan untuk generasi mendatang.
            </p>
            <div className="flex gap-8">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-sans font-black tracking-[0.3em] text-secondary uppercase mb-8 block">Navigation</span>
            <ul className="space-y-4 font-serif italic text-secondary/70">
              <li><a href="#features" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Collection</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Philosophy</a></li>
              <li><a href="#tiers" className="hover:text-primary transition-colors">Partnership</a></li>
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-sans font-black tracking-[0.3em] text-secondary uppercase mb-8 block">Contact</span>
            <ul className="space-y-6 font-serif italic text-secondary/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 transition-transform hover:scale-110" />
                <span>Ruko Elang Laut Block C, Jakarta Utara, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0 transition-transform hover:scale-110" />
                <span>hello@lamonte.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-secondary/5 pt-12">
          <div className="text-[8px] font-sans font-black text-zinc-400 uppercase tracking-[0.4em]">
            &copy; 2026 PT Lamonte Mode Internasional. All Rights Reserved.
          </div>
          <div className="flex gap-10 text-[8px] font-sans font-black uppercase tracking-[0.4em] text-zinc-400">
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
