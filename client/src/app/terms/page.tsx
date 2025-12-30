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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome to the FGCW Class of 2006 Alumni Portal. By accessing and using this platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm border border-green-100 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By creating an account and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
          </p>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            Eligibility
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This platform is exclusively for verified alumni of the Federal Government College Warri Class of 2006. You must:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Be a graduate of FGCW Class of 2006</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Provide accurate and truthful information during registration</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Be at least 18 years of age</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Maintain the confidentiality of your account credentials</span>
            </li>
          </ul>
        </div>

        {/* User Accounts */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            User Accounts
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">When you create an account, you agree to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Provide accurate information</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Update your account promptly</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Keep password secure</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Report unauthorized use</p>
            </div>
          </div>
        </div>

        {/* Acceptable Use */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            Acceptable Use
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You agree to use the platform only for lawful purposes. You agree <strong>NOT</strong> to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Violate applicable laws or regulations</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Impersonate another alumni member</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Restrict or inhibit anyone's use of the platform</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Use automated systems without permission</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Share confidential alumni information with non-members</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 flex-shrink-0">✗</span>
              <span className="text-gray-700">Post offensive or inappropriate content</span>
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm border border-green-100 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The platform and its original content, features, and functionality are owned by FGCW Class of 2006 Alumni Association and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </div>

        {/* User-Generated Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            User-Generated Content
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By posting content on the platform (including profile information, comments, and photos), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for the purpose of operating and promoting the alumni network.
          </p>
        </div>

        {/* Important Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Termination</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We reserve the right to terminate or suspend your account immediately, without prior notice, for any breach of these Terms.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Changes to Terms</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use after modifications constitutes acceptance.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              These Terms shall be governed by the laws of the Federal Republic of Nigeria.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at{' '}
            <Link href="/contact" className="text-[#006837] font-semibold hover:underline">our contact page</Link>.
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
