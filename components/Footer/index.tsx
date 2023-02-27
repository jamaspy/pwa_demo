import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-purple-100 p-8 w-full">
      <div className="container mx-auto flex flex-col items-center justify-around w-full ">
        {/* SOCIAL */}
        <div className="flex flex-col items-center justify-center w-full mb-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="heyhubble logo"
              width={100}
              className="mb-4"
            />
          </Link>
          <div className="flex flex-row items-center justify-center w-full text-xl text-purple-600">
            <FaFacebook className="" />
            <FaInstagram className="mx-4" />
            <FaTwitter className="" />
          </div>
        </div>
        {/* LINKS */}
        <div className="flex flex-row items-center justify-around w-full">
          <div className="">
            <p className="font-semibold">Related Brands</p>
            <ul>
              <li>T-Shirt Ventures</li>
              <li>Provider Choice</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold">NDIS Providers</p>
            <ul>
              <li>T-Shirt Ventures</li>
              <li>Provider Choice</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold">Subscribe</p>
            <ul>
              <li>T-Shirt Ventures</li>
              <li>Provider Choice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
