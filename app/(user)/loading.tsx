import React from "react";
import { GiAstronautHelmet } from "react-icons/gi";
const Loading = () => {
  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center flex-col">
      <GiAstronautHelmet className="text-6xl text-purple-600 animate-ping mb-12" />
      <p className="text-purple-800">Fetching things from space!</p>
    </div>
  );
};

export default Loading;
