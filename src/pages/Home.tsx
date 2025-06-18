import MaxWidthWrapper from "../components/MaxWidthWrapper";
import MostPopular from "../components/MostPopular";
import MostRecentPost from "../components/MostRecentPost";
import { PostCard } from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";

// src/pages/Home.tsx
const Home = () => {
  const { posts, loading } = usePosts(650);
  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <MostRecentPost />
          </div>
          <div className="w-full md:w-1/3">
            <MostPopular />
          </div>
        </div>

        <p>all of the post</p>
        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
