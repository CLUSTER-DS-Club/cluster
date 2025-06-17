
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({id, title, author, readTime, excerpt, tags, image,content }) => {
  return (
    <div className="bg-[#1E293B] text-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Blog Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Blog Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
        <p className="text-gray-400 text-sm">by {author} • {readTime} min read</p>
        <p className="mt-2 text-gray-300">{excerpt}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-semibold bg-[#334155] text-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
         <Link to={`/blog/${id}`} state={{ post: { id, title, author, readTime, excerpt, tags, image, content } }}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full transition-all shadow-md inline-block">
          Read More
        </Link>


      </div>
    </div>
  );
};

export default BlogCard;