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
            Welcome to the official FGCW Class of 2006 Alumni Portal ("the Set"). We are committed to protecting the privacy of our "Legends." This policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>

          <h2>Information We Collect</h2>
          <p>
            To provide a premium networking experience, we collect the following data:
          </p>

          <h3>Identity Data</h3>
          <p>
            Full name, House color (Red, Blue, Green, Yellow), and graduation details.
          </p>

          <h3>Contact Data</h3>
          <p>
            Email address and phone number provided during registration.
          </p>

          <h3>Professional Data</h3>
          <p>
            Job titles, company names, and LinkedIn profiles for the Network Directory.
          </p>

          <h3>Technical Data</h3>
          <p>
            IP addresses and usage patterns collected via our Headless CMS architecture.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Your data is used solely for the progress of the Set:
          </p>
          <ul>
            <li><strong>Verification:</strong> To ensure only verified alumni gain access to the secure portal.</li>
            <li><strong>Networking:</strong> To populate the Alumni Directory and facilitate professional connections.</li>
            <li><strong>Volunteering:</strong> To coordinate committee assignments for the 20th Anniversary Reunion.</li>
            <li><strong>Communications:</strong> To send official Set updates, dues reminders, and event invitations.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement "High-Level" security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            We use the following third-party services:
          </p>
          <ul>
            <li><strong>WordPress:</strong> For content management</li>
            <li><strong>Vercel:</strong> For hosting and deployment</li>
            <li><strong>NextAuth.js:</strong> For secure authentication</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <Link href="/contact">our contact page</Link>.
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
