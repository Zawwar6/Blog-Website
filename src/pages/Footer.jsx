import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Brand & About */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
            VitalEdge
          </h2>
          <p className="mt-2 text-gray-300 text-center md:text-left">
            Your trusted source for health, fitness, and wellness updates. Stay fit, stay healthy!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-red-400">Quick Links</h3>
          <ul className="mt-2 space-y-2  md:text-left">
            <li><Link to="/" className="hover:text-red-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Blog Links */}
        <div>
          <h3 className="text-xl font-bold text-red-400">Blog Categories</h3>
          <ul className="mt-2 space-y-2  md:text-left">
            <li><Link to="/blog/health" className="hover:text-red-400 transition" onClick={() => window.scrollTo(0, 0)}>Health</Link></li>
            <li><Link to="/blog/fitness" className="hover:text-red-400 transition" onClick={() => window.scrollTo(0, 0)}>Fitness</Link></li>
            <li><Link to="/blog/hormones" className="hover:text-red-400 transition" onClick={() => window.scrollTo(0, 0)}>Hormones</Link></li>
            <li><Link to="/blog/men-health" className="hover:text-red-400 transition" onClick={() => window.scrollTo(0, 0)}>Men's Health</Link></li>
            <li><Link to="/blog/women-health" className="hover:text-red-400 transition" onClick={() => window.scrollTo(0, 0)}>Women's Health</Link></li>
          </ul>
        </div>
    
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">&copy; 2025 VitalEdge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
