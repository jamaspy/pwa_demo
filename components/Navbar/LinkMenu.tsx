import Link from "next/link";
import React from "react";
interface ItemProps {
  name: string;
  href: string;
}

interface LinkMenuProps {
  items: ItemProps[];
  index: number;
}

const LinkMenu = ({ items }: LinkMenuProps) => {
  return (
    <div className="bg-white rounded flex flex-col">
      {items.map((item: ItemProps, index: number) => (
        <Link key={index} href={item.href}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkMenu;
