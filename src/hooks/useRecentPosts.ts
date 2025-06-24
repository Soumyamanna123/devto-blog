import { useEffect, useState } from "react";
import { fetchrecentPosts } from "../lib/devto";

export const useRecentPosts = (limit = 3) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchrecentPosts(limit)
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [limit]);

  return { posts, loading };
};


