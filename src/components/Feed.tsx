import { useEffect, useRef } from "react";
import { PostCard } from "../components/PostCard";
import { useInfinitePosts } from "../hooks/useInfinitePosts";
import { PostCardSkeleton } from "./PostCardSkeleton";

const Feed = () => {
  const { posts, loading, hasMore, loadMore } = useInfinitePosts();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    const currentRef = bottomRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loadMore, loading]); // ✅ No need to add loadMore here

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <p className="text-3xl font-bold"> All Posts </p>

        <p className="text-3xl font-bold">Filter</p>
      </div>
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}

        {/* Skeleton Loaders (appear inline) */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <PostCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {/* Observer Trigger */}
      <div ref={bottomRef} className="h-10 mt-10" />
    </div>
  );
};

export default Feed;
