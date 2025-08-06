import React from "react";
import { useSelector } from "react-redux";
import BookmarkPostCard from "./BookmarkPostCard";

const BookmarkedPosts = () => {
  const bookmarks = useSelector((store) => store.bookmark.items);

//   const store = useSelector((store)=>store)
//   const bookmarks = store.bookmmark.items

  console.log("bookmarks:", bookmarks);

  return (
    <div className="w-full mt-10">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Bookmarked Posts
        </h3>
      </div>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500 italic">
          You haven't bookmarked any posts yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {bookmarks.map((post: any) => (
            <BookmarkPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarkedPosts;
