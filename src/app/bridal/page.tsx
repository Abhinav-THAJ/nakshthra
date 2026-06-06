import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function BridalLandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/hero/bridal_model.png" alt="Bridal Collection" fill className="object-cover object-top opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
        
        <div className="relative z-10 text-center px-6 mt-32">
          <p className="text-gold-500 uppercase tracking-[0.4em] text-xs mb-6">The Wedding Edit</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-ivory mb-8 drop-shadow-2xl">Bridal Trousseau</h1>
          <Link href="/collections/bridal" className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 px-10 py-4 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-ivory mb-12">Adorned for Eternity</h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-12">
            Your wedding day is a tapestry of sacred moments and eternal promises. Our Bridal Trousseau is meticulously handcrafted to ensure you radiate divine elegance. From intricate Antique Gold temple jewelry to the modern brilliance of uncut Polki diamonds, every piece is destined to become a cherished family heirloom.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/book-appointment" className="border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 px-8 py-3 uppercase tracking-widest text-xs transition-colors">
              Book a Bridal Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
