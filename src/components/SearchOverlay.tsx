"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = ["Bridal", "Bangle", "Ring", "Necklace", "Diamond"];

const allProducts = [
  { id: "p1", name: "Imperial Diamond Bangle", image: "/images/products/diamond_bangle.png", category: "Diamonds" },
  { id: "p2", name: "Royal 22K Men's Ring", image: "/images/products/gold_ring.png", category: "Gold" },
  { id: "p3", name: "Eternity Diamond Pendant", image: "/images/products/diamond_pendant.png", category: "Diamonds" },
  { id: "p4", name: "Heritage Bridal Set", image: "/images/products/bridal_set.png", category: "Bridal" },
  { id: "p5", name: "Temple Motif Gold Necklace", image: "/images/products/gold_necklace.png", category: "Gold" },
  { id: "p6", name: "Solitaire Diamond Studs", image: "/images/products/diamond_earrings.png", category: "Diamonds" }
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const searchResults = query.trim() === "" 
    ? [] 
    : allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim() !== "") {
      // In a real app, route to /shop?q=query
      // Here, if there's an exact match, route to it, else just route to shop
      if (searchResults.length > 0) {
        router.push(`/product/${searchResults[0].id}`);
        onClose();
      } else {
        router.push(`/shop`);
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[80] bg-black/90 flex flex-col overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-12 border-b border-white/10 sticky top-0 z-10 bg-black/50 backdrop-blur-md">
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs">Search</span>
            <button 
              onClick={onClose}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300 rotate-0 hover:rotate-90 bg-black/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 min-h-[60vh]">
            <div className="w-full max-w-4xl relative">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center border-b border-white/30 pb-4 focus-within:border-gold-500 transition-colors">
                  <SearchIcon className="w-8 h-8 text-gold-500 mr-6" />
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What are you looking for?"
                    className="w-full bg-transparent text-4xl md:text-6xl font-heading text-ivory placeholder-white/20 focus:outline-none"
                    autoFocus
                  />
                </div>
              </motion.div>

              {/* Suggestions / Results */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-12 flex flex-col md:flex-row gap-12 text-sm w-full"
              >
                
                {query.trim() === "" ? (
                  <>
                    <div className="w-full md:w-1/3">
                      <h4 className="text-gray-500 uppercase tracking-widest text-[10px] mb-6">Trending Searches</h4>
                      <ul className="space-y-4">
                        {trendingSearches.map((term) => (
                          <li key={term}>
                            <button 
                              onClick={() => setQuery(term)}
                              className="text-ivory hover:text-gold-500 transition-colors flex items-center gap-2 group"
                            >
                              <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500" />
                              {term}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="text-gray-500 uppercase tracking-widest text-[10px] mb-6">Curated For You</h4>
                      <div className="flex gap-6">
                        <Link href="/product/p1" onClick={onClose} className="group">
                          <div className="relative w-32 h-32 bg-black border border-white/10 mb-3 overflow-hidden">
                            <Image src="/images/products/diamond_bangle.png" alt="Bangle" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <p className="text-xs text-ivory group-hover:text-gold-500 transition-colors">Imperial Bangle</p>
                        </Link>
                        <Link href="/product/p4" onClick={onClose} className="group">
                          <div className="relative w-32 h-32 bg-black border border-white/10 mb-3 overflow-hidden">
                            <Image src="/images/products/bridal_set.png" alt="Bridal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <p className="text-xs text-ivory group-hover:text-gold-500 transition-colors">Bridal Set</p>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full">
                    <h4 className="text-gray-500 uppercase tracking-widest text-[10px] mb-6 border-b border-white/10 pb-4">
                      Search Results ({searchResults.length})
                    </h4>
                    
                    {searchResults.length === 0 ? (
                      <p className="text-gray-400 py-4">No results found for "{query}". Try searching for "Diamond" or "Gold".</p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {searchResults.map(product => (
                          <Link key={product.id} href={`/product/${product.id}`} onClick={onClose} className="group">
                            <div className="relative aspect-square bg-black border border-white/10 mb-3 overflow-hidden">
                              <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <p className="text-xs text-ivory group-hover:text-gold-500 transition-colors truncate">{product.name}</p>
                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">{product.category}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
