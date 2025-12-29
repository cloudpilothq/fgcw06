"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2faf6] via-white to-[#e8f5ee] pt-[5rem] pb-20 px-[25px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6 border border-green-100/50">
            <ShieldCheck size={14} className="text-[#006837]" />
            <span className="text-[#006837] text-[0.8rem] font-black uppercase tracking-widest">Global Support Network</span>
          </div>
          <h1 className="text-[#1a1a1a] text-[3.2rem] font-serif font-bold tracking-tight mb-4">
            Get in touch with the Set<span className="text-[#006837]">.</span>
          </h1>
          <p className="text-gray-500 text-[1.5rem] max-w-2xl mx-auto leading-relaxed">
            Have questions about the 20th Anniversary Reunion, dues, or the Investors Circle? Reach out to the FGCW 06 Executive Committee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[32px] border border-white shadow-[0_10px_40px_rgba(0,104,55,0.04)]">
              <h2 className="text-[#006837] text-[1rem] font-black uppercase tracking-widest mb-8">Official Channels</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#006837] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[0.8rem] text-gray-400 font-bold uppercase mb-1">Email Us</p>
                    <p className="text-[1.4rem] font-bold text-gray-800">info@fgcw06.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#006837] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[0.8rem] text-gray-400 font-bold uppercase mb-1">Call / WhatsApp</p>
                    <p className="text-[1.4rem] font-bold text-gray-800">+234 06 ALUMNI</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#006837] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[0.8rem] text-gray-400 font-bold uppercase mb-1">Secretariat</p>
                    <p className="text-[1.3rem] font-medium text-gray-600 leading-snug">
                      Effurun-Sapele Road,<br />Warri, Delta State
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Spirit Card */}
            <div className="bg-[#006837] p-8 rounded-[32px] text-white overflow-hidden relative">
              <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <h3 className="text-[1.8rem] font-serif italic mb-2">"Pro Unitate"</h3>
              <p className="text-green-100 text-[1.2rem] opacity-70">Dedicated to the unity and progress of the Class of 2006.</p>
            </div>
          </div>

          {/* Right: Message Form (Glassmorphism) */}
          <div className="lg:col-span-8">
            <div className="bg-white/70 backdrop-blur-xl p-10 lg:p-14 rounded-[40px] border border-white shadow-[0_20px_60px_rgba(0,104,55,0.06)]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Your Name</label>
                    <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30">
                      <input type="text" className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Email Address</label>
                    <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30">
                      <input type="email" className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" placeholder="name@email.com" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Subject</label>
                  <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30">
                    <select className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none appearance-none">
                      <option>General Inquiry</option>
                      <option>Reunion Planning</option>
                      <option>Dues & Finance</option>
                      <option>Investors Circle</option>
                      <option>Technical Issue</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Your Message</label>
                  <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30">
                    <textarea rows={5} className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none resize-none" placeholder="How can we help you today?" />
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-12 py-5 bg-[#006837] text-white rounded-2xl text-[1.3rem] font-bold uppercase tracking-[.2em] shadow-xl shadow-green-900/10 hover:bg-green-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}