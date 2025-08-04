// src/pages/Home.tsx
import Feeds from "../components/Feed";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import MostPopular from "../components/MostPopular";
import MostRecentPost from "../components/MostRecentPost";
import TagList from "../components/TagList";

import React, { useState } from "react";

const Home = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <MaxWidthWrapper>
      <div className="py-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <MostRecentPost />
          </div>
          <div className="w-full md:w-1/3">
            <MostPopular />
          </div>
        </div>
        <TagList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <Feeds selectedTags={selectedTags} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
