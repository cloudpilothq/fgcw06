"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, UserCheck, Clock, ShieldAlert } from 'lucide-react';

interface PendingMember {
  id: string;
  email: string;
  full_name: string;
  house: string;
  phone_number: string;
  created_at: string;
}

export default function MemberApproval() {
  const [pendingUsers, setPendingUsers] = useState<PendingMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPending = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/admin/pending-members', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPendingUsers(res.data);
    } catch (err) {
      console.error("Error fetching pending members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPending(); }, []);

  const handleAction = async (userId: string, action: 'APPROVED' | 'DEACTIVATED') => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`/api/admin/update-status/${userId}`, { status: action }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Remove from list after action
      setPendingUsers(prev => prev.filter(u => u.id !== userId));
    } catch (err) {
      alert("Action failed. Check permissions.");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading verification requests...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <ShieldAlert className="text-orange-500" /> Pending Approvals
          </h2>
          <p className="text-sm text-gray-500">Verify identity before granting access to FGCW 06 data</p>
        </div>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
          {pendingUsers.length} Requests
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-gray-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Alumni Info</th>
              <th className="px-6 py-4 font-semibold">House</th>
              <th className="px-6 py-4 font-semibold">Date Joined</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pendingUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="font-bold text-gray-900">{user.full_name}</div>
                  <div className="text-xs text-gray-500">{user.email} • {user.phone_number}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-xs font-medium uppercase">
                    {user.house}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {new Date(user.created_at).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => handleAction(user.id, 'APPROVED')}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                      title="Approve Member"
                    >
                      <CheckCircle size={20} />
                    </button>
                    <button 
                      onClick={() => handleAction(user.id, 'DEACTIVATED')}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Reject/Deactivate"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {pendingUsers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                  No pending registrations at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}