import type { Metadata } from "next";
import { Inter, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mitra Lamonte | Peluang Bisnis Fashion Anak Premium",
  description: "Bergabunglah menjadi Mitra Lamonte. Raih keuntungan Rp 15-80 Juta/bulan dengan bisnis baju anak berkualitas. Tanpa stock, sistem otomatis, dan bimbingan eksklusif.",
  keywords: ["bisnis baju anak", "reseller baju anak", "dropship fashion anak", "mitra lamonte", "peluang usaha fashion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${outfit.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
