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
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/directory" className="hover:underline">Member Directory</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/career" className="hover:underline">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: Secondary Links (footer__links) */}
          <div className="flex flex-col">
            <ul className="space-y-2 text-sm">
              <li><Link href="/network" className="hover:underline">Current Members</Link></li>
              <li><Link href="/career" className="hover:underline">Mentorship Program</Link></li>
              <li><Link href="/excos" className="hover:underline">Excos</Link></li>
              <li><Link href="/volunteer" className="hover:underline">Volunteer</Link></li>
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