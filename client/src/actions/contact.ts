'use server';

import { submitContactForm } from "@/lib/queries";

export async function submitContact(prevState: string | null, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return "Please fill in all required fields.";
  }

  try {
    const response = await submitContactForm(name, email, subject, message);
    
    if (response?.submitGfForm?.errors?.length > 0) {
      return response.submitGfForm.errors[0].message;
    }

    if (response?.submitGfForm?.confirmation) {
      return "success";
    }

    return "Failed to send message. Please try again.";
  } catch (error) {
    console.error("Contact Submit Error:", error);
    return "An error occurred. Please try again later.";
  }
}
