"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "20th Anniversary Reunion",
      category: "Reunions",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Community Outreach 2024",
      category: "Service",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "London Chapter Dinner",
      category: "Socials",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Lagos Business Mixer",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Captured Moments
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Relive the memories and milestones of the Class of 2006. From our reunions to community service, see how we continue to bond and build together.
            </p>
          </div>
          
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 shadow-md">
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 mb-3 text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                  {item.category}
                </span>
                <h3 className="text-xl font-serif font-bold leading-tight mb-2 text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
