"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10 bg-white">

        {/* LEFT – VISUAL / STORY */}
        <div className="relative hidden md:flex flex-col justify-end bg-[#006837]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: "url('/volunteer-team.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004d29] via-[#006837]/60 to-transparent" />

          <div className="relative z-10 p-12 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs font-extrabold tracking-widest uppercase border border-white/20 mb-6">
              <ShieldCheck size={14} className="text-green-200" />
              FGCW 06 Alumni Service
            </span>

            <h2 className="text-4xl font-serif italic font-bold leading-tight mb-4 text-white">
              Service in Unity
            </h2>

            <p className="text-green-100 text-lg leading-relaxed max-w-md">
              Every great alumni legacy is built by members who step forward.
              Your skills, time, and passion can shape the future of FGCW 06.
            </p>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="p-8 sm:p-12 lg:p-14 bg-white">
          <header className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Volunteer Registration
              <span className="text-[#006837]">.</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Choose a committee and tell us how you’d like to contribute.
            </p>
          </header>

          <form className="space-y-6">
            {/* Committee */}
            <div className="group rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 focus-within:ring-4 focus-within:ring-green-100 focus-within:border-[#006837]/40 transition">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                Preferred Committee
              </label>
              <select
                className="w-full bg-transparent text-lg text-gray-800 outline-none appearance-none cursor-pointer"
                required
              >
                <option value="">Select a committee</option>
                <option>Reunion Planning Committee</option>
                <option>Mentorship & Career Development</option>
                <option>Logistics & Welfare</option>
                <option>Media & Communications</option>
              </select>
            </div>

            {/* Skills */}
            <div className="group rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 focus-within:ring-4 focus-within:ring-green-100 focus-within:border-[#006837]/40 transition">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                How can you help?
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-transparent text-lg text-gray-800 outline-none resize-none"
                placeholder="Briefly describe your skills, experience, or interests…"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full mt-4 inline-flex items-center justify-center gap-3 rounded-xl bg-[#006837] py-5 text-sm font-extrabold uppercase tracking-[0.25em] text-white shadow-lg shadow-green-900/15 transition hover:bg-green-800 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-green-200"
            >
              Join the Committee
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-10 text-center text-gray-400 text-base">
            Not sure where to start?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#006837] hover:underline"
            >
              Contact the Exco
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
