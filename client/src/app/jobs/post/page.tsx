"use client";
import React, { useState } from 'react';
import { useFormState } from 'react-dom';
// import { createJob } from '@/actions/job';
import { JobState } from '@/lib/definitions';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

async function createJob(prevState: JobState, formData: FormData): Promise<JobState> {
  return { message: "Database removed. Feature unavailable.", errors: {} };
}

export default function PostJobPage() {
  const initialState: JobState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createJob, initialState);

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/jobs" className="inline-flex items-center gap-2 text-[#006837] font-bold mb-4 hover:underline">
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Post a Job</h1>
          <p className="text-gray-500">Share career opportunities with the FGCW 06 network.</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <form action={dispatch} className="bg-white border border-gray-200 p-8 space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
              Job Title *
            </label>
            <input
              name="title"
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="e.g., Senior Software Engineer"
            />
            {state.errors?.title && (
              <p className="text-red-500 text-xs mt-1">{state.errors.title}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
              Company Name *
            </label>
            <input
              name="company"
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="e.g., Tech Solutions Ltd"
            />
            {state.errors?.company && (
              <p className="text-red-500 text-xs mt-1">{state.errors.company}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
              Job Description *
            </label>
            <textarea
              name="description"
              rows={6}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Describe the role, responsibilities, requirements, and benefits..."
            />
            {state.errors?.description && (
              <p className="text-red-500 text-xs mt-1">{state.errors.description}</p>
            )}
          </div>

          {/* Application Link */}
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
              Application Link (Optional)
            </label>
            <input
              name="link"
              type="url"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="https://company.com/careers/apply"
            />
            {state.errors?.link && (
              <p className="text-red-500 text-xs mt-1">{state.errors.link}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Provide a direct link where candidates can apply for this position.
            </p>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="w-full bg-[#006837] text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-colors"
            >
              Post Job Opportunity
            </button>
            {state.message && (
              <p className="text-center text-red-500 font-bold mt-4">{state.message}</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
