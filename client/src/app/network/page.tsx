"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";

// import { getAlumni } from '@/actions/directory';

interface Alumnus {
  id: string;
  name: string;
  house: string | null;
  profession: string | null;
  imageUrl: string | null;
}

export default function NetworkDirectory() {
  const [members, setMembers] = useState<Alumnus[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     try {
  //       const data = await getAlumni();
  //       setMembers(data);
  //     } catch (err) {
  //       console.error("Failed to fetch members");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchMembers();
  // }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/40 via-white to-white pt-32 px-6 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-[3.8rem] font-serif font-bold tracking-tight text-gray-900 mb-6">
            Alumni Directory<span className="text-[#006837]">.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Discover, connect, and collaborate with verified members of the
            Federal Government College Warri — Class of 2006 worldwide network.
          </p>
        </header>

        {/* SEARCH & FILTER BAR */}
        <section className="mb-16 rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,104,55,0.06)] p-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300"
              />
              <input
                type="text"
                placeholder="Search by name, house, profession, or location..."
                className="w-full rounded-2xl bg-gray-50/60 py-5 pl-14 pr-6 text-lg text-gray-800 outline-none focus:ring-4 focus:ring-green-100 transition"
              />
            </div>

            <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#006837] px-10 py-5 text-sm font-extrabold uppercase tracking-[0.25em] text-white shadow-md shadow-green-900/20 transition hover:bg-green-800">
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </section>

        {/* DIRECTORY GRID */}
        {loading ? (
          <div className="text-center py-20 font-medium text-[#006837]">Loading members...</div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {members.map((member) => (
              <article
                key={member.id}
                className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-2xl font-serif font-bold text-[#006837]">
                    {member.name.charAt(0)}
                  </div>

                  {member.house && (
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-600">
                      {member.house} House
                    </span>
                  )}
                </div>

                {/* NAME */}
                <h3 className="mb-6 text-2xl font-serif font-bold text-gray-900 transition-colors group-hover:text-[#006837]">
                  {member.name}
                </h3>

                {/* META */}
                <div className="mb-12 space-y-4 text-lg text-gray-500">
                  <div className="flex items-center gap-3">
                    <Briefcase size={18} className="text-gray-300" />
                    {member.profession || "Alumnus"}
                  </div>
                </div>

                {/* ACTION */}
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 py-4 text-sm font-extrabold uppercase tracking-[0.25em] text-gray-700 transition group-hover:border-[#006837] group-hover:bg-[#006837] group-hover:text-white">
                  View Profile
                  <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
