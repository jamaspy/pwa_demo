import { ProviderCard } from "@/components";
import { providerProfiles } from "@/content/provider_profiles";
import React from "react";

export const ProviderProfiles = () => {
  return (
    <section className="bg-purple-100 w-full">
      <div className="grid-cols-4 grid gap-8 p-8">
        {providerProfiles.map((profile) => (
          <ProviderCard
            key={profile.providerName}
            providerImage={profile.providerImage}
            providerName={profile.providerName}
            description={profile.description}
            location={profile.location}
            tags={profile.tags}
          />
        ))}
      </div>
    </section>
  );
};
