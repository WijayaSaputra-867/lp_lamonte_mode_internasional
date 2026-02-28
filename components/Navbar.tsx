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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary hover:opacity-70 transition-opacity"
        >
          {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center cursor-pointer group">
          <span className="text-xl md:text-2xl font-serif font-medium tracking-[0.2em] text-secondary uppercase">
            Lamonte
          </span>
          <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
          <span className="text-[8px] font-sans font-black tracking-[0.4em] text-zinc-400 uppercase mt-1">
            Partnership
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-sans font-black uppercase tracking-[0.2em] text-secondary/60">
          {[
            { label: "Our Story", href: "#features" },
            { label: "Collection", href: "#catalog" },
            { label: "Philosophy", href: "#why-us" },
            { label: "Partnership", href: "#tiers" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-secondary transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-secondary hover:text-primary transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-secondary hover:text-primary transition-colors hidden sm:block">
            <User size={20} strokeWidth={1.5} />
          </button>
          <a
            href="https://wa.me/6281234567890"
            className="relative h-10 w-10 flex items-center justify-center text-secondary hover:text-primary transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-black">
              0
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Close button inside overlay */}
        <div className="absolute top-6 left-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-secondary hover:opacity-70 transition-opacity">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex flex-col p-12 gap-8 text-center h-full justify-center">
          {[
            { label: "Our Story", href: "#features" },
            { label: "Collection", href: "#catalog" },
            { label: "Philosophy", href: "#why-us" },
            { label: "Partnership", href: "#tiers" },
            { label: "Registration", href: "#registration" },
          ].map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif font-light text-secondary lowercase tracking-widest animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-12 pt-12 border-t border-zinc-100 flex flex-col items-center gap-6">
            <span className="text-[10px] font-sans font-black tracking-[0.2em] text-zinc-400 uppercase">
              Join Our Community
            </span>
            <a
              href="https://wa.me/6281234567890"
              className="text-lg font-serif italic text-secondary border-b border-primary/40 pb-1"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
