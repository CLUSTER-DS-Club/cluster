import { useLocation } from "react-router-dom";
import { FaThumbsUp, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const location = useLocation();
  const post = location.state?.post; 
  const [likes, setLikes] = useState(() => {
    return JSON.parse(localStorage.getItem(`likes-${post?.id}`)) || 0;
  });
  const [liked, setLiked] = useState(() => {
    return JSON.parse(localStorage.getItem(`liked-${post?.id}`)) || false; 
});
   useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }, []);


  if (!post) {
    return (
      <div className="text-center text-gray-500"> ⚠️ Blog post not found.</div>
    );
  }

   const handleLike = () => {
    if (!liked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setLiked(true);
      localStorage.setItem(`likes-${post.id}`, JSON.stringify(newLikes));
      localStorage.setItem(`liked-${post.id}`, JSON.stringify(true)); 
  }
};




  return (
    <div className="bg-[#0F172A] text-white min-h-screen flex justify-center p-10 pt-32">
      <div className="max-w-4xl w-full bg-[#1E293B] p-8 rounded-lg shadow-lg"> 

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-100">{post.title}</h1>

        {/* Author & Read Time */}
        <p className="text-gray-400 text-lg mt-2">by {post.author} • {post.readTime} min read</p>

        {/* Image */}
        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg mt-6" />

        {/* Content */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">{post.content}</p>

        {/* Like Button */}
         {/* Like Button */}
        <button
          className={`mt-6 px-6 py-3 rounded-full flex items-center gap-3 transition-all shadow-md ${
            liked ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
          onClick={handleLike}
          disabled={liked} // 🔥 Disable after first like
        >
          <FaThumbsUp /> {liked ? "Liked" : "Like"} ({likes})
        </button>



        {/* Social Media Share */}
        <div className="mt-6 flex gap-4">
          <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank">
            <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300" />
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank">
            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-600" />
          </a>
          <a href={`https://www.instagram.com/`} target="_blank">
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-400" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;
