import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "../pages/Navbar";

const Home = () => {
  const images = ["/bg.jpg", "/bg2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>  
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center h-screen text-white text-center p-6 bg-cover opacity-80 bg-center bg-fixed transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight z-10 animate-gradient my-6">
  <span className="bg-gradient-to-r from-cyan-600 via-cyan-800 to-cyan-400 bg-clip-text text-transparent">
    Welcome
  </span>
  <span className="mx-2 bg-gradient-to-r from-blue-600 via-blue-900 to-purple-800 bg-clip-text text-transparent">
    to
  </span>{" "}
   <span className="mx-2 bg-gradient-to-r from-blue-600 via-black to-purple-800 bg-clip-text text-transparent">    VitalEdge </span>
</h2>

        <p className="text-xs text-black  sm:text-sm md:text-lg font-extrabold max-w-3xl leading-relaxed drop-shadow-md px-4">
          Unlock the secrets to a healthier life with expert insights on
          nutrition, fitness, and hormonal balance. Your journey to a better you
          starts here!
        </p>

        <Link
          to="/blog"
          className="mt-4 sm:mt-8 px-6 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-black to-blue-700 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg hover:from-black hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Blogs
        </Link>
      </section>

      <About />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
