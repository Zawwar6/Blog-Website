import React from "react";
import Footer from "./Footer";

const MensHealthDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl mb-4 py-5 md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          Your Comprehensive Guide to Lifelong Well-Being
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Men's health extends beyond physical fitness—it includes mental clarity, emotional stability, and preventive care for long-term well-being.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-10 text-gray-200">
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text">
            1. Prioritize Heart Health
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Eat a heart-healthy diet rich in whole foods and lean proteins</li>
            <li>Engage in regular aerobic exercise</li>
            <li>Monitor blood pressure and cholesterol levels</li>
            <li>Limit alcohol intake and quit smoking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            2. Manage Stress and Mental Well-Being
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Practice mindfulness and meditation</li>
            <li>Maintain a healthy work-life balance</li>
            <li>Stay socially connected with family and friends</li>
            <li>Seek professional support when needed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            3. Fitness for Strength, Endurance, and Flexibility
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Incorporate strength training at least twice a week</li>
            <li>Engage in cardiovascular exercises like running or cycling</li>
            <li>Maintain flexibility with regular stretching and mobility work</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
            4. Prostate Health: Prevention and Early Detection
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Understand the risks and symptoms of prostate issues</li>
            <li>Get regular screenings, especially after age 50</li>
            <li>Maintain a healthy diet rich in omega-3s and vegetables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-500 text-transparent bg-clip-text">
            5. Energy-Boosting Habits
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Prioritize 7-9 hours of sleep each night</li>
            <li>Eat nutrient-dense foods for sustained energy</li>
            <li>Stay hydrated and limit caffeine intake</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
            6. Preventive Health Screenings
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Regularly check blood pressure and cholesterol levels</li>
            <li>Screen for diabetes and colon cancer</li>
            <li>Perform testicular self-exams</li>
          </ul>
        </section>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg font-bold text-gray-300">Start your journey to better health today—small changes lead to long-term well-being.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default MensHealthDetails;
