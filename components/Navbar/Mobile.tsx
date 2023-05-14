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
const ListItemLink = ({ href, label, closeMenu }: LinkListItemProps) => {
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
        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center border-tea-green shadow">
          <p className="text-lg text-tea-green font-black">NMD</p>
        </div>
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
          className="z-30 flex items-center cursor-pointer w-8 h-8 text-white"
        />
      )}

      <div
        className={`flex flex-col justify-center px-4 top-0 right-0 w-[50%] bg-gradient-to-b from-[#004E5B] to-[#24383c] text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ul className="text-xl">
          <ListItemLink href={"/"} label="Home" closeMenu={setShowSidebar} />
          <ListItemLink
            href={"/blog"}
            label="Information"
            closeMenu={setShowSidebar}
          />
          <ListItemLink
            href={"/contact"}
            label="Contact"
            closeMenu={setShowSidebar}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
