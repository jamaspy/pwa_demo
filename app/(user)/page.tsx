import {
  HeroSection,
  MoreThan,
  Navbar,
  PeopleNumbers,
  Pricing,
  ProviderProfiles,
  SimpleSteps,
  Testimonials,
} from "@/components";

import React from "react";
export default function Home() {
  return (
    <main className="bg-[#FFF9F0]">
      <HeroSection />
      <ProviderProfiles />
      <MoreThan />
      <PeopleNumbers />
      <SimpleSteps />
      <Testimonials />
      <Pricing />
    </main>
  );
}
