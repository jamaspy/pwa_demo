import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
export const Navbar = () => {
  return (
    <nav className="p-4 bg-[#004E5B]">
      <Desktop />
      <Mobile />
    </nav>
  );
};
