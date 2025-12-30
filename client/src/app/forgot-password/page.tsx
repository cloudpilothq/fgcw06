"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl bg-[#1E1E1E] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-800">
        
        {/* Left Side - Image/Branding */}
        <div className="relative md:w-5/12 bg-gray-900 flex flex-col justify-between p-8 text-white min-h-[300px] md:min-h-full">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/school-gate.jpg" alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#006837]/30 to-black/80" />
            </div>

            {/* Top Bar */}
            <div className="relative z-10 flex justify-between items-start">
               <span className="text-xl font-bold font-serif tracking-wider">FGCW 06</span>
               <Link href="/login" className="text-xs bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all flex items-center gap-2">
                 <ArrowLeft size={12} /> Back to Login
               </Link>
            </div>

            {/* Bottom Text */}
            <div className="relative z-10 mt-auto">
               <h2 className="text-3xl font-bold leading-tight mb-2">Account Recovery</h2>
               <p className="text-gray-300 text-sm mb-4">Don't worry, we'll help you get back into your account.</p>
               <div className="flex gap-2 mt-4">
                 <div className="h-1 w-8 bg-white rounded-full"></div>
                 <div className="h-1 w-2 bg-white/30 rounded-full"></div>
                 <div className="h-1 w-2 bg-white/30 rounded-full"></div>
               </div>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-8 md:p-12 bg-[#1E1E1E] text-gray-200 flex flex-col justify-center">
            
            <div className="max-w-md mx-auto w-full">
                <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
                <p className="text-sm text-gray-400 mb-8">
                  Enter your registered email address and we will send you a secure link to reset your password.
                </p>

                <form className="space-y-6">
                    
                    <div>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Registered Email Address"
                            className="w-full bg-[#2A2A2A] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#006837] focus:border-transparent block p-4 outline-none transition-all placeholder-gray-500"
                        />
                    </div>

                    <button type="submit" className="w-full text-white bg-[#006837] hover:bg-[#00522b] focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-4 text-center transition-all shadow-[0_4px_14px_0_rgba(0,104,55,0.39)] bg-gradient-to-r from-[#006837] to-[#004d29] flex items-center justify-center gap-2">
                        Send Recovery Link <Send size={16} />
                    </button>
                    
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        Remember your password? <Link href="/login" className="text-[#006837] hover:underline">Log in here</Link>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}