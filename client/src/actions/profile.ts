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
    // Note: Our current updateUserProfile query only accepts certain fields.
    // We are mapping 'profession' to 'description' for now.
    // You will need to expand the GraphQL mutation in queries.ts to accept more fields 
    // (bio, phone, linkedin) as you add them to your WP schema.
    
    const profileData = {
      id: userId,
      description: profession,
      // Add other fields here as your WordPress schema supports them
      // firstName: fullName?.split(' ')[0],
      // lastName: fullName?.split(' ').slice(1).join(' '),
    };
    
    await updateUserProfile(profileData, token);
    
    revalidatePath('/profile');
    return { message: "Profile updated successfully!", success: true };
  } catch (error) {
    console.error("Profile Update Error:", error);
    return { message: "Failed to update profile." };
  }
}
