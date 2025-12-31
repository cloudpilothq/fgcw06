import { getBlogPosts } from '@/lib/mockData';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export default async function NewsPage() {
  let posts: any[] = [];

  try {
    const data = await getBlogPosts();
    posts = data?.nodes || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

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
            News & Updates
          </h1>
          <p className="text-xl text-green-100">
            Stay informed with the latest news, announcements, and stories from FGCW 06' Alumni
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Featured Image */}
                {post.featuredImage?.node?.sourceUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.featuredImage.node.sourceUrl} 
                      alt={post.featuredImage.node.altText || post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    {post.author?.node?.name && (
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author.node.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <div 
                    className="text-gray-600 mb-4 line-clamp-3 flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  {/* Categories */}
                  {post.categories?.nodes?.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <Tag size={14} className="text-gray-400" />
                      {post.categories.nodes.slice(0, 3).map((category: any, index: number) => (
                        <span 
                          key={index}
                          className="text-xs bg-green-50 text-[#006837] px-2 py-1 rounded-full font-semibold"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More Link */}
                  <Link 
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#006837] font-semibold hover:underline mt-auto"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                No News Yet
              </h2>
              <p className="text-gray-600 mb-6">
                There are currently no blog posts available. Check back soon for updates!
              </p>
              <p className="text-sm text-gray-500">
                Blog posts published in WordPress will automatically appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
