/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Users,
  Package,
  ShieldCheck,
  Zap,
  ShoppingBag,
  LucideProps,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Catalog from "@/components/Catalog";
import PartnershipTiers from "@/components/PartnershipTiers";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
import RegistrationProcess from "@/components/RegistrationProcess";
import Marquee from "@/components/Marquee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const FEATURES_DATA = [
  {
    id: "A",
    title: "Branding Toko Naik Kelas",
    subtitle: "Modul A: Paket Identitas Merek",
    desc: "Ubah toko kecil menjadi toko resmi dengan paket identitas merek lengkap. Anda akan menerima desain sertifikat kemitraan eksklusif, templat kartu identitas, banner toko fisik/online, dan set templat linimasa Instagram seragam untuk membangun kepercayaan pembeli secara instan.",
    badge: "Branding Profesional & Terpercaya",
    icon: ShieldCheck,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "B",
    title: "Angka Jelas, Target Nyata",
    subtitle: "Modul B: Kalkulator Profit Strategis",
    desc: "Hilangkan kebingungan finansial dengan Kalkulator Profit Otomatis. Cukup masukkan modal awal, dan sistem akan menghitung target harian, harga jual ideal sesuai pasar, serta simulasi skenario promo untuk memastikan setiap penjualan menghasilkan margin yang sehat.",
    badge: "Bisnis Berbasis Data, Bukan Perasaan",
    icon: TrendingUp,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "C",
    title: "Konten Katalog Auto Cakep",
    subtitle: "Modul C: Akademi Model & Konten",
    desc: "Kuasai seni konten visual tanpa kamera mahal. Kami memberikan panduan teknik foto produk menggunakan ponsel pintar, teknik pencahayaan praktis, serta akses ke ribuan stok foto katalog model profesional yang siap Anda unggah kapan saja.",
    badge: "Visual Setara Merek Internasional",
    icon: ShoppingBag,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "D",
    title: "Toko Online Siap Panen",
    subtitle: "Modul D: Kelas Ahli Marketplace",
    desc: "Panduan teknis langkah demi langkah mendominasi Shopee, Tokopedia, dan TikTok Shop. Dapatkan cetak biru optimasi judul (SEO), deskripsi produk persuasif, teknik riset kata kunci, dan strategi diskon yang meningkatkan visibilitas produk di hasil pencarian teratas.",
    badge: "Optimasi Marketplace & Trafik Tinggi",
    icon: Package,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "E",
    title: "CS Robot Jago Nego",
    subtitle: "Modul E: Otomasi WhatsApp & Skrip",
    desc: "Tingkatkan konversi penjualan dengan skrip penutupan yang sudah teruji. Kami menyediakan templat chat otomatis untuk berbagai skenario: dari sapaan awal, menangani keberatan harga, hingga tindak lanjut pesanan yang belum dibayar. Bisa diintegrasikan dengan alat otomasi WA.",
    badge: "Sistem Closing Otomatis 24/7",
    icon: ShoppingBag,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "F",
    title: "Konten Harian Anti Buntu",
    subtitle: "Modul F: 365 Hari Kalender Konten",
    desc: "Jangan pernah kehabisan ide posting lagi. Dapatkan kalender konten setahun penuh yang mencakup ide postingan harian, contoh takarir yang menarik interaksi, pembuka video pendek yang viral, dan ajakan bertindak (CTA) yang mendorong penjualan langsung.",
    badge: "Konsistensi Branding Tanpa Pusing",
    icon: Zap,
    colors: { bg: "bg-surface-muted", text: "text-secondary" },
    isLarge: false,
  },
  {
    id: "G",
    title: "Modul G: Sekolah Pebisnis Lapangan",
    subtitle: "Mentoring Eksklusif & Pelatihan Langsung",
    desc: "Dukungan penuh melalui sesi Zoom langsung rutin dan grup diskusi eksklusif. Pelajari pembaruan tren busana anak terbaru, studi kasus nyata dari mitra sukses, dan dapatkan jawaban langsung atas tantangan operasional harian Anda. Anda tidak akan pernah berjalan sendiri dalam membangun bisnis ini.",
    badge: "Dukungan Komunitas & Mentoring Penuh",
    icon: Users,
    colors: { bg: "bg-primary/10", text: "text-primary" },
    isLarge: true,
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTierTab, setIsTierTab] = useState("Populer");
  const [isMobile, setIsMobile] = useState(false);
  const [shuffledFeatures, setShuffledFeatures] = useState<
    typeof FEATURES_DATA
  >([]);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const shuffleArray = (array: typeof FEATURES_DATA) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const handleResize = () => {
      const mobileStatus = window.innerWidth < 768;
      setIsMobile(mobileStatus);

      if (mobileStatus && shuffledFeatures.length === 0) {
        setShuffledFeatures(shuffleArray(FEATURES_DATA));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shuffledFeatures.length]);

  const handleLoadMore = () => {
    if (visibleCount >= shuffledFeatures.length) {
      setVisibleCount(1);
    } else {
      setVisibleCount((prev) => prev + 1);
    }
  };

  const featuresToRender = isMobile
    ? shuffledFeatures.slice(0, visibleCount)
    : FEATURES_DATA;

  const allTiers = [
    {
      category: "Hemat",
      name: "Paket Sampel Murmer",
      price: "650.000",
      tag: "Tes Pasar Paling Hemat",
      desc: "25 pcs campur ukuran (Semua Kelas A)",
      summary:
        "Pilihan terbaik untuk pemula yang ingin mengetes minat pasar tanpa risiko stok menumpuk.",
      perks: [
        "25 pcs Koleksi Campur Paling Laris",
        "Akses Katalog Digital & Stok Waktu Nyata",
        "Grup Dukungan WA Mitra Pemula",
        "E-Sertifikat Kemitraan Resmi",
      ],
      recommended: false,
    },
    {
      category: "Hemat",
      name: "Paket Campur Sampel Murmer",
      price: "850.000",
      tag: "Sampel Campur Impor Lokal",
      desc: "30 pcs (Campur Premium Impor & Lokal)",
      summary:
        "Kombinasi model impor dan lokal untuk melihat selera pelanggan di area Anda.",
      perks: [
        "30 pcs (15 Impor, 15 Lokal Premium)",
        "Panduan Dasar Jualan di WhatsApp",
        "Akses Foto Produk Non-Model",
        "Update Model Baru Tiap Minggu",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Usaha Campur Busana",
      price: "1.000.000",
      tag: "Mulai Usaha Serius",
      desc: "36 pcs (Campur Impor & Lokal Pilihan)",
      summary:
        "Paket yang paling seimbang untuk mulai membangun stok harian dan tampilan toko.",
      perks: [
        "36 pcs Koleksi Campur Paling Laris",
        "Modul A: Paket Identitas Merek Dasar",
        "Tips Optimasi Bio Instagram & WA",
        "Prioritas Update Stok Produk Baru",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Uji Coba Super",
      price: "1.200.000",
      tag: "Menguji Pasar Online",
      desc: "30 pcs (Kualitas Super Premium)",
      summary:
        "Fokus pada produk dengan visual tinggi, ideal untuk konten IG Reels dan TikTok.",
      perks: [
        "30 pcs Model Visual Tinggi/Fotogenik",
        "Video Konten Mentahan Siap Edit",
        "Panduan Konten TikTok Dasar",
        "Dukungan Penulisan Naskah Iklan",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Kombinasi",
      price: "1.650.000",
      tag: "Paket Kombinasi Fleksibel",
      desc: "45 pcs (Lengkap Semua Kategori)",
      summary:
        "Varian ukuran dan model lebih luas, memunginkan Anda melayani lebih banyak segmen.",
      perks: [
        "45 pcs Campur (Bayi, Balita, Anak)",
        "Modul B: Kalkulator Profit Strategis",
        "Templat Faktur & Rekap Pesanan",
        "Akses Grup Berbagi Mitra Sukses",
      ],
      recommended: false,
    },
    {
      category: "Populer",
      name: "Paket Boom Laris Jualan",
      price: "1.800.000",
      tag: "Paling Laris untuk Pemula Naik Level",
      desc: "50 pcs (Hanya Produk Paling Laris)",
      summary:
        "Paket dengan perputaran modal tercepat karena hanya berisi model paling laku.",
      perks: [
        "50 pcs Jaminan Model Cepat Laku",
        "Modul C: Akademi Model & Konten",
        "Voucher Diskon Pembelian Berikutnya",
        "Dukungan Mentoring Penuh via Zoom",
      ],
      recommended: true,
    },
    {
      category: "Serius",
      name: "Paket Eksklusif Baru",
      price: "2.250.000",
      tag: "Fokus Busana Premium",
      desc: "65 pcs (Koleksi Eksklusif Lamonte)",
      summary:
        "Untuk mitra yang membidik segmen menengah ke atas dengan kualitas jahitan butik.",
      perks: [
        "65 pcs Koleksi Premium Andalan",
        "Modul D: Kelas Ahli Marketplace",
        "Sertifikat Mitra Eksklusif Cetak",
        "Konsultasi Bisnis Personal 1-on-1",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Mini Murmer",
      price: "3.550.000",
      tag: "Siapin Stok Harian",
      desc: "100 pcs (Stok Siap Melimpah)",
      summary:
        "Kapasitas stok yang aman untuk melayani penjual ulang dan orderan partai kecil.",
      perks: [
        "100 pcs Koleksi Lengkap & Merata",
        "Modul E: Otomasi WhatsApp",
        "Kemasan Eksklusif Lamonte Gratis",
        "Akses Prioritas Layanan Pelanggan",
      ],
      recommended: false,
    },
    {
      category: "Serius",
      name: "Paket Hemat Buka Usaha",
      price: "5.500.000",
      tag: "Siap Jadi Toko Serius",
      desc: "125 pcs (Paket Penyiapan Toko)",
      summary:
        "Cetak biru lengkap memulai toko fisik pertama Anda dengan modal sangat terukur.",
      perks: [
        "125 pcs Koleksi Tampilan Terbaik",
        "Modul F: 365 Hari Kalender Konten",
        "Banner/Spanduk Toko Fisik Gratis",
        "Bimbingan Manajemen Stok & Karyawan",
      ],
      recommended: true,
    },
    {
      category: "Strategis",
      name: "Paket Buka Toko",
      price: "12.500.000",
      tag: "Paket Buka Toko Offline",
      desc: "350 pcs (Dukungan Penuh Branding)",
      summary:
        "Transformasikan ruangan Anda menjadi butik busana anak profesional dengan paket ini.",
      perks: [
        "300-350 pcs Koleksi Semua Varian",
        "Paket Branding Toko (X-Banner, Plastik)",
        "Grup Mentoring Khusus Pemilik Toko",
        "Promosi Toko di Media Sosial Lamonte",
      ],
      recommended: false,
    },
    {
      category: "Strategis",
      name: "Paket Ball Mega Premium",
      price: "25.000.000",
      tag: "Tingkat Ball Mega Premium",
      desc: "600 pcs (Gudang Cabang/Distributor)",
      summary:
        "Jadilah pusat distribusi utama di kota Anda dan bangun jaringan penjual ulang sendiri.",
      perks: [
        "550-600 pcs Stok Skala Besar",
        "Akses Harga VIP Distributor",
        "Dibantu Strategi Rekrut Penjual Ulang",
        "Kunjungan Tim Pusat (Opsional)",
      ],
      recommended: true,
    },
  ];

  return (
    <div className='relative isolate overflow-hidden bg-background'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero setIsTierTab={setIsTierTab} />
      <Features
        featuresToRender={featuresToRender}
        isMobile={isMobile}
        visibleCount={visibleCount}
        handleLoadMore={handleLoadMore}
        shuffledFeaturesLength={shuffledFeatures.length}
      />
      <PartnershipTiers
        isTierTab={isTierTab}
        setIsTierTab={setIsTierTab}
        allTiers={allTiers}
      />
      <WhyUs />
      <Catalog isMobile={isMobile} />
      <RegistrationProcess />
      <Stats />
      <Testimonials />
      <FAQ />
      <Marquee />
      <FinalCTA />
      <Footer />

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
