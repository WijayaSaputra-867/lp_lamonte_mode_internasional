"use client";

import React from "react";
import { ShoppingBag, X, Menu } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary glow">
            <ShoppingBag className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight outfit text-zinc-900">
            Mitra <span className="text-primary">Lamonte</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#features" className="hover:text-primary transition-colors">
            Keunggulan
          </a>
          <a href="#catalog" className="hover:text-primary transition-colors">
            Katalog
          </a>
          <a href="#tiers" className="hover:text-primary transition-colors">
            Paket Mitra
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Lamonte,%20saya%20tertarik%20bergabung%20menjadi%20mitra."
            className="hidden sm:inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-hover hover:scale-105 active:scale-95 glow"
          >
            Daftar Sekarang
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`absolute top-full left-0 w-full border-b border-zinc-100 bg-white transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          <a
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
          >
            Keunggulan
          </a>
          <a
            href="#catalog"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
          >
            Katalog
          </a>
          <a
            href="#tiers"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
          >
            Paket Mitra
          </a>
          <a
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-bold text-zinc-900 border-b border-zinc-50 pb-2"
          >
            FAQ
          </a>
          <a
            href="https://wa.me/6281234567890"
            className="mt-2 block w-full text-center rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-amber-500/20"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
