"use client";
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function YouTubeSection() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Your frontend calls your backend, NOT the Google API directly
        // const res = await axios.get('http://localhost:5000/api/media/youtube');
        // setVideos(res.data);
      } catch (err) {
        console.error("Could not load YouTube feed");
      }
    };
    fetchVideos();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.length > 0 ? (
            videos.map((video: any, idx: number) => (
              <div key={idx} className="aspect-video bg-gray-100 rounded-lg">
                {/* Placeholder for video content */}
                <div className="flex items-center justify-center h-full text-gray-400">
                  Video {idx + 1}
                </div>
              </div>
            ))
          ) : (
             <p className="text-gray-500">Loading videos...</p>
          )}
        </div>
      </div>
    </section>
  );
}
