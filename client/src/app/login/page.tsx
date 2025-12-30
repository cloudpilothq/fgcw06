"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useFormState } from 'react-dom';
import { authenticate } from '@/actions/authActions';

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-5xl bg-[#1E1E1E] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-800">
        
         {/* Right Side - Form (Swapped for variety or kept same? Let's keep Image Left, Form Right for consistency) */}
         
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
               <Link href="/" className="text-xs bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all flex items-center gap-2">
                 <ArrowLeft size={12} /> Back to website
               </Link>
            </div>

            {/* Bottom Text */}
            <div className="relative z-10 mt-auto">
               <h2 className="text-3xl font-bold leading-tight mb-2">Welcome Back,<br/>Alumni</h2>
               <p className="text-gray-300 text-sm mb-4">Reconnect with your community and discover new opportunities.</p>
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
                <h1 className="text-3xl font-bold text-white mb-2">Login to your account</h1>
                <p className="text-sm text-gray-400 mb-8">
                  Don't have an account? <Link href="/register" className="text-[#006837] hover:text-green-400 font-medium underline-offset-4 hover:underline">Register now</Link>
                </p>

                <form action={dispatch} className="space-y-5">
                    
                    <div>
                        <input 
                            name="username" 
                            type="text" 
                            placeholder="Username or Email"
                            className="w-full bg-[#2A2A2A] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#006837] focus:border-transparent block p-4 outline-none transition-all placeholder-gray-500"
                        />
                    </div>

                    <div className="relative">
                        <input 
                            name="password" 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password"
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

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember" type="checkbox" className="w-4 h-4 text-[#006837] bg-[#2A2A2A] border-gray-600 rounded focus:ring-[#006837] focus:ring-offset-gray-800" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-400">Remember me</label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-[#006837] hover:text-green-400 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="w-full text-white bg-[#006837] hover:bg-[#00522b] focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-4 text-center transition-all shadow-[0_4px_14px_0_rgba(0,104,55,0.39)] bg-gradient-to-r from-[#006837] to-[#004d29]">
                        Sign In
                    </button>
                    
                    {errorMessage && (
                        <div className="bg-red-900/30 border border-red-900/50 p-4 rounded-lg text-center">
                          <p className="text-sm text-red-400">{errorMessage}</p>
                        </div>
                    )}
                </form>

                {/* Social Login Placeholder matches design */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#1E1E1E] px-2 text-gray-500">Or login with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-[#333] border border-gray-700 rounded-lg p-3 transition-all text-sm text-white">
                        {/* Google Icon SVG */}
                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-[#333] border border-gray-700 rounded-lg p-3 transition-all text-sm text-white">
                         {/* Apple Icon SVG */}
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.89 3.66-.54 2.4.6 3.4 3.2 3.4 3.2-.06.02-2.31 1.34-1.94 4.5 0 2.23 1.5 3.51 1.5 3.51-.57 1.83-1.6 3.69-3.09 5.25l1.39-3.69zm-2.69-14.7c.6 1.25-.3 2.53-1.39 3.4-1.05.9-2.33 1.15-2.9 1.15-.22-1.31.62-2.58 1.4-3.4 1-1.05 2.39-1.4 2.89-1.15z"/></svg>
                        Apple
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}