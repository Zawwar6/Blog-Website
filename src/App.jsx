import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Health from "./pages/Health";
import Fitness from "./pages/Fitness";
import Hormones from "./pages/Hormones";
import MenHealth from "./pages/MenHealth";
import WomenHealth from "./pages/WomenHealth";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/health" element={<Health />} />
          <Route path="/blog/fitness" element={<Fitness />} />
          <Route path="/blog/hormones" element={<Hormones />} />
          <Route path="/blog/men-health" element={<MenHealth />} />
          <Route path="/blog/women-health" element={<WomenHealth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
    </Router>
  );
}

export default App;
