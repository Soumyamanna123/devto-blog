// src/pages/Home.tsx
import Feeds from "../components/Feed";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import MostPopular from "../components/MostPopular";
import MostRecentPost from "../components/MostRecentPost";


const Home = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <MostRecentPost />
          </div>
          <div className="w-full md:w-1/3">
            <MostPopular />
          </div>
        </div>

        <Feeds />
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
