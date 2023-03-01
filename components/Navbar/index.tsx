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
            <div className="flex flex-col justify-between p-4 bg-white shadow-lg">
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Providers
              </Link>
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
            <span>NDIS Help</span>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="flex flex-col justify-between p-4 bg-white shadow-lg">
              <Link href="/blog" className="hover:text-purple-600 my-2">
                Blog
              </Link>
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Participant Resources
              </Link>
              <Link href="/participants" className="hover:text-purple-600 my-2">
                Provider Resources
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link href="/contact">
            <button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none ">
              <span>Contact</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden flex-col md:flex-row lg:flex">
        <Button
          label="Request a service"
          variant="is-secondary"
          className="mr-4"
        />
        <Link href="https://app.heyhubble.com.au/landing/login">
          <Button label="Login" variant="is-secondary" className="mr-4" />
        </Link>
        <Link href="https://app.heyhubble.com.au/landing/signup?_gl=1*14kdg9z*_ga*MTg3MzExMzE1NC4xNjc1Mzk2NTk0*_ga_M3815N40GV*MTY3NzU2NTA2OS4xNS4xLjE2Nzc1NjY5NjguMC4wLjA.">
          <Button label="Signup" variant="is-primary" className="" />
        </Link>
      </div>
    </nav>
  );
};
