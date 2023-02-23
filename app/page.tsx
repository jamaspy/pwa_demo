import {
  HeroSection,
  MoreThan,
  Navbar,
  PeopleNumbers,
  ProviderProfiles,
  SimpleSteps,
} from "@/components";

import React from "react";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProviderProfiles />
      <MoreThan />
      <PeopleNumbers />
      <SimpleSteps />
    </main>
  );
}
