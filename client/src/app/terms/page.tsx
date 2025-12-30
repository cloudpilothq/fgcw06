import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-green-100 mt-4">
            Last updated: December 30, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg lg:prose-xl max-w-none 
                       prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base lg:prose-p:text-lg
                       prose-a:text-[#006837] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-gray-900 prose-strong:font-bold
                       prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700
                       prose-ol:my-6 prose-ol:space-y-2
                       first:prose-p:text-xl first:prose-p:text-gray-600 first:prose-p:leading-relaxed">
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to the FGCW Class of 2006 Alumni Portal. By accessing and using this platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By creating an account and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
          </p>

          <h2>Eligibility</h2>
          <p>
            This platform is exclusively for verified alumni of the Federal Government College Warri Class of 2006. You must:
          </p>
          <ul>
            <li>Be a graduate of FGCW Class of 2006</li>
            <li>Provide accurate and truthful information during registration</li>
            <li>Be at least 18 years of age</li>
            <li>Maintain the confidentiality of your account credentials</li>
          </ul>

          <h2>User Accounts</h2>
          <p>
            When you create an account, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>
            You agree to use the platform only for lawful purposes and in accordance with these Terms. You agree NOT to:
          </p>
          <ul>
            <li>Use the platform in any way that violates applicable laws or regulations</li>
            <li>Impersonate or attempt to impersonate another alumni member</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use of the platform</li>
            <li>Use any automated system to access the platform without permission</li>
            <li>Share confidential alumni information with non-members</li>
            <li>Post offensive, defamatory, or inappropriate content</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The platform and its original content, features, and functionality are owned by FGCW Class of 2006 Alumni Association and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>User-Generated Content</h2>
          <p>
            By posting content on the platform (including profile information, comments, and photos), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for the purpose of operating and promoting the alumni network.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, FGCW Class of 2006 Alumni Association shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the platform. Your continued use of the platform after such modifications constitutes acceptance of the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at{' '}
            <Link href="/contact">our contact page</Link>.
          </p>
        </div>
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
