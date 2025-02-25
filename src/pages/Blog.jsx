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
        <h2 className="text-7xl text-center font-extrabold py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Health Unlocked</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover rounded-t-xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{blog.title}</h3>
              <p className="text-gray-700 text-lg mb-6">{blog.description}</p>
              <Link to={blog.link} className="text-blue-700 font-semibold text-lg hover:underline">
                Read More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
  );
};

export default FeaturedBlogs;