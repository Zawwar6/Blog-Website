import { useState } from "react";
import Navbar from "../pages/Navbar";


const About = ()=> {
  const [hovered, setHovered] = useState(false);

  return (
    
    <>
 
    <section className="py-16 px-8 flex items-center justify-center">
     
    <div className="max-w-2xl text-left">
  <h2 className="text-7xl font-extrabold py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    About VitalEdge
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r mb-7 from-purple-400 to-pink-400 rounded-full my-4"></div>

  <p className="text-md text-gray-200 leading-relaxed tracking-wide bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-lg">
  At <span className="text-blue-400 font-semibold">Vital Edge</span>, we are committed to delivering <span className="text-blue-400 font-semibold">well-researched</span>, 
    <span className="text-pink-400 font-semibold">insightful</span>, and <span className="text-pink-400 font-semibold">engaging content</span> on health, fitness, and lifestyle. 
    Our goal is to empower you with the knowledge and motivation needed to lead a <span className="text-purple-400 font-semibold">healthier</span> and <span className="text-purple-400 font-semibold">more fulfilling life</span>.
    <br /><br />
    Whether you’re looking to enhance your <span className="text-purple-400 font-semibold">physical fitness</span>, understand the complexities of 
    <span className="text-blue-300 font-semibold"> hormonal health</span>, or explore expert insights on <span className="text-pink-300 font-semibold">men’s and women’s wellness</span>, we’ve got you covered. 
    From science-backed fitness routines and nutrition tips to mental well-being and lifestyle improvements, our content is designed to help you make 
    <span className="text-blue-400 font-semibold"> informed decisions</span> about your health.
    <br /><br />
    Stay with us as we bring you the latest trends, expert advice, and practical guides to support your journey toward a 
    <span className="text-green-400 font-semibold"> healthier, happier you</span>.
  </p>
</div>

      <div 
        className="relative w-[80vh] h-[80vh] ml-8 rounded-lg overflow-hidden shadow-md cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image Animation */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            hovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: "url('/about1.jpg')" }} // Change this to your background image
        />
        {/* Foreground Image */}
        <img
          src="/about.jpg"
          alt="About VitalEdge"
          className="w-full h-full rounded-lg transition-transform duration-500"
        />
      </div>
    </section>
    </>
  );
}
export default About;