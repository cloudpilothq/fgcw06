"use client";
import React from 'react';
import { Briefcase, GraduationCap, Users, Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function CareerPage() {
  const resources = [
    {
      title: "Alumni Mentorship",
      desc: "Connect with FGCW 06 leaders who can provide guidance on industry trends, career transitions, and professional growth.",
      icon: <Users className="w-8 h-8 text-[#006837]" />,
      link: "/mentorship"
    },
    {
      title: "Job Board & Postings",
      desc: "Exclusive access to job opportunities shared by fellow classmates and corporate partners within our global network.",
      icon: <Briefcase className="w-8 h-8 text-[#006837]" />,
      link: "/jobs"
    },
    {
      title: "Business Directory",
      desc: "Promote your business or find services provided by FGCW 06 alumni. Support the Pro Unitate economy.",
      icon: <Newspaper className="w-8 h-8 text-[#006837]" />,
      link: "/business-directory"
    },
    {
      title: "Continuing Education",
      desc: "Access webinars, certificates, and discounted professional courses curated for our alumni set.",
      icon: <GraduationCap className="w-8 h-8 text-[#006837]" />,
      link: "/education"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-100 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">Career Resources</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            Empowering the Class of 2006 through lifelong professional development and 
            unmatched networking opportunities.
          </p>
        </div>
      </div>

      {/* Resource Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {resources.map((item, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 p-4 bg-green-50 rounded-lg group-hover:bg-[#006837] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link href={item.link} className="text-[#006837] font-bold uppercase tracking-widest text-sm border-b-2 border-[#006837] pb-1 hover:text-green-900 hover:border-green-900 transition-colors">
                  Explore Resource →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#006837] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Hire an FGCW 06 Graduate</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Does your organization have an open role? Share it with the most talented set 
            to ever graduate from Warri.
          </p>
          <Link href="/jobs/post" className="inline-block bg-white text-[#006837] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-green-50 transition-colors">
            Post a Job Opportunity
          </Link>
        </div>
      </section>
    </main>
  );
}