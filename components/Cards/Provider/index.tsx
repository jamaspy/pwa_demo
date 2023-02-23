import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
const Chip = ({ label }: any) => {
  return (
    <div className="bg-purple-100 text-purple-900 rounded-full px-2 py-1 mr-2 mb-2 text-xs">
      {label}
    </div>
  );
};
const LocationChip = ({ label }: any) => {
  return (
    <div className="bg-purple-100 px-2 py-1 bg-opacity-80 text-purple-900 rounded-full mr-2 text-xs flex flex-row items-center justify-start absolute bottom-4 left-4">
      <MapPinIcon className="h-4 w-4 mr-2" />
      {label}
    </div>
  );
};

export const ProviderCard = ({
  providerImage,
  providerName,
  description,
  location,
  tags = [],
}: any) => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
      <div className="">
        <div className="relative">
          <Image
            src={providerImage}
            alt={providerName}
            className="rounded-xl"
          />
          <LocationChip label={location} />
        </div>
        <div className="my-4 text-2xl font-bold text-purple-600 flex flex-col">
          {providerName}
        </div>
      </div>
      <div className="h-full flex items-start">{description}</div>
      <div className="flex flex-row flex-wrap mt-4">
        {tags.map((tag: any) => (
          <Chip key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProviderCard;
