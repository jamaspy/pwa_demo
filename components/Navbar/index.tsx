import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
export const Navbar = () => {
  return (
    <nav className="p-4 bg-white">
      <Desktop />
      <Mobile />
    </nav>
  );
};
