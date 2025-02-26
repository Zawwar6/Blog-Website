import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

const blogTopics = [
  {
    title: "Health & Wellness",
    image: "/health.jpg",
    description:
      "Explore expert insights on maintaining a balanced and healthy lifestyle. Get tips on nutrition, mental well-being, and general health care to lead a fulfilling life.",
    link: "/blog/health",
  },
  {
    title: "Fitness & Exercise",
    image: "/fitness.jpg",
    description:
      "Discover the best fitness routines, workout plans, and expert advice to keep your body active and strong. Stay motivated with science-backed fitness insights.",
    link: "/blog/fitness",
  },
  {
    title: "Hormonal Health",
    image: "/hormones.jpg",
    description:
      "Understand the impact of hormones on your overall health. Learn about hormonal imbalances, symptoms, and ways to maintain a stable hormonal system.",
    link: "/blog/hormones",
  },
  {
    title: "Men's Health",
    image: "/mens-health.jpg",
    description:
      "Essential health tips tailored for men. Explore topics like heart health, stress management, fitness routines, and prostate health awareness.",
    link: "/blog/men-health",
  },
  {
    title: "Women's Health",
    image: "/womens-health.jpg",
    description:
      "Comprehensive health insights for women. From reproductive health to self-care tips, find everything you need for a healthier lifestyle.",
    link: "/blog/women-health",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="py-12 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">Welcome to VitalEdge Blog</h1>
        <p className="text-lg text-gray-600 mt-4">Your go-to source for health, wellness, and fitness insights.</p>
      </div>

      <section className="py-12 px-8 max-w-6xl mx-auto">
        {blogTopics.map((topic, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center mb-16  p-8 rounded-xl transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="md:w-1/2">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="md:w-1/2 md:px-10 text-left">
              <h2 className="text-7xl font-extrabold py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{topic.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{topic.description}</p>
              <Link
                to={topic.link}
                className="block mt-6  px-4 mx-20 py-3 bg-gradient-to-r from-black to-blue-700 text-white text-center text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
