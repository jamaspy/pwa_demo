import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-purple-600 p-8 w-full mt-8">
      <div className="container mx-auto flex flex-col items-center justify-around w-full ">
        {/* SOCIAL */}
        <div className="flex flex-col items-center justify-center w-full mb-8">
          <Link href="/">
            <p className="text-naples-yellow font-bold italic mb-2">NMD Inc.</p>
          </Link>
          <div className="flex flex-row items-center justify-center w-full text-xl text-naples-yellow">
            <FaFacebook className="" />
            <FaInstagram className="mx-4" />
            <FaTwitter className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
