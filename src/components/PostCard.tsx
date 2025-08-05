import { Link } from "react-router-dom";
import type { Post } from "../types/post";
import React from "react";

function Component({
  id,
  title,
  description,
  tag_list,
  cover_image,
  user,
  published_at,
}: Post) {
  return (
    <div className="bg-white border flex flex-col h-[550px] justify-between p-4 rounded-xl transition-all overflow-hidden">
      <div>
        <img
          src={
            cover_image || "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="py-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(tag_list) &&
              tag_list.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700"
                >
                  #{tag}
                </span>
              ))}
          </div>

          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <img
              src={user?.profile_image || "https://via.placeholder.com/24"}
              alt={user?.name || "Unknown User"}
              className="w-6 h-6 rounded-full"
            />
            <span>
              {user?.name || "Unknown User"} •{" "}
              {published_at
                ? new Date(published_at).toLocaleDateString()
                : "Unknown Date"}
            </span>
          </div>
        </div>
      </div>

      <div>
        <Link to={`/article/${id}`}>
          <button className="rounded-full border w-full h-12 mt-4 cursor-pointer">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export const PostCard = React.memo(Component);
