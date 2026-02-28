"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, X, Menu, Search, User } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
        style={{ zIndex: 100 }}>
        <div className='mx-auto max-w-7xl px-6 flex items-center justify-between'>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-secondary hover:opacity-70 transition-opacity'>
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <a
            href='#'
            className='flex flex-col items-center cursor-pointer group'>
            <span className='text-xl md:text-2xl font-serif font-medium tracking-[0.2em] text-secondary uppercase'>
              Lamonte
            </span>
            <div className='h-px w-0 group-hover:w-full bg-primary transition-all duration-500'></div>
            <span className='text-[8px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mt-1'>
              Partnership
            </span>
          </a>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-10 text-[10px] font-sans font-black uppercase tracking-[0.2em] text-secondary/60'>
            {[
              { label: "Cerita Kami", href: "#features" },
              { label: "Koleksi", href: "#catalog" },
              { label: "Filosofi", href: "#why-us" },
              { label: "Kemitraan", href: "#tiers" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='hover:text-secondary transition-colors relative group py-2'>
                {link.label}
                <span className='absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full'></span>
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className='flex items-center gap-6'>
            <a
              href='https://wa.me/628111189921'
              className='relative h-10 w-10 flex items-center justify-center text-secondary hover:text-primary transition-colors'>
              <ShoppingBag size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay - rendered OUTSIDE the nav, at root level */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-white md:hidden flex flex-col'
          style={{ zIndex: 9999 }}>
          {/* Close button */}
          <div className='flex justify-between items-center px-6 py-6'>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-secondary hover:opacity-70 transition-opacity'>
              <X size={24} strokeWidth={1.5} />
            </button>
            <span className='text-xl font-serif font-medium tracking-[0.2em] text-secondary uppercase'>
              Lamonte
            </span>
            <div className='w-6' />
          </div>

          {/* Nav links */}
          <div className='flex-1 flex flex-col items-center justify-center gap-10'>
            {[
              { label: "Cerita Kami", href: "#features" },
              { label: "Koleksi", href: "#catalog" },
              { label: "Filosofi", href: "#why-us" },
              { label: "Kemitraan", href: "#tiers" },
              { label: "Pendaftaran", href: "#registration" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='text-3xl font-serif font-light text-secondary lowercase tracking-widest hover:text-primary transition-colors'>
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom section */}
          <div className='px-6 pb-12 pt-8 border-t border-zinc-100 flex flex-col items-center gap-6'>
            <span className='text-[10px] font-sans font-black tracking-[0.2em] text-zinc-400 uppercase'>
              Gabung Komunitas Kami
            </span>
            <a
              href='https://wa.me/628111189921'
              onClick={() => setIsMenuOpen(false)}
              className='text-lg font-serif italic text-secondary border-b border-primary/40 pb-1 hover:text-primary transition-colors'>
              Hubungi Spesialis
            </a>
          </div>
        </div>
      )}
    </>
  );
}
