import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { fetchPostById } from "../lib/devto";
import type { Post } from "../types/post"; // adjust path if needed
import { FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa";


const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetchPostById(id)
      .then(setPost)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!post) return <p className="text-center py-10">Post not found.</p>;

  return (
    <MaxWidthWrapper>
      <div className="py-10 mx-auto max-w-3xl flex flex-col space-y-4 min-h-screen">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4  text-center">
          {post.title}
        </h1>

        <div className="flex flex-col space-x-2 items-center gap-1 mt-4 text-xs text-gray-500">
          <img
            src={post.user.profile_image}
            alt={post.user.name}
            className="w-12 h-12 rounded-full"
          />
          <span>
            <Link to={`/user/${post.user.username}`}>
              <p className="text-black underline  text-lg">
                By {post.user.name}
              </p>
            </Link>
          </span>
        </div>

        <img
          src={
            post.cover_image ||
            "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-800">{post.description}</p>
        {/* Optional: show tags, full content, etc. */}
        <div className="flex justify-between">
          <p>
            Posted at:{" "}
            <span> {new Date(post.published_at).toLocaleDateString()}</span>
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FaRegThumbsUp className="text-gray-600" />
              <span>{post.positive_reactions_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCommentDots className="text-gray-600" />
              <span>{post.comments_count}</span>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ArticleDetails;
