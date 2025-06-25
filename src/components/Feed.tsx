import { useEffect, useRef } from "react";
import { PostCard } from "../components/PostCard";
import { useInfinitePosts } from "../hooks/useInfinitePosts";
import { PostCardSkeleton } from "./PostCardSkeleton";
import { withFeaturedBadge } from "../hoc/WithFeaturedBadge";

const Feed = ({ selectedTags = [] }: { selectedTags?: string[] }) => {
  const { posts, loading, hasMore, loadMore } = useInfinitePosts();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const EnhancedPostCard = withFeaturedBadge(PostCard);

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


    const filteredPosts = selectedTags.length
    ? posts.filter((post) =>
        selectedTags.every((tag) => post.tag_list.includes(tag))
      )
    : posts;

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <p className="text-3xl font-bold"> All Posts Based On Your Interest</p>
      </div>
      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredPosts.map((post, i) => (
          <EnhancedPostCard key={`${post.id}.${post.slug}-${i}`} {...{ ...post, id: `${post.id}.${post.slug}-${i}` }} />
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
