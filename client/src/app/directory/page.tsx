import React from 'react';
import { MOCK_USERS } from '@/lib/mockData';
import DirectoryClient from '@/components/DirectoryClient';

export default function DirectoryPage() {
  const alumni = MOCK_USERS.nodes.map(user => ({
    ...user,
    title: user.name,
    alumniDetails: {
      house: "Independence",
      profession: user.description,
      image: { sourceUrl: user.avatar?.url || "https://placehold.co/100x100" }
    }
  }));
  
  return <DirectoryClient initialAlumni={alumni} />;
}