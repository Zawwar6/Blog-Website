import React from "react";
import Footer from "./Footer";

const HormonesDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text">
          Understanding and Restoring Balance
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Hormones play a crucial role in regulating essential functions like energy levels, mood, metabolism, and reproductive health. Understanding hormonal balance is key to overall vitality.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-10 text-gray-200">
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            1. Recognize the Signs of Hormonal Imbalance
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Fatigue and low energy</li>
            <li>Unexplained weight fluctuations</li>
            <li>Mood swings and irritability</li>
            <li>Sleep disturbances</li>
            <li>Digestive issues like bloating and constipation</li>
            <li>Skin changes such as acne or dryness</li>
            <li>Menstrual irregularities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
            2. Key Hormones and Their Functions
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Cortisol: Regulates stress and metabolism</li>
            <li>Insulin: Controls blood sugar levels</li>
            <li>Estrogen & Progesterone: Affect mood and reproductive health</li>
            <li>Testosterone: Supports muscle mass and energy</li>
            <li>Thyroid Hormones: Regulate metabolism</li>
            <li>Melatonin: Governs sleep cycles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
            3. Natural Strategies to Support Hormonal Balance
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Eat a balanced diet rich in whole foods</li>
            <li>Limit refined sugars and processed carbs</li>
            <li>Incorporate healthy fats like avocados and nuts</li>
            <li>Manage stress through mindfulness and relaxation techniques</li>
            <li>Prioritize sleep to regulate hormones</li>
            <li>Exercise regularly to support metabolic health</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            4. When to Seek Professional Help
          </h2>
          <p className="mt-3">
            If symptoms persist despite lifestyle changes, consult a healthcare provider for personalized guidance and potential hormone testing.
          </p>
        </section>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg font-bold text-gray-300">Take charge of your hormonal health today for a balanced, vibrant life.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default HormonesDetails;
