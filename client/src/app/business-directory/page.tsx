import React from 'react';
import { getBusinessDirectory } from '@/lib/mockData';
import BusinessClient from '@/components/BusinessClient';

export default async function BusinessDirectoryPage() {
  let businesses = [];
  try {
    const data = await getBusinessDirectory();
    if (data?.nodes) {
      businesses = data.nodes;
    }
  } catch (e) {
    console.error("Business Fetch Error:", e);
  }

  return <BusinessClient initialBusinesses={businesses} />;
}