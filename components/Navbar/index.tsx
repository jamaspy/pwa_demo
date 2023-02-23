import { Button } from "@/components";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import React from "react";
export const Navbar = () => {
  return (
    <nav className="p-4 bg-white flex flex-row justify-between items-center">
      <Image src={Logo} alt="heyhubble logo" width={200} />
      <div className="">
        <ul className="flex flex-row gap-8">
          <li className="text-gray-500">About</li>
          <li className="text-gray-500">How it works</li>
          <li className="text-gray-500">Pricing</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row">
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
