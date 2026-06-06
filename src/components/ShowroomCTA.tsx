"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ShowroomCTA() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero/bridal_model.png" 
          alt="Showroom Experience" 
          fill 
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gold-500 uppercase tracking-[0.4em] text-xs mb-6">
            Bespoke Services
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-ivory mb-8 leading-tight drop-shadow-2xl">
            Experience True Luxury
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
            Step into a world of timeless elegance. Our legacy spans decades of masterful craftsmanship, bringing you unparalleled designs that transcend time.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-500 px-12 py-5 uppercase tracking-widest text-xs font-bold"
          >
            Visit Our Showroom
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
