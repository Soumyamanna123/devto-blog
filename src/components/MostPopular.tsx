import React from "react";
import useMostPopularPost from "../hooks/useMostPopularPost";

const MostPopular = () => {
  const { post, loading } = useMostPopularPost();

  if (loading) return <p>Loading...</p>;

  if (!post) return <p>No post found.</p>;

  const mostpopularpost = post;

  const { cover_image, title, description,  user, published_at,reading_time_minutes } =
    mostpopularpost;

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-4">Most Popular Post</h2>
      <div className="border rounded-xl h-64">
        <img
          src={
            cover_image || "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <p className="text-sm text-gray-600 mt-1">{reading_time_minutes} min read</p>



          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <img
              src={user.profile_image}
              alt={user.name}
              className="w-6 h-6 rounded-full"
            />
            <span>
              {user.name} • {new Date(published_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
