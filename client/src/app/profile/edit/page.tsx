"use client";
import React, { useState, useEffect } from 'react';
import { Save, User, Camera } from 'lucide-react';
import { useFormState } from 'react-dom';
// import { updateProfile } from '../../../actions/profile';
// import { uploadImage } from '../../../actions/upload';
// import { getCurrentUser } from '../../../actions/user';
import { ProfileState } from '../../../lib/definitions';

async function updateProfile(prevState: ProfileState, formData: FormData): Promise<ProfileState> {
    return { message: "Database removed.", errors: {} };
}

export default function EditProfile() {
  const initialState: ProfileState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(updateProfile, initialState);
  const [user, setUser] = useState<any>({ name: "User", email: "user@example.com", imageUrl: null });
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // useEffect(() => {
  //   getCurrentUser().then((u) => {
  //     if (u) {
  //       setUser(u);
  //       setPreviewUrl(u.imageUrl);
  //     }
  //   });
  // }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // Mock upload
    setTimeout(() => {
        setPreviewUrl(URL.createObjectURL(file));
        setUploading(false);
    }, 1000);
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="bg-[#f7f3f1] min-h-screen">
      <div className="pt-[5rem] px-[25px] max-w-5xl mx-auto pb-20">
        
        <header className="mb-12">
          <h1 className="text-[3.2rem] font-serif font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-[1.7rem] text-gray-600">Update your professional information and public profile.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          
          {/* Sidebar: Navigation & Profile Photo */}
          <div className="md:col-span-1 space-y-[25px]">
            <div className="bg-white border border-[#9e9785] p-[25px] text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 group">
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-[#9e9785] overflow-hidden">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={40} className="text-gray-300" />
                  )}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera size={20} />
                  <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </label>
              </div>
              <p className="text-[1.4rem] font-bold text-gray-900 uppercase tracking-widest">Profile Photo</p>
              {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
            </div>

            <nav className="bg-white border border-[#9e9785] overflow-hidden">
              <button className="w-full text-left p-[25px] text-[1.7rem] font-bold bg-[#006837] text-white">Personal Info</button>
              <button className="w-full text-left p-[25px] text-[1.7rem] font-bold text-gray-600 hover:bg-gray-50 border-t border-[#9e9785]">Security</button>
              <button className="w-full text-left p-[25px] text-[1.7rem] font-bold text-gray-600 hover:bg-gray-50 border-t border-[#9e9785]">Privacy Settings</button>
            </nav>
          </div>

          {/* Main Content: Form */}
          <div className="md:col-span-2 bg-white border border-[#9e9785] p-[25px]">
            <form action={dispatch} className="space-y-8">
              <input type="hidden" name="imageUrl" value={previewUrl || ''} />
              
              <section>
                <h2 className="text-[2.2rem] font-serif font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Professional Identity</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-[1.2rem] font-black uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input name="name" type="text" className="w-full p-4 border border-[#9e9785] text-[1.7rem] focus:border-[#006837] outline-none" defaultValue={user.name} />
                    {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[1.2rem] font-black uppercase tracking-widest text-gray-500 mb-2">Current Profession</label>
                    <input name="profession" type="text" className="w-full p-4 border border-[#9e9785] text-[1.7rem] focus:border-[#006837] outline-none" defaultValue={user.profession || ''} />
                  </div>
                  <div>
                    <label className="block text-[1.2rem] font-black uppercase tracking-widest text-gray-500 mb-2">Biography</label>
                    <textarea name="bio" rows={4} className="w-full p-4 border border-[#9e9785] text-[1.7rem] focus:border-[#006837] outline-none" placeholder="Share a brief update with your classmates..." defaultValue={user.bio || ''} />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[2.2rem] font-serif font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">FGCW History</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[1.2rem] font-black uppercase tracking-widest text-gray-500 mb-2">House</label>
                    <select name="house" className="w-full p-4 border border-[#9e9785] text-[1.7rem] bg-white" defaultValue={user.house || 'Red'}>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[1.2rem] font-black uppercase tracking-widest text-gray-500 mb-2">Graduation Year</label>
                    <input type="text" className="w-full p-4 border border-[#9e9785] text-[1.7rem] bg-gray-50" value="2006" disabled />
                  </div>
                </div>
              </section>

              <div className="pt-6 border-t border-gray-100">
                <button type="submit" className="flex items-center justify-center gap-3 bg-[#006837] text-white px-10 py-5 font-bold uppercase tracking-[.2em] text-[1.4rem] hover:bg-green-800 transition-colors w-full md:w-auto">
                  <Save size={18} /> Save Changes
                </button>
                {state.message && <p className="mt-4 text-center font-bold text-[#006837]">{state.message}</p>}
              </div>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}