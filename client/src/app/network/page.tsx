import React from "react";
import { getWordPressData, GET_ALUMNI } from "@/lib/queries";
import NetworkClient from "@/components/NetworkClient";

export default async function NetworkPage() {
  let members = [];
  try {
    const data = await getWordPressData(GET_ALUMNI);
    if (data?.alumni?.nodes) {
      members = data.alumni.nodes;
    }
  } catch (e) {
    console.error("WP Alumni Fetch Error:", e);
  }

  return <NetworkClient initialMembers={members} />;
}
