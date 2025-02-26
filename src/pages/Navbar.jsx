import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    
    <div>
      <nav className="flex items-center justify-between p-4   text-black ">
      {/* Logo on the Left */}
      <div className="text-3xl font-bold tracking-wide uppercase bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
        VitalEdge
      </div>

      {/* Centered Navigation Links */}
      <div className="flex space-x-20 text-lg">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/about" className="hover:text-black transition">About Us</Link>
        
        {/* Blog Dropdown */}
        <div className="relative z-50">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="hover:text-black transition flex items-center"
          >
            Blog 
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

      {/* Contact Us on the Right */}
      <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
    </nav>
    </div>
  )
}

export default Navbar
