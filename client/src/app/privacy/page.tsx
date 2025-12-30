import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
            Privacy Policy
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
            Welcome to the official FGCW Class of 2006 Alumni Portal ("the Set"). We are committed to protecting the privacy of our "Legends." This policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To provide a premium networking experience, we collect the following data:
          </p>
          
          <div className="space-y-6">
            <div className="pl-6 border-l-4 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Identity Data</h3>
              <p className="text-gray-700">Full name, House color (Red, Blue, Green, Yellow), and graduation details.</p>
            </div>
            
            <div className="pl-6 border-l-4 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Data</h3>
              <p className="text-gray-700">Email address and phone number provided during registration.</p>
            </div>
            
            <div className="pl-6 border-l-4 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Data</h3>
              <p className="text-gray-700">Job titles, company names, and LinkedIn profiles for the Network Directory.</p>
            </div>
            
            <div className="pl-6 border-l-4 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Data</h3>
              <p className="text-gray-700">IP addresses and usage patterns collected via our Headless CMS architecture.</p>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Your data is used solely for the progress of the Set:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700"><strong className="text-gray-900">Verification:</strong> To ensure only verified alumni gain access to the secure portal.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700"><strong className="text-gray-900">Networking:</strong> To populate the Alumni Directory and facilitate professional connections.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700"><strong className="text-gray-900">Volunteering:</strong> To coordinate committee assignments for the 20th Anniversary Reunion.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#006837] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700"><strong className="text-gray-900">Communications:</strong> To send official Set updates, dues reminders, and event invitations.</span>
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm border border-green-100 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement "High-Level" security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            Your Rights
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">You have the right to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Access your personal data</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Correct inaccurate information</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Request deletion of your data</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900 font-semibold">✓ Opt-out of marketing communications</p>
            </div>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#006837]">
            Third-Party Services
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">We use the following third-party services:</p>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-3">🔧</span>
              <div>
                <p className="font-bold text-gray-900">WordPress</p>
                <p className="text-sm text-gray-600">For content management</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-3">☁️</span>
              <div>
                <p className="font-bold text-gray-900">Vercel</p>
                <p className="text-sm text-gray-600">For hosting and deployment</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-3">🔐</span>
              <div>
                <p className="font-bold text-gray-900">NextAuth.js</p>
                <p className="text-sm text-gray-600">For secure authentication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <Link href="/contact" className="text-[#006837] font-semibold hover:underline">our contact page</Link>.
          </p>
        </div>
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
