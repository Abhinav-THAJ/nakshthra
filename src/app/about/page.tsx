import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/hero/bridal_model.png" alt="Heritage" fill className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-4">A Legacy of Trust</p>
          <h1 className="font-heading text-5xl md:text-8xl text-ivory mb-6">Our Heritage</h1>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-3xl font-heading text-gray-300 leading-relaxed mb-12">
            "For generations, Nakshathra has been the custodian of precious memories, meticulously crafting heirloom jewelry that transcends time."
          </p>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto mb-12" />
          <div className="space-y-8 text-sm md:text-base text-gray-400 leading-loose text-left md:text-center">
            <p>
              Founded in the lush, culturally rich landscapes of Kerala, Nakshathra Gold & Diamonds began with a singular vision: to offer purities unmatched and designs unparalleled. What started as a humble artisan workshop has blossomed into a premier luxury destination spanning India and the GCC.
            </p>
            <p>
              Every piece of jewelry we create is a testament to the skill of our master karigars (craftsmen). We source only the finest gold, the most brilliant conflict-free diamonds, and the rarest gemstones to bring our visions to life. From grand temple-inspired bridal sets to avant-garde everyday luxury, our collections reflect a deep reverence for tradition combined with a bold contemporary aesthetic.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
