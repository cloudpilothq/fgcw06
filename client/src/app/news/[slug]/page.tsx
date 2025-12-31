import { getWordPressData } from '@/lib/queries';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getBlogPost(slug: string) {
  const query = `
    query GetSinglePost {
      posts(first: 100) {
        nodes {
          id
          title
          content
          excerpt
          date
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

  try {
    const data = await getWordPressData(query);
    const posts = data?.posts?.nodes || [];
    const post = posts.find((p: any) => p.slug === slug);
    return { post, allSlugs: posts.map((p: any) => p.slug) };
  } catch (error) {
    console.error('Error:', error);
    return { post: null, allSlugs: [] };
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { post, allSlugs } = await getBlogPost(params.slug);

  // If no post found, show error
  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-2">Looking for: <code className="bg-gray-200 px-2 py-1 rounded">{params.slug}</code></p>
          {allSlugs.length > 0 && (
            <details className="mt-4 text-left bg-gray-100 p-4 rounded">
              <summary className="cursor-pointer font-semibold">Available posts ({allSlugs.length})</summary>
              <ul className="mt-2 text-sm space-y-1">
                {allSlugs.map((slug, i) => (
                  <li key={i}>
                    <Link href={`/news/${slug}`} className="text-blue-600 hover:underline">
                      {slug}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          )}
          <Link href="/news" className="inline-block mt-6 text-[#006837] font-semibold hover:underline">
            ← Back to News
          </Link>
        </div>
      </main>
    );
  }

  // Post found - display it
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm mb-6 hover:underline">
            <ArrowLeft size={16} /> Back to News
          </Link>

          {/* Categories */}
          {post.categories?.nodes?.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.categories.nodes.map((cat: any, i: number) => (
                <span key={i} className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            {post.author?.node?.name && (
              <div className="flex items-center gap-2">
                <User size={16} />
                By {post.author.node.name}
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
          className="prose prose-lg max-w-none
                     prose-headings:font-serif prose-headings:font-bold
                     prose-p:text-gray-700 prose-p:leading-relaxed
                     prose-a:text-[#006837] prose-a:font-semibold
                     prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Footer */}
      <div className="bg-white border-t py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Don't miss the latest news from FGCW 06' Alumni
          </p>
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-3 bg-[#006837] text-white font-bold uppercase text-sm hover:bg-green-800 transition rounded-xl"
          >
            View All News
          </Link>
        </div>
      </div>
    </main>
  );
}
