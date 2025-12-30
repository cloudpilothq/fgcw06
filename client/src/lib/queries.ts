// lib/queries.ts

export async function getWordPressData(query: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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