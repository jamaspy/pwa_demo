import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  position: string;
  image: StaticImageData;
  content: string;
}

export const TestimonialCard = ({
  name,
  position,
  image,
  content,
}: TestimonialCardProps) => {
  return (
    <div
      style={{ minHeight: "300px" }}
      className="relative flex-1 flex flex-col p-4 text-sm items-center justify-between bg-wave max-w-xs bg-cover bg-center rounded-tl-3xl rounded-br-3xl shadow"
    >
      <p>
        <FaQuoteLeft className="w-4 h-4 inline mr-2 text-[#53E6CC]" />
        {content}
        <FaQuoteRight className="w-4 h-4 inline ml-2 text-[#53E6CC]" />
      </p>
      <div className="h-20 w-20 rounded-full border-4 border-[#FFF9F0] bottom-10 absolute bg-[#FFF9F0] overflow-hidden">
        <Image src={image} alt={name} fill />
      </div>

      <p className=" text-[#FFF9F0] text-xl font-bold absolute bottom-2">
        {name}
      </p>
      {/* <p className=" text-[#FFF9F0] text-xl">{position}</p> */}
    </div>
  );
};
