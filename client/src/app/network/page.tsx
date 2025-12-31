import React from "react";
import { MOCK_USERS } from "@/lib/mockData";
import NetworkClient from "@/components/NetworkClient";

export default function NetworkPage() {
  const members = MOCK_USERS.nodes.map(user => ({
    ...user,
    title: user.name,
    alumniDetails: {
      house: "Independence",
      profession: user.description,
      image: { sourceUrl: user.avatar?.url || "https://placehold.co/100x100" }
    }
  }));

  return <NetworkClient initialMembers={members} />;
}
