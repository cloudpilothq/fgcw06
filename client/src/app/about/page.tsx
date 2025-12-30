import Link from 'next/link';
import { ArrowLeft, Users, Target, Heart, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/school-gate.jpg')" }} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight text-white">
            About FGCW 06
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            A thriving global network of leaders, innovators, and changemakers united by our shared heritage and commitment to excellence.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Federal Government College Warri Class of 2006 represents a unique generation of 
                alumni who have gone on to make significant impacts across Nigeria and the world. 
                Our journey began in the halls of one of Nigeria's most prestigious secondary schools, 
                where we forged lifelong friendships and developed the values that guide us today.
              </p>
              <p>
                Since graduation, our alumni have distinguished themselves in diverse fields including 
                business, technology, medicine, law, education, and public service. We remain connected 
                through our shared experiences and commitment to giving back to our alma mater and 
                communities.
              </p>
              <p>
                Today, the FGCW 06 Alumni Network serves as a platform for professional networking, 
                mentorship, community service, and lifelong learning. We are proud to continue the 
                legacy of excellence that defines Federal Government College Warri.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/alumni-group.jpg" 
                alt="FGCW 06 Alumni" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#006837] opacity-20 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#006837] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To foster a vibrant, engaged alumni community that supports professional growth, 
                promotes lifelong learning, and contributes to the development of our alma mater 
                and society at large through service, mentorship, and collaboration.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#006837] rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most impactful and connected alumni network, recognized for our 
                commitment to excellence, innovation, and service. We envision a future where 
                every member of the Class of 2006 thrives professionally and contributes 
                meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do as a community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-[#006837]" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Unity</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of togetherness. Our strength lies in our diversity 
              and our ability to support one another across borders and industries.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-[#006837]" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We strive for excellence in all our endeavors, maintaining the high standards 
              that were instilled in us during our time at FGCW.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-[#006837]" size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Service</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to giving back to our alma mater, our communities, and 
              society through meaningful service and positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#006837] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Whether you're looking to reconnect with old friends, expand your professional 
            network, or give back to FGCW, there's a place for you in our alumni community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#006837] font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all shadow-lg rounded-xl"
            >
              Become a Member
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all rounded-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
