import React from "react";
import { GiCuckooClock } from "react-icons/gi";
import { TbBuildingSkyscraper, TbMoodSmile } from "react-icons/tb";

const Box = ({ number, heading, description }: any) => {
  return (
    <div className="bg-white rounded-2xl flex items-center justify-between flex-col p-4 flex-1 shadow">
      <p className="font-bold">
        <span className="text-purple-600">{number}: </span>
        {heading}
      </p>
      <p>{description}</p>
    </div>
  );
};
export const SimpleSteps = () => {
  return (
    <div className="w-full bg-[#FFF9F0] flex flex-row">
      <div className="container mx-auto flex flex-col justify-center items-center p-8">
        <p className="font-bold text-5xl leading-snug mb-8 text-slate-800">
          Here are the simple steps explained easily.
        </p>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center p-8">
        <div className="grid grid-cols-2 gap-4">
          <Box
            number={1}
            heading="Submit a request for your ideal provider"
            description="Submit a service request and a member of our HeyHubble team will be in touch to learn all about you, your plan and your specific needs."
          />
          <Box
            number={1}
            heading="Submit a request for your ideal provider"
            description="Submit a service request and a member of our HeyHubble team will be in touch to learn all about you, your plan and your specific needs."
          />
          <Box
            number={1}
            heading="Submit a request for your ideal provider"
            description="Submit a service request and a member of our HeyHubble team will be in touch to learn all about you, your plan and your specific needs."
          />
          <Box
            number={1}
            heading="Submit a request for your ideal provider"
            description="Submit a service request and a member of our HeyHubble team will be in touch to learn all about you, your plan and your specific needs."
          />
        </div>
      </div>
    </div>
  );
};
