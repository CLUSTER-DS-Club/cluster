
import { Link } from "react-router-dom";

const featuredPost = {
  id: "1",
  title: "How We Built CLUSTER",
  author: "Utsav",
  readTime: 3,
  excerpt: "A behind-the-scenes look at our first year of innovation...",
  content: "In this article, we share the journey of building CLUSTER, from our initial idea to the challenges we faced and the milestones we achieved. Join us as we reflect on our first year of innovation and community building.",
  tags: ["Open Source", "Research", "Community"],
  image: "/cluster/blog/DS_CLUB_LOGO.jpeg"
};

const FeaturedPost = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 p-8 bg-[#1E293B] rounded-lg shadow-xl min-h-[400px]">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-[350px] object-cover rounded-lg" />
      </div>

      <div className="w-full lg:w-1/2 text-white">
        <h2 className="text-4xl font-bold text-gray-100">{featuredPost.title}</h2>
        <p className="text-gray-400 text-lg mt-2">by {featuredPost.author} • {featuredPost.readTime} min read</p>
        <p className="mt-4 text-gray-300">{featuredPost.excerpt}</p>
        {/* <p className="mt-4 text-gray-300 leading-relaxed">{featuredPost.content}</p> */}

        {/* Read More Link with Blog Data */}
        <Link to={`/blog/${featuredPost.id}`} state={{ post: featuredPost }} className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full transition-all shadow-md inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;