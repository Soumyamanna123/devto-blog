import { useEffect, useState } from "react";
import { fetchMostViewedPosts } from "../lib/devto";
import type { Post } from "../types/post";

export const useMostPopularPost = (days: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMostViewedPosts(1, days) // Pass days to your API function
      .then((posts) => setPost(posts[0] || null))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [days]); // Add days as a dependency

  return { post, loading };
};

export default useMostPopularPost;