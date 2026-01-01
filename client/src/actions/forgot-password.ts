'use server';

import { getWordPressData, SEND_PASSWORD_RESET } from '@/lib/wordpress';
import { z } from 'zod';

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export async function sendPasswordResetLink(prevState: any, formData: FormData) {
  const email = formData.get('email');
  
  const validatedFields = ForgotPasswordSchema.safeParse({ email });

  if (!validatedFields.success) {
    return {
      message: 'Please enter a valid email address.',
    };
  }

  try {
    // In WPGraphQL, the username argument can often accept email too if configured, 
    // or we might need to assume email = username based on our registration logic.
    // Our registration logic used email prefix as username.
    // However, standard WP usually allows login by email. 
    // The `sendPasswordResetEmail` mutation typically takes `username`.
    // Let's try sending the email as the username, as WP core supports this.
    
    const response = await getWordPressData(SEND_PASSWORD_RESET, {
      username: validatedFields.data.email
    });

    if (response?.sendPasswordResetEmail?.success) {
      return { message: 'If an account exists with this email, a password reset link has been sent.' };
    }

    // Even if it fails (security: don't reveal user existence), return success message or generic error
    return { message: 'If an account exists with this email, a password reset link has been sent.' };

  } catch (error) {
    console.error("Password Reset Error:", error);
    return { message: 'An error occurred. Please try again later.' };
  }
}
