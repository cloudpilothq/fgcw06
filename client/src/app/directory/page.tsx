"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Mail, MessageSquare, ShieldCheck, User } from 'lucide-react';
// import { getAlumni } from '@/actions/directory';

interface Alumnus {
  id: string;
  name: string;
  house: string | null;
  profession: string | null;
  imageUrl: string | null;
}

export default function DirectoryPage() {
  const [alumni, setAlumni] = useState<Alumnus[]>([]);
  const [search, setSearch] = useState('');
  const [houseFilter, setHouseFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchAlumni = async () => {
  //     try {
  //       const data = await getAlumni();
  //       setAlumni(data);
  //     } catch (err) {
  //       console.error("Failed to fetch directory");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAlumni();
  // }, []);

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase()) || 
                          (person.profession && person.profession.toLowerCase().includes(search.toLowerCase()));
    const matchesHouse = houseFilter === 'All' || person.house === houseFilter;
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
            className="input-field pl-12 py-3 shadow-sm"
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
      {loading ? (
        <div className="text-center py-20 font-medium text-[#006837]">Gathering classmates...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((member) => (
            <div key={member.id} className="card group relative overflow-hidden pt-2">
              {/* House Identity Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${getHouseColor(member.house || '')}`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="text-gray-300" size={32} />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="font-bold text-gray-900 leading-tight">{member.name}</h3>
                    <ShieldCheck size={16} className="text-blue-500" />
                  </div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-tight">{member.profession || "Alumnus"}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${getHouseBadge(member.house || '')}`}>
                  {member.house} House
                </span>
              </div>

              <div className="flex gap-2">
                <button className="btn-primary flex-1 text-sm py-2 flex items-center justify-center gap-2">
                  <MessageSquare size={16} /> Connect
                </button>
                <button className="btn-secondary px-3 py-2">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Utility functions for House Branding
function getHouseColor(house: string) {
  const colors: Record<string, string> = {
    Red: 'bg-red-600',
    Blue: 'bg-blue-600',
    Green: 'bg-[#006837]',
    Yellow: 'bg-yellow-400'
  };
  return colors[house] || 'bg-gray-400';
}

function getHouseBadge(house: string) {
  const badges: Record<string, string> = {
    Red: 'bg-red-50 text-red-700',
    Blue: 'bg-blue-50 text-blue-700',
    Green: 'bg-green-50 text-green-700',
    Yellow: 'bg-yellow-50 text-yellow-700'
  };
  return badges[house] || 'bg-gray-50 text-gray-700';
}