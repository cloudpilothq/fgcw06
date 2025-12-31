import React from 'react';
import { Briefcase, Calendar, ExternalLink, Building2 } from 'lucide-react';
import Link from 'next/link';
import { getJobs } from '@/lib/mockData';

export default async function JobsPage() {
  let jobs: any[] = [];

  try {
    const data = await getJobs();
    if (data?.nodes) {
      jobs = data.nodes;
    }
  } catch (e) {
    console.error("Jobs Fetch Error:", e);
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif font-bold mb-4">Job Board</h1>
            <p className="text-xl text-green-50 font-light">
              Exclusive career opportunities shared by FGCW 06 alumni. 
              Find your next role or help a classmate find theirs.
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Listing */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase className="mx-auto text-gray-300 mb-4" size={64} />
            <p className="text-xl text-gray-500">No job postings yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job) => (
              <article 
                key={job.id} 
                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-[#006837] transition-colors">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        <span className="font-bold">{job.jobDetails?.company || 'Confidential'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Posted {job.date ? new Date(job.date).toLocaleDateString() : 'Recently'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {job.jobDetails?.applicationLink && (
                    <a 
                      href={job.jobDetails.applicationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#006837] text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-green-800 transition-colors"
                    >
                      Apply Now
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {job.jobDetails?.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Posted on FGCW 06 Network
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Have a Job Opportunity?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Help your fellow classmates advance their careers by sharing open positions 
            at your organization or network.
          </p>
          <Link 
            href="/jobs/post" 
            className="inline-block bg-[#006837] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-colors"
          >
            Post a Job
          </Link>
        </div>
      </section>
    </main>
  );
}
