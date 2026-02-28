"use client";

import React from "react";
import { ShoppingBag, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-zinc-200 text-zinc-500 bg-surface relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-zinc-900 shadow-xl shadow-primary/20">
                <ShoppingBag size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter outfit text-zinc-900">
                MITRA <span className="text-primary-hover">LAMONTE</span>
              </span>
            </div>
            <p className="max-w-md text-lg font-medium leading-relaxed mb-8">
              Empowering wirausaha families through high-quality kids fashion collections since 2011. Join our mission to dress the next generation with style and comfort.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white border-2 border-zinc-100 text-zinc-400 hover:text-primary hover:border-primary transition-all shadow-sm bouncy-hover">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-zinc-900 outfit mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#features" className="hover:text-primary transition-colors">Our Benefits</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Digital Catalog</a></li>
              <li><a href="#tiers" className="hover:text-primary transition-colors">Partnership Tiers</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Support FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-zinc-900 outfit mb-8 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-6 font-bold">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Ruko Elang Laut Block C, Jakarta Utara, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@lamonte.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-zinc-200 w-full mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-black text-zinc-400 uppercase tracking-widest">
            &copy; 2026 PT Lamonte Mode Internasional.
          </div>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Affiliate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
