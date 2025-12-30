"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white relative z-50">
      {/* Top Utility Bar - Hidden on very small screens if needed, or just kept small */}
      <div className="bg-[#006837] text-white py-2 text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6 font-medium">
          <Link href="/about" className="hover:underline opacity-90 hover:opacity-100">About Us</Link>
          <Link href="/contact" className="hover:underline opacity-90 hover:opacity-100">Contact Us</Link>
          <Link href="/directory" className="hover:underline opacity-90 hover:opacity-100">Directory</Link>
          <Link href="/login" className="hover:underline font-bold opacity-90 hover:opacity-100">Member Login</Link>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-serif font-bold text-gray-900 leading-none group-hover:text-[#006837] transition-colors">FGCW 06'</span>
          <span className="text-[0.6rem] md:text-sm font-bold text-[#006837] tracking-[.25em] uppercase">Pro Unitate</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-700">
          <Link href="/network" className="hover:text-[#006837] hover:underline decoration-2 underline-offset-4 transition-all">Network</Link>
          <Link href="/events" className="hover:text-[#006837] hover:underline decoration-2 underline-offset-4 transition-all">Events</Link>
          <Link href="/volunteer" className="hover:text-[#006837] hover:underline decoration-2 underline-offset-4 transition-all">Volunteer</Link>
          <Link href="/career" className="hover:text-[#006837] hover:underline decoration-2 underline-offset-4 transition-all">Career</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-700 hover:text-[#006837] p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
           {/* Mobile Utility Links (Visible because top bar is hidden on mobile) */}
          <div className="flex flex-col gap-3 pb-4 border-b border-gray-100 text-sm md:hidden">
             <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-600">About Us</Link>
             <Link href="/login" onClick={() => setIsOpen(false)} className="font-bold text-[#006837]">Member Login</Link>
             <Link href="/directory" onClick={() => setIsOpen(false)} className="text-gray-600">Directory</Link>
             <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-600">Contact Us</Link>
          </div>

          {/* Main Mobile Links */}
          <nav className="flex flex-col gap-4 text-base font-bold uppercase tracking-widest text-gray-800">
            <Link href="/network" onClick={() => setIsOpen(false)} className="hover:text-[#006837] py-2">Network</Link>
            <Link href="/events" onClick={() => setIsOpen(false)} className="hover:text-[#006837] py-2">Events</Link>
            <Link href="/volunteer" onClick={() => setIsOpen(false)} className="hover:text-[#006837] py-2">Volunteer</Link>
            <Link href="/career" onClick={() => setIsOpen(false)} className="hover:text-[#006837] py-2">Career</Link>
          </nav>
        </div>
      )}
    </header>
  );
}