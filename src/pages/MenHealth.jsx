import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

const menHealthArticles = [
  {
    title: "Heart Health",
    image: "/heart.jpeg",
    description:
      "Heart disease is one of the leading causes of death among men, but it's preventable with the right lifestyle choices. Eating a diet rich in healthy fats, lean proteins, and whole grains can significantly reduce the risk of heart problems. Regular exercise, such as cardio and strength training, helps maintain healthy cholesterol and blood pressure levels. Managing stress, avoiding smoking, and getting regular check-ups are crucial steps to keeping your heart strong and healthy.",
    link: "/blog/men-heart-health",
  },
  {
    title: "Testosterone & Energy",
    image: "/testi.jpg",
    description:
      "Testosterone plays a vital role in maintaining muscle mass, bone density, and overall energy levels in men. Low testosterone levels can lead to fatigue, mood swings, and reduced strength. Boost your testosterone naturally by following a balanced diet rich in zinc, vitamin D, and healthy fats. Strength training, proper sleep, and stress reduction techniques can also help regulate hormone levels and keep your energy at its peak.",
    link: "/blog/men-testosterone",
  },
  {
    title: "Mental Health & Stress",
    image: "/depression.jpg",
    description:
      "Mental health is just as important as physical health. Many men struggle with stress, anxiety, and depression but often hesitate to seek help. Practicing mindfulness, engaging in hobbies, and maintaining strong social connections can help manage stress effectively. Seeking therapy or talking to a trusted friend can be a game-changer in dealing with emotional struggles. Remember, taking care of your mental well-being is a sign of strength, not weakness.",
    link: "/blog/men-mental-health",
  },
  {
    title: "Prostate Health",
    image: "/prostate.jpg",
    description:
      "As men age, prostate health becomes a critical concern. Enlarged prostate and prostate cancer are common issues, but early detection can make all the difference. A diet rich in antioxidants, regular exercise, and staying hydrated can help maintain prostate health. Regular screenings and doctor consultations are essential for early diagnosis and treatment. Stay informed and proactive about your prostate health to ensure long-term wellness.",
    link: "/blog/men-prostate-health",
  },
  {
    title: "Fitness & Strength",
    image: "/bg2.jpg",
    description:
      "Strength training, cardiovascular exercises, and flexibility workouts are essential for maintaining a strong and fit body. Whether your goal is to build muscle, lose weight, or improve endurance, consistency is key. A mix of resistance training, high-intensity interval training (HIIT), and proper nutrition can help you achieve peak fitness levels. Remember, staying active is not just about looking good—it's about feeling strong and maintaining overall health.",
    link: "/blog/men-fitness",
  },
];

const MenHealth = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="py-12 text-center px-4">
        <h2 className="text-2xl py-3 sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Men's Health: Strength, Energy & Vitality
        </h2>
        <p className="text-2xl sm:text-lg font-bold mt-4 bg-gradient-to-r from-white to-blue-600 text-transparent bg-clip-text">
          Unlock the secrets to a healthier, stronger, and more energized life.
        </p>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {menHealthArticles.map((article, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-24 items-center mb-16 p-6 sm:p-8 rounded-xl transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 md:px-4 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text">
                {article.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg bg-gradient-to-r font-bold from-green-500 to-blue-600 text-transparent bg-clip-text">
                {article.description}
              </p>

            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenHealth;
