"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ExternalLink, ShieldCheck, Plus } from 'lucide-react';
import Link from 'next/link';
// import { getBusinesses } from '@/actions/business';

interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  contactInfo: string | null;
  owner: {
    name: string;
    email: string;
  };
}

export default function BusinessDirectory() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   const fetchBusinesses = async () => {
  //     try {
  //       const data = await getBusinesses();
  //       setBusinesses(data);
  //     } catch (err) {
  //       console.error("Failed to fetch businesses");
  //     }
  //   };
  //   fetchBusinesses();
  // }, []);

  const filteredBusinesses = businesses.filter(biz => 
    biz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    biz.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold mb-4">Business Directory</h1>
            <p className="text-xl text-green-50 font-light">
              Support FGCW 06 ventures. Discover legal, medical, tech, and creative services 
              led by your fellow classmates.
            </p>
          </div>
          <Link href="/business-directory/add" className="bg-white text-[#006837] px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-green-50 flex items-center gap-2">
            <Plus size={18} /> List Your Business
          </Link>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="border-b border-gray-200 sticky top-20 bg-white z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search by industry, name, or location..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-none outline-none focus:border-[#006837] font-sans"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((biz) => (
            <div key={biz.id} className="border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-gray-100 flex items-center justify-center border border-gray-100">
                  <span className="font-serif font-bold text-[#006837] text-xl">{biz.name[0]}</span>
                </div>
                {/* Verified badge removed as it's not in schema yet */}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{biz.name}</h3>
              <p className="text-sm font-bold text-[#006837] uppercase tracking-widest mb-4">{biz.category}</p>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {biz.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase">
                  {/* Using contactInfo as location/contact placeholder */}
                  <MapPin size={14} /> {biz.contactInfo || 'N/A'}
                </div>
                {/* Website link removed as it's not in schema */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}