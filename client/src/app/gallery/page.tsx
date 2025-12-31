'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

// Define gallery categories and their photos
const galleryData = {
  'All Photos': [
    // Events
    { src: '/gallery/events/reunion-2024.jpg', alt: 'Alumni Reunion 2024', category: 'Events' },
    { src: '/gallery/events/annual-dinner.jpg', alt: 'Annual Dinner', category: 'Events' },
    
    // School Memories
    { src: '/gallery/school-memories/old-campus.jpg', alt: 'FGC Warri Campus', category: 'School Memories' },
    { src: '/gallery/school-memories/graduation-2006.jpg', alt: 'Graduation Day 2006', category: 'School Memories' },
    
    // Achievements
    { src: '/gallery/achievements/award-ceremony.jpg', alt: 'Award Ceremony', category: 'Achievements' },
    
    // Community Service
    { src: '/gallery/community/charity-event.jpg', alt: 'Charity Event', category: 'Community Service' },
    
    // Social Gatherings
    { src: '/gallery/social/meetup.jpg', alt: 'Alumni Meetup', category: 'Social Gatherings' },
  ],
  'Events': [],
  'School Memories': [],
  'Achievements': [],
  'Community Service': [],
  'Social Gatherings': [],
};

// Populate category-specific arrays
galleryData['All Photos'].forEach(photo => {
  if (galleryData[photo.category as keyof typeof galleryData]) {
    (galleryData[photo.category as keyof typeof galleryData] as typeof photo[]).push(photo);
  }
});

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = Object.keys(galleryData);
  const currentPhotos = galleryData[activeCategory as keyof typeof galleryData];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-green-100">
            Memories and moments from FGCW Class of 2006
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-[#006837] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All Photos' 
                    ? galleryData['All Photos'].length 
                    : (galleryData[category as keyof typeof galleryData] as any[]).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer group relative"
                onClick={() => setLightboxImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback for missing images
                    (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                No Photos Yet
              </h2>
              <p className="text-gray-600">
                Photos in the "{activeCategory}" category will appear here.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
