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
import Navbar from "./components/Navbar";
import HealthDetail from "./pages/HealthDetail";
import FitnessDetail from "./pages/FitnessDetail";
import HormonesDetails from "./pages/HormonesDetails";
import WomenHealthDetails from "./pages/WomenHealthDetails";
import MenHealthDetail from "./pages/MenHealthDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/health" element={<Health />} />
          <Route path="/HealthDetail" element={<HealthDetail />} />
          <Route path="/FitnessDetail" element={<FitnessDetail />} />
          <Route path="/HormonesDetail" element={<HormonesDetails />} />
          <Route path="/WomenDetails" element={<WomenHealthDetails />} />
          <Route path="/MenDetails" element={<MenHealthDetail />} />
          <Route path="/blog/fitness" element={<Fitness />} />
          <Route path="/blog/hormones" element={<Hormones />} />
          <Route path="/blog/men-health" element={<MenHealth />} />
          <Route path="/blog/women-health" element={<WomenHealth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/> 
    </Router>
  );
}

export default App;
