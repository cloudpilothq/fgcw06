"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { useFormState } from 'react-dom';
// import { registerUser } from '../../actions/register';
import { RegisterState } from '../../lib/definitions';

async function registerUser(prevState: RegisterState, formData: FormData): Promise<RegisterState> {
  return { message: "Registration is disabled in this static version.", errors: {} };
}

export default function RegisterPage() {
  const initialState: RegisterState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(registerUser, initialState);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2faf6] via-white to-[#e8f5ee] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-[40px] p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,104,55,0.06)] border border-white">
        
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={14} className="text-[#006837]" />
            <span className="text-[#006837] text-[0.8rem] font-black uppercase tracking-widest">Official 06 Enrollment</span>
          </div>
          <h1 className="text-[#1a1a1a] text-[2.8rem] font-serif font-bold leading-tight">Create your account<span className="text-[#006837]">.</span></h1>
          <p className="text-gray-400 text-[1.4rem] mt-2 font-medium">Already registered? <Link href="/login" className="text-[#006837] hover:underline font-bold">Log In</Link></p>
        </div>

        <form action={dispatch} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-[0.75rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">First Name</label>
            <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30 shadow-sm">
              <input name="firstName" type="text" className="w-full bg-transparent text-gray-800 text-[1.3rem] outline-none" placeholder="Michał" />
            </div>
            {state.errors?.firstName && <p className="text-red-500 text-sm mt-1">{state.errors.firstName}</p>}
          </div>

          <div className="group">
            <label className="block text-[0.75rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Last Name</label>
            <div className="bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30 shadow-sm">
              <input name="lastName" type="text" className="w-full bg-transparent text-gray-800 text-[1.3rem] outline-none" placeholder="Masiak" />
            </div>
            {state.errors?.lastName && <p className="text-red-500 text-sm mt-1">{state.errors.lastName}</p>}
          </div>

          <div className="md:col-span-2 group">
            <label className="block text-[0.75rem] text-gray-400 uppercase font-black tracking-widest mb-2 px-1">Email Address</label>
            <div className="relative bg-white/50 border border-gray-100 rounded-2xl p-4 transition-all focus-within:ring-4 focus-within:ring-green-50 focus-within:border-[#006837]/30 shadow-sm">
              <input name="email" type="email" className="w-full bg-transparent text-gray-800 text-[1.3rem] outline-none" placeholder="name@fgcw06.com" />
              <Mail className="absolute right-4 top-4 text-gray-200" size={18} />
            </div>
            {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
          </div>

          <div className="md:col-span-2 group">
            <label className="block text-[0.85rem] text-[#006837] uppercase font-black tracking-widest mb-2 px-1">Secure Password</label>
            <div className="relative bg-white border border-[#006837]/20 rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,104,55,0.08)] ring-1 ring-[#006837]/10">
              <input name="password" type="password"  className="w-full bg-transparent text-gray-800 text-[1.3rem] outline-none" defaultValue="" />
              <Lock className="absolute right-4 top-4 text-[#006837]" size={18} />
            </div>
            {state.errors?.password && <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>}
          </div>

          <div className="md:col-span-2 pt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1 border border-gray-100 text-gray-400 py-5 rounded-2xl text-[1.2rem] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all text-center flex items-center justify-center">Back to Site</Link>
            <button type="submit" className="flex-1 bg-[#006837] text-white py-5 rounded-2xl text-[1.2rem] font-bold uppercase tracking-[.2em] shadow-xl shadow-green-900/10 hover:bg-green-800 hover:-translate-y-0.5 transition-all">Create Account</button>
          </div>
          {state.message && <p className="md:col-span-2 text-red-500 text-center font-bold">{state.message}</p>}
        </form>
      </div>
    </main>
  );
}