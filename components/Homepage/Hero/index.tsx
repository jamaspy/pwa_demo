import { Button } from "@/components";

import people from "@/public/klMain.png";
import topSVG from "@/public/top-left-illustration.svg";
import bottomSVG from "@/public/top-right-illustration.svg";
import Image from "next/image";
import React from "react";

// Business Name Notes
// - ScaleHer

export const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row min-h-screen w-full bg-[#FFF9F0]">
      <div className="flex-1 p-24 flex flex-col items-center justify-center  relative">
        <div className="max-w-xl z-10">
          <p className="font-bold text-6xl leading-snug mb-8">
            The <span className="bg-tea-green text-gunmetal">Clark</span>{" "}
            Company
          </p>
          <p>
            Challenging the Future of Technology Recruitment. Resources and Advocacy for
            Scaling Businesses and Female Leaders in a Diverse Workplace
          </p>
          <div className="flex flex-col md:flex-row mt-8">
            <Button label="Get Started" variant="is-primary" className="mr-4" />
            <Button label="Request a service" variant="is-secondary" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end bg-gradient-to-b from-purple-600 to-purple-100 w-full flex-1">
        <Image src={people} alt="man on laptop" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
