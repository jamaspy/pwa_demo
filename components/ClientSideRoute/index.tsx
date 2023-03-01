"use client";
import Link from "next/link";
import React from "react";
interface ClientSideRouteProps {
  children: React.ReactNode;
  route: string;
}

export const ClientSideRoute = ({ children, route }: ClientSideRouteProps) => {
  return (
    <Link href={route} className="flex">
      {children}
    </Link>
  );
};
