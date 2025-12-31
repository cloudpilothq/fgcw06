import React from 'react';
import { Calendar, MapPin, Monitor } from 'lucide-react';
import { getEvents } from '@/lib/mockData';

export default async function EventsPage() {
  let events: any[] = [];

  try {
    const data = await getEvents();
    if (data?.nodes) {
      events = data.nodes;
    }
  } catch (e) {
    console.error("Events Fetch Error:", e);
  }

  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Connect, celebrate, and grow with the FGCW 06 community.
          </p>
        </div>

        <div className="space-y-8">
          {events.length > 0 ? (
            events.map((event: any) => (
              <div key={event.id} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Date Block */}
                <div className="md:w-48 bg-[#006837] text-white flex flex-col items-center justify-center p-8 text-center shrink-0">
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                    {event.date ? new Date(event.date).toLocaleString('default', { month: 'short' }) : 'TBA'}
                  </span>
                  <span className="text-5xl font-serif font-bold my-2">
                    {event.date ? new Date(event.date).getDate() : '--'}
                  </span>
                  <span className="text-sm opacity-80">
                    {event.date ? new Date(event.date).getFullYear() : ''}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#006837] mb-3">
                    <MapPin size={14} />
                    {event.eventDetails?.location || 'Location TBA'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.eventDetails?.description}
                  </p>
                </div>
                
                {/* Image (Optional) */}
                {event.eventDetails?.image?.sourceUrl && (
                  <div className="md:w-64 h-48 md:h-auto shrink-0 relative">
                     <img 
                        src={event.eventDetails.image.sourceUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                     />
                  </div>
                )}
              </div>
            ))
          ) : (
             <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 font-medium">No upcoming events scheduled at the moment.</p>
                <p className="text-sm text-gray-400 mt-2">Check back later or join our newsletter for updates.</p>
             </div>
          )}
        </div>
      </div>
    </main>
  );
}
