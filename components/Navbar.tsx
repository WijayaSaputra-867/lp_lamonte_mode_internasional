"use client";

import React from "react";
import { ShoppingBag, X, Menu, Heart, User } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass rounded-3xl px-6 py-3 flex items-center justify-between border-white/20 bg-white/80 backdrop-blur-md shadow-lg shadow-primary/5">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            <ShoppingBag className="text-zinc-900" size={22} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-black tracking-tighter outfit text-zinc-900">
              MITRA <span className="text-zinc-900">LAMONTE</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
              Kids Fashion Hub
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 text-sm font-bold text-zinc-500">
          {[
            { label: "Keunggulan", href: "#features" },
            { label: "Katalog", href: "#catalog" },
            { label: "Paket Mitra", href: "#tiers" },
            { label: "Cara Daftar", href: "#registration" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl hover:bg-primary/10 hover:text-zinc-900 transition-all bouncy-hover"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 hover:text-pink-500 hover:bg-pink-50 transition-colors">
              <Heart size={20} />
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 hover:text-sky-500 hover:bg-sky-50 transition-colors">
              <User size={20} />
            </button>
          </div>
          
          <a
            href="https://wa.me/6281234567890"
            className="hidden lg:inline-block rounded-2xl bg-primary px-6 py-2.5 text-sm font-black text-zinc-900 transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
          >
            Gabung Sekarang
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-zinc-900 md:hidden hover:bg-primary-hover transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`absolute top-full left-0 mt-4 w-full glass rounded-[2rem] overflow-hidden transition-all duration-500 ease-out md:hidden ${
          isMenuOpen ? "opacity-100 translate-y-0 visible scale-100" : "opacity-0 -translate-y-10 invisible scale-95"
        }`}
      >
        <div className="flex flex-col p-6 gap-2 bg-white/90 backdrop-blur-xl">
          {[
            { label: "Keunggulan", href: "#features" },
            { label: "Katalog", href: "#catalog" },
            { label: "Paket Mitra", href: "#tiers" },
            { label: "Cara Daftar", href: "#registration" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-black text-zinc-900 border-b border-zinc-50 pb-3 hover:text-primary transition-colors px-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="mt-4 block w-full text-center rounded-2xl bg-primary py-4 text-lg font-black text-zinc-900 shadow-xl shadow-primary/20"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
