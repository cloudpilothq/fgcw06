"use client";
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom'; // Correct hook for server actions
import { User, Briefcase, Linkedin, Phone, Camera, Save, CheckCircle } from 'lucide-react';
import { updateProfile } from '@/actions/profile';

interface ProfileFormProps {
  user: any;
}

const initialState = {
  message: null,
  success: false
};

export default function ProfileForm({ user }: ProfileFormProps) {
  const [state, dispatch] = useFormState(updateProfile, initialState);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header/Cover Area */}
        <div className="h-32 bg-gradient-to-r from-[#006837] to-green-800"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-12 mb-8 flex items-end gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                <img src={user?.image || `https://ui-avatars.com/api/?background=006837&color=fff&name=${user?.name || 'User'}`} alt="Profile" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="text-white" />
                </div>
              </div>
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold text-gray-900">Edit Alumni Profile</h1>
              <p className="text-gray-500 text-sm">Update your information for the Class of 2006 directory</p>
            </div>
          </div>

          <form action={dispatch} className="space-y-6">
            {state?.success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 animate-bounce">
                <CheckCircle size={18} /> {state.message}
              </div>
            )}
            {state?.message && !state?.success && (
                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
                 {state.message}
               </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input name="full_name" defaultValue={user?.name} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition-all" placeholder="Your Name" />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Profession</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input name="profession" defaultValue={user?.description} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition-all" placeholder="e.g. Architect" />
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn URL</label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input name="linkedin_url" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition-all" placeholder="linkedin.com/in/username" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input name="phone_number" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition-all" placeholder="+234..." />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Short Bio</label>
              <textarea 
                name="bio"
                rows={4} 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#006837]/20 focus:border-[#006837] transition-all resize-none" 
                placeholder="Tell your classmates what you've been up to since 2006..."
              ></textarea>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button 
                type="submit" 
                className="bg-[#006837] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg shadow-green-900/20"
              >
                <Save size={18} /> Save Profile
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
