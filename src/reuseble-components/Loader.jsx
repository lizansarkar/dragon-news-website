import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-base-100">
      <span className="loading loading-dots w-[150px] h-[150px] drop-shadow-lg"></span>
    </div>
  );
}
