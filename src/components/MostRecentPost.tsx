import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecentPosts } from "../hooks/useRecentPosts";
import { Link } from "react-router-dom";
import RecentPostSkeleton from "./RecentPostSkeleton";
import React from "react";

const MostRecentPost = () => {
  const { posts, loading } = useRecentPosts(); // recent 3 posts

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-4">Most Recent Posts</h2>
        <div className="w-full">
          <RecentPostSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-4">Most Recent Posts</h2>
      <Slider {...settings}>
        {posts.map((post: any) => (
          <div key={post.id} className="">
            <Link to={`/article/${post.id}`}>
              <div className="relative bg-white shadow rounded-xl overflow-hidden h-[300px] sm:h-[400px]  lg:h-[420px] flex items-center justify-center">
                {post.cover_image ? (
                  <>
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded"></div>

                    {/* Title on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-8">
                      <h3 className="text-2xl font-semibold text-white">
                        {post.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div className="text-center px-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                      {post.title}
                    </h3>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(MostRecentPost) 
