
// Mock Data to replace WordPress GraphQL queries

export const MOCK_USERS = {
  nodes: [
    {
      id: "user-1",
      name: "John Doe",
      email: "john@example.com",
      description: "Software Engineer",
      avatar: { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: "user-2",
      name: "Jane Smith",
      email: "jane@example.com",
      description: "Product Manager",
      avatar: { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: "user-3",
      name: "Admin User",
      email: "admin@fgwc06.com",
      description: "Administrator",
      avatar: { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" },
      firstName: "Admin",
      lastName: "User",
    }
  ]
};

export const MOCK_EVENTS = {
  nodes: [
    {
      id: "event-1",
      title: "Annual Alumni Reunion 2026",
      content: "<p>Join us for the biggest reunion event of the decade! Reconnect with old friends and make new memories.</p>",
      excerpt: "<p>Join us for the biggest reunion event of the decade!</p>",
      date: "2026-12-15T18:00:00",
      slug: "annual-reunion-2026",
      eventDetails: {
        location: "Grand Hotel, Lagos",
        startDate: "2026-12-15",
        endDate: "2026-12-15",
        registrationLink: "#"
      },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/600x400/006837/ffffff?text=Reunion+2026",
          altText: "Reunion Event"
        }
      }
    },
    {
      id: "event-2",
      title: "Networking Night",
      content: "<p>A professional networking evening for all industries.</p>",
      excerpt: "<p>A professional networking evening for all industries.</p>",
      date: "2026-06-20T17:00:00",
      slug: "networking-night",
      eventDetails: {
        location: "Tech Hub, Abuja",
        startDate: "2026-06-20",
        endDate: "2026-06-20",
        registrationLink: "#"
      },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/600x400/006837/ffffff?text=Networking",
          altText: "Networking"
        }
      }
    }
  ]
};

export const MOCK_JOBS = {
  nodes: [
    {
      id: "job-1",
      title: "Senior Software Developer",
      content: "<p>We are looking for a senior developer to join our team.</p>",
      excerpt: "<p>We are looking for a senior developer...</p>",
      date: "2025-12-01",
      jobDetails: {
        company: "Tech Corp",
        location: "Lagos / Remote",
        jobType: "Full-time",
        applicationLink: "#"
      }
    },
    {
      id: "job-2",
      title: "Marketing Manager",
      content: "<p>Lead our marketing efforts globally.</p>",
      excerpt: "<p>Lead our marketing efforts globally.</p>",
      date: "2025-11-20",
      jobDetails: {
        company: "Global Brands",
        location: "Abuja",
        jobType: "Contract",
        applicationLink: "#"
      }
    }
  ]
};

export const MOCK_BUSINESSES = {
  nodes: [
    {
      id: "biz-1",
      title: "Alumni Consulting",
      content: "<p>Top tier consulting services.</p>",
      businessDetails: {
        category: "Consulting",
        contactEmail: "contact@alumniconsulting.com",
        contactPhone: "+234 123 456 7890",
        website: "https://example.com",
        location: "Lagos"
      },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/400x400/006837/ffffff?text=Consulting",
          altText: "Consulting"
        }
      }
    },
    {
      id: "biz-2",
      title: "Green Energy Solutions",
      content: "<p>Sustainable energy for the future.</p>",
      businessDetails: {
        category: "Energy",
        contactEmail: "info@greenenergy.com",
        contactPhone: "+234 098 765 4321",
        website: "https://example.com",
        location: "Remote"
      },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/400x400/006837/ffffff?text=Energy",
          altText: "Energy"
        }
      }
    }
  ]
};

export const MOCK_NEWS = {
  nodes: [
    {
      id: "news-1",
      title: "FGWC06 Launches New Portal",
      excerpt: "<p>We are excited to launch our new member portal today!</p>",
      content: "<p>We are excited to launch our new member portal today! This platform will serve as a hub for all alumni.</p>",
      date: "2025-12-31",
      slug: "new-portal-launch",
      categories: { nodes: [{ name: "Announcements", slug: "announcements" }] },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/800x400/006837/ffffff?text=New+Portal",
          altText: "New Portal"
        }
      },
      author: { node: { name: "Admin" } }
    },
    {
      id: "news-2",
      title: "Community Outreach Success",
      excerpt: "<p>Our recent outreach program was a massive success.</p>",
      content: "<p>Our recent outreach program was a massive success, reaching over 500 students.</p>",
      date: "2025-11-15",
      slug: "community-outreach",
      categories: { nodes: [{ name: "Events", slug: "events" }] },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/800x400/006837/ffffff?text=Outreach",
          altText: "Outreach"
        }
      },
      author: { node: { name: "Secretary" } }
    }
  ]
};

export const MOCK_GALLERY = {
  nodes: [
    {
      id: "gallery-1",
      title: "20th Anniversary Dinner",
      excerpt: "Photos from the dinner.",
      content: "",
      date: "2025-10-10",
      slug: "anniversary-dinner",
      categories: { nodes: [{ name: "Gallery", slug: "gallery" }] },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/600x600/006837/ffffff?text=Gallery+1",
          altText: "Dinner"
        }
      }
    },
    {
      id: "gallery-2",
      title: "Charity Walk",
      excerpt: "Walking for a cause.",
      content: "",
      date: "2025-08-05",
      slug: "charity-walk",
      categories: { nodes: [{ name: "Gallery", slug: "gallery" }] },
      featuredImage: {
        node: {
          sourceUrl: "https://placehold.co/600x600/006837/ffffff?text=Gallery+2",
          altText: "Walk"
        }
      }
    }
  ]
};

export const MOCK_DONATIONS = {
  totalAmount: 1500000,
  recentDonors: [
    { name: "Anonymous", amount: 50000, date: "2025-12-30" },
    { name: "John Doe", amount: 25000, date: "2025-12-28" }
  ]
};

// --- Helper Functions to Replace Queries ---

export async function getWordPressData(query: string, authToken?: string) {
  console.warn("getWordPressData called but WordPress is disconnected. Returning null/mock.");
  return null;
}

export async function getEvents() {
  return MOCK_EVENTS;
}

export async function getJobs() {
  return MOCK_JOBS;
}

export async function getBusinessDirectory() {
  return MOCK_BUSINESSES;
}
// Alias for consistency
export const getMyBusinesses = getBusinessDirectory; 

export async function getGalleryImages() {
   // In original queries.ts, it fetched mediaItems. We'll simplify and return gallery nodes structure if strictly needed,
   // or just minimal media objects.
   // Let's assume gallery pages use getGalleryAlbums usually.
   // If some page specifically uses getGalleryImages, we mock it:
   return [
     {
       id: "img-1",
       sourceUrl: "https://placehold.co/600x600/006837/ffffff?text=Image+1",
       altText: "Gallery Image 1"
     },
     {
        id: "img-2",
        sourceUrl: "https://placehold.co/600x600/006837/ffffff?text=Image+2",
        altText: "Gallery Image 2"
      }
   ];
}

export async function getGalleryAlbums() {
    return MOCK_GALLERY;
}

export async function getBlogPosts() {
    return MOCK_NEWS;
}

export async function getDonations() {
    return MOCK_DONATIONS;
}

export async function createDonation(data: any) {
    return { createDonation: { donation: { id: "mock-donation-id" } } };
}

// User Functions
export async function registerUser(data: any) {
    return { registerUser: { user: { id: "new-user", email: data.email } } };
}

export async function loginUser(username: string, pass: string) {
    // Return the Admin User for any login attempt for now
    const user = MOCK_USERS.nodes.find(u => u.email === username || u.name === username) || MOCK_USERS.nodes[2];
    
    return {
        login: {
            authToken: "mock-jwt-token",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    };
}

export async function getUserProfile(userId: string, token: string) {
    const user = MOCK_USERS.nodes.find(u => u.id === userId) || MOCK_USERS.nodes[0];
    return { user };
}

export async function updateUserProfile(data: any, token: string) {
    return { updateUser: { user: { ...data } } };
}

export async function uploadImage(data: any, token: string) {
    return { uploadImage: { mediaItem: { sourceUrl: "https://placehold.co/400x400" } } };
}

export async function submitContactForm(name: string, email: string, subject: string, message: string) {
     return {
         submitGfForm: {
             confirmation: { message: "Message sent successfully (Mock)!" },
             errors: []
         }
     };
}

// Constants to satisfy imports, even if unused by helpers
export const GET_ALUMNI = "MOCK_QUERY";
export const GET_BUSINESSES = "MOCK_QUERY";
export const GET_JOBS = "MOCK_QUERY";
export const GET_EVENTS = "MOCK_QUERY";
export const GET_BLOG_POSTS = "MOCK_QUERY";
export const GET_GALLERY_ALBUMS = "MOCK_QUERY";
