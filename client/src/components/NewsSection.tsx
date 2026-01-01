
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { getBlogPosts } from '@/lib/mockData';

export default async function NewsSection() {
  const data = await getBlogPosts();
  // Take the first 3 posts
  const posts = data?.nodes?.slice(0, 3) || [];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay informed with the latest announcements, stories, and milestones from our community.
            </p>
          </div>
          
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
          >
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article 
                key={post.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-gray-100 relative">
                    {post.featuredImage?.node?.sourceUrl ? (
                         <img 
                           src={post.featuredImage.node.sourceUrl} 
                           alt={post.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                             No Image
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#006837] mb-4">
                      {post.categories?.nodes[0]?.name || 'News'}
                   </div>

                   <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#006837] transition-colors line-clamp-2">
                     <Link href={`/news/${post.slug}`}>
                       {post.title}
                     </Link>
                   </h3>
                   
                   <div 
                      className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                   />

                   <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                         <Calendar size={14} />
                         {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <Link href={`/news/${post.slug}`} className="flex items-center gap-1 hover:text-[#006837] transition-colors">
                         Read More <ArrowRight size={12} />
                      </Link>
                   </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
           <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-500">No news updates available at the moment.</p>
           </div>
        )}
      </div>
    </section>
  );
}
