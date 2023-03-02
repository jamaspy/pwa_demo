import { Button } from "@/components";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

interface LinkListItemProps {
    href: string;
    label: string;
    closeMenu: (value: boolean) => void;
}
const ListItemLink = ({ href, label, closeMenu }:LinkListItemProps) => {
  return (
    <li className="hover:text-purple-600 my-2">
      <Link href={href} onClick={() => closeMenu(false)}>
        {label}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-row w-full lg:hidden items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="heyhubble logo" width={100} />
      </Link>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MdOutlineClose className="w-8 h-8" />
        </button>
      ) : (
        <CgMenuGridO
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-30 flex items-center cursor-pointer w-8 h-8 text-purple-600"
        />
      )}

      <div
        className={`flex flex-col justify-center px-4 top-0 right-0 w-[50vw] bg-gradient-to-b from-purple-900 to-purple-600 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="mb-8">
          <p className="font-bold text-[#9bffed]">Looking For Providers</p>
          <ul>
            <ListItemLink
              href={"/participants"}
              label="Participants"
              closeMenu={setShowSidebar}
            />
            <li>Support Coordinators</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="font-bold text-[#9bffed]">Provider Services</p>
          <ul>
            <li>Participants</li>
            <li>Support Coordinators</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="font-bold text-[#9bffed]">NDIS Help</p>
          <ul>
            <ListItemLink
              href={"/blog"}
              label="Blog"
              closeMenu={setShowSidebar}
            />
            <li>Support Coordinators</li>
            <li>Get Started</li>
          </ul>
        </div>
        <div className="">
          <p>Contact</p>
        </div>
        <div className="flex flex-col mt-12">
          <button className="mt-4 border-[#9bffed] rounded-xl text-[#9bffed] border">
            Request a Service
          </button>
          <button className="mt-4 border-[#9bffed] rounded-xl text-[#9bffed] border">
            SignUp
          </button>
          <button className="mt-4 border-[#9bffed] rounded-xl text-[#9bffed] border">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
