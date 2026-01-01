import React from 'react';
import { getWordPressData, GET_MEMBERS } from '@/lib/wordpress';
import { MOCK_USERS } from '@/lib/mockData';
import DirectoryClient from '@/components/DirectoryClient';

export const revalidate = 60;

export default async function DirectoryPage() {
  let users: any[] = [];

  try {
    const data = await getWordPressData(GET_MEMBERS);
    if (data?.users?.nodes) {
      users = data.users.nodes;
    }
  } catch (error) {
    console.error('Error fetching members:', error);
  }

  // Fallback to mock data if no users found (or plugin not active)
  if (!users || users.length === 0) {
    console.warn("No users found in WordPress, using mock data.");
    users = MOCK_USERS.nodes;
  }

  // Map WP/Mock users to Alumnus type
  const alumni = users.map((user: any) => ({
    id: user.id,
    title: user.name,
    content: user.description || "", 
    slug: user.slug || `member-${user.id}`,
    alumniDetails: {
      house: "Independence", // Placeholder until XProfile is mapped
      profession: user.description || "Member",
      image: { sourceUrl: user.avatar?.url || "https://placehold.co/100x100" },
      classYear: "2006",
      socialLinkedin: "",
      socialFacebook: "",
      socialTwitter: "",
      socialInstagram: ""
    }
  }));
  
  return <DirectoryClient initialAlumni={alumni} />;
}