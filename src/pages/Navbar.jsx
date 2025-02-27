import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Overlay Background */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-80 z-40" onClick={() => setMenuOpen(false)}></div>}
      
      <div className="flex items-center justify-between p-4 bg-black text-white relative z-50">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide uppercase bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
          VitalEdge
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center space-x-10 text-lg">
          <Link to="/" className="hover:text-white font-extrabold text-lg">Home</Link>
          <Link to="/about" className="hover:text-white font-extrabold text-lg">About Us</Link>
          
          {/* Blog Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-white transition flex items-center cursor-pointer font-extrabold text-lg"
            >
              Blog
            </button>
            {dropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white text-black shadow-md rounded-md border border-gray-300"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
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
        
        <Link to="/contact" className="hidden lg:block hover:text-white font-extrabold text-lg">Contact Us</Link>
        
        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-6 text-lg lg:hidden transition-transform duration-300 ease-in-out z-50`} 
           style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        
        {/* Cross Icon (Fix) */}
        <button 
          onClick={() => setMenuOpen(false)} 
          className="absolute top-5 right-5 text-white z-50"
        >
          <FiX size={30} />
        </button>

        <Link to="/" className="block px-4 py-2 hover:text-red-500 font-extrabold text-lg" 
              onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="block px-4 py-2 hover:text-red-500 font-extrabold text-lg" 
              onClick={() => setMenuOpen(false)}>About Us</Link>
        
        {/* Blog Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-red-500 transition flex items-center cursor-pointer font-extrabold text-lg"
          >
            Blog
          </button>
          {dropdownOpen && (
            <div className="mt-2 w-48 bg-white text-black shadow-md rounded-md border border-gray-300">
              <Link to="/blog/health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition" 
                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Health</Link>
              <Link to="/blog/fitness" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition" 
                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Fitness</Link>
              <Link to="/blog/hormones" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition" 
                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Hormones</Link>
              <Link to="/blog/men-health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition" 
                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Men's Health</Link>
              <Link to="/blog/women-health" className="block px-4 py-2 hover:bg-red-500 hover:text-white transition" 
                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Women's Health</Link>
            </div>
          )}
        </div>
        
        <Link to="/contact" className="block px-4 py-2 hover:text-red-500 font-extrabold text-lg" 
              onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
