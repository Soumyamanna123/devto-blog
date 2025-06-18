import { useEffect, useState } from "react";
import { fetchMostViewedPosts } from "../lib/devto";
import type { Post } from "../types/post";

const useMostPopularPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMostViewedPosts(1)
      .then((posts) => setPost(posts[0] || null))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { post, loading };
};

export default useMostPopularPost;
