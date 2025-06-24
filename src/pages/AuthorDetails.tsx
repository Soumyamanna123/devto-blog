import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import {
  fetchAuthorArticles,
  fetchAuthorProfile,
  GITHUB_URL,
  TWITTER_URL,
} from "../lib/devto";
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";
import { AuthorProfileSkeleton } from "../components/AuthorProfileSkeleton";
import { PostCardSkeleton } from "../components/PostCardSkeleton";
import { FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";

interface AuthorProfile {
  name: string;
  username: string;
  profile_image: string;
  summary: string;
  github_username?: string;
  twitter_username?: string;
  website_url?: string;
}

const AuthorDetails = () => {
  const { username } = useParams<{ username: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [author, setAuthor] = useState<AuthorProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        const [articles, profile] = await Promise.all([
          fetchAuthorArticles(username),
          fetchAuthorProfile(username),
        ]);
        setPosts(articles);
        setAuthor(profile);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <MaxWidthWrapper>
      {loading ? (
        <>
          <AuthorProfileSkeleton />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <PostCardSkeleton key={idx} />
            ))}
          </div>
        </>
      ) : !author ? (
        <p className="text-center py-10">Author not found.</p>
      ) : (
        <>
          {/* Author Profile Section */}
          <div className="flex flex-col items-center justify-center gap-4 mb-8 bg-sky-100 rounded-xl py-8 lg:py-16">
            <img
              src={author.profile_image}
              alt={author.name}
              className="w-32 h-32 rounded-full"
            />
            <div className="flex flex-col space-x-4 items-center justify-center max-w-2xl text-center">
              <h2 className="text-2xl font-semibold">{author.name}</h2>
              <p className="text-sm text-gray-500">@{author.username}</p>
              {author.summary && (
                <p className="text-md text-gray-600 mt-1">{author.summary}</p>
              )}
            </div>
            <div className="flex items-center gap-4 mt-4 text-gray-600 text-xl">
              {author.github_username && (
                <a
                  href={`${GITHUB_URL}${author.github_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaGithub />
                </a>
              )}
              {author.twitter_username && (
                <a
                  href={`${TWITTER_URL}${author.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaTwitter />
                </a>
              )}
              {author.website_url && (
                <a
                  href={author.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaGlobe/>
                </a>
              )}
            </div>
          </div>

          {/* Articles */}
          <h3 className="text-2xl font-bold mb-4">Articles by {author.name}</h3>
          {posts.length === 0 ? (
            <p className="text-gray-600">No articles available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          )}
        </>
      )}
    </MaxWidthWrapper>
  );
};

export default AuthorDetails;
