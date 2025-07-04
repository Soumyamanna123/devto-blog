import React from "react";
import { Link } from "react-router-dom";
import type { FollowingAuthorCardProps } from "../types/post";

const FollowingAuthorCard: React.FC<FollowingAuthorCardProps> = ({
  username,
  name,
  profileImage,
  summary,
}) => {
  return (
    <div className="flex  flex-col    bg-white rounded-xl shadow hover:shadow-md transition">
      <img
        src={profileImage || "https://via.placeholder.com/48x48?text=User"}
        alt={name}
        className="h-56 object-cover w-full  "
      />
      <div className="p-4  space-y-2">
        <Link
          to={`/user/${username}`}
          className="text-lg font-semibold text-blue-700 hover:underline"
        >
          {name}
        </Link>
        <div className="text-sm text-gray-500">@{username}</div>
        <div className="text-sm text-gray-500 line-clamp-3">{summary}</div>
      </div>
    </div>
  );
};

export default React.memo(FollowingAuthorCard);
