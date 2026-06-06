"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/bridal_model.png"
          alt="Luxury Bridal Jewelry"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold-500 uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-medium"
        >
          The Epitome of Elegance
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory mb-8 leading-tight"
        >
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">Eternity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 max-w-2xl text-base md:text-lg mb-12 font-light leading-relaxed"
        >
          Discover our curated collection of extraordinary jewels. From pristine diamonds to heritage gold bridal masterpieces, designed for the world's most discerning tastes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/shop" className="px-10 py-4 bg-gold-500 hover:bg-gold-400 text-black uppercase tracking-widest text-sm transition-colors duration-300">
            Explore Collection
          </Link>
          <Link href="/book-appointment" className="px-10 py-4 border border-white/30 hover:border-white hover:bg-white/5 text-white uppercase tracking-widest text-sm transition-all duration-300 backdrop-blur-sm">
            Book Appointment
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.2em] text-[10px] text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
