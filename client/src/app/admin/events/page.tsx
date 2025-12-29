"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Calendar, MapPin, Trash2, Edit } from 'lucide-react';
import { useFormState } from 'react-dom';
// import { createEvent, deleteEvent, getEvents } from '../../../actions/events';
// import { uploadImage } from '../../../actions/upload';
import { EventState } from '../../../lib/definitions';

async function createEvent(prevState: EventState, formData: FormData): Promise<EventState> {
    return { message: "Database removed.", errors: {} };
}

export default function AdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  
  // useEffect(() => {
  //   getEvents().then(setEvents);
  // }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      // await deleteEvent(id);
      setEvents(events.filter(e => e.id !== id));
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-serif font-bold text-gray-900">Event Management</h1>
            <p className="text-gray-500 mt-2 font-medium uppercase tracking-widest text-xs">Create and Manage Alumni Events</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-[#006837] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-green-800 transition">
            <Plus size={16} /> New Event
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition">
              <div className="h-48 bg-gray-200 relative">
                {event.imageUrl ? (
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button onClick={() => handleDelete(event.id)} className="bg-white p-2 rounded-full text-red-500 hover:bg-red-50 shadow-sm"><Trash2 size={16} /></button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <Calendar size={14} />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <CreateEventModal onClose={() => setShowModal(false)} />}
    </main>
  );
}

function CreateEventModal({ onClose }: { onClose: () => void }) {
  const initialState: EventState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createEvent, initialState);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // Mock upload
    setTimeout(() => {
        if(file) setImageUrl(URL.createObjectURL(file));
        setUploading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold">Create New Event</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">Close</button>
        </div>

        <form action={dispatch} className="space-y-6">
          <input type="hidden" name="imageUrl" value={imageUrl} />
          
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Event Title</label>
            <input name="title" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Annual Gala Night" />
            {state.errors?.title && <p className="text-red-500 text-xs mt-1">{state.errors.title}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Date</label>
              <input name="date" type="date" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
              {state.errors?.date && <p className="text-red-500 text-xs mt-1">{state.errors.date}</p>}
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Location</label>
              <input name="location" type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Grand Hall, Lagos" />
              {state.errors?.location && <p className="text-red-500 text-xs mt-1">{state.errors.location}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Description</label>
            <textarea name="description" rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" placeholder="Event details..." />
            {state.errors?.description && <p className="text-red-500 text-xs mt-1">{state.errors.description}</p>}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Event Image</label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              {imageUrl ? (
                <img src={imageUrl} alt="Preview" className="h-32 mx-auto object-cover rounded-lg" />
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Click to upload image</p>
                  <input type="file" onChange={handleFileChange} accept="image/*" className="text-sm text-gray-500" />
                </div>
              )}
              {uploading && <p className="text-xs text-green-600 mt-2">Uploading...</p>}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-3 text-gray-500 font-bold hover:bg-gray-50 rounded-lg">Cancel</button>
            <button type="submit" className="bg-[#006837] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-green-800 transition">Create Event</button>
          </div>
          {state.message && <p className="text-center text-red-500 font-bold">{state.message}</p>}
        </form>
      </div>
    </div>
  );
}
