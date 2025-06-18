import React, { useState } from "react";

const tags = ["All", "Web Dev", "DSA", "Projects", "Community", "Career", "Git"];

const TagFilter = ({ setSelectedTag }) => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    setSelectedTag(tag);
  };

  return (
    <div className="flex gap-4 my-20 overflow-x-auto">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 rounded-full border 
             ${activeTag === tag ? "bg-blue-600 text-white" : "bg-[#334155] text-gray-300 hover:bg-blue-500 transition"}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;