"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2faf6] via-white to-[#e8f5ee] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-[40px] p-12 shadow-[0_20px_50px_rgba(0,104,55,0.05)] border border-white text-center">
        
        <Link href="/login" className="inline-flex items-center gap-2 text-[#006837] font-black uppercase tracking-widest text-[0.8rem] mb-10 hover:opacity-60 transition-opacity">
          <ArrowLeft size={14} /> Back to Login
        </Link>

        <h1 className="text-[#1a1a1a] text-[2.6rem] font-serif font-bold tracking-tight mb-3">Reset Password</h1>
        <p className="text-gray-400 text-[1.3rem] leading-relaxed mb-10">Enter your email and we'll send a secure recovery link.</p>

        <form className="space-y-6">
          <div className="group text-left">
            <label className="block text-[0.75rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Registered Email</label>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30">
              <input type="email" className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" placeholder="name@fgcw06.com" />
            </div>
          </div>

          <button className="w-full bg-[#006837] text-white py-5 rounded-2xl text-[1.2rem] font-bold uppercase tracking-[.2em] shadow-xl shadow-green-900/10 hover:bg-green-800 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            Send Link <Send size={16} />
          </button>
        </form>
      </div>
    </main>
  );
}