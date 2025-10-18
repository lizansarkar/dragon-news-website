import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="my-5 flex flex-col gap-3 text-center">
      <h2 className="font-bold">Find Us On</h2>

      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-[#1A77F2] text-white border-[#ffffff] join-item justify-start py-6"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-[#1A77F2] text-white border-[#ffffff] join-item justify-start py-6"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-[#1A77F2] text-white border-[#ffffff] join-item justify-start py-6"><FaInstagram></FaInstagram> Instragram</button>
        </div>
      </div>
    </div>
  );
}
