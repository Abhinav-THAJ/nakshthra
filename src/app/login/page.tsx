import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 flex flex-col lg:flex-row">
      {/* Mobile Navbar Overlay (Hidden on Desktop split) */}
      <div className="lg:hidden absolute w-full z-50">
        <Navbar />
      </div>
      
      {/* Left: Editorial Image */}
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image 
          src="/images/hero/bridal_model.png" 
          alt="Luxury Jewelry" 
          fill 
          className="object-cover object-top opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        
        {/* Brand Overlay */}
        <div className="absolute bottom-12 left-12 z-10">
          <Link href="/" className="font-heading text-4xl text-ivory tracking-widest uppercase">
            Nakshathra
          </Link>
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase mt-2">Gold & Diamonds</p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col pt-32 lg:pt-0 px-6 sm:px-12 xl:px-24 justify-center relative overflow-y-auto">
        {/* Desktop close/back button */}
        <Link href="/" className="hidden lg:flex absolute top-12 right-12 text-xs uppercase tracking-widest text-gray-500 hover:text-gold-500 transition-colors items-center gap-2">
          Return to Boutique <ArrowRight className="w-3 h-3" />
        </Link>

        <div className="max-w-md w-full mx-auto pb-20 lg:pb-0">
          <div className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-ivory mb-4">Welcome Back</h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Sign in to your bespoke account</p>
          </div>

          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 relative group">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 absolute -top-4 left-0 transition-colors group-focus-within:text-gold-500">Email Address</label>
              <input 
                required 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 pb-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors autofill-fix" 
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex flex-col gap-2 relative group">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 absolute -top-4 left-0 transition-colors group-focus-within:text-gold-500">Password</label>
              <input 
                required 
                type="password" 
                className="w-full bg-transparent border-b border-white/20 pb-3 text-ivory focus:outline-none focus:border-gold-500 transition-colors autofill-fix" 
                placeholder="••••••••"
              />
              <Link href="#" className="absolute right-0 bottom-3 text-[10px] uppercase tracking-widest text-gold-500 hover:text-ivory transition-colors">
                Forgot?
              </Link>
            </div>

            <button type="button" className="w-full bg-gold-500 text-black py-5 uppercase tracking-widest text-xs font-bold hover:bg-white transition-all mt-4 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Sign In Securely
            </button>
          </form>

          <div className="mt-16 text-center border-t border-white/10 pt-10">
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">Don't have an account?</p>
            <button className="w-full border border-white/20 text-white py-5 uppercase tracking-widest text-xs hover:border-gold-500 hover:text-gold-500 transition-colors">
              Create an Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
