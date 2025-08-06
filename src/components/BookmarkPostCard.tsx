import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../types/post";

interface BookmarkPostCardProps {
  post: Post;
}

const BookmarkPostCard: React.FC<BookmarkPostCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
      <img
        src={
          post.cover_image ||
          "https://via.placeholder.com/400x200?text=No+Image"
        }
        alt={post.title}
        className="h-48 object-cover w-full"
      />
      <div className="p-4  space-y-2">
        <Link
          to={`/post/${post.id}`}
          className="text-lg font-semibold text-blue-700 hover:underline pb-2"
        >
          {post.title}
        </Link>
        <div className="text-sm text-gray-500 line-clamp-3">
          {post.description}
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookmarkPostCard);
