import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// Enable dynamic rendering
export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  try {
    // Use WordPress REST API instead of GraphQL
    const wpGraphQLUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';
    const wpUrl = wpGraphQLUrl.replace('/graphql', '');
    const restUrl = `${wpUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`;
    
    console.log('WordPress GraphQL URL:', wpGraphQLUrl);
    console.log('WordPress Base URL:', wpUrl);
    console.log('REST API URL:', restUrl);
    console.log('Looking for slug:', slug);
    
    const res = await fetch(restUrl, { 
      next: { revalidate: 60 },
      cache: 'no-store' 
    });
    
    console.log('Response status:', res.status);
    console.log('Response OK:', res.ok);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('REST API error:', res.status, errorText);
      return null;
    }
    
    const posts = await res.json();
    console.log('Posts received:', posts.length);
    
    if (!posts || posts.length === 0) {
      console.error('No post found for slug:', slug);
      return null;
    }
    
    const post = posts[0];
    console.log('Post found:', post.title?.rendered);
    
    // Transform REST API response to match our expected format
    return {
      id: post.id,
      title: post.title?.rendered || '',
      content: post.content?.rendered || '',
      excerpt: post.excerpt?.rendered || '',
      date: post.date,
      slug: post.slug,
      author: {
        node: {
          name: post._embedded?.author?.[0]?.name || 'Unknown'
        }
      },
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0] ? {
        node: {
          sourceUrl: post._embedded['wp:featuredmedia'][0].source_url,
          altText: post._embedded['wp:featuredmedia'][0].alt_text || ''
        }
      } : null,
      categories: {
        nodes: post._embedded?.['wp:term']?.[0]?.map((cat: any) => ({
          name: cat.name
        })) || []
      }
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500 mb-8">Slug: {params.slug}</p>
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 text-[#006837] font-semibold hover:underline"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>
          
          {/* Categories */}
          {post.categories?.nodes?.length > 0 && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {post.categories.nodes.map((category: any, index: number) => (
                <span 
                  key={index}
                  className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            {post.author?.node?.name && (
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>By {post.author.node.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={post.featuredImage.node.sourceUrl} 
              alt={post.featuredImage.node.altText || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
          className="prose prose-lg lg:prose-xl max-w-none 
                     prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base lg:prose-p:text-lg
                     prose-a:text-[#006837] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-gray-900 prose-strong:font-bold
                     prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700
                     prose-ol:my-6 prose-ol:space-y-2
                     prose-img:rounded-xl prose-img:shadow-lg
                     prose-blockquote:border-l-4 prose-blockquote:border-[#006837] prose-blockquote:pl-6 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on the latest news and updates from FGCW 06' Alumni
          </p>
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
          >
            View All News
          </Link>
        </div>
      </div>
    </main>
  );
}
