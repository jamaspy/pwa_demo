import { Button } from "@/components";
import Link from "next/link";
import React from "react";
interface ResourceProps {
  icon: React.ReactNode;
  type: string;
  title: string;
  description: string[];
  href: string;
}

export const Resource = ({
  icon,
  type,
  title,
  description,
  href,
}: ResourceProps) => {
  return (
    <div className="bg-purple-100 flex-1 p-4 flex flex-col justify-between rounded-tl-3xl rounded-br-3xl shadow">
      <div className="flex flex-row items-center mb-8">
        <div className="rounded-full bg-[#9bffed] w-8 h-8 flex items-center justify-center mr-2">
          {icon}
        </div>
        <p className="font-medium text-slate-800">{type}</p>
      </div>
      <div className="mb-4 h-full flex-1">
        <p className="text-xl font-medium mb-4 text-slate-800">{title}</p>
        {description.map((des) => (
          <p key={des} className="text-slate-800 mb-2">
            {des}
          </p>
        ))}
      </div>
      <Link href={href}>
        <Button
          label={type === "Webinar Recording" ? "Watch" : "Read"}
          variant="is-secondary"
        />
      </Link>
    </div>
  );
};
