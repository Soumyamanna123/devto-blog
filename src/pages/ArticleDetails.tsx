import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { fetchPostById } from "../lib/devto";
import type { Post } from "../types/post"; // adjust path if needed
import { FaRegThumbsUp, FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { additems } from "../lib/bookmarkSlice";

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    fetchPostById(id.split(".")[0])
      .then((data) => {
        if (!cancelled) setPost(data);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, [id]);

  const dispatch = useDispatch();

  const handleBookmarkItem = (post: Post) => {
    dispatch(additems(post));
    console.log("Bookmarked post:", post);
  };

  const memoizedPost: Post | null = React.useMemo(() => post, [post]);

  // Optionally, you can use memoizedPost if you want to clean up on unmount

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!memoizedPost)
    return <p className="text-center py-10">Post not found.</p>;

  return (
    <MaxWidthWrapper>
      <div className="py-10 mx-auto max-w-3xl flex flex-col space-y-4 min-h-screen">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4  text-center">
          {memoizedPost.title}
        </h1>
        {/* Bookmark Icon Placeholder */}
        <button
          className="flex justify-center py-4 text-gray-600 hover:text-black transition"
          // onClick={()=>
          //   // TODO: Dispatch bookmark toggle here

          //   handlebookmarkitem(item)
          // }
          onClick={() => handleBookmarkItem(memoizedPost)}
          aria-label="Bookmark post"
        >
          <FaRegBookmark size={24} />
        </button>

        <div className="flex flex-col space-x-2 items-center gap-1 mt-4 text-xs text-gray-500">
          <img
            src={memoizedPost.user.profile_image}
            alt={memoizedPost.user.name}
            className="w-12 h-12 rounded-full"
          />
          <span>
            <Link to={`/user/${memoizedPost.user.username}`}>
              <p className="text-black underline  text-lg">
                By {memoizedPost.user.name}
              </p>
            </Link>
          </span>
        </div>

        <img
          src={
            memoizedPost.cover_image ||
            "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={memoizedPost.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-800">{memoizedPost.description}</p>
        {/* Optional: show tags, full content, etc. */}
        <div className="flex justify-between">
          <p>
            Posted at:{" "}
            <span>
              {" "}
              {new Date(memoizedPost.published_at).toLocaleDateString()}
            </span>
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FaRegThumbsUp className="text-gray-600" />
              <span>{memoizedPost.positive_reactions_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCommentDots className="text-gray-600" />
              <span>{memoizedPost.comments_count}</span>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default React.memo(ArticleDetails);
