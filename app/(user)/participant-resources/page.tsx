import { Button, Resource } from "@/components";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

const resources = [
  {
    id: 1,
    icon: <FiBookOpen className="text-slate-800" />,
    type: "Guide",
    title: "Your guide to NDIS allied health providers and what they do",
    description: [
      "What is an allied health provider, and can I use my NDIS funding to see one? This guide will provide a breakdown of the various allied health professions that your 'Capacity Building' budget could cover in your NDIS plan. Read this guide to learn about some typical allied health providers and what they do. At the bottom of each page, check the category against your NDIS plan to see if you can access that support.",
    ],
    href: "https://campaigns.heyhubble.com.au/your-guide-to-ndis-allied-health-providers-and-what-they-do?_gl=1*muowa1*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTExNS4wLjAuMA..",
  },
  {
    id: 2,
    icon: <HiOutlinePhotograph className="text-slate-800" />,
    type: "Infographic",
    title: "FAQs: Choosing and working with NDIS providers",
    description: [
      "Building your provider team is an important part of your NDIS journey. If you're working with providers for the first time, you might be wondering what to expect. We've collected some frequently asked questions about choosing and working with providers.",
    ],
    href: "https://campaigns.heyhubble.com.au/guide-frequently-asked-questions-choosing-and-working-with-ndis-providers?_gl=1*gxvohx*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTM2My4wLjAuMA..",
  },
  {
    id: 3,
    icon: <FiBookOpen className="text-slate-800" />,
    type: "Guide",
    title: "Sample NDIS Plan: Explained",
    description: [
      "Get an easy understanding of you child's plan with the help of this sample NDIS plan. Each page of the plan contains notes on key sections, NDIS terms and useful pointers to put your child's plan into action.",
    ],
    href: "https://campaigns.heyhubble.com.au/sample-ndis-plan-explained?_gl=1*or26fz*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTM2My4wLjAuMA..",
  },
];

const ParticipantResources = () => {
  return (
    <section className="p-8">
      <h1 className="font-bold text-4xl leading-snug">Participant Resources</h1>
      <p className="mb-8">
        Guides and more by the HeyHubble team to help you navigate your NDIS
        journey.
      </p>
      <div className="flex flex-row gap-4 flex-wrap">
        {resources.map((resource) => {
          return (
            <Resource
              key={resource.id}
              icon={resource.icon}
              type={resource.type}
              title={resource.title}
              description={resource.description}
              href={resource.href}
            />
          );
        })}
      </div>
      <div className="w-full bg-[#53E6CC] text-slate-900 my-12">
        <div className="flex flex-col items-center justify-center h-full py-12">
          <h1 className="text-4xl font-bold mb-4">
            Get started with HeyHubble
          </h1>
          <p>
            Whether you are an NDIS participant, or a service provider, our
            friendly team is happy to help you!
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Button label="Get Started" variant="is-primary" className="mr-4" />
            <Button label="Request a service" variant="is-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantResources;
