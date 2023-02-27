import { ProviderCard } from "@/components";
import { providerProfiles } from "@/content/provider_profiles";
import React from "react";

export const ProviderProfiles = () => {
  return (
    <section
      className="bg-purple-100 w-full p-40"
      style={{ clipPath: "polygon(0 0%, 100% 0, 100% 88%, 0 100%)" }}
    >
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-8 p-8">
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
