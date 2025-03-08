import React from "react";
import { motion } from "framer-motion";

import Footer from "./Footer";
import { Link } from "react-router-dom";

const hormoneArticles = [
  {
    id: 1,
    title: "Testosterone: The Power Hormone",
    description:
      "Testosterone is the primary male sex hormone responsible for muscle growth, bone density, and libido. It also affects mood and energy levels. Low testosterone can lead to fatigue, depression, and decreased muscle mass. Maintaining healthy levels through exercise, proper sleep, and a balanced diet is crucial for men’s overall well-being.",
    image: "/testi.jpg",
    link: "/blog/testosterone",
    reverse: false,
  },
  {
    id: 2,
    title: "Estrogen: The Female Health Regulator",
    description:
      "Estrogen plays a crucial role in women's reproductive health, bone strength, and heart health. It regulates the menstrual cycle and supports pregnancy. Low estrogen levels can cause mood swings, hot flashes, and osteoporosis, while excess estrogen may lead to weight gain and hormonal imbalances.",
    image: "/regula.jpg",
    link: "/blog/estrogen",
    reverse: true,
  },
  {
    id: 3,
    title: "Cortisol: The Stress Hormone",
    description:
      "Cortisol helps the body respond to stress, but excess levels can lead to anxiety, weight gain, and high blood pressure. Managing stress through mindfulness, exercise, and proper sleep can help keep cortisol levels in check.",
    image: "/depression.jpg",
    link: "/blog/cortisol",
    reverse: false,
  },
  {
    id: 4,
    title: "Insulin: The Blood Sugar Controller",
    description:
      "Insulin regulates blood sugar levels and plays a key role in metabolism. Insulin resistance can lead to diabetes and obesity. A balanced diet with fiber and protein can help maintain healthy insulin function.",
    image: "/insul.jpg",
    link: "/blog/insulin",
    reverse: true,
  },
  {
    id: 5,
    title: "Growth Hormone: Key to Childhood Development",
    description:
      "Growth hormone (GH) is essential for height, muscle development, and overall growth in children. A deficiency can lead to stunted growth, while excessive GH may cause abnormal bone growth.",
    image: "/grow.jpg",
    link: "/blog/growth-hormone",
    reverse: false,
  },
  {
    id: 6,
    title: "Dopamine & Serotonin: Mood Boosters",
    description:
      "Dopamine and serotonin are neurotransmitters that influence mood, motivation, and sleep. Low dopamine is linked to depression and lack of motivation, while serotonin regulates emotions and anxiety. Healthy lifestyle choices like exercise and a balanced diet can naturally boost these hormones.",
    image: "/mind.jpg",
    link: "/blog/mood-hormones",
    reverse: true,
  },
];

const HormonesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section
        className="h-[30vh] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hormones-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r py-3 from-yellow-400 to-red-600 text-transparent bg-clip-text relative z-10">
          Understanding Your Hormones
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl relative z-10">
          Learn how hormones impact your body, mood, and overall health.
        </p>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto py-16 space-y-6 px-4">
        {hormoneArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className={`flex flex-col md:flex-row ${article.reverse ? "md:flex-row-reverse" : ""} items-center gap-8 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Article Image */}
            <div className="w-full md:w-1/2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 md:h-72 lg:h-96 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Article Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
                {article.title}
              </h2>
              <p className="text-gray-300 mt-3 text-base md:text-lg leading-relaxed">
                {article.description}
              </p>
            </div>
          </motion.div>
        ))}
        <Link
                        to='/HormonesDetail'
                        className=" py-3 px-6 bg-gradient-to-r from-gray-400 to-blue-700 text-white text-center text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Read More About The Hormones
                      </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default HormonesPage;
