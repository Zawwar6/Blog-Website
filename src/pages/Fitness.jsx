import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const fitnessArticles = [
  {
    id: 1,
    title: "The Ultimate Full-Body Workout Plan",
    description:
      "A complete workout routine is essential for building strength, endurance, and muscle growth. This plan focuses on a mix of compound exercises, high-intensity interval training (HIIT), and proper recovery techniques. It includes strength training, cardio, and mobility exercises. For best results, train 3-5 times a week, follow a balanced diet, and progressively increase intensity. By staying consistent and focusing on proper recovery, you can achieve long-term fitness success.",
    image: "/workout.jpg",
    link: "/blog/ultimate-workout",
    reverse: false,
  },
  {
    id: 2,
    title: "Top 5 Nutrition Tips for a Healthier Life",
    description:
      "Proper nutrition plays a crucial role in overall health. Eating whole foods instead of processed meals helps maintain energy levels and supports body functions. Staying hydrated boosts metabolism and digestion, while healthy fats like avocados and nuts provide essential nutrients. A balanced diet that includes protein, fiber, and essential vitamins can significantly improve well-being. Making small, sustainable changes in your eating habits leads to long-term health benefits.",
    image: "/nutrition.jpg",
    link: "/blog/nutrition-tips",
    reverse: true,
  },
  {
    id: 3,
    title: "Mental Health & Fitness: The Perfect Balance",
    description:
      "Mental and physical health go hand in hand. Regular exercise releases endorphins, reducing stress and enhancing mood. Meditation and deep breathing improve focus and emotional stability, while outdoor activities boost positivity. Incorporating fitness into your routine not only strengthens your body but also improves mental clarity and confidence. A balanced lifestyle with adequate rest and mindful activities leads to overall well-being.",
    image: "/bg2.jpg",
    link: "/blog/mental-health-fitness",
    reverse: false,
  },
  {
    id: 4,
    title: "Weight Loss Myths You Need to Stop Believing",
    description:
      "Many misconceptions about weight loss prevent people from achieving sustainable results. Carbs don’t necessarily cause weight gain; in fact, the right type of carbs fuels workouts. Skipping meals slows down metabolism instead of aiding weight loss. Fat-free foods are often high in sugar and not always the healthier option. Sweating does not equal fat loss; real progress comes from consistent exercise and a balanced diet. Understanding these facts can help you make smarter choices on your weight loss journey.",
    image: "/weight-loss.jpg",
    link: "/blog/weight-loss-myths",
    reverse: true,
  },
];

const FitnessPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section
        className="h-[30vh] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/fitness-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r py-3 from-green-400 to-blue-600 text-transparent bg-clip-text relative z-10">
          Transform Your Fitness Journey
        </h2>
        <p className="text-base mt-4 max-w-2xl relative z-10">
          Expert guides on workouts, nutrition, and mental health.
        </p>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl  mx-auto py-16 space-y-16 px-4">
        {fitnessArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className={`flex flex-col md:flex-row ${article.reverse ? "md:flex-row-reverse" : ""} items-center gap-8  p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Article Image */}
            <div className="md:w-1/2">
              <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
            </div>

            {/* Article Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold  bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {article.title}
              </h2>
              <p className=" mt-4 text-sm bg-gradient-to-r font-bold from-green-500 to-pink-600 text-transparent bg-clip-text leading-relaxed ">
                {article.description}
              </p>
              
            </div>
          </motion.div>
        ))}
        <Link
                        to='/FitnessDetail'
                        className=" py-3 px-6 bg-gradient-to-r from-gray-400 to-blue-700 text-white text-center ml-6 text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Read More About The Fitness
                      </Link>
      </section>
    
    </div>
  );
};

export default FitnessPage;
