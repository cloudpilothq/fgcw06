"use client";
import React, { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

interface EventProps {
  event: {
    id: string;
    title: string;
    description: string;
    venue: string;
    event_date: string;
    attendee_count: number;
    has_rsvp: boolean;
  };
}

export default function EventCard({ event }: EventProps) {
  const [isAttending, setIsAttending] = useState(event.has_rsvp);
  const [count, setCount] = useState(Number(event.attendee_count));

  const handleRSVP = async () => {
    try {
      const token = localStorage.getItem('token');
      const action = isAttending ? 'delete' : 'post';
      
      await axios({
        method: action,
        url: `/api/events/${event.id}/rsvp`,
        headers: { Authorization: `Bearer ${token}` }
      });

      setIsAttending(!isAttending);
      setCount(prev => isAttending ? prev - 1 : prev + 1);
    } catch (err) {
      alert("Failed to update RSVP");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="h-40 bg-[#006837] relative flex items-center justify-center text-white overflow-hidden">
        {/* Placeholder for event cover image */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        <Calendar size={48} className="relative z-10 opacity-50" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
          <span className="bg-green-50 text-[#006837] text-xs font-bold px-2 py-1 rounded">
            {new Date(event.event_date).toLocaleDateString('en-NG', { month: 'short', day: 'numeric' })}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} className="text-[#006837]" />
            {event.venue}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={16} className="text-[#006837]" />
            {count} Classmates Attending
          </div>
        </div>

        <button 
          onClick={handleRSVP}
          className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            isAttending 
            ? "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600" 
            : "bg-[#006837] text-white hover:bg-green-800 shadow-lg shadow-green-100"
          }`}
        >
          {isAttending ? (
            <><CheckCircle2 size={18} /> I'm Going</>
          ) : (
            "RSVP - I'll Be There"
          )}
        </button>
      </div>
    </div>
  );
}