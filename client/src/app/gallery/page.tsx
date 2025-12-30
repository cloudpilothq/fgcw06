import React from 'react';
import Link from 'next/link';
import { Image as ImageIcon } from 'lucide-react';
import { getGalleryImages } from '@/lib/queries';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Reunions', slug: 'reunions' },
  { name: 'Throwback', slug: 'throwback' },
  { name: 'Projects', slug: 'projects' },
];

export default async function GalleryPage() {
  let galleryItems: any[] = [];
  
  try {
    galleryItems = await getGalleryImages();
  } catch (e) {
    console.error("WP Gallery Fetch Error:", e);
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6 border border-green-100/50">
            <ImageIcon size={14} className="text-[#006837]" />
            <span className="text-[#006837] text-[0.8rem] font-black uppercase tracking-widest">Photo Gallery</span>
          </span>
          <h1 className="text-5xl md:text-[3.5rem] font-serif font-bold text-gray-900 mb-6">
            Our Memories in Focus<span className="text-[#006837]">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our events, reunions, and community impact. 
            Celebrating the bond that keeps the Class of 2006 together.
          </p>
        </div>

        {/* Category Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === 'all' ? '/gallery' : `/gallery/${cat.slug}`}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                cat.slug === 'all'
                  ? "bg-[#006837] text-white shadow-lg shadow-green-900/20"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Gallery Grid (Showing All) */}
        {galleryItems.length === 0 ? (
            <p className="text-center text-gray-500">No images found in gallery.</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.sourceUrl}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                
                <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#006837] transition-colors">
                    {item.title || item.altText || "Untitled"}
                    </h3>
                </div>
                </div>
            ))}
            </div>
        )}

      </div>
    </main>
  );
}
