import { z } from 'zod';
 
export const RegisterSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export type RegisterState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export const ProfileSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  profession: z.string().optional(),
  bio: z.string().optional(),
  house: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type ProfileState = {
  errors?: {
    name?: string[];
    profession?: string[];
    bio?: string[];
    house?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

export const EventSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), { message: 'Invalid date.' }),
  location: z.string().min(3, { message: 'Location is required.' }),
  imageUrl: z.string().optional(),
});

export type EventState = {
  errors?: {
    title?: string[];
    description?: string[];
    date?: string[];
    location?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

export const GallerySchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters.' }),
  category: z.string().min(3, { message: 'Category is required.' }),
  imageUrl: z.string().url({ message: 'Invalid image URL.' }),
  date: z.string().optional(),
});

export type GalleryState = {
  errors?: {
    title?: string[];
    category?: string[];
    imageUrl?: string[];
    date?: string[];
  };
  message?: string | null;
};

export const BusinessSchema = z.object({
  name: z.string().min(2, { message: 'Business name is required.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  category: z.string().min(3, { message: 'Category is required.' }),
  contactInfo: z.string().optional(),
});

export type BusinessState = {
  errors?: {
    name?: string[];
    description?: string[];
    category?: string[];
    contactInfo?: string[];
  };
  message?: string | null;
};

export const JobSchema = z.object({
  title: z.string().min(3, { message: 'Job title is required.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  link: z.string().url().optional().or(z.literal('')),
});

export type JobState = {
  errors?: {
    title?: string[];
    company?: string[];
    description?: string[];
    link?: string[];
  };
  message?: string | null;
};

export const DonationSchema = z.object({
  amount: z.number().min(100, { message: 'Minimum donation is 100.' }),
  message: z.string().optional(),
  donorId: z.string().optional(),
});

export type DonationState = {
  errors?: {
    amount?: string[];
    message?: string[];
    donorId?: string[];
  };
  message?: string | null;
};
