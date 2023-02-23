import { Button } from "@/components";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import React from "react";
export const Navbar = () => {
  return (
    <nav className="p-4 bg-white flex flex-row justify-between items-center">
      <Image src={Logo} alt="heyhubble logo" width={100} />

      <ul className="hidden lg:flex flex-row gap-8">
        <li className="text-slate-500">Looking for Providers</li>
        <li className="text-slate-500">Provider Services</li>
        <li className="text-slate-500">NDIS Help</li>
        <li className="text-slate-500">Contact</li>
      </ul>

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
