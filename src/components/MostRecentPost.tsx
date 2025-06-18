import Slider from "react-slick";
import { usePosts } from "../hooks/usePosts"; // Assuming you use a custom hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MostRecentPost = () => {
  const { posts, loading } = usePosts(3); // recent 3 posts

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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold mb-4">Most Recent Posts</h2>
      <Slider {...settings}>
        {posts.map((post: any) => (
          <div key={post.id} className="">
            <div className="relative bg-white shadow rounded-xl overflow-hidden">
              <img
                src={post.cover_image || "/default.jpg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded"></div>

              {/* Title on top */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pb-8">
                <h3 className="text-2xl font-semibold text-white">
                  {post.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostRecentPost;
