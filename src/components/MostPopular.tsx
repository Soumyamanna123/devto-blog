import React, { useState } from "react";
import useMostPopularPost from "../hooks/useMostPopularPost";
import { Link } from "react-router-dom";

const MostPopular = () => {
  const [days, setDays] = useState(7);
  const { post, loading } = useMostPopularPost(days);

  if (!post) return <></>;

  const mostpopularpost = post;

  const {
    cover_image,
    title,
    description,
    user,
    published_at,
    reading_time_minutes,
  } = mostpopularpost;

  return (
    <div className="my-10">
      <div className="flex flex-col gap-2 pb-4">
        <h2 className="text-3xl font-bold ">Most Popular Post In Last </h2>
        <div>
          <ul className="inline-flex gap-2">
            <li
              className={`border rounded-full px-4 py-1 text-xs cursor-pointer ${
                days === 7 ? "bg-blue-100" : ""
              }`}
              onClick={() => setDays(7)}
            >
              #7 days
            </li>
            <li
              className={`border rounded-full px-4 py-1 text-xs cursor-pointer ${
                days === 15 ? "bg-blue-100" : ""
              }`}
              onClick={() => setDays(15)}
            >
              #15 days
            </li>
            <li
              className={`border rounded-full px-4 py-1 text-xs cursor-pointer ${
                days === 30 ? "bg-blue-100" : ""
              }`}
              onClick={() => setDays(30)}
            >
              #30 days
            </li>
          </ul>
        </div>
      </div>

      {loading ? (
        <>
          {" "}
          <div className=" animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-48 bg-gray-200 rounded-xl"></div>

            <div className="p-4 space-y-3">
              {/* Title skeleton */}
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>

              {/* Description skeleton */}
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>

              {/* Reading time skeleton */}
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>

              {/* Author info skeleton */}
              <div className="flex items-center gap-2 mt-4">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link to={`/article/${post.id}`}>
          <div className="border rounded-xl ">
            <img
              src={
                cover_image ||
                "https://via.placeholder.com/800x400?text=No+Image"
              }
              alt={title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
              <p className="text-sm text-gray-600 mt-1">
                {reading_time_minutes} min read
              </p>

              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <img
                  src={user.profile_image}
                  alt={user.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>
                  {user.name} • {new Date(published_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MostPopular;
