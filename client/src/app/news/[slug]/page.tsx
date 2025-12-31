import { getWordPressData, GET_BLOG_POSTS } from '@/lib/queries';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

// Enable dynamic rendering for this page
export const dynamic = 'force-dynamic';

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const data = await getWordPressData(GET_BLOG_POSTS);
    const posts = data?.posts?.nodes || [];
    
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: any = null;
  let errorMessage = '';

  try {
    // Try method 1: Query by slug
    let query = `
      query GetPostBySlug {
        postBy(slug: "${params.slug}") {
          id
          title
          content
          date
          excerpt
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    `;
    let data = await getWordPressData(query);
    post = data?.postBy;

    // If not found, try method 2: Query by URI
    if (!post) {
      query = `
        query GetPostByUri {
          postBy(uri: "${params.slug}") {
            id
            title
            content
            date
            excerpt
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      `;
      data = await getWordPressData(query);
      post = data?.postBy;
    }

    // If still not found, try method 3: Get all posts and filter
    if (!post) {
      query = `
        query GetAllPosts {
          posts(first: 100) {
            nodes {
              id
              title
              content
              date
              excerpt
              slug
              author {
                node {
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      `;
      data = await getWordPressData(query);
      const allPosts = data?.posts?.nodes || [];
      console.log('All posts found:', allPosts.length);
      console.log('Looking for slug:', params.slug);
      console.log('Available slugs:', allPosts.map((p: any) => p.slug));
      
      post = allPosts.find((p: any) => p.slug === params.slug);
      console.log('Post found:', post ? 'YES' : 'NO');
      
      if (!post && allPosts.length > 0) {
        errorMessage = `Available slugs: ${allPosts.map((p: any) => p.slug).join(', ')}`;
      }
    }
    
    console.log('Final post object:', post ? 'EXISTS' : 'NULL');
  } catch (error) {
    console.error('Error fetching blog post:', error);
    errorMessage = `Error: ${error}`;
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500 mb-8">Slug: {params.slug}</p>
          {errorMessage && (
            <div className="bg-gray-100 p-4 rounded-lg mb-8 text-left">
              <p className="text-xs font-mono text-gray-700">{errorMessage}</p>
            </div>
          )}
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
