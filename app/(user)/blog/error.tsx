"use client";
import React from "react";
import { IoSadOutline } from "react-icons/io5";
const Error = () => {
  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center flex-col">
      <IoSadOutline className="text-6xl text-red-600" />
      <p className="text-red-800">Well, thats embarrassing!</p>
      <p className="text-red-800">
        Error fetching blogs, please try refreshing
      </p>
    </div>
  );
};

export default Error;
