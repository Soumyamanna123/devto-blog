export interface Post {
  id: number;
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
}

export interface Author {
  name: string;
  username: string;
  profile_image: string;
  
}
