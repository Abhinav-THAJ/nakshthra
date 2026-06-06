"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import SearchOverlay from "@/components/SearchOverlay";

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Bridal", href: "/bridal" },
  { name: "High Jewelry", href: "/high-jewelry" },
  { name: "Live Gold Rate", href: "/gold-rate" },
  { name: "Our Heritage", href: "/about" },
  { name: "Contact & Stores", href: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm tracking-widest uppercase">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 hover:text-gold-400 transition-colors relative z-50"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden md:inline">{isMenuOpen ? "Close" : "Menu"}</span>
            </button>
            <div className="hidden lg:flex gap-6">
              <Link href="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
              <Link href="/collections" className="hover:text-gold-400 transition-colors">Collections</Link>
              <Link href="/bridal" className="hover:text-gold-400 transition-colors">Bridal</Link>
            </div>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-50" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="Nakshathra Logo" className="h-12 md:h-16 w-auto object-contain" />
          </Link>

          {/* Right Links */}
          <div className="flex items-center gap-6 text-ivory">
            <button onClick={() => setIsSearchOpen(true)} className="hover:text-gold-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="hover:text-gold-400 transition-colors hidden md:block">
              <User className="w-5 h-5" />
            </Link>
            <button 
              className="hover:text-gold-400 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full flex items-center justify-center text-[9px] text-black font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mega Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl pt-24 overflow-y-auto"
          >
            <div className="container mx-auto px-6 w-full min-h-[calc(100vh-6rem)] py-12 flex flex-col justify-center">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                
                {/* Left: Collections */}
                <div className="lg:col-span-4 flex flex-col gap-8 border-l border-white/10 pl-8">
                  <p className="text-gold-500 uppercase tracking-[0.3em] text-[10px]">Shop by Category</p>
                  <nav className="flex flex-col gap-5">
                    {[
                      { name: "Shop All", href: "/shop" },
                      { name: "High Jewelry", href: "/collections/high-jewelry" },
                      { name: "Bridal Trousseau", href: "/collections/bridal" },
                      { name: "Heritage Gold", href: "/collections/gold" },
                      { name: "Pristine Diamonds", href: "/collections/diamond" },
                      { name: "Men's Edit", href: "/collections/men" }
                    ].map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                      >
                        <Link 
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-heading text-3xl md:text-4xl text-gray-300 hover:text-ivory hover:italic transition-all duration-500"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Middle: Discover */}
                <div className="lg:col-span-3 flex flex-col gap-8 border-l border-white/10 pl-8">
                  <p className="text-gold-500 uppercase tracking-[0.3em] text-[10px]">Discover Nakshathra</p>
                  <nav className="flex flex-col gap-6">
                    {[
                      { name: "Our Heritage", href: "/about" },
                      { name: "Live Gold Rate", href: "/gold-rate" },
                      { name: "Book Appointment", href: "/book-appointment" },
                      { name: "Contact & Stores", href: "/contact" }
                    ].map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                      >
                        <Link 
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-gold-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Right: Editorial Image */}
                <div className="lg:col-span-5 h-full flex flex-col justify-center items-end">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="relative w-full max-w-sm aspect-[4/3] bg-white/5 p-3 border border-white/10"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src="/images/hero/diamond_necklace.png" 
                        alt="High Jewelry" 
                        className="object-cover object-center w-full h-full opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <Link href="/collections/high-jewelry" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 border border-white text-white text-xs uppercase tracking-widest backdrop-blur-md hover:bg-white hover:text-black transition-colors">
                          Explore Collection
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 border-t border-white/10 pt-8"
              >
                <p>Nakshathra Gold & Diamonds</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <Link href="#" className="hover:text-gold-400">Instagram</Link>
                  <Link href="#" className="hover:text-gold-400">Facebook</Link>
                  <Link href="#" className="hover:text-gold-400">Pinterest</Link>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
