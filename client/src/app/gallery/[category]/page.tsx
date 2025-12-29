"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { galleryItems, categories } from '@/data/galleryData';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  // Find the category name based on slug
  const currentCategory = categories.find(c => c.slug === categorySlug);
  const categoryName = currentCategory ? currentCategory.name : "Unknown Category";

  // Filter items
  const filteredItems = galleryItems.filter(item => {
    if (categorySlug === 'all') return true;
    // Simple matching: item.category name vs slug logic
    // In a real app, you'd probably have slugs in the item data too.
    // For now, we'll match loosely or add slugs to items.
    // Let's match by finding the category object that matches the item's category name
    const itemCatSlug = categories.find(c => c.name === item.category)?.slug;
    return itemCatSlug === categorySlug;
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#006837] font-bold uppercase tracking-widest text-xs transition-colors">
            <ArrowLeft size={16} /> Back to All Galleries
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6 border border-green-100/50">
            <ImageIcon size={14} className="text-[#006837]" />
            <span className="text-[#006837] text-[0.8rem] font-black uppercase tracking-widest">
              {categoryName} Gallery
            </span>
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {categoryName} Moments<span className="text-[#006837]">.</span>
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest text-[#006837] shadow-sm">
                  {item.date}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#006837] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">No photos found in this category yet.</p>
            <Link href="/gallery" className="inline-block mt-4 text-[#006837] font-bold hover:underline">
              Browse other categories
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
