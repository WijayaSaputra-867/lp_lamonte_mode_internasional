"use client";

import React from "react";
import { ShoppingBag, ArrowRight, Heart, Star } from "lucide-react";

interface CatalogProps {
  isMobile: boolean;
}

const CATALOG_ITEMS = [
  {
    name: "Little Dino Set",
    cat: "Boy's Collection",
    price: "IDR 125K",
    tag: "Best Seller",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1519702777413-72534579d469?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Cotton Candy Dress",
    cat: "Girl's Collection",
    price: "IDR 185K",
    tag: "New",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Urban Junior Hoodie",
    cat: "Unisex Wear",
    price: "IDR 210K",
    tag: "Trending",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1544126592-807daa2b5d7a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Soft Sleep Pajamas",
    cat: "Sleepwear",
    price: "IDR 95K",
    tag: "Restock",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1522771917714-d73b52b75a43?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Explorer Jacket",
    cat: "Outerwear",
    price: "IDR 295K",
    tag: "Premium",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Stretch Comfort Legging",
    cat: "Bottoms",
    price: "IDR 65K",
    tag: "Essential",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sweetie One-Set",
    cat: "Girl's Playwear",
    price: "IDR 145K",
    tag: "Limited",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Winter Warm Fleece",
    cat: "Outerwear",
    price: "IDR 235K",
    tag: "Hot item",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1510333300063-e962858f990b?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Catalog({ isMobile }: CatalogProps) {
  const visibleItems = isMobile ? CATALOG_ITEMS.slice(0, 4) : CATALOG_ITEMS;

  return (
    <section id="catalog" className="py-24 bg-white relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-[10px] font-black text-sky-600 uppercase tracking-[0.2em]">
              Our Collection
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl outfit leading-none mb-4">
              Trending <span className="pink-gradient">Little Styles</span>
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed">
              Curated premium pieces designed for comfort and magic. Perfect for your store's highlight reel.
            </p>
          </div>
          <div className="flex gap-2">
            {["All", "New Born", "Toddler", "Teens"].map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full bg-white border border-zinc-100 text-sm font-bold text-zinc-500 hover:border-primary hover:text-zinc-900 transition-all shadow-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {visibleItems.map((prod, i) => (
            <div
              key={i}
              className="group relative flex flex-col animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-100 mb-5 shadow-2xl shadow-zinc-200/50">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Heart Button */}
                <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-zinc-400 opacity-0 group-hover:opacity-100 transition-all hover:text-pink-500 hover:scale-110">
                  <Heart size={20} />
                </button>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-zinc-900 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-xl">
                    {prod.tag}
                  </span>
                </div>
                
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button className="w-full py-3 bg-white/90 backdrop-blur-md rounded-2xl text-xs font-black text-zinc-900 shadow-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-zinc-900 transition-colors">
                    <ShoppingBag size={14} /> View Details
                  </button>
                </div>
              </div>
              
              <div className="space-y-1 px-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black text-sky-500 uppercase tracking-widest">
                    {prod.cat}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#f4e04d" stroke="none" />
                    <span className="text-[10px] font-bold text-zinc-400">{prod.rating}</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-black text-zinc-900 outfit leading-none tracking-tight truncate group-hover:text-primary transition-colors">
                  {prod.name}
                </h3>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xl font-black text-zinc-900 outfit">
                    {prod.price}
                  </span>
                  <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 group-hover:bg-primary group-hover:text-zinc-900 transition-all transform group-hover:rotate-12">
                    <ShoppingBag size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="mt-8 flex justify-center md:hidden">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20lihat%20katalog%20lengkapnya."
              className="text-xs font-black text-zinc-900 hover:underline flex items-center gap-1 uppercase tracking-widest"
            >
              Explore Full Collection <ArrowRight size={14} />
            </a>
          </div>
        )}

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-3 rounded-full border-[3px] border-primary px-10 py-4 text-sm font-black text-zinc-900 transition-all hover:bg-primary hover:text-zinc-900 hover:scale-105 group shadow-2xl shadow-primary/10"
          >
            Request Catalog via WhatsApp{" "}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
