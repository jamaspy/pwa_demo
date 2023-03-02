import { Button, Resource } from "@/components";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";

const resources = [
  {
    id: 1,
    icon: <MdOndemandVideo className="text-slate-800" />,
    type: "Webinar Recording",
    title: "NDIS Therapy Report Writing Essentials",
    description: [
      "NDIS therapy reports require a whole new level of detail, analysis and specific knowledge of the scheme. Your NDIS therapy reports must be written with NDIS requirements in mind. Doing so could mean adding hours of much-needed support or assistive technology into the plans of participants you work with. Learn everything you need to write effective, comprehensive NDIS therapy reports in this FREE educational webinar brought to you by the team at HeyHubble.",
    ],
    href: "https://campaigns.heyhubble.com.au/en-au/ndis-therapy-report-writing-essentials?_gl=1*177jhpk*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTc1OC4wLjAuMA..",
  },
  {
    id: 2,
    icon: <MdOndemandVideo className="text-slate-800" />,
    type: "Webinar Recording",
    title:
      "Breaking into the NDIS space: Growing your allied health or support worker business in Sydney",
    description: [
      "The NDIS presents a huge opportunity for quality disability service providers to grow their businesses. However, breaking into the space and navigating the NDIS as a provider can be challenging for early-stage businesses. Sydney is an area of growing demand.",
      "In this webinar specifically aimed at Sydney-based allied health and support worker businesses, we’ll show you how to grow your business and reach the people who need you most. Understand the NDIS landscape in Sydney and learn what makes a quality provider in the space.",
    ],
    href: "https://campaigns.heyhubble.com.au/en-au/breaking-into-the-ndis-space-in-sydney?_gl=1*177jhpk*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTc1OC4wLjAuMA..",
  },
  {
    id: 3,
    icon: <FiBookOpen className="text-slate-800" />,
    type: "Guide",
    title: "A guide to growing your allied health business in the NDIS",
    description: [
      "The NDIS offers an exciting opportunity for allied health businesses to grow sustainably and meaningfully. This guide will take you through some of the essential foundations to start growing your client base, including tips on how to:",
    ],
    href: "https://campaigns.heyhubble.com.au/guide-growing-your-allied-health-business-in-the-ndis-heyhubble?_gl=1*177jhpk*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTc1OC4wLjAuMA..",
  },
  {
    id: 4,
    icon: <FiBookOpen className="text-slate-800" />,
    type: "Guide",
    title: "5 Steps to help you register as an NDIS provider",
    description: [
      "Are you a provider who works with NDIS participants, or are you interested in doing so? You may be wondering if you should become NDIS-registered. There are a few reasons why you might choose to become registered with the NDIS Quality and Safeguards Commission, however, you may need help with how to go about it.",
    ],
    href: "https://campaigns.heyhubble.com.au/en-au/5-steps-to-help-you-register-as-an-ndis-provider?_gl=1*177jhpk*_ga*MzAxNjUxMjM2LjE2NzcxNDQ0MTY.*_ga_M3815N40GV*MTY3Nzc0NzY5NC42LjEuMTY3Nzc1MTc1OC4wLjAuMA..",
  },
];

const ProviderResources = () => {
  return (
    <section className="p-8">
      <h1 className="font-bold text-4xl leading-snug">Provider Resources</h1>
      <p className="mb-8">
        Guides and more by the HeyHubble team to help you grow your NDIS
        business
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <div className="w-full bg-[#53E6CC] text-slate-900 my-12 px-4">
        <div className="flex flex-col items-center justify-center h-full py-12">
          <h1 className="text-4xl font-bold mb-4">
            Get started with HeyHubble
          </h1>
          <p>
            Whether you are an NDIS participant, or a service provider, our
            friendly team is happy to help you!
          </p>
          <div className="flex flex-col md:flex-row mt-8 items-center">
            <Button
              label="Get Started"
              variant="is-primary"
              className="mr-0 mb-4 md:mr-4 md:mb-0"
            />
            <Button label="Request a service" variant="is-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderResources;
