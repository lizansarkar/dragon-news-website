import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details, tags } = news;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 max-w-xl mx-auto mb-6">
      {/* Author Info */}
      <div className="flex justify-between items-center px-4 py-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div className="">
            <h2 className="text-sm font-semibold text-gray-800">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h1 className="text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h1>
      </div>

      {/* Thumbnail */}
      <div className="mt-3">
        <img
          src={thumbnail_url}
          alt="news-thumbnail"
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-md text-accent">
        <p className="leading-relaxed">
          {details.length > 200
            ? `${details.slice(0, 200)}...`
            : details}
          <Link to={`/news-detail/${id}`} className="text-orange-500 font-semibold cursor-pointer">
            {" "}Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-3 border-t border-gray-100">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;