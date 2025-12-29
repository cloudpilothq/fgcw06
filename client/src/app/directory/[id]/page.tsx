"use client";
import React from 'react';
import { Mail, Linkedin, MapPin, Briefcase, GraduationCap, ArrowLeft, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function MemberProfile() {
  // Mock data scaled for the new design
  const member = {
    name: "Chuka Obi",
    house: "Red",
    profession: "Software Architect",
    location: "Lagos, Nigeria",
    year: "2006",
    bio: "Passionate about building scalable systems and mentoring the next generation of FGCW tech talent. Pro Unitate always.",
    company: "TechNexus Africa"
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f9f4] via-white to-[#e6f4ed] pb-20">
      {/* 5rem Top Padding & 25px Side Padding */}
      <div className="pt-[5rem] px-[25px] max-w-6xl mx-auto">
        
        <div className="mb-8">
          <Link href="/directory" className="inline-flex items-center gap-2 text-[#006837] font-bold text-[1.2rem] hover:underline">
            <ArrowLeft size={14} /> Back to Directory
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Profile Sidebar Card */}
          <div className="lg:col-span-4">
            <div className="bg-white/80 backdrop-blur-md border border-white rounded-[24px] p-8 shadow-xl shadow-green-900/5 text-center">
              <div className="w-32 h-32 bg-gradient-to-tr from-[#006837] to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-[4rem] font-serif font-bold shadow-inner">
                {member.name[0]}
              </div>
              
              <h1 className="text-[2.2rem] font-bold text-gray-900 mb-1">{member.name}</h1>
              <p className="text-[#006837] font-black uppercase tracking-widest text-[0.9rem] mb-6">
                {member.house} House Legend
              </p>

              <div className="space-y-3 text-left border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 text-[1.3rem] text-gray-600">
                  <Briefcase size={16} className="text-gray-400" />
                  <span>{member.profession}</span>
                </div>
                <div className="flex items-center gap-3 text-[1.3rem] text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[1.3rem] text-gray-600">
                  <GraduationCap size={16} className="text-gray-400" />
                  <span>Class of {member.year}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full bg-[#006837] text-white py-4 rounded-xl text-[1.2rem] font-bold hover:bg-green-800 transition-all flex items-center justify-center gap-2">
                  <Mail size={16} /> Send Message
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl text-[1.1rem] font-bold hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Linkedin size={14} /> LinkedIn
                  </button>
                  <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl text-[1.1rem] font-bold hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Youtube size={14} /> Features
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-white rounded-[24px] p-8 shadow-sm">
              <h2 className="text-[1.1rem] font-black uppercase tracking-[.2em] text-[#006837] mb-4">Biography</h2>
              <p className="text-[1.4rem] text-gray-700 leading-relaxed font-light italic">
                "{member.bio}"
              </p>
            </div>

            {/* Professional Stats Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-white rounded-[24px] p-8 shadow-sm">
              <h2 className="text-[1.1rem] font-black uppercase tracking-[.2em] text-[#006837] mb-6">Professional Career</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                  <p className="text-[0.9rem] font-bold text-gray-400 uppercase mb-1">Current Organization</p>
                  <p className="text-[1.5rem] font-bold text-gray-900">{member.company}</p>
                </div>
                <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                  <p className="text-[0.9rem] font-bold text-gray-400 uppercase mb-1">Industry Expertise</p>
                  <p className="text-[1.5rem] font-bold text-gray-900">Information Technology</p>
                </div>
              </div>
            </div>

            {/* FGCW Spirit Card */}
            <div className="bg-gradient-to-r from-[#006837] to-[#004d29] rounded-[24px] p-8 text-white flex items-center justify-between">
              <div>
                <h3 className="text-[1.8rem] font-serif font-bold italic">"Pro Unitate"</h3>
                <p className="text-green-100 text-[1.2rem] opacity-80">Class of 2006 Verified Member</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <GraduationCap size={24} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}