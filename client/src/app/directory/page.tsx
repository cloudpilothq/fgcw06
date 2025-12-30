import React from 'react';
import { getWordPressData, GET_ALUMNI } from '@/lib/queries';
import DirectoryClient from '@/components/DirectoryClient';

export default async function DirectoryPage() {
  let alumni = [];
  try {
    const data = await getWordPressData(GET_ALUMNI);
    if (data?.alumni?.nodes) {
      alumni = data.alumni.nodes;
    }
  } catch (e) {
    console.error("WP Directory Fetch Error:", e);
  }

  return <DirectoryClient initialAlumni={alumni} />;
}