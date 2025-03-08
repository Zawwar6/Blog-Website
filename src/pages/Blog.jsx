import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedBlogs = () => {
  const blogs = [
    {
      title: "Unlocking the Secrets of Nutrition",
      description: "Discover how proper nutrition impacts your overall well-being.",
      link: "/blog/health",
      image: "/nutrition.jpg"
    },
    {
      title: "Men’s Health: The Hormonal Balance",
      description: "Understand the role of hormones in men’s health and wellness.",
      link: "/blog/men-health",
      image: "/men.png"
    },
    {
      title: "Home Workouts: Fitness at Your Fingertips",
      description: "Stay fit without the gym! Try these at-home workouts.",
      link: "/blog/fitness",
      image: "/workout.jpg"
    },
    {
      title: "Women’s Wellness: Hormonal Harmony",
      description: "Understand the role of hormones in women’s health and wellness.",
      link: "/blog/women-health",
      image: "/women.png"
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
  <h2 className="text-5xl sm:text-6xl text-center font-extrabold py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    Health Unlocked
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {blogs.map((blog, index) => (
      <motion.div
        key={index}
        className="relative p-6 rounded-xl shadow-lg transition duration-300 backdrop-blur-lg bg-white/10 border border-white/20 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        {/* Hover Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/30 rounded-xl opacity-0 hover:opacity-100 transition duration-500"></div>

        {/* Content */}
        <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{blog.description}</p>

        {/* Fixed Link Styling */}
        <Link
          to={blog.link}
          className="relative inline-block text-blue-400 font-semibold text-lg transition duration-300 group "
          onClick={() => window.scrollTo(0, 0)}
        >
          Read More &rarr;
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>
    ))}
  </div>
</section>
  

  );
};

export default FeaturedBlogs;