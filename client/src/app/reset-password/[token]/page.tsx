"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Lock, ShieldCheck } from 'lucide-react';

export default function ResetPassword() {
  const params = useParams();
  const token = params.token; // This captures the unique string from the URL

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f9f4] via-white to-[#e6f4ed] flex items-center justify-center p-[25px]">
      <div className="w-full max-w-md bg-white p-10 rounded-[32px] shadow-2xl shadow-green-900/5 border border-white">
        
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-[#006837] text-white flex items-center justify-center rounded-xl mx-auto mb-4">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-gray-900 text-[2.2rem] font-bold tracking-tight">Set New Password</h1>
          <p className="text-gray-500 text-[1.3rem] mt-2">
            Secure your FGCW 06 account with a new credential.
          </p>
        </div>

        <form className="space-y-5">
          {/* Hidden Token Field (Optional, for form submission) */}
          <input type="hidden" name="token" value={token} />

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#006837]/30 transition-all">
            <label className="block text-[0.8rem] text-gray-400 uppercase font-bold mb-1">New Password</label>
            <div className="flex items-center justify-between">
              <input 
                type="password"  
                className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" 
                placeholder="••••••••" 
              />
              <Lock size={14} className="text-gray-400" />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 focus-within:border-[#006837]/30 transition-all">
            <label className="block text-[0.8rem] text-gray-400 uppercase font-bold mb-1">Confirm Password</label>
            <div className="flex items-center justify-between">
              <input 
                type="password"  
                className="w-full bg-transparent text-gray-800 text-[1.4rem] outline-none" 
                placeholder="••••••••" 
              />
              <Lock size={14} className="text-gray-400" />
            </div>
          </div>

          <button className="w-full bg-[#006837] text-white py-4 rounded-xl text-[1.2rem] font-bold shadow-lg shadow-green-900/20 hover:bg-green-800 transition-all transform active:scale-[0.98]">
            Update Password
          </button>
        </form>
      </div>
    </main>
  );
}