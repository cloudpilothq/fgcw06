// lib/queries.ts

export async function getWordPressData(query: string, authToken?: string) {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  
  // Check if WordPress API URL is configured
  if (!apiUrl) {
    console.error('WordPress API URL is not configured. Please set NEXT_PUBLIC_WORDPRESS_API_URL in your environment variables.');
    return null;
  }

  const headers: any = { 'Content-Type': 'application/json' };
  
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('WP Fetch Error:', error);
    return null;
  }
}

export const GET_EVENTS = `
  query GetEvents {
    events(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        content
        excerpt
        date
        slug
        eventDetails {
          location
          startDate
          endDate
          registrationLink
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export async function getEvents() {
  return getWordPressData(GET_EVENTS);
}

export const GET_GALLERY_IMAGES = `
  query GetGalleryImages {
    mediaItems(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export async function getGalleryImages() {
  const data = await getWordPressData(GET_GALLERY_IMAGES);
  return data?.mediaItems?.nodes || [];
}

export const GET_BUSINESS_DIRECTORY = `
  query GetBusinessDirectory {
    businesses(first: 100) {
      nodes {
        id
        title
        content
        businessDetails {
          category
          contactEmail
          contactPhone
          website
          location
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
      }
    }
  }
`;

export async function getBusinessDirectory() {
  return getWordPressData(GET_BUSINESS_DIRECTORY);
}

// Alias for GET_BUSINESS_DIRECTORY to match imports in business-directory/page.tsx
export const GET_BUSINESSES = GET_BUSINESS_DIRECTORY;

// Query for alumni directory
export const GET_ALUMNI = `
  query GetAlumni {
    users(first: 100) {
      nodes {
        id
        name
        email
        description
        avatar {
          url
        }
      }
    }
  }
`;


export const GET_JOBS = `
  query GetJobs {
    jobs(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        content
        excerpt
        date
        jobDetails {
          company
          location
          jobType
          applicationLink
        }
      }
    }
  }
`;

export async function getJobs() {
  return getWordPressData(GET_JOBS);
}

export const GET_DONATIONS = `
  query GetDonations {
    donations {
      totalAmount
      recentDonors {
        name
        amount
        date
      }
    }
  }
`;

export async function getDonations() {
  return getWordPressData(GET_DONATIONS);
}

export const CREATE_DONATION = `
  mutation CreateDonation($input: CreateDonationInput!) {
    createDonation(input: $input) {
      donation {
        id
        amount
        donorName
        donorEmail
      }
    }
  }
`;

export async function createDonation(donationData: any) {
  return getWordPressData(CREATE_DONATION, undefined);
}

export const REGISTER_USER = `
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

export async function registerUser(userData: any) {
  return getWordPressData(REGISTER_USER);
}

export const UPDATE_USER_PROFILE = `
  mutation UpdateUserProfile($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        id
        email
        firstName
        lastName
        description
      }
    }
  }
`;

export async function updateUserProfile(profileData: any, authToken: string) {
  return getWordPressData(UPDATE_USER_PROFILE, authToken);
}

export const GET_USER_PROFILE = `
  query GetUserProfile($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      description
      avatar {
        url
      }
    }
  }
`;

export async function getUserProfile(userId: string, authToken: string) {
  return getWordPressData(GET_USER_PROFILE, authToken);
}

export const UPLOAD_IMAGE = `
  mutation UploadImage($input: UploadImageInput!) {
    uploadImage(input: $input) {
      mediaItem {
        id
        sourceUrl
      }
    }
  }
`;

export async function uploadImage(imageData: any, authToken: string) {
  return getWordPressData(UPLOAD_IMAGE, authToken);
}

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

export const GET_GALLERY_ALBUMS = `
  query GetGalleryAlbums {
    posts(first: 100, where: {categoryName: "Gallery", orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        excerpt
        content
        date
        slug
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;// Login mutation
export const LOGIN_USER = `
  mutation LoginUser($username: String!, $password: String!) {
    login(input: {username: $username, password: $password}) {
      authToken
      user {
        id
        name
        email
      }
    }
  }
`;

export async function loginUser(username: string, password: string) {
  const query = LOGIN_USER.replace('$username', `"${username}"`).replace('$password', `"${password}"`);
  return getWordPressData(query);
}

// Contact form submission
export const SUBMIT_CONTACT_FORM = `
  mutation SubmitContactForm($name: String!, $email: String!, $subject: String, $message: String!) {
    submitGfForm(input: {
      formId: 1
      fieldValues: [
        {id: 1, value: $name}
        {id: 2, value: $email}
        {id: 3, value: $subject}
        {id: 4, value: $message}
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

export async function submitContactForm(name: string, email: string, subject: string, message: string) {
  const query = SUBMIT_CONTACT_FORM
    .replace('$name', `"${name}"`)
    .replace('$email', `"${email}"`)
    .replace('$subject', `"${subject}"`)
    .replace('$message', `"${message}"`);
  return getWordPressData(query);
}
