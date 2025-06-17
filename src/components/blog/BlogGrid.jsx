import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: "1",
    title: "Building with Tailwind",
    author: "Aanya",
    readTime: 4,
    excerpt: "Learn to use utility-first classes effectively...",
    content:
      "Here’s the complete article with insights into utility-first CSS and how it can transform your web development workflow for the better...",
    tags: ["Web Dev", "CSS", "Tailwind"],
    image: "/cluster/blog/tailwind.jpg",
  },
  {
    id: "2",
    title: "Git Tips for Beginners",
    author: "Kabir",
    readTime: 3,
    excerpt: "Quick version control techniques for students.",
    content:
      "Learn essential Git commands and best practices for managing your codebase effectively as a beginner developer...",
    tags: ["Open Source", "Git", "Beginner"],
    image: "/cluster/blog/git.jpeg",
  },
  {
    id: "3",
    title: "What DSA Taught Me",
    author: "Mehak",
    readTime: 5,
    excerpt: "Thinking beyond just problem-solving...",
    content:
      "Discover how data structures and algorithms shape your coding mindset and improve your problem-solving skills. This article explores the deeper lessons learned from studying DSA...",
    tags: ["DSA", "Algorithms", "Learning"],
    image: "/cluster/blog/DSA.avif",
  },
  {
    id: "4",
    title: "Open Source Contributions",
    author: "Rohan",
    readTime: 6,
    excerpt: "How to get started with open source projects.",
    content:
      "A beginner's guide to contributing to open source projects, including tips on finding the right projects and making meaningful contributions...",
    tags: ["Open Source", "Community", "Contributions"],
    image: "/cluster/blog/open-source.webp",
  },
];

const BlogGrid = ({ selectedTag }) => {
  const filteredPosts =
    selectedTag === "All"
      ? blogPosts
      : blogPosts.filter((post) =>
          post.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
          )
        );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div className="flex flex-col h-full">
          <Link key={post.id} to={`/blog/${post.id}`} state={{ post }}>
            {" "}
            {/* Pass blog data */}
            <BlogCard {...post} />
          </Link>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px] bg-[#1E293B] rounded-lg shadow-md p-8 transition-all animate-fadeIn">

          <h2 className="text-4xl font-bold text-red-400">No Blogs Found</h2>
          <p className="text-lg text-gray-300 mt-3">
            Oops! We couldn't find anything for this category.
          </p>
          <p className="text-md text-gray-400 mt-1">
            Try exploring another tag or check out our recent articles!
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
