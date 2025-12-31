'use server';
 
import { auth } from '@/auth';
import { updateUserProfile } from '@/lib/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateProfile(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session || !(session as any).accessToken) {
    return { message: "You must be logged in to update your profile." };
  }

  const userId = session.user?.id;
  const token = (session as any).accessToken;

  const fullName = formData.get('full_name') as string;
  const profession = formData.get('profession') as string;
  const phoneNumber = formData.get('phone_number') as string;
  const bio = formData.get('bio') as string;
  const linkedin = formData.get('linkedin_url') as string;

  try {
    // Note: Our current updateMemberProfile query only accepts jobTitle and location.
    // We are mapping 'profession' to 'description' (jobTitle) for now.
    // You will need to expand the GraphQL mutation in queries.ts to accept more fields 
    // (bio, phone, linkedin) as you add them to your WP schema.
    
    await updateUserProfile(userId as string, profession, "Unknown Location", token);
    
    revalidatePath('/profile');
    return { message: "Profile updated successfully!", success: true };
  } catch (error) {
    console.error("Profile Update Error:", error);
    return { message: "Failed to update profile." };
  }
}
