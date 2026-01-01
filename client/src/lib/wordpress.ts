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
          console.error('WordPress Errors:', json.errors);
          return null;
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
