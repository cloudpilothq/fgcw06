'use server';
 
import { RegisterSchema, RegisterState } from '@/lib/definitions';
import { getWordPressData, REGISTER_USER } from '@/lib/wordpress';

export async function register(prevState: RegisterState, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register.',
    };
  }

  const { firstName, lastName, email, password } = validatedFields.data;
  
  // WordPress usually requires a 'username'. We will construct one or use email.
  // For now, we will use email as username or the part before @.
  const username = email.split('@')[0]; 

  try {
    const response = await getWordPressData(REGISTER_USER, { 
      email, 
      username, 
      password, 
      firstName, 
      lastName 
    });
    
    if (response?.registerUser?.user) {
      return { message: 'Registration successful! Please Log In.' };
    }
    
    // Attempt to capture WP logic error or return generic failure
    return { message: 'Registration failed. Username or Email likely exists.' };

  } catch (error) {
    console.error("Registration Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Network error occurred";
    return { message: `Registration Error: ${errorMessage}` };
  }
}
