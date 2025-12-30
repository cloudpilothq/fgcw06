import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import { getWordPressData, GET_POSTS } from '@/lib/queries';

export default async function NewsPage() {
  let posts: any[] = [];

  try {
    const data = await getWordPressData(GET_POSTS);
    if (data?.posts?.nodes) {
      posts = data.posts.nodes;
    }
  } catch (e) {
    console.error("WP Posts Fetch Error:", e);
  }

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6 border border-green-100/50">
            <Newspaper size={14} className="text-[#006837]" />
            <span className="text-[#006837] text-[0.8rem] font-black uppercase tracking-widest">Class Notes & News</span>
          </span>
          <h1 className="text-5xl md:text-[3.5rem] font-serif font-bold text-gray-900 mb-6">
            Latest Updates<span className="text-[#006837]">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our alumni achievements, upcoming reunions, 
            and important announcements from the Class of 2006.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.length === 0 ? (
             <div className="col-span-full text-center py-20 text-gray-500">
                <p>No news articles found. Check back later for updates.</p>
             </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  {post.featuredImage?.node?.sourceUrl ? (
                    <img 
                      src={post.featuredImage.node.sourceUrl} 
                      alt={post.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-green-50 text-[#006837]/20">
                      <Newspaper size={48} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    {post.author?.node?.name && (
                       <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author.node.name}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#006837] transition-colors">
                    {post.title}
                  </h2>

                  <div 
                    className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <Link 
                    href={`/news/${post.slug || '#'}`} 
                    className="inline-flex items-center gap-2 text-[#006837] font-bold uppercase tracking-widest text-xs mt-auto group/link"
                  >
                    Read Story 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </main>
  );
}
