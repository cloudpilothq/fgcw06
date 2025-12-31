import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getUserProfile } from '@/lib/mockData';
import ProfileForm from '@/components/ProfileForm';

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  // Fetch the latest profile data from WordPress
  const userId = session.user?.id;
  let userData = null;

  try {
     const token = (session as any).accessToken;
     const data = await getUserProfile(userId as string, token);
     userData = data?.user;
  } catch (error) {
     console.error("Failed to fetch profile", error);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <ProfileForm user={userData || session.user} />
    </div>
  );
}