import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#006837] text-white pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Info (footer__info) */}
          <div className="text-sm leading-relaxed">
            <p className="font-serif font-bold text-lg mb-2">FGC Warri Alumni</p>
            <p>
              Effurun-Sapele Road, Warri<br />
              Delta State, Nigeria<br />
              <a href="tel:+2348000000000" className="hover:underline">+234 06 ALUMNI</a><br />
              <a href="mailto:info@fgcw06.com" className="hover:underline">info@fgcw06.com</a>
            </p>
          </div>

          {/* Column 2: Links (footer__links) */}
          <div className="flex flex-col">
            <h2 className="sr-only">Footer menu</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/location" className="hover:underline">Directions & Parking</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact FGCW 06</Link></li>
              <li><Link href="/directory" className="hover:underline">Faculty Directory</Link></li>
              <li><Link href="/media" className="hover:underline">Media Inquiries</Link></li>
              <li>
                <a href="https://system.umn.edu/" target="_blank" rel="noopener" className="hover:underline inline-flex items-center gap-1">
                  University System 
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11L16 16.5L2.5 16.5L2.5 3.5L8 3.5 M9 9.5L17.5 1.5 M11.5 1.5L17.5 1.5L17.5 7.5"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Secondary Links (footer__links) */}
          <div className="flex flex-col">
            <ul className="space-y-2 text-sm">
              <li><Link href="/students" className="hover:underline">Current Members</Link></li>
              <li><Link href="/undergrad" className="hover:underline">Mentorship Program</Link></li>
              <li><Link href="/staff" className="hover:underline">Exco & Staff</Link></li>
              <li><Link href="/recruiters" className="hover:underline">Recruiters & Corporations</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect (footer__connect) */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest mb-4">Connect with FGCW 06</p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-green-200 transition-colors">
                <Facebook size={32} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-green-200 transition-colors">
                <Linkedin size={32} strokeWidth={1.5} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-green-200 transition-colors">
                <Instagram size={32} strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="hover:text-green-200 transition-colors">
                <Youtube size={32} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar (Mirroring the small text below the columns) */}
        <div className="pt-8 border-t border-white/20 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Regents of the Federal Government College Warri.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:underline">Privacy Statement</Link>
              <span>|</span>
              <Link href="/terms" className="hover:underline">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}