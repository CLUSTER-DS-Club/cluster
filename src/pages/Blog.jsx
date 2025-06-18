import React, { useState, useEffect } from "react";
import FeaturedPost from "../components/blog/FeaturedPost";
import TagFilter from "../components/blog/TagFilter";
import BlogGrid from "../components/blog/BlogGrid";

const Blog = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

    
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl font-extrabold">Explore Our Blog</h1>
        <p className="mt-4 text-gray-400 text-lg">
          Discover insights, tutorials, and community stories.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <FeaturedPost />
        <TagFilter setSelectedTag={setSelectedTag} />
        <BlogGrid selectedTag={selectedTag} />
      </div>
    </div>
  );

};

export default Blog;