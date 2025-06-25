const BASE_URL = "https://dev.to/api";
export const GITHUB_URL = "https://github.com/";
export const TWITTER_URL = "https://twitter.com/";

/**
 * Fetch paginated posts for infinite scrolling or feed display.
 *
 * @param page - The current page number (default is 1)
 * @param limit - Number of posts per page (default is 7)
 * @returns A list of articles
 */
export const fetchPosts = async (page = 1, limit = 7) => {
  const res = await fetch(
    `${BASE_URL}/articles?per_page=${limit}&page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

/**
 * Fetch the most recent blog posts (without pagination).
 *
 * @param limit - Number of recent posts to fetch (0 = all)
 * @returns A list of the most recent articles
 */
export const fetchrecentPosts = async (limit = 0) => {
  const res = await fetch(`${BASE_URL}/articles?per_page=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

/**
 * Fetch the most viewed blog posts (based on top X days).
 *
 * @param limit - Number of top posts to fetch (default is 10)
 * @returns A list of popular articles
 */
export const fetchMostViewedPosts = async (limit = 10) => {
  const res = await fetch(`${BASE_URL}/articles?per_page=${limit}&top=35`);
  if (!res.ok) throw new Error("Failed to fetch most viewed posts");
  return res.json();
};

/**
 * Fetch a single post by its ID.
 *
 * @param id - The article ID (string or number)
 * @returns A single article object
 */
export const fetchPostById = async (id: number | string) => {
  const res = await fetch(`${BASE_URL}/articles/${id}`);
  if (!res.ok) throw new Error("Failed to fetch article");
  return res.json();
};

/**
 * Fetch all articles written by a specific author (by username).
 *
 * @param username - The DEV.to username
 * @returns A list of articles written by the author
 */
export const fetchAuthorArticles = async (username: string) => {
  const res = await fetch(`${BASE_URL}/articles?username=${username}`);
  if (!res.ok) throw new Error("Failed to fetch author articles");
  return res.json();
};

/**
 * Fetch profile details of a specific author (by username).
 *
 * @param username - The DEV.to username
 * @returns The author's profile data
 */
export const fetchAuthorProfile = async (username: string) => {
  const res = await fetch(`${BASE_URL}/users/by_username?url=${username}`);
  if (!res.ok) throw new Error("Failed to fetch author profile");
  return res.json();
};

export const fetchtag = async () => {
  const res = await fetch(`${BASE_URL}/tags?per_page=90`);
  if (!res.ok) throw new Error("Failed to fetch tags");
  return res.json();
};
