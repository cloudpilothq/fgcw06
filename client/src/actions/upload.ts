'use server';
 
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { auth } from '../auth';
 
export async function uploadImage(formData: FormData) {
  const session = await auth();
  if (!session?.user) {
    return { error: 'Unauthorized' };
  }

  const file = formData.get('file') as File;
  if (!file) {
    return { error: 'No file uploaded' };
  }
 
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
 
  // Create unique filename
  const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
  const path = join(process.cwd(), 'public/uploads', filename);
 
  try {
    await writeFile(path, buffer);
    return { url: `/uploads/${filename}` };
  } catch (error) {
    console.error('Upload failed:', error);
    return { error: 'Upload failed' };
  }
}
