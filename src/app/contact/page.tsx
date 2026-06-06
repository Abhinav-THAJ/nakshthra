import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 pb-32">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/5">
        <h1 className="font-heading text-5xl md:text-7xl text-ivory mb-6">Contact & Stores</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed tracking-widest">
          EXPERIENCE THE BRILLIANCE IN PERSON OR REACH OUT TO OUR CONCIERGE.
        </p>
      </section>

      <section className="pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl text-ivory mb-8">Send an Inquiry</h2>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">First Name</label>
                    <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Last Name</label>
                    <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={4} className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors resize-none" />
                </div>
                <button type="button" className="bg-gold-500 text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>

            {/* Store Locations */}
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-heading text-3xl text-ivory mb-8">Our Flagship Boutiques</h2>
                <div className="flex flex-col gap-8">
                  {/* Store 1 */}
                  <div className="border border-white/10 p-8 bg-white/5 hover:border-gold-500/50 transition-colors">
                    <h3 className="font-heading text-xl text-gold-500 mb-4">Kochi, Kerala</h3>
                    <div className="space-y-4 text-sm text-gray-400">
                      <p className="flex items-start gap-4"><MapPin className="w-5 h-5 shrink-0" /> MG Road, Ernakulam, Kerala 682035</p>
                      <p className="flex items-center gap-4"><Phone className="w-5 h-5 shrink-0" /> +91 484 236 7890</p>
                      <p className="flex items-center gap-4"><Clock className="w-5 h-5 shrink-0" /> Mon - Sat: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  {/* Store 2 */}
                  <div className="border border-white/10 p-8 bg-white/5 hover:border-gold-500/50 transition-colors">
                    <h3 className="font-heading text-xl text-gold-500 mb-4">Dubai, UAE</h3>
                    <div className="space-y-4 text-sm text-gray-400">
                      <p className="flex items-start gap-4"><MapPin className="w-5 h-5 shrink-0" /> Gold Souk, Deira, Dubai</p>
                      <p className="flex items-center gap-4"><Phone className="w-5 h-5 shrink-0" /> +971 4 225 6789</p>
                      <p className="flex items-center gap-4"><Clock className="w-5 h-5 shrink-0" /> Everyday: 10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
