import { HeroSection, MoreThan, Navbar, ProviderProfiles } from "@/components";

import React from "react";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProviderProfiles />
      <MoreThan />
    </main>
  );
}
