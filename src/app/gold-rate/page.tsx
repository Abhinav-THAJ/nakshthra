import Navbar from "@/components/Navbar";
import GoldRateWidget from "@/components/GoldRateWidget";

export default function GoldRatePage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="w-full">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-7xl text-ivory mb-6">Live Gold Rate</h1>
            <p className="text-gray-400 tracking-widest text-xs uppercase">Updated transparently for your peace of mind.</p>
          </div>
          <GoldRateWidget />
        </div>
      </div>
    </main>
  );
}
