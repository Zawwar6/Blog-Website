import React from "react";
import Footer from "./Footer";

const FitnessDetail = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text">
          Your Path to a Stronger, Healthier You
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Regular physical activity strengthens your body, enhances mental clarity, boosts mood, and reduces the risk of chronic diseases.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-10 text-gray-200">
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            1. Design a Fitness Routine Tailored to Your Goals
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Weight Management: Combine cardio with strength training to burn calories and build lean muscle.</li>
            <li>Muscle Building: Focus on resistance training, increasing intensity over time.</li>
            <li>Improving Flexibility: Include stretching exercises, yoga, or Pilates.</li>
            <li>Boosting Endurance: Engage in aerobic activities like swimming or jogging.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
            2. Embrace a Balanced Workout Plan
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Exercise regularly: Aim for at least 150 minutes of moderate-intensity aerobic activity weekly.</li>
            <li>Strength train twice weekly for muscle and bone health.</li>
            <li>Include active recovery days with stretching or gentle yoga.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
            3. Prioritize Mind-Body Wellness
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Yoga enhances flexibility, balance, and mental clarity.</li>
            <li>Meditation fosters mindfulness, reducing stress.</li>
            <li>Deep breathing techniques improve endurance and heart rate regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            4. Fuel Your Body for Optimal Performance
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Pre-workout nutrition: Eat a balanced snack with complex carbohydrates and protein.</li>
            <li>Stay hydrated: Drink water before, during, and after workouts.</li>
            <li>Post-workout recovery: Replenish nutrients with a protein-rich meal.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">
            5. Stay Consistent and Celebrate Progress
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Set realistic goals: Define clear milestones for motivation.</li>
            <li>Track progress with a fitness journal or app.</li>
            <li>Stay inspired by engaging in enjoyable activities and group fitness classes.</li>
          </ul>
        </section>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg font-bold text-gray-300">Start today—your future self will thank you.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default FitnessDetail;
