"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isCartOpen]);

  if (!isMounted) return null;

  const totalAmount = items.reduce((total, item) => {
    const priceStr = item.price.replace(/[^\d]/g, "");
    return total + parseInt(priceStr) * item.quantity;
  }, 0);

  const formattedTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(totalAmount);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#050505] border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-heading text-2xl text-ivory flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold-500" /> Shopping Bag
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 mb-4 text-gold-500" />
                  <p className="text-ivory font-heading text-xl mb-2">Your bag is empty</p>
                  <p className="text-gray-400 text-sm">Discover our masterfully crafted pieces.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-8 uppercase tracking-widest text-xs text-gold-500 hover:text-white transition-colors border-b border-gold-500 pb-1"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 relative group">
                    <div className="relative w-24 h-24 bg-black border border-white/10 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="text-sm text-ivory pr-6">{item.name}</h4>
                        <p className="text-gold-500 text-xs mt-1">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-white/20 text-ivory">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-white/10 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs px-2 w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-white/10 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-red-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6 bg-[#030303]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="font-heading text-xl text-ivory">{formattedTotal}</span>
                </div>
                <p className="text-[10px] text-gray-500 mb-6 tracking-wide">
                  Taxes and shipping calculated at checkout.
                </p>
                <Link 
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-gold-500 text-black py-4 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
