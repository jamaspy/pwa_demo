"use client";
import classNames from "classnames";
import React from "react";
interface TabCardProps {
  index: number;
  heading: string;
  description: string;
  selectedTab: number | undefined;
  setSelectedTab: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const TabCard = ({
  heading,
  description,
  index,
  selectedTab,
  setSelectedTab,
}: TabCardProps) => {
  return (
    <div
      onClick={() => setSelectedTab(index)}
      className={classNames(
        {
          "border-l-purple-600 shadow-md ": selectedTab === index,
          "border-l-white opacity-50": selectedTab !== index,
        },
        "bg-white rounded-2xl p-8 my-8 border-l-8 transition-all duration-300 ease-in-out cursor-pointer "
      )}
    >
      <p className="text-3xl font-bold mb-4">{heading}</p>
      <p>{description}</p>
    </div>
  );
};
