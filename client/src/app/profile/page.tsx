"use client";
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { User, Briefcase, Linkedin, Phone, Camera, Save, CheckCircle } from 'lucide-react';
// import axios from 'axios';

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Mock profile data
    reset({
        full_name: "Mock User",
        profession: "Developer",
        linkedin_url: "https://linkedin.com",
        phone_number: "1234567890",
        bio: "Mock bio"
    });
  }, [reset]);

  const onSubmit = async (data: any) => {
    setSaving(true);
    setSuccess(false);
    // Mock save
    setTimeout(() => {
        setSuccess(true);
        setSaving(false);
        setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  if (loading) return <div className="p-20 text-center">Loading your profile...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header/Cover Area */}
        <div className="h-32 bg-gradient-to-r from-[#006837] to-green-800"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-12 mb-8 flex items-end gap-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                <img src="https://ui-avatars.com/api/?background=006837&color=fff&name=User" alt="Profile" />
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 animate-bounce">
                <CheckCircle size={18} /> Profile updated successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input {...register("full_name")} className="input-field pl-10" placeholder="Your Name" />
                </div>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Profession</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input {...register("profession")} className="input-field pl-10" placeholder="e.g. Architect" />
                </div>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn URL</label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input {...register("linkedin_url")} className="input-field pl-10" placeholder="linkedin.com/in/username" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input {...register("phone_number")} className="input-field pl-10" placeholder="+234..." />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Short Bio</label>
              <textarea 
                {...register("bio")} 
                rows={4} 
                className="input-field py-3" 
                placeholder="Tell your classmates what you've been up to since 2006..."
              ></textarea>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button 
                type="submit" 
                disabled={saving}
                className="btn-primary flex items-center gap-2"
              >
                {saving ? "Saving..." : <><Save size={18} /> Save Profile</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}