import { getWordPressData, GET_GALLERY_ALBUMS } from '@/lib/queries';
import Link from 'next/link';
import { ArrowLeft, Calendar, Images } from 'lucide-react';

export default async function GalleryPage() {
  let albums: any[] = [];
  let categories: string[] = [];

  try {
    const data = await getWordPressData(GET_GALLERY_ALBUMS);
    albums = data?.posts?.nodes || [];
    
    // Extract unique categories
    const catSet = new Set<string>();
    albums.forEach(album => {
      album.categories?.nodes?.forEach((cat: any) => {
        if (cat.name !== 'Gallery') {
          catSet.add(cat.name);
        }
      });
    });
    categories = Array.from(catSet);
  } catch (error) {
    console.error('Error fetching gallery albums:', error);
  }

  // Count photos in each album (from content - count img tags)
  const getPhotoCount = (content: string) => {
    const imgMatches = content.match(/<img/g);
    return imgMatches ? imgMatches.length : 0;
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
            Albums and memories from FGCW Class of 2006
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {albums.length > 0 ? (
          <>
            {/* Categories Filter (if needed) */}
            {categories.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-gray-600">Categories:</span>
                  {categories.map((cat, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-green-50 text-[#006837] px-3 py-1 rounded-full font-semibold"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Albums Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album) => {
                const photoCount = getPhotoCount(album.content);
                const albumCategories = album.categories?.nodes?.filter((cat: any) => cat.name !== 'Gallery') || [];
                
                return (
                  <Link
                    key={album.id}
                    href={`/gallery/${album.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                      {/* Featured Image */}
                      {album.featuredImage?.node?.sourceUrl && (
                        <div className="aspect-video overflow-hidden bg-gray-100 relative">
                          <img
                            src={album.featuredImage.node.sourceUrl}
                            alt={album.featuredImage.node.altText || album.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Photo Count Badge */}
                          {photoCount > 0 && (
                            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Images size={14} />
                              {photoCount}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Album Info */}
                      <div className="p-6">
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[#006837] transition-colors">
                          {album.title}
                        </h2>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar size={14} />
                          <span>{new Date(album.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>

                        {/* Excerpt */}
                        {album.excerpt && (
                          <div
                            className="text-gray-600 text-sm line-clamp-2 mb-4"
                            dangerouslySetInnerHTML={{ __html: album.excerpt }}
                          />
                        )}

                        {/* Categories */}
                        {albumCategories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {albumCategories.map((cat: any, index: number) => (
                              <span
                                key={index}
                                className="text-xs bg-green-50 text-[#006837] px-2 py-1 rounded-full font-semibold"
                              >
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* View Album Link */}
                        <div className="text-[#006837] font-semibold text-sm group-hover:underline">
                          View Album →
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-2xl mx-auto">
              <Images size={48} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                No Albums Yet
              </h2>
              <p className="text-gray-600 mb-6">
                Gallery albums will appear here once they're published in WordPress.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-700 font-semibold mb-2">To add albums:</p>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Create a new post in WordPress</li>
                  <li>Add it to the "Gallery" category</li>
                  <li>Add additional category (Events, Social, etc.)</li>
                  <li>Upload multiple images in the post content</li>
                  <li>Set a featured image</li>
                  <li>Publish!</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
