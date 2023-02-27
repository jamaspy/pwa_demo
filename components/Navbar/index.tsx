import { Button } from "@/components";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const Navbar = () => {
  return (
    <nav className="p-4 bg-white flex flex-row justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="heyhubble logo" width={100} />
      </Link>
      <div className="flex flex-row">
        <div className="relative group">
          <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
            <span>Looking for Providers</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="flex flex-col justify-between p-4 bg-white shadow-lg">
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Participants
              </Link>
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Support Coordinators
              </Link>
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="relative group">
          <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
            <span>Provider Services</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="px-2 pt-2 pb-4 bg-white shadow-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <p>dropdown content here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
            <span>NDIS Help</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="px-2 pt-2 pb-4 bg-white shadow-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <p>dropdown content here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
            <span>Contact</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block  transition-all duration-200 ease-in-out">
            <div className="px-2 pt-2 pb-4 bg-white shadow-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <p>dropdown content here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden flex-col md:flex-row lg:flex">
        <Button
          label="Request a service"
          variant="is-secondary"
          className="mr-4"
        />
        <Button label="Login" variant="is-secondary" className="mr-4" />
        <Button label="Signup" variant="is-primary" className="" />
      </div>
    </nav>
  );
};
