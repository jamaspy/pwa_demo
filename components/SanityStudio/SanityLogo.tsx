import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const SanityLogo = () => {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="heyhubble logo"
        width={200}
        className="mr-8 py-4"
      />
    </Link>
  );
};
