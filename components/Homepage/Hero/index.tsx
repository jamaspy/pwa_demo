import { Button } from "@/components";

import topSVG from "@/public/top-left-illustration.svg";
import bottomSVG from "@/public/top-right-illustration.svg";
import people from "@/public/welcome.svg";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen w-full">
      <div className="flex-1 p-24 flex flex-col items-center justify-center bg-[#FFF9F0] relative">
        <Image
          src={topSVG}
          alt="man on laptop"
          width={300}
          className="absolute top-12 left-6 opacity-50"
        />
        <div className="max-w-xl z-10">
          <p className="font-bold text-6xl leading-snug mb-8">
            <span className="bg-purple-600 text-white">Connect</span> with your
            ideal provider, the way you want to.
          </p>
          <p>
            We help NDIS participants find quality providers who match their
            individualised needs through our easy-to-use online marketplace.
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Button label="Get Started" variant="is-primary" className="mr-4" />
            <Button label="Request a service" variant="is-secondary" />
          </div>
        </div>
        <Image
          src={bottomSVG}
          alt="man on laptop"
          width={300}
          className="absolute bottom-24 right-6 opacity-50"
        />
      </div>
      <div className="from-purple-800 to-purple-100 relative bg-gradient-to-b flex-1">
        <Image src={people} fill alt="man on laptop" />
      </div>
    </section>
  );
};

export default HeroSection;
