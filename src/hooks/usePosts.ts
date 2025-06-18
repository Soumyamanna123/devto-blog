import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/devto";

export const usePosts = (limit=0) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts(limit)
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [limit]);

  return { posts, loading };
};


// It calls the fetchPosts() function to get blog posts from the DEV.to API.
// Stores the list of posts in a posts state variable.
// Keeps track of whether the data is still loading with a loading flag.
// it returns { posts, loading } so any component can:
// Use the posts to render content.
// Show a loader or message while the data is being fetched.
