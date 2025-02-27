import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

const blogTopics = [
  {
    title: "Health & Wellness",
    image: "/hw.jpg",
    description:
      "True wellness balances body, mind, and spirit. Eat nutrient-rich foods—fruits, veggies, whole grains, and lean proteins—to fuel your body. Stay hydrated and prioritize sleep (7-9 hours) for energy and recovery. Move daily: walk, stretch, or exercise to boost strength and mood. Practice mindfulness through meditation or deep breathing to reduce stress and improve focus. Nurture positive relationships—they’re essential for emotional well-being. Small, consistent changes in diet, activity, and mindset lead to lasting health. Start today for a vibrant, fulfilling life.",
    link: "/blog/health",
  },
  {
    title: "Fitness & Exercise",
    image: "/fte.jpg",
    description:
      "Support your body with wholesome, nutrient-packed meals and stay active with fitness routines tailored to your goals. Practice mindfulness through meditation or yoga to reduce stress and boost mental clarity. Prioritize quality sleep and recovery to recharge your energy. With expert advice and science-backed strategies, you’ll find the tools to build a healthier, happier lifestyle. Start small, stay consistent, and transform your well-being—one step at a time.",
    link: "/blog/fitness",
  },
  {
    title: "Hormonal Health",
    image: "/hb.jpg",
    description:
      "Hormones are the body’s silent messengers, influencing everything from energy levels to mood and metabolism. Discover how hormonal imbalances can disrupt your well-being, leading to symptoms like fatigue, weight fluctuations, and mood swings. Learn practical strategies to restore balance—through nutrition, stress management, and lifestyle changes—and take control of your hormonal health for a vibrant, balanced life.",
    link: "/blog/hormones",
  },
  {
    title: "Men's Health",
    image: "/menh.png",
    description:
      "Take charge of your well-being with essential health tips designed for men. Learn how to protect your heart through smart nutrition and regular exercise. Manage stress effectively with mindfulness techniques and balanced routines. Discover fitness plans that build strength, endurance, and flexibility. Stay proactive about prostate health—understand the risks, symptoms, and preventive measures. From energy-boosting habits to long-term wellness strategies, this is your roadmap to a healthier, stronger, and more vibrant life. Start today and prioritize your health like never before.",
    link: "/blog/men-health",
  },
  {
    title: "Women's Health",
    image: "/womenh.jpg",
    description:
      "Your health is your greatest asset. Start by nourishing your body with wholesome foods that support heart health and boost energy. Incorporate movement into your daily routine—whether it’s yoga, walking, or strength training—to build resilience and vitality. Understand the importance of hormonal balance and how it impacts your mood, energy, and overall well-being. Stay proactive about reproductive health and regular check-ups to catch potential issues early. Small, consistent steps today can lead to a lifetime of strength, balance, and confidence. Your journey to better health starts now.",
    link: "/blog/women-health",
  },
];

const Health = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="py-12 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 text-center">
          Revive, Thrive, and Feel Alive
        </h2>
        <p className="text-lg md:text-xl font-bold mt-4 bg-gradient-to-r from-white to-pink-600 text-transparent bg-clip-text">
          Discover expert tips, actionable advice, and inspiring stories to transform your health and wellness journey.
        </p>
      </div>

      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        {blogTopics.map((topic, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-12 items-center mb-16 p-6 md:p-8 rounded-xl transition-transform transform hover:scale-105 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-auto max-h-[350px] md:max-h-[400px] lg:max-h-[500px] rounded-xl shadow-md object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 md:px-2 text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                {topic.title}
              </h2>
              <p className="text-base md:text-lg bg-gradient-to-r font-bold from-green-500 to-pink-600 text-transparent bg-clip-text">
                {topic.description}
              </p>
              <Link
                to={topic.link}
                className="block mt-6 py-3 bg-gradient-to-r from-gray-400 to-blue-700 text-white text-center text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Health;
