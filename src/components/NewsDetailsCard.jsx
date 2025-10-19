// src/components/NewsDetailsCard.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewsDetailsCard({ news }) {
  const {
    title,
    date,
    tags,
    image_url,
    details,
  } = news || {};

  return (
    <div className="w-full bg-base-100 p-4 md:p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-3">Dragon News</h2>

      {/* Card */}
      <div className="card w-full bg-base-100 shadow-md rounded-xl overflow-hidden px-[25px] py-[50px]">
        {/* Image */}
        <figure className="w-full h-[500px]">
          <img
            src={image_url}
            alt={title}
            className="w-full object-cover p-[25px]"
          />
        </figure>

        {/* Content */}
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title text-md md:text-3xl text-[#474747] font-bold leading-snug">
            {title}
          </h2>

          {/* Date & Tags */}
          <p className="text-sm text-accent">
            {date} |{" "}
            <span className="text-blue-600 font-medium cursor-pointer">
              {tags?.join(", ")}
            </span>
          </p>

          {/* Description */}
          <p className="text-lg text-accent leading-relaxed mt-2">
            {details?.length > 5000
              ? `${details.slice(0, 5000)}...`
              : details}
          </p>

          {/* Button */}
          <div className="pt-4">
            <Link to={`/category/${news?.category_id}`} className="btn btn-secondary btn-sm md:btn-md text-white flex items-center gap-2">
              <FaArrowLeft />
              All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
