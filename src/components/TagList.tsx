import React, { useEffect, useState } from "react";

import { fetchtag } from "../lib/devto";

const TagList = () => {
  const [tags, setTags] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);
  const [visibleCount, setvisibleCount] = useState(10);

  const [SelectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetchtag()
      .then((data) => {
        const tagNames = data.map((tag: any) => tag.name);
        setTags(tagNames);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function toggleTag(tag: string) {
    setSelectedTags(function (prevSelected) {
      if (prevSelected.includes(tag)) {
        return prevSelected.filter(function (t) {
          return t !== tag;
        });
      } else {
        return [...prevSelected, tag];
      }
    });
  }

  const showvisiblecout = () => {
    setvisibleCount((prev) => Math.min(prev + 10, tags.length));
  };
  const showlessvisiblecount = () => {
    setvisibleCount((prev) => Math.min(prev - 10, tags.length));
  };
  // console.log("dsdsd");
  return (
    <div className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Preferences</h2>

      {loading ? (
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 30 }).map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, visibleCount).map((tag) => {
            const isSelected = SelectedTags.includes(tag);
            return (
              <span
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                #{tag}
              </span>
            );
          })}
        </div>
      )}

      <div className="mx-auto flex gap-2">
        {visibleCount && visibleCount < tags.length ? (
          <button
            onClick={showvisiblecout}
            className="rounded-full border px-6 h-12 mt-4  cursor-pointer"
          >
            Show More
          </button>
        ) : (
          ""
        )}

        {visibleCount && visibleCount > 10 ? (
          <button
            onClick={showlessvisiblecount}
            className="rounded-full border px-6 h-12 mt-4  cursor-pointer"
          >
            Show Less
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TagList;
