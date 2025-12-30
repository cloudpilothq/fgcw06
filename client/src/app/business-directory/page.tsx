import React from 'react';
import { getWordPressData, GET_BUSINESSES } from '@/lib/queries';
import BusinessClient from '@/components/BusinessClient';

export default async function BusinessDirectoryPage() {
  let businesses = [];
  try {
    const data = await getWordPressData(GET_BUSINESSES);
    if (data?.businesses?.nodes) {
      businesses = data.businesses.nodes;
    }
  } catch (e) {
    console.error("WP Business Fetch Error:", e);
  }

  return <BusinessClient initialBusinesses={businesses} />;
}