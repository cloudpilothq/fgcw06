import { getWordPressData, GET_LEGAL_PAGE } from '@/lib/queries';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function PrivacyPage() {
  let pageData = null;
  let debugInfo = '';

  try {
    // Try method 1: Query by slug name
    let query = `
      query GetPrivacyPage {
        pages(where: {name: "privacy"}) {
          nodes {
            title
            content
            date
            slug
          }
        }
      }
    `;
    let data = await getWordPressData(query);
    pageData = data?.pages?.nodes?.[0];
    
    // If not found, try method 2: Query by URI
    if (!pageData) {
      query = `
        query GetPrivacyPageByUri {
          pageBy(uri: "/privacy") {
            title
            content
            date
            slug
          }
        }
      `;
      data = await getWordPressData(query);
      pageData = data?.pageBy;
    }
    
    // If still not found, try method 3: Get all pages and filter
    if (!pageData) {
      query = `
        query GetAllPages {
          pages(first: 100) {
            nodes {
              title
              content
              date
              slug
            }
          }
        }
      `;
      data = await getWordPressData(query);
      const allPages = data?.pages?.nodes || [];
      pageData = allPages.find((page: any) => 
        page.slug === 'privacy' || 
        page.slug === 'privacy-policy' ||
        page.title?.toLowerCase().includes('privacy')
      );
      
      debugInfo = `Found ${allPages.length} pages. Slugs: ${allPages.map((p: any) => p.slug).join(', ')}`;
    }
    
  } catch (error) {
    console.error('Error fetching privacy page:', error);
    debugInfo = `Error: ${error}`;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
            {pageData?.title || 'Privacy Policy'}
          </h1>
          {pageData?.date && (
            <p className="text-green-100 mt-4">
              Last updated: {new Date(pageData.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {pageData?.content ? (
          <div 
            className="prose prose-lg lg:prose-xl max-w-none 
                       prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base lg:prose-p:text-lg
                       prose-a:text-[#006837] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-gray-900 prose-strong:font-bold
                       prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700
                       prose-ol:my-6 prose-ol:space-y-2
                       first:prose-p:text-xl first:prose-p:text-gray-600 first:prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              Privacy policy content is not available at the moment.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Please ensure the privacy page is published in WordPress.
            </p>
            {debugInfo && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left max-w-2xl mx-auto">
                <p className="text-xs font-mono text-gray-700">{debugInfo}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Questions about our privacy practices?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or concerns, please don't hesitate to reach out.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
