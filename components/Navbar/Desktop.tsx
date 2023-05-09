import { Button } from "@/components";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Desktop = () => {
  return (
    <div className="hidden lg:flex flex-row justify-between items-center">
      <Link href="/">
        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-tea-green shadow">
          <p className="text-lg text-tea-green font-black">NMD</p>
        </div>
      </Link>
      <div className="flex flex-row text-tea-green w-full justify-center gap-8">
        <Link href="/home">Home</Link>
        <Link href="/blog">Articles</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* <div className="hidden flex-col md:flex-row lg:flex">
        <Link href="https://app.heyhubble.com.au/landing/login">
          <Button label="Login" variant="is-secondary" className="mr-4" />
        </Link>
        <Link href="https://app.heyhubble.com.au/landing/signup?_gl=1*14kdg9z*_ga*MTg3MzExMzE1NC4xNjc1Mzk2NTk0*_ga_M3815N40GV*MTY3NzU2NTA2OS4xNS4xLjE2Nzc1NjY5NjguMC4wLjA.">
          <Button label="Signup" variant="is-primary" className="" />
        </Link>
      </div> */}
    </div>
  );
};

export default Desktop;
