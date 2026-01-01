export const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://dev-fgcw06.pantheonsite.io/graphql';

export async function getWordPressData(query: string, variables: any = {}) {
  const headers = { 'Content-Type': 'application/json' };
  try {
      const res = await fetch(API_URL, {
          method: 'POST',
          headers,
          body: JSON.stringify({ query, variables }),
          next: { revalidate: 60 }
      });
      const json = await res.json();
      if (json.errors) {
          const errorMessage = json.errors[0]?.message || 'Unknown WordPress API Error';
          console.error('WordPress Errors:', json.errors);
          throw new Error(errorMessage);
      }
      return json.data;
  } catch (err) {
      console.error('WP Fetch Error:', err);
      return null;
  }
}

// Query to fetch BuddyPress members
// Note: Requires "WPGraphQL for BuddyPress" plugin to be active
export const GET_MEMBERS = `
  query GetMembers {
    users(first: 100) {
      nodes {
        id
        name
        firstName
        lastName
        description
        avatar {
          url
        }
        email
        # Attempting to fetch generic fields first. 
        # For specific BP fields (like XProfile), extended queries are needed.
      }
    }
  }
`;

// Mutation to Log In and get JWT
export const LOGIN_USER = `
  mutation LoginUser($username: String!, $password: String!) {
    login(input: {username: $username, password: $password}) {
      authToken
      user {
        id
        name
        email
        firstName
        lastName
      }
    }
  }
`;

// Mutation to Register a new User
export const REGISTER_USER = `
  mutation RegisterUser($email: String!, $username: String!, $password: String!, $firstName: String, $lastName: String) {
    registerUser(input: {username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName}) {
      user {
        id
        name
        email
      }
    }
  }
`;

// Mutation to Send Password Reset Email
export const SEND_PASSWORD_RESET = `
  mutation SendPasswordReset($username: String!) {
    sendPasswordResetEmail(input: {username: $username}) {
      success
    }
  }
`;
