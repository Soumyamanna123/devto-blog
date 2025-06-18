export interface Post {
  id: number;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
  cover_image: string | null;
  url: string;
  reading_time_minutes: string;
  user: {
    name: string;
    profile_image: string;
  };
}