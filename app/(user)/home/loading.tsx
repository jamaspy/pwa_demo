import React from "react";
import { GiAstronautHelmet } from "react-icons/gi";
const Loading = () => {
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center flex-col">
      <GiAstronautHelmet className="text-6xl text-blue-600 animate-ping" />
      <p className="text-blue-800">Fetching things from space!</p>
    </div>
  );
};

export default Loading;
