"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { useFormState } from 'react-dom';
// import { authenticate } from '../../actions/authenticate';

async function authenticate(prevState: string | undefined, formData: FormData): Promise<string | undefined> {
  return "Login is disabled in this static version.";
}

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2faf6] via-white to-[#e8f5ee] flex items-center justify-center p-6">
      {/* The "Floating Card" with soft, multi-layered shadow */}
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-[40px] p-12 shadow-[0_20px_50px_rgba(0,104,55,0.05),0_1px_2px_rgba(0,0,0,0.02)] border border-white">
        
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-[#006837] text-white flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-lg shadow-green-900/20 font-bold text-xl">W</div>
          <h1 className="text-[#1a1a1a] text-[2.4rem] font-serif font-bold tracking-tight mb-2">Welcome back</h1>
          <p className="text-gray-400 text-[1.3rem] font-medium uppercase tracking-[.1em]">Alumni Dashboard Access</p>
        </div>

        <form action={dispatch} className="space-y-5">
          {/* Email: Subtly sunken input field */}
          <div className="group">
            <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Email</label>
            <div className="relative bg-white border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30 shadow-sm">
              <input 
                name="email"
                type="email" 
                className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none placeholder:text-gray-300" 
                placeholder="name@fgcw06.com" 
              />
              <Mail className="absolute right-4 top-4 text-gray-200" size={18} />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-[0.8rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Password</label>
            <div className="relative bg-white border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30 shadow-sm">
              <input 
                name="password"
                type="password" 
                className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" 
                placeholder="••••••••" 
              />
              <Lock className="absolute right-4 top-4 text-gray-200" size={18} />
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <Link href="/forgot-password" className="text-[1.1rem] text-[#006837] font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-[#006837] text-white py-5 rounded-2xl text-[1.3rem] font-bold uppercase tracking-[.2em] shadow-xl shadow-green-900/10 hover:bg-green-800 hover:-translate-y-0.5 transition-all">
            Sign In
          </button>
          {errorMessage && (
            <div className="flex h-8 items-end space-x-1">
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </form>

        <p className="text-center mt-10 text-[1.3rem] text-gray-400">
          Not a member? <Link href="/register" className="text-[#006837] font-bold hover:underline">Register now</Link>
        </p>
      </div>
    </main>
  );
}