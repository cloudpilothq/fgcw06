import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import GallerySection from '@/components/GallerySection';
// import YouTubeSection from '@/components/YouTubeSection';
import { MapPin, Monitor } from 'lucide-react';
import { getWordPressData } from "@/lib/queries";

export default async function HomePage() {
  let title = "A Thriving Global Alumni Network";
  let description = "Pro Unitate";

  try {
    const data = await getWordPressData(`
      query NewQuery {
        generalSettings {
          title
          description
        }
      }
    `);
    if (data?.generalSettings) {
      if (data.generalSettings.title) title = data.generalSettings.title;
      if (data.generalSettings.description) description = data.generalSettings.description;
    }
  } catch (e) {
    console.error("WP Fetch Error:", e);
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        {/* Replace with your FGCW image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/school-gate.jpg')" }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-20 w-full grid md:grid-cols-2">
          <div className="text-white">
            <h1 className="text-5xl font-serif font-bold mb-4 leading-tight text-white">
              {title}
            </h1>
            <p className="text-xl mb-8 font-light italic">{description}</p>
            <Link href="/register" className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl">Join Our Network</Link>
          </div>
          
          {/* Quick Common Searches Card */}
          <div className="hidden md:flex flex-col bg-white p-8 self-center ml-auto w-80 shadow-2xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#006837] mb-4">Common Searches</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-600 border-t pt-4">
              <li><Link href="/events" className="hover:underline">Upcoming Events</Link></li>
              <li><Link href="/directory" className="hover:underline">Find a Classmate</Link></li>
              <li><Link href="/news" className="hover:underline">Class Notes</Link></li>
              <li><Link href="/career" className="hover:underline">Career Resources</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grid Features */}
       <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Card 1: Events */}
          <div className="flex flex-col group hover:scale-105 transition-transform duration-300">
            <div className="aspect-[4/3] relative overflow-hidden mb-6">
              <img 
                src="/events-reunion.jpg" 
                alt="Alumni at reunion" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Explore upcoming events designed for Alumni to grow their network, develop their business knowledge, 
              reconnect with former classmates, and celebrate their FGCW pride.
            </p>
            <Link href="/events" className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl">
              Find Events
            </Link>
          </div>

          {/* Card 2: Network */}
          <div className="flex flex-col group hover:scale-105 transition-transform duration-300">
            <div className="aspect-[4/3] relative overflow-hidden mb-6">
              <img 
                src="/network-group.jpg" 
                alt="Alumni networking" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Network</h2>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              The FGCW 06 Network is made up of alumni across Nigeria and worldwide. Forge new 
              connections among our community of influential business leaders and professionals.
            </p>
            <Link href="/directory" className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl">
              Find Your Network
            </Link>
          </div>

          {/* Card 3: Resources */}
          <div className="flex flex-col group hover:scale-105 transition-transform duration-300">
            <div className="aspect-[4/3] relative overflow-hidden mb-6">
              <img 
                src="/career-dev.jpg" 
                alt="Professional development" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Career Resources & Professional Development</h2>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              Access career resources, professional development opportunities, request transcripts, or 
              get in touch with us for mentorship within the Class of 2006.
            </p>
            <Link href="/career" className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl">
              Discover More
            </Link>
          </div>

        </div>
      </section>

      <WelcomeMessage />
      <NetworkingSection />
      <InvestorSection />

      <ImpactSection />
      <AlumniEvents />
      {/* <YouTubeSection /> */}
      <GallerySection />
    </main>
  );
}

function WelcomeMessage() {
  return (
    <section className="bg-gray-100 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Chairman's Photo */}
            <div className="relative h-96 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 z-10" />
              <img 
                src="/chairman-photo.jpg" 
                alt="Chairman - Mr. Austin Ogbe" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Welcome Message Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Welcome Message
              </h2>
              <p className="text-sm text-gray-600 mb-6 italic">
                From the Chairman – <span className="font-semibold">Mr. Austin Ogbe</span>
              </p>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  FGCW 06' Association incorporated in ****, represents a unique and vibrant group of individuals united by shared experiences and lasting memories. FGCW 06' Association embodies the values of unity, diversity, and excellence instilled during their formative years at FGC Warri.
                </p>
                <p>
                  Since graduating in 2006, the FGCW 06' Association alumni have maintained strong bonds through active engagement and collaboration. The group is committed to fostering a supportive community where members can connect, grow, and contribute to the collective good.
                </p>
                <p>
                  Driven by the principles of inclusion and mutual respect, FGCW Class of 2006 Association has initiated various projects, including supporting our alma-mater and giving back to society through charitable initiatives. Together, we remain a testament to the enduring legacy of FGC Warri as a hub for national unity and leadership development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestorSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-serif font-light text-gray-900 mb-6">
            Investors Circle
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Join FGCW 06’s top champions and give future business leaders a transformative education. 
            Donors who exceed an annual threshold of giving are eligible to join the Investors Circle 
            at the partner level, and recent graduates may join at an associate level: 
            all members receive exclusive benefits.
          </p>
          <Link 
            href="/donate" 
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-yellow-400 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors"
          >
            Learn More <ExternalLink size={16} />
          </Link>
        </div>

        {/* Overlapping Image Feature */}
        <div className="lg:w-1/2 relative">
          {/* The Yellow Accent Box */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-yellow-400 z-0" />
          
          {/* The Main Image */}
          <div className="relative z-10 aspect-[4/3] overflow-hidden shadow-2xl">
            <img 
              src="/alumni-donors.jpg" 
              alt="FGCW Alumni Donors" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function NetworkingSection() {
  return (
    <section className="bg-white py-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Text Content Area */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              Alumni Network
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              You are part of a thriving alumni network of business and community leaders that 
              are driven to use business as a force for good. This powerful network is available 
              to you wherever your career path leads. Connect with fellow FGCW 06 graduates to 
              learn more about the many ways you can get involved, engage in lifelong learning, 
              and give back.
            </p>
            <Link 
              href="/directory" 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-yellow-400 text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-all active:scale-95"
            >
              Learn More <ExternalLink size={16} />
            </Link>
          </div>

          {/* Image Area with Decorative Yellow Box */}
          <div className="lg:w-1/2 relative">
            {/* The Yellow Background Box (Left Aligned for this section) */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-400 z-0" />
            
            {/* The Main Photograph */}
            <div className="relative z-10 aspect-[4/3] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/alumni-networking-group.jpg" 
                alt="FGCW 06 Alumni Networking" 
                className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden animate-in fade-in duration-1000">
      {/* Background Image: Ideally a wide shot of FGC Warri or a major landmark */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[30%]"
        style={{ backgroundImage: "url('/warri-skyline.jpg')" }}
      />
      
      {/* Dark Overlay for better contrast on mobile */}
      <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

      <div className="max-w-7xl mx-auto px-4 h-full relative flex items-end md:items-center">
        {/* The Carlson Yellow Box */}
        <div className="bg-yellow-400 p-8 md:p-16 max-w-2xl shadow-2xl translate-y-8 md:translate-y-0 md:-ml-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Give To Make a Difference
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            To drive change, our set needs bold, principled, and fresh thinkers. 
            A core part of our mission at FGCW 06 is to mold the next generation 
            of leaders by giving back to the school that shaped us.
          </p>
          <Link 
            href="/vision" 
            className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm group"
          >
            <span className="border-b-2 border-gray-900 pb-1 group-hover:border-transparent transition-all">
              Our Vision
            </span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AlumniEvents() {
  const events = [
    {
      month: "Jan",
      day: "14",
      title: "Alumni Reception in Lagos",
      location: "In-Person",
      desc: "Join fellow FGCW 06 alumni for an evening of networking and updates on our current legacy projects.",
      img: null // Set to a URL string when image is available
    },
    {
      month: "Feb",
      day: "10",
      title: "Professional Spotlight: Tech & Finance",
      location: "Virtual",
      desc: "Our February speakers share insights on the shifting economic landscape and opportunities for the Class of 2006.",
      img: null
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 bg-white animate-in fade-in duration-700">
      <h2 className="text-4xl font-serif text-gray-900 text-center mb-16">Upcoming Alumni Events</h2>
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row border border-gray-200 shadow-sm hover:shadow-md transition-all group overflow-hidden">
            
            {/* Left: Date Indicator */}
            <div className="md:w-32 bg-gray-50 flex flex-col items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-200 text-[#006837]">
              <span className="text-sm font-bold uppercase tracking-widest">{event.month}</span>
              <span className="text-5xl font-serif font-bold leading-none">{event.day}</span>
            </div>

            {/* Middle: Content Section */}
            <div className="flex-grow p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-[#006837] mb-3">
                {event.location === 'Virtual' ? <Monitor size={14} /> : <MapPin size={14} />}
                {event.location}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:underline cursor-pointer">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xl">
                {event.desc}
              </p>
              
              {/* GREEN READ MORE BUTTON */}
              <div>
                <Link 
                  href="/events" 
                  className="inline-block bg-[#006837] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-green-800 transition-colors shadow-sm rounded-xl"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="w-full md:w-64 h-48 md:h-auto bg-gray-100 relative overflow-hidden shrink-0">
              {event.img ? (
                <img src={event.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={event.title} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                  {/* Decorative Icon for empty state */}
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center mb-2">
                     <ArrowRight size={20} className="rotate-[-45deg]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">FGCW 06 Media</span>
                </div>
              )}
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-[#006837]/5 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}