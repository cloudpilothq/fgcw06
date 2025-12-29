"use client";
import React, { useState, useEffect } from 'react';
import { Users, Briefcase, CreditCard, Clock, CheckCircle, XCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
// import { getAdminStats } from '../../../actions/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalMembers: 120,
    pendingApprovals: 5,
    totalBusinesses: 15,
    totalDues: 0
  });

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const data = await getAdminStats();
  //       setStats(data);
  //     } catch (error) {
  //       console.error("Failed to fetch stats", error);
  //     }
  //   };
  //   fetchStats();
  // }, []);

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Executive Dashboard</h1>
          <p className="text-gray-500 mt-2 font-medium uppercase tracking-widest text-xs">Administrative Control Center</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Total Alumni" value={stats.totalMembers} icon={<Users />} color="bg-blue-600" />
          <StatCard title="Pending Approvals" value={stats.pendingApprovals} icon={<Clock />} color="bg-yellow-500" />
          <StatCard title="Listed Businesses" value={stats.totalBusinesses} icon={<Briefcase />} color="bg-[#006837]" />
          <Link href="/admin/events">
            <StatCard title="Manage Events" value="Events" icon={<Calendar />} color="bg-red-600" />
          </Link>
        </div>

        {/* Action Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Member Verification Table */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold">Pending Verifications</h2>
              <span className="text-xs font-bold text-gray-400 uppercase">Awaiting Action</span>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[10px] font-black uppercase text-gray-400 border-b">
                  <tr>
                    <th className="px-6 py-3 tracking-widest">Name</th>
                    <th className="px-6 py-3 tracking-widest">House</th>
                    <th className="px-6 py-3 tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {/* Map through pending users here */}
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-bold text-sm">Chuka Obi</td>
                    <td className="px-6 py-4 text-xs font-bold uppercase text-red-600">Red House</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-full"><CheckCircle size={20}/></button>
                      <button className="p-2 text-red-400 hover:bg-red-50 rounded-full"><XCircle size={20}/></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Business Review Section */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold">Business Registry</h2>
              <button className="text-[#006837] text-xs font-bold uppercase hover:underline">View All</button>
            </div>
            <div className="p-6 space-y-4">
               {/* Example Business Item */}
               <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900">Alpha Tech Solutions</p>
                    <p className="text-xs text-gray-500 font-medium">Industry: Information Technology</p>
                  </div>
                  <button className="text-xs font-black uppercase tracking-widest border border-[#006837] px-3 py-1 text-[#006837] hover:bg-[#006837] hover:text-white transition">Verify</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon, color }: any) {
  return (
    <div className="bg-white border border-gray-200 p-6 flex items-center gap-5 shadow-sm">
      <div className={`p-4 rounded-none text-white ${color}`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</p>
        <p className="text-2xl font-serif font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}