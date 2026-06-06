"use client";

import Image from "next/image";
import Link from "next/link";

export default function LifestyleSection() {
  return (
    <section className="bg-black py-32 text-ivory">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[80vh] w-full">
            <Image
              src="/images/hero/bridal_model.png"
              alt="Bridal Experience"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 border border-white/20 m-4 pointer-events-none" />
          </div>

          <div className="max-w-lg">
            <h2 className="text-gold-500 uppercase tracking-[0.4em] text-xs mb-6">The Bridal Experience</h2>
            <h3 className="font-heading text-5xl md:text-6xl mb-8 leading-tight">
              Begin Your <br />
              <span className="italic text-gray-400">Forever</span>
            </h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm md:text-base">
              At Nakshathra, we believe every bride deserves a masterpiece as unique as her love story. 
              Our master artisans dedicate hundreds of hours to handcraft heritage pieces that will be passed down through generations.
            </p>
            <Link 
              href="/bridal-appointment" 
              className="inline-block px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Book a Bridal Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
