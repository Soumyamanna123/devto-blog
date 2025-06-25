export interface Post {
  id: number | string;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
  cover_image: string | null;
  url: string;
  reading_time_minutes: string;
  social_image?: string;
  positive_reactions_count?: number;
  comments_count?: number;
  user: {
    name: string;
    profile_image: string;
    username: string
  };
  slug: string
}

export interface Author {
  name: string;
  username: string;
  profile_image: string;
  
}
export interface AuthorProfile {
  name: string;
  username: string;
  profile_image: string;
  summary: string;
  github_username?: string;
  twitter_username?: string;
  website_url?: string;
}