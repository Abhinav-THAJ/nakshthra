import Navbar from "@/components/Navbar";
import { Calendar, Clock, User, CheckCircle2 } from "lucide-react";

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-500/30 selection:text-gold-200 pb-32">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/5">
        <p className="text-gold-500 uppercase tracking-[0.3em] text-xs mb-4">Exclusive Service</p>
        <h1 className="font-heading text-5xl md:text-7xl text-ivory mb-6">Book an Appointment</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed tracking-widest">
          RESERVE A PRIVATE VIEWING OR A VIRTUAL CONSULTATION WITH OUR EXPERTS.
        </p>
      </section>

      <section className="pt-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white/5 border border-white/10 p-8 md:p-16">
            <form className="flex flex-col gap-10">
              
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-2xl text-ivory mb-2">1. Consultation Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="border border-gold-500 bg-gold-500/10 p-4 cursor-pointer flex items-center justify-between">
                    <span className="text-sm text-ivory uppercase tracking-widest">In-Boutique</span>
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  </label>
                  <label className="border border-white/20 p-4 cursor-pointer hover:border-white/50 transition-colors flex items-center justify-between">
                    <span className="text-sm text-gray-400 uppercase tracking-widest">Virtual Viewing</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 flex items-center gap-2"><Calendar className="w-3 h-3"/> Date</label>
                  <input type="date" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 flex items-center gap-2"><Clock className="w-3 h-3"/> Time</label>
                  <input type="time" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 flex items-center gap-2"><User className="w-3 h-3"/> Full Name</label>
                  <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input type="tel" className="bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <button type="button" className="bg-gold-500 text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors mt-8">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
