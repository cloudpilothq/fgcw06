"use client";
import React, { useState } from 'react';
import { Search, Filter, Mail, MessageSquare, ShieldCheck, User } from 'lucide-react';

interface Alumnus {
  id: string;
  title: string;
  alumniDetails: {
    house: string | null;
    profession: string | null;
    image: {
      sourceUrl: string;
    } | null;
  };
}

export default function DirectoryClient({ initialAlumni }: { initialAlumni: Alumnus[] }) {
  const [alumni, setAlumni] = useState<Alumnus[]>(initialAlumni);
  const [search, setSearch] = useState('');
  const [houseFilter, setHouseFilter] = useState('All');

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.title?.toLowerCase().includes(search.toLowerCase()) || 
                          (person.alumniDetails?.profession && person.alumniDetails.profession.toLowerCase().includes(search.toLowerCase()));
    const matchesHouse = houseFilter === 'All' || person.alumniDetails?.house === houseFilter;
    return matchesSearch && matchesHouse;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 italic">FGCW 06 Directory</h1>
        <p className="text-gray-500">Find and connect with your fellow 06 classmates.</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search by name or profession..."
            className="input-field pl-12 py-3 shadow-sm" // Ensure you have input-field utility or standard tailwind classes
             style={{ width: '100%', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }} // Inline fallback if class missing
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 bg-white px-4 rounded-xl border border-gray-200 shadow-sm">
          <Filter className="h-5 w-5 text-[#006837]" />
          <select 
            className="py-3 outline-none bg-transparent font-medium text-gray-700"
            onChange={(e) => setHouseFilter(e.target.value)}
          >
            <option value="All">All Houses</option>
            <option value="Red">National</option>
            <option value="Blue">Independence</option>
            <option value="Green">Unity</option>
            <option value="Yellow">School</option>
          </select>
        </div>
      </div>

      {/* Grid Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAlumni.map((member) => (
          <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 group relative overflow-hidden pt-2">
            {/* House Identity Line */}
            <div className={`absolute top-0 left-0 w-full h-1.5 ${getHouseColor(member.alumniDetails?.house || '')}`} />
            
            <div className="flex items-center gap-4 mb-6 pt-4">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                {member.alumniDetails?.image?.sourceUrl ? (
                  <img src={member.alumniDetails.image.sourceUrl} alt={member.title} className="w-full h-full object-cover" />
                ) : (
                  <User className="text-gray-300" size={32} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-gray-900 leading-tight">{member.title}</h3>
                  <ShieldCheck size={16} className="text-blue-500" />
                </div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-tight">{member.alumniDetails?.profession || "Alumnus"}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${getHouseBadge(member.alumniDetails?.house || '')}`}>
                {member.alumniDetails?.house} House
              </span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-[#006837] text-white rounded-xl text-sm py-2 flex items-center justify-center gap-2 hover:bg-green-800 transition-colors">
                <MessageSquare size={16} /> Connect
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
       {filteredAlumni.length === 0 && (
           <div className="text-center py-20 text-gray-500">No members found matching your search.</div>
        )}
    </div>
  );
}

// Utility functions for House Branding
function getHouseColor(house: string) {
  const colors: Record<string, string> = {
    Red: 'bg-red-600',
    National: 'bg-red-600',
    Blue: 'bg-blue-600',
    Independence: 'bg-blue-600',
    Green: 'bg-[#006837]',
    Unity: 'bg-[#006837]',
    Yellow: 'bg-yellow-400',
    School: 'bg-yellow-400'
  };
  // Normalize simple matching
  if (house.includes("Red") || house.includes("National")) return colors.Red;
  if (house.includes("Blue") || house.includes("Independence")) return colors.Blue;
  if (house.includes("Green") || house.includes("Unity")) return colors.Green;
  if (house.includes("Yellow") || house.includes("School")) return colors.Yellow;
  
  return 'bg-gray-400';
}

function getHouseBadge(house: string) {
  // Similar logic or just default
   if (house.includes("Red") || house.includes("National")) return 'bg-red-50 text-red-700';
   if (house.includes("Blue") || house.includes("Independence")) return 'bg-blue-50 text-blue-700';
   if (house.includes("Green") || house.includes("Unity")) return 'bg-green-50 text-green-700';
   if (house.includes("Yellow") || house.includes("School")) return 'bg-yellow-50 text-yellow-700';
  return 'bg-gray-50 text-gray-700';
}
