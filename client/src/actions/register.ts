'use server';
 
import { RegisterSchema, RegisterState } from '@/lib/definitions';
import { registerUser } from '@/lib/mockData';

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
  // For now, we will use email as username or a combination of first/last name.
  // Let's use email for simplicity and uniqueness.
  const username = email.split('@')[0]; 

  try {
    const response = await registerUser({ email, username, password, firstName, lastName });
    
    // Note: To set First/Last name we might need a second mutation or a custom plugin
    // as standard registerUser only takes basic args.
    
    if (response?.registerUser?.user) {
      return { message: 'Registration successful! Please Log In.' };
    }
    
    // Attempt to capture WP logic error
    // (WPGraphQL might throw it as a top-level GraphQLError which we'd need to catch within getWordPressData if we want to parse it perfectly)
    return { message: 'Registration failed. Username or Email likely exists.' };

  } catch (error) {
    console.error("Registration Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return { message: `Registration Error: ${errorMessage}` };
  }
}
