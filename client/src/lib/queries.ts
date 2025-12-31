// lib/queries.ts

export async function getWordPressData(query: string, authToken?: string) {
  const headers: any = { 'Content-Type': 'application/json' };
  
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    next: { revalidate: 60 }
  });

  const json = await res.json();
  return json.data;
}

export const GET_EVENTS = `
  query GetEvents {
    events {
      nodes {
        id
        title
        date
        eventDetails {
          location
          description
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_ALUMNI = `
  query GetAlumni {
    alumni {
      nodes {
        id
        title
        alumniDetails {
          house
          profession
          biography
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_JOBS = `
  query GetJobs {
    jobs {
      nodes {
        id
        title
        jobDetails {
          company
          description
          applicationLink
        }
        date
      }
    }
  }
`;

export const GET_BUSINESSES = `
  query GetBusinesses {
    businesses {
      nodes {
        id
        title
        businessDetails {
          category
          description
          contactInfo
        }
      }
    }
  }
`;

export const GET_POSTS = `
  query GetPosts {
    posts {
      nodes {
        id
        title
        excerpt
        date
        slug
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;


// lib/queries.ts
export async function getGalleryImages() {
  const query = `
    query GetMedia {
      mediaItems(first: 20, where: { mimeType: IMAGE }) {
        nodes {
          id
          sourceUrl
          altText
          title
        }
      }
    }
  `;
  
  const data = await getWordPressData(query);
  
  // Return empty array if WordPress connection fails or no media items
  if (!data || !data.mediaItems || !data.mediaItems.nodes) {
    console.warn('No gallery images found or WordPress connection issue');
    return [];
  }
  
  return data.mediaItems.nodes;
}

// Example: Fetching Profile Data for your Executive Dashboard
export async function getMemberProfile(userId: string) {
  const query = `
    query GetMember {
      user(id: "${userId}", idType: DATABASE_ID) {
        name
        description
        # Custom fields created in Ultimate Member
        extraFields {
          houseColor
          jobTitle
          location
        }
      }
    }
  `;
  return await getWordPressData(query);
}

export async function updateMemberProfile(userId: string, jobTitle: string, location: string, authToken: string) {
  const mutation = `
    mutation UpdateProfile {
      updateUser(input: {
        id: "${userId}",
        description: "${jobTitle}",
        clientMutationId: "fgcw06_update"
      }) {
        user {
          id
          name
        }
      }
    }
  `;
  
  return await getWordPressData(mutation, authToken); 
}

export async function loginUser(username: string, password: string) {
  const mutation = `
    mutation Login {
      login(input: {
        username: "${username}",
        password: "${password}",
        clientMutationId: "fgcw06_login"
      }) {
        authToken
        user {
          id
          name
          email
        }
      }
    }
  `;
  return await getWordPressData(mutation);
}

export async function submitContactForm(name: string, email: string, subject: string, message: string) {
  // IMPORTANT: Replace these IDs with your actual Gravity Forms Field IDs
  const formId = 1; 
  const mutation = `
    mutation SubmitContactForm {
      submitGfForm(input: {
        id: ${formId}
        fieldValues: [
          { id: 1, value: "${name}" },
          { id: 2, value: "${email}" },
          { id: 3, value: "${subject}" },
          { id: 4, value: "${message}" }
        ]
      }) {
        confirmation {
          message
        }
        errors {
          message
        }
      }
    }
  `;
  return await getWordPressData(mutation);
}

export async function registerUser(email: string, username: string, password: string) {
  const mutation = `
    mutation RegisterUser {
      registerUser(input: {
        username: "${username}",
        email: "${email}",
        password: "${password}",
        clientMutationId: "fgcw06_register"
      }) {
        user {
          id
          name
          email
        }
      }
    }
  `;
  return await getWordPressData(mutation);
}

export const GET_LEGAL_PAGE = `
  query GetLegalPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
      date
    }
  }
`;

export const GET_BLOG_POSTS = `
  query GetBlogPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        excerpt
        content
        date
        slug
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;