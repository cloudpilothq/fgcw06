import { getWordPressData, GET_LEGAL_PAGE } from '@/lib/queries';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function TermsPage() {
  let pageData = null;

  try {
    const data = await getWordPressData(GET_LEGAL_PAGE.replace('$slug', '"terms"'));
    pageData = data?.page;
  } catch (error) {
    console.error('Error fetching terms page:', error);
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
            {pageData?.title || 'Terms & Conditions'}
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
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#006837] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              Terms and conditions content is not available at the moment.
            </p>
            <p className="text-sm text-gray-500">
              Please ensure the terms page is published in WordPress.
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Questions about our terms?
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or need clarification, we're here to help.
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
