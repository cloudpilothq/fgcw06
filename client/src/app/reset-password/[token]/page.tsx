"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Eye, EyeOff, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResetPassword() {
  const params = useParams();
  const token = params.token; 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
               <h2 className="text-3xl font-bold leading-tight mb-2 text-white">Secure Your<br/>Account</h2>
               <p className="text-gray-300 text-sm mb-4">Create a strong password to protect your profile.</p>
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
                <h1 className="text-3xl font-bold text-white mb-2">Set New Password</h1>
                <p className="text-sm text-gray-400 mb-8">
                   Please enter your new password below.
                </p>

                <form className="space-y-6">
                   <input type="hidden" name="token" value={token} />
                    
                    <div className="relative">
                        <input 
                            name="password" 
                            type={showPassword ? "text" : "password"} 
                            placeholder="New Password"
                            className="w-full bg-[#2A2A2A] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#006837] focus:border-transparent block p-4 outline-none transition-all placeholder-gray-500"
                        />
                         <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                         >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                    </div>

                    <div className="relative">
                        <input 
                            name="confirmPassword" 
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="Confirm New Password"
                            className="w-full bg-[#2A2A2A] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#006837] focus:border-transparent block p-4 outline-none transition-all placeholder-gray-500"
                        />
                         <button 
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                         >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                         </button>
                    </div>

                    <button type="submit" className="w-full text-white bg-[#006837] hover:bg-[#00522b] focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-4 text-center transition-all shadow-[0_4px_14px_0_rgba(0,104,55,0.39)] bg-gradient-to-r from-[#006837] to-[#004d29]">
                        Update Password
                    </button>
                    
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}