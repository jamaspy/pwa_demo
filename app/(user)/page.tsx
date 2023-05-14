import {
  HeroSection,
  MoreThan,
  PeopleNumbers,
  Pricing,
  ProviderProfiles,
  SimpleSteps,
  Testimonials,
} from "@/components";

import React from "react";
import { Button } from "@/components";
import Link from "next/link";
export default function Home() {
  return (
    <section className="flex h-full items-center justify-center bg-[#FFF9F0]">
      <div className="text-xl mt-24 max-w-md text-center">
        <p className="text-2xl font-semibold text-center mb-2">
          Welcome To Knowledge Base
        </p>
        <p className="text-center">
          The RrhoidCath® wearable pain management device can improve patient
          care and provide a suitable alternative to regular opioid use in
          haemorrhoidectomy postoperative treatment.
        </p>
        <Link href="/blog">
          <Button label="Get Started" variant="is-primary" className="mt-4" />
        </Link>
      </div>
    </section>
  );
}
