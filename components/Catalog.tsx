"use client";

import React from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";

interface CatalogProps {
  isMobile: boolean;
}

const CATALOG_ITEMS = [
  {
    name: "Setelan Celana Pendek Little Dino",
    cat: "Setelan Anak Laki-laki",
    price: "Best Seller",
  },
  {
    name: "Dress Cotton Candy Premium",
    cat: "Dress Anak Perempuan",
    price: "New Arrival",
  },
  {
    name: "T-Shirt Oversize Urban Junior",
    cat: "Kaos Anak Unisex",
    price: "Trending",
  },
  {
    name: "Pajamas Soft Sleep Collection",
    cat: "Pakaian Tidur",
    price: "Restock",
  },
  {
    name: "Jaket Windbreaker Explorer",
    cat: "Outerwear Premium",
    price: "Recommended",
  },
  {
    name: "Legging Stretch Comfort Kids",
    cat: "Celana & Bawahan",
    price: "Essential",
  },
  {
    name: "One-Set Polkadot Sweetie",
    cat: "Setelan Anak Perempuan",
    price: "Limited Editon",
  },
  {
    name: "Hoodie Fleece Winter Warm",
    cat: "Outerwear Anak",
    price: "Hot Deal",
  },
];

export default function Catalog({ isMobile }: CatalogProps) {
  const visibleItems = isMobile ? CATALOG_ITEMS.slice(0, 4) : CATALOG_ITEMS;

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl outfit mb-4">
            Katalog Produk Unggulan
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Koleksi baju anak premium dengan desain trendy dan kualitas bahan
            terbaik. Siap untuk Anda pasarkan segera.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {visibleItems.map((prod, i) => (
            <div
              key={i}
              className="group relative glass-dark rounded-3xl p-4 transition-all hover:bg-white border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50"
            >
              <div className="aspect-3/4 overflow-hidden rounded-2xl bg-zinc-100 mb-4 relative">
                <img
                  src={`https://picsum.photos/400/500?random=${i + 50}`}
                  alt={prod.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-amber-500/30">
                    {prod.price}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {prod.cat}
                </p>
                <h3 className="text-sm md:text-base font-bold text-zinc-900 truncate outfit">
                  {prod.name}
                </h3>
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400">
                    Harga Khusus Mitra
                  </span>
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ShoppingBag size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="mt-6 flex justify-center md:hidden">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20lihat%20katalog%20lengkapnya."
              className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
            >
              Lihat 4+ Produk Lainnya <ArrowRight size={14} />
            </a>
          </div>
        )}

        <div className="mt-8 md:mt-16 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20melihat%20katalog%20lengkap%20Mitra%20Lamonte."
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white group"
          >
            Lihat Katalog Lengkap via WhatsApp{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
