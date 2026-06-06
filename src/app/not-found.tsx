import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <span className="font-heading text-8xl md:text-[12rem] text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-800 opacity-20 block leading-none select-none">
            404
          </span>
          <div className="-mt-12 md:-mt-20">
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-6">
              A Rare Find
            </h1>
            <p className="text-gray-400 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
              It seems the exquisite piece or collection you are looking for is currently being curated in our vaults, or the page does not exist.
            </p>
            <Link 
              href="/"
              className="inline-block px-10 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
            >
              Return to Boutique
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
