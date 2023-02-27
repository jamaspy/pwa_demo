import { Button } from "@/components/Button";
import Step1 from "@/public/stepicons/step1.svg";
import Step2 from "@/public/stepicons/step2.svg";
import Step3 from "@/public/stepicons/step3.svg";
import Step4 from "@/public/stepicons/step4.svg";
import Image from "next/image";
import React from "react";

const Box = ({ number, heading, description, image }: any) => {
  return (
    <div className="relative border-2 border-purple-600 rounded-tl-3xl rounded-br-3xl flex items-center justify-between flex-col p-4 flex-1 shadow">
      <div className="rounded-full w-16 h-16 bg-[#FFF9F0] flex items-center justify-center absolute -top-10">
        <Image src={image} alt="step 1" />
      </div>
      <p className="font-bold text-xl mt-8 mb-4 ">
        <span className="font-bold text-purple-600 text-2xl">{number}. </span>
        {heading}
      </p>
      <p className="h-full">{description}</p>
    </div>
  );
};
export const SimpleSteps = () => {
  return (
    <div className="w-full bg-[#FFF9F0] flex flex-col items-center py-12">
      <p className="font-bold text-5xl leading-snug mb-8 text-slate-800 text-center">
        Here are the <span className="bg-[#53E6CC]">simple steps</span>{" "}
        explained easily.
      </p>
      <div className="container mx-auto flex flex-col justify-center items-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Box
            number={1}
            image={Step1}
            heading="Submit a request for your ideal provider"
            description="Submit a service request and a member of our HeyHubble team will be in touch to learn all about you, your plan and your specific needs."
          />

          <Box
            number={2}
            image={Step2}
            heading="We reach out to providers on your behalf"
            description="Based on the information you give us, we’ll contact providers in your area, check for availability and ensure their expertise fits your needs."
          />

          <Box
            number={3}
            image={Step3}
            heading="You can review the providers we find for you"
            description="We send you the details of providers who offer services that meet your needs. Out of the options we send you, you get to choose which provider is right for you."
          />
          <Box
            number={4}
            image={Step4}
            heading="The providers you choose will contact you"
            description="Once you’ve confirmed your interest, the provider will reach out to you directly to discuss your request."
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <Button label="Get Started" variant="is-primary" className="mr-4" />
        <Button label="Request a service" variant="is-secondary" />
      </div>
    </div>
  );
};
