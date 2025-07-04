import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import {
  fetchAuthorArticles,
  fetchAuthorProfile,
  GITHUB_URL,
  TWITTER_URL,
} from "../lib/devto";
import type { AuthorProfile, Post } from "../types/post";
import { PostCard } from "../components/PostCard";
import { AuthorProfileSkeleton } from "../components/AuthorProfileSkeleton";
import { PostCardSkeleton } from "../components/PostCardSkeleton";
import { FaGithub, FaGlobe, FaTwitter } from "react-icons/fa";
import { withFeaturedBadge } from "../hoc/WithFeaturedBadge";
import { BiAward } from "react-icons/bi";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { useFollow } from "../context/FollowContext";

const AuthorDetails = () => {
  const { username } = useParams<{ username: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();
  const { following, followAuthor, unfollowAuthor } = useFollow();

  const [author, setAuthor] = useState<AuthorProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [trendingOnly, setTrendingOnly] = useState(false);

  const EnhancedPostCard = withFeaturedBadge(PostCard);

  const hasTrendingPosts = posts.some(
    (post) => (post.positive_reactions_count ?? 0) > 50
  );
  const navigate = useNavigate();

  const isFollowing = author ? following.some((a) => a.username === author.username) : false;
  const handleFollow = () => {
    if (!author) return;
    if (!user) {
      navigate("/login");
      return;
    }

    if (isFollowing) {
      unfollowAuthor(author.username);
    } else {
      followAuthor({
        username: author.username,
        name: author.name,
        profileImage: author.profile_image,
        summary: author.summary,
      });
    }
  };

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
            <div className="flex flex-col  space-x-4 items-center justify-center max-w-2xl text-center">
              {/* Show "Golden author" if the author has more than 10 trending posts */}
              {posts.filter((post) => (post.positive_reactions_count ?? 0) > 50)
                .length > 10 ? (
                <div
                  title="Golden author"
                  className="flex items-center justify-center text-yellow-500 text-2xl"
                >
                  <BiAward />
                </div>
              ) : (
                ""
              )}

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
                  <FaGlobe />
                </a>
              )}
            </div>
            <div>
              <p
                className="text-blue-800 cursor-pointer"
                onClick={handleFollow}
              >
                {isFollowing ? "Following" : "Follow"}
              </p>
            </div>
          </div>

          {/* Articles */}
          <div className="flex flex-col md:flex-row  mx-auto justify-center items-center md:justify-between py-8">
            <h3 className="text-2xl font-bold mb-4">
              Articles by {author.name}
            </h3>
            {hasTrendingPosts ? (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Trending Only
                </span>

                <label className="relative inline-block w-12 h-6 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={trendingOnly}
                    onChange={() => setTrendingOnly(!trendingOnly)}
                  />
                  <div className="bg-gray-300 peer-checked:bg-blue-600 w-full h-full rounded-full transition-colors duration-300"></div>
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 peer-checked:translate-x-6" />
                </label>
              </div>
            ) : (
              ""
            )}
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-600">No articles available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter(
                  (post) =>
                    !trendingOnly || (post.positive_reactions_count ?? 0) > 50
                )
                .map((post) => (
                  <EnhancedPostCard key={post.id} {...post} />
                ))}
            </div>
          )}
        </>
      )}
    </MaxWidthWrapper>
  );
};

export default AuthorDetails;
