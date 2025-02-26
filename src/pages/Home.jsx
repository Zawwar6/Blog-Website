import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";

import Contact from "./Contact";
import Navbar from "../pages/Navbar";


const home = () => {
  
  const images = [
    "/bg.jpg",
    "/bg2.jpg",
    
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    {/* <nav className="flex items-center justify-between p-4   text-black ">

      <div className="text-3xl font-bold tracking-wide uppercase bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
        VitalEdge
      </div>

      
      <div className="flex space-x-20 text-lg">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/about" className="hover:text-black transition">About Us</Link>
        
     
        <div className="relative z-50">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="hover:text-black transition flex items-center"
          >
            Blog <span className="ml-1">▼</span>
          </button>
          {dropdownOpen && (
            <div 
            className="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-md overflow-hidden border border-gray-300"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(true)}
          >
            <Link to="/blog/health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition">Health</Link>
            <Link to="/blog/fitness" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition">Fitness</Link>
            <Link to="/blog/hormones" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition">Hormones</Link>
            <Link to="/blog/men-health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition">Men's Health</Link>
            <Link to="/blog/women-health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition">Women's Health</Link>
          </div>
          )}
        </div>
      </div>

     
      <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
    </nav> */}
  
    <section
      className="flex flex-col items-center justify-center h-[100vh] text-black text-center opacity-70 p-8 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <h1 className="text-[24px] md:text-8xl font-black tracking-tight z-10 animate-gradient md:my-12 my-6 relative"> <span className="bg-gradient-to-r from-cyan-600 via-cyan-800 to-cyan-400 animate-gradient bg-clip-text text-transparent">Welcome</span>
      <span className="mx-3 bg-gradient-to-r from-blue-600 via-blue-900 animate-gradient to-purple-800 bg-clip-text text-transparent"> to </span> VitalEdge
      
      </h1>
      
      <p className="text-lg font-extrabold max-w-3xl leading-relaxed drop-shadow-md">
        Unlock the secrets to a healthier life with expert insights on nutrition, fitness, and hormonal balance. 
        Your journey to a better you starts here!
      </p>
      <Link
        to="/blog"
        className="mt-8 px-10 py-4 bg-gradient-to-r from-black to-blue-700 text-white text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
      >
        Explore Our Blogs
      </Link>
    </section>
      
      <About/>
      <Blog/>
      <Contact/>
    </>
  );
};

export default home;
