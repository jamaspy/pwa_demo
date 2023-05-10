import React from "react";

const _offline = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p>You are currently offline</p>
      <p>
        As you have no visited this page before we are unable to show it to you
        just now
      </p>
      <p>
        Next time you are online be sure to visit so we can store it for later
      </p>
    </div>
  );
};

export default _offline;
