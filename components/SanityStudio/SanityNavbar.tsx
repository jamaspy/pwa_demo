import Link from "next/link";
import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
export const SanityNavbar = (props: any) => {
  const { renderDefault } = props;
  return (
    <div>
      <div className="flex flex-row items-center justify-between p-2">
        <div className="">
          <Link
            href="/"
            className="flex flex-row text-purple-600 items-center border-none p-4"
          >
            <VscDebugStepBack className="w-8 h-8 mr-2" /> Back to Website
          </Link>
        </div>
        <div className=" border-red-400 border-2 rounded-md p-2 text-red-400">
          <p className="font-bold">This can be a message</p>
        </div>
      </div>
      {renderDefault(props)}
    </div>
  );
};
