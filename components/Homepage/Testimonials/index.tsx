import { TestimonialCard } from "@/components";
import person1 from "@/public/staff/p1.jpeg";
import person2 from "@/public/staff/p2.png";
import person3 from "@/public/staff/p3.jpeg";
import React from "react";
export const Testimonials = () => {
  return (
    <div
      className="bg-purple-100 p-36 flex flex-col gap-8 items-center justify-center"
      style={{ clipPath: "polygon(0 18%, 100% 0, 100% 88%, 0 100%)" }}
    >
      <p className="font-bold text-5xl leading-snug mb-8 text-slate-800">
        Your happiness is our happiness.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <TestimonialCard
          name="Harry Bourke"
          position="Position"
          content="I recently spoke to a mother who has two children on the scheme who told us she heard laughter in her house for the first time in years after connecting with an amazing provider. Making these types of powerful connections happen is one of the many reasons I love working with HeyHubble."
          image={person1}
        />
        <TestimonialCard
          name="Rachel Keir"
          position="Position"
          content="HeyHubble helped connect a 30 year old participant with 5 new providers in 6 months, enabling him to have full choice and control over his NDIS services. I feel so lucky that I’ve been able to walk alongside him on his NDIS journey and see his confidence in speaking up for his needs grow."
          image={person2}
        />
        <TestimonialCard
          name="Brittany Scotman"
          position="Position"
          content="HeyHubble came across a small provider in the early days of their business who were offering bespoke and unique style supports. Using HeyHubble they spread the word about their business, and have had to hire more staff to keep up with the demand. This has meant that more participants can access their much needed services."
          image={person3}
        />
      </div>
      <div className="container mx-auto text-xl my-12">
        <p className="mb-4">
          Founded by the same hearts behind Provider Choice, HeyHubble shares
          the same vision to make navigating the NDIS less overwhelming with the
          support of our team of experts.
        </p>
        <p className="">
          We’re here to help make connecting you with the right providers easier
          and less time consuming. Say ‘hey’ 👋 to our friendly team today to
          learn more.
        </p>
      </div>
    </div>
  );
};
