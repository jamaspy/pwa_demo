import React from "react";
import { GiCuckooClock } from "react-icons/gi";
import { TbBuildingSkyscraper, TbMoodSmile } from "react-icons/tb";
export const PeopleNumbers = () => {
  return (
    <div
      className="w-full bg-purple-100"
      style={{ clipPath: "polygon(0 18%, 100% 0, 100% 88%, 0 100%)" }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center py-60">
        <p className="font-bold text-5xl leading-snug mb-8 text-slate-800">
          Real people connecting you with real people
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-white rounded-2xl flex items-center justify-between flex-col p-4 flex-1 shadow">
            <TbBuildingSkyscraper className="text-purple-600 text-5xl text-center mb-4" />
            <p className="font-bold text-xl text-purple-600">352 suburbs</p>
            <p className="text-base text-center mt-2">
              Available in 352 suburbs in Perth
            </p>
          </div>
          <div className="bg-white rounded-2xl flex items-center justify-between flex-col p-4 flex-1 shadow">
            <GiCuckooClock className="text-purple-600 text-5xl text-center mb-4" />
            <p className="font-bold text-xl text-purple-600">24 hours</p>
            <p className="text-base text-center mt-2">
              On average a provider per request found within 24 hours
            </p>
          </div>
          <div className="bg-white rounded-2xl flex items-center justify-between flex-col p-4 flex-1 shadow">
            <TbMoodSmile className="text-purple-600 text-5xl text-center mb-4" />
            <p className="font-bold text-xl text-purple-600">
              250+ participants
            </p>
            <p className="text-base text-center mt-2">
              Over 250 participants are now receiving quality services in Perth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
