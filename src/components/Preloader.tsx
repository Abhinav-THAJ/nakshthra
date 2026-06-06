"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center flex-col"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl md:text-6xl tracking-widest text-gold-500 uppercase">
                Nakshathra
              </h1>
            </motion.div>
          </div>
          
          <div className="overflow-hidden mt-4">
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.6 }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500">
                Gold & Diamonds
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div 
              className="h-full bg-gold-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
