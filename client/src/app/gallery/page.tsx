'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

// Gallery photos organized by category
const galleryPhotos = {
  events: [
    'Photo from General Uchezz(12).jpg', 'Photo from General Uchezz(13).jpg', 'Photo from General Uchezz(14).jpg',
    'Photo from General Uchezz(15).jpg', 'Photo from General Uchezz(16).jpg', 'Photo from General Uchezz(17).jpg',
    'Photo from General Uchezz(18).jpg', 'Photo from General Uchezz(19).jpg', 'Photo from General Uchezz(20).jpg',
    'Photo from General Uchezz(21).jpg', 'Photo from General Uchezz(22).jpg', 'Photo from General Uchezz(23).jpg',
    'Photo from General Uchezz(24).jpg', 'Photo from General Uchezz(25).jpg', 'Photo from General Uchezz(26).jpg',
    'Photo from General Uchezz(27).jpg', 'Photo from General Uchezz(28).jpg', 'Photo from General Uchezz(29).jpg',
    'Photo from General Uchezz(30).jpg', 'Photo from General Uchezz(31).jpg', 'Photo from General Uchezz(32).jpg',
    'Photo from General Uchezz(33).jpg', 'Photo from General Uchezz(34).jpg', 'Photo from General Uchezz(35).jpg',
    'Photo from General Uchezz(36).jpg', 'Photo from General Uchezz(37).jpg', 'Photo from General Uchezz(38).jpg',
    'Photo from General Uchezz(39).jpg', 'Photo from General Uchezz(40).jpg', 'Photo from General Uchezz(41).jpg',
    'Photo from General Uchezz(42).jpg', 'Photo from General Uchezz(43).jpg', 'Photo from General Uchezz(44).jpg',
    'Photo from General Uchezz(45).jpg', 'Photo from General Uchezz(46).jpg', 'Photo from General Uchezz(47).jpg',
  ],
  social: [
    'Photo from General Uchezz(100).jpg', 'Photo from General Uchezz(101).jpg', 'Photo from General Uchezz(102).jpg',
    'Photo from General Uchezz(103).jpg', 'Photo from General Uchezz(104).jpg', 'Photo from General Uchezz(105).jpg',
    'Photo from General Uchezz(106).jpg', 'Photo from General Uchezz(107).jpg', 'Photo from General Uchezz(108).jpg',
    'Photo from General Uchezz(109).jpg', 'Photo from General Uchezz(110).jpg', 'Photo from General Uchezz(111).jpg',
    'Photo from General Uchezz(112).jpg', 'Photo from General Uchezz(113).jpg', 'Photo from General Uchezz(114).jpg',
    'Photo from General Uchezz(115).jpg', 'Photo from General Uchezz(116).jpg', 'Photo from General Uchezz(117).jpg',
    'Photo from General Uchezz(118).jpg', 'Photo from General Uchezz(119).jpg', 'Photo from General Uchezz(120).jpg',
    'Photo from General Uchezz(121).jpg', 'Photo from General Uchezz(122).jpg', 'Photo from General Uchezz(123).jpg',
    'Photo from General Uchezz(124).jpg', 'Photo from General Uchezz(125).jpg', 'Photo from General Uchezz(126).jpg',
    'Photo from General Uchezz(127).jpg', 'Photo from General Uchezz(128).jpg', 'Photo from General Uchezz(129).jpg',
    'Photo from General Uchezz(130).jpg', 'Photo from General Uchezz(131).jpg', 'Photo from General Uchezz(132).jpg',
    'Photo from General Uchezz(133).jpg', 'Photo from General Uchezz(134).jpg', 'Photo from General Uchezz(135).jpg',
    'Photo from General Uchezz(136).jpg', 'Photo from General Uchezz(137).jpg', 'Photo from General Uchezz(138).jpg',
    'Photo from General Uchezz(139).jpg', 'Photo from General Uchezz(140).jpg', 'Photo from General Uchezz(141).jpg',
    'Photo from General Uchezz(142).jpg', 'Photo from General Uchezz(143).jpg', 'Photo from General Uchezz(144).jpg',
    'Photo from General Uchezz(145).jpg', 'Photo from General Uchezz(146).jpg', 'Photo from General Uchezz(147).jpg',
    'Photo from General Uchezz(148).jpg', 'Photo from General Uchezz(49).jpg', 'Photo from General Uchezz(50).jpg',
    'Photo from General Uchezz(51).jpg', 'Photo from General Uchezz(52).jpg', 'Photo from General Uchezz(53).jpg',
    'Photo from General Uchezz(54).jpg', 'Photo from General Uchezz(55).jpg', 'Photo from General Uchezz(56).jpg',
    'Photo from General Uchezz(57).jpg', 'Photo from General Uchezz(58).jpg', 'Photo from General Uchezz(59).jpg',
    'Photo from General Uchezz(60).jpg', 'Photo from General Uchezz(61).jpg', 'Photo from General Uchezz(62).jpg',
    'Photo from General Uchezz(63).jpg', 'Photo from General Uchezz(64).jpg', 'Photo from General Uchezz(65).jpg',
    'Photo from General Uchezz(66).jpg', 'Photo from General Uchezz(67).jpg', 'Photo from General Uchezz(68).jpg',
    'Photo from General Uchezz(69).jpg', 'Photo from General Uchezz(70).jpg', 'Photo from General Uchezz(71).jpg',
    'Photo from General Uchezz(72).jpg', 'Photo from General Uchezz(73).jpg',
  ],
  sports: [
    'Photo from General Uchezz(74).jpg', 'Photo from General Uchezz(75).jpg', 'Photo from General Uchezz(76).jpg',
    'Photo from General Uchezz(77).jpg', 'Photo from General Uchezz(78).jpg', 'Photo from General Uchezz(79).jpg',
    'Photo from General Uchezz(80).jpg', 'Photo from General Uchezz(81).jpg', 'Photo from General Uchezz(82).jpg',
    'Photo from General Uchezz(83).jpg', 'Photo from General Uchezz(84).jpg', 'Photo from General Uchezz(85).jpg',
  ],
  community: [
    'visit1.jpg', 'visit2.jpg', 'visit3.jpg', 'visit4.jpg', 'visit5.jpg',
    'visit6.jpg', 'visit7.jpg', 'visit8.jpg', 'visit9.jpg', 'visit10.jpg',
  ],
};

// Build gallery data with all photos
const buildGalleryData = () => {
  const allPhotos: any[] = [];
  
  Object.entries(galleryPhotos).forEach(([category, photos]) => {
    photos.forEach(photo => {
      allPhotos.push({
        src: `/gallery/${category}/${photo}`,
        alt: photo.replace('.jpg', '').replace(/[()]/g, ' '),
        category: category.charAt(0).toUpperCase() + category.slice(1),
      });
    });
  });
  
  return {
    'All Photos': allPhotos,
    'Events': allPhotos.filter(p => p.category === 'Events'),
    'Social': allPhotos.filter(p => p.category === 'Social'),
    'Sports': allPhotos.filter(p => p.category === 'Sports'),
    'School Memories': allPhotos.filter(p => p.category === 'School-memories'),
    'Achievements': allPhotos.filter(p => p.category === 'Achievements'),
    'Community Service': allPhotos.filter(p => p.category === 'Community'),
  };
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryData = buildGalleryData();
  const categories = Object.keys(galleryData).filter(cat => 
    (galleryData[cat as keyof typeof galleryData] as any[]).length > 0
  );
  const currentPhotos = galleryData[activeCategory as keyof typeof galleryData] as any[];

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxIndex(index);
  };

  const nextPhoto = () => {
    const nextIndex = (lightboxIndex + 1) % currentPhotos.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(currentPhotos[nextIndex].src);
  };

  const prevPhoto = () => {
    const prevIndex = (lightboxIndex - 1 + currentPhotos.length) % currentPhotos.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(currentPhotos[prevIndex].src);
  };

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
                  ({(galleryData[category as keyof typeof galleryData] as any[]).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPhotos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {currentPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer group relative"
                onClick={() => openLightbox(photo.src, index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          
          {/* Previous Button */}
          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            ‹
          </button>
          
          {/* Next Button */}
          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors text-4xl font-bold"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            ›
          </button>
          
          <img
            src={lightboxImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Photo Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {currentPhotos.length}
          </div>
        </div>
      )}
    </main>
  );
}
