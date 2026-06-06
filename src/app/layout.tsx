import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nakshathra Gold & Diamonds | World Class Luxury Jewelry",
  description: "Experience the epitome of luxury with Nakshathra Gold & Diamonds. Explore our premium collections of Gold, Diamond, Bridal, and Wedding jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#050505]`}>
        <Preloader />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        <CartDrawer />
      </body>
    </html>
  );
}
