import Link from 'next/link';
import { ArrowLeft, Mail, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function ChairmanMessagePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Chairman's Message
          </h1>
          <p className="text-xl text-green-100">
            A message from Mr. Austin Ogbe, Chairman of FGCW Class of 2006
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Chairman Photo */}
          <div className="relative h-[500px] bg-gradient-to-br from-green-900 to-green-700">
            <img 
              src="/chairman.png" 
              alt="Chairman - Mr. Austin Ogbe" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <h2 className="text-3xl font-serif font-bold mb-2 text-white">Mr. Austin Ogbe</h2>
              <p className="text-lg">Chairman, FGCW Class of 2006</p>
              <p className="text-sm text-gray-200">National House (Nato)</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-8 md:p-12">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
              <p className="text-2xl font-serif font-bold text-gray-900 mb-6 text-left">
                Dear Alumni,
              </p>

              <p>Welcome to the official website of the Federal Government College Warri Alumni Class of 2006.</p>

              <p>On behalf of the Exco and the entire 2006 alumni community, I warmly welcome you to our digital home. This platform was created to reconnect old friends, strengthen our bonds, and provide a space where we can collectively give back to the institution that helped shape our lives.</p>

              <p>Our alumni association is built on the values of unity, service, excellence, and lifelong friendship. Through this platform, members can stay informed about our activities, upcoming events, development projects, and opportunities to contribute to the growth of our alma mater and the wellbeing of fellow alumni.</p>

              <p>Federal Government College has produced leaders, professionals, and great personalities across various fields, and we remain proud of our shared heritage. Together, we can continue to uphold the legacy of our great school while inspiring future generations.</p>

              <p>I encourage you to explore the site, reconnect with classmates, participate actively in our programs, and support our collective vision. Your involvement, no matter how small, makes a difference.</p>

              <p>Once again, welcome, and thank you for being part of this great alumni family.</p>

              <p className="text-xl font-semibold text-gray-900 mt-8 text-left">
                Together, we build. Together, we give back.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="font-semibold text-gray-900">Regards,<br/>
                Austin J. Ogbe,<br/>
                Chairman, FGC Class of 2006</p>
                
                {/* Social Media Buttons */}
                <div className="flex gap-4 mt-6">
                  <a href="mailto:jopazzy@gmail.com" className="p-2 bg-gray-100 rounded-full text-[#006837] hover:bg-[#006837] hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                  <a href="https://www.facebook.com/austin.uniquejoe" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-[#006837] hover:bg-[#006837] hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/austin-ogbe-3518b553" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-[#006837] hover:bg-[#006837] hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/joe_pazzy" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-[#006837] hover:bg-[#006837] hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.instagram.com/austin_ogbe" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full text-[#006837] hover:bg-[#006837] hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>



            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/excos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
                >
                  Meet the Executive Committee
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#006837] border-2 border-[#006837] font-bold uppercase tracking-widest text-sm hover:bg-green-50 transition-all rounded-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
