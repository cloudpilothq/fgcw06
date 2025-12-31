'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, X } from 'lucide-react';
import { getWordPressData } from '@/lib/queries';

export default function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState('');
  const [album, setAlbum] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(p => {
      setSlug(p.slug);
      fetchAlbum(p.slug);
    });
  }, [params]);

  const fetchAlbum = async (albumSlug: string) => {
    try {
      const query = `
        query GetAlbum {
          postBy(slug: "${albumSlug}") {
            id
            title
            content
            excerpt
            date
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      `;

      const data = await getWordPressData(query);
      const albumData = data?.postBy;
      
      if (albumData) {
        setAlbum(albumData);
        
        // Extract all images from content
        const parser = new DOMParser();
        const doc = parser.parseFromString(albumData.content, 'text/html');
        const imgElements = doc.querySelectorAll('img');
        const imgUrls = Array.from(imgElements).map(img => img.src);
        setImages(imgUrls);
      }
    } catch (error) {
      console.error('Error fetching album:', error);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (src: string, index: number) => {
    setLightboxImage(src);
    setLightboxIndex(index);
  };

  const nextPhoto = () => {
    const nextIndex = (lightboxIndex + 1) % images.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(images[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(images[prevIndex]);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#006837] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading album...</p>
        </div>
      </main>
    );
  }

  if (!album) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Album Not Found</h1>
          <p className="text-gray-600 mb-8">The album you're looking for doesn't exist.</p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#006837] font-semibold hover:underline"
          >
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
        </div>
      </main>
    );
  }

  const albumCategories = album.categories?.nodes?.filter((cat: any) => cat.name !== 'Gallery') || [];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Gallery
          </Link>

          {/* Categories */}
          {albumCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {albumCategories.map((cat: any, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            {album.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-green-100">
            <Calendar size={16} />
            <span>{new Date(album.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span className="mx-2">•</span>
            <span>{images.length} {images.length === 1 ? 'photo' : 'photos'}</span>
          </div>
        </div>
      </div>

      {/* Album Description */}
      {album.excerpt && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: album.excerpt }}
            />
          </div>
        </div>
      )}

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer group relative"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image}
                  alt={`Photo ${index + 1}`}
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
            <p className="text-gray-600">No photos in this album yet.</p>
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
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}
