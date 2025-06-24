import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/devto";
import type { Post } from "../types/post";

// You may want to replace 'any' with a specific Post type if you have one
export const useInfinitePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPosts(page)
      .then(newPosts => {
        setPosts(prev => [...prev, ...newPosts]);
        setHasMore(newPosts.length > 0);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  return {
    posts,
    loading,
    hasMore,
    loadMore: () => setPage(prev => prev + 1),
  };
};
