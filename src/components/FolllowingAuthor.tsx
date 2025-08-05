import React, { useState } from "react";
import FollowingAuthorCard from "./FollwingAuthorCard";
// import ReOrderAuthor from "../ReOrderAuthor";

interface Author {
  username: string;
  name: string;
  profileImage: string;
  summary: string;
}

const FollowingAuthors: React.FC<{ authors: Author[] }> = ({ authors }) => {
  const [showReorder, setShowReorder] = useState(false);

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Authors You Follow
        </h3>
        <button
          className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 cursor-pointer"
          onClick={() => setShowReorder((prev) => !prev)}
        >
          Reorder
        </button>
      </div>

      {authors.length === 0 ? (
        <p className="text-gray-500 italic">
          You're not following any authors yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {authors.map((author) => (
            <FollowingAuthorCard key={author.username} {...author} />
          ))}
        </div>
      )}

      {/* {showReorder && <ReOrderAuthor onClose={() => setShowReorder(false)} />} */}
    </div>
  );
};

export default FollowingAuthors;
