import React from "react";
import Footer from "./Footer";

const HealthDetail = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text">
          A Holistic Approach to a Balanced Life
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Achieving true wellness means maintaining a balance between your body, mind, and spirit.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-10 text-gray-200">
        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            1. Nourish Your Body with Nutrient-Rich Foods
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Eat a balanced diet with fruits, vegetables, whole grains, and lean proteins.</li>
            <li>Stay hydrated with at least 8 glasses of water daily.</li>
            <li>Limit processed foods to lower the risk of chronic diseases.</li>
            <li>Practice mindful eating by paying attention to hunger cues.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">
            2. Prioritize Quality Sleep
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Maintain a consistent sleep routine, even on weekends.</li>
            <li>Optimize your sleep environment with darkness, quiet, and a cool temperature.</li>
            <li>Limit screen time before bed to improve sleep quality.</li>
            <li>Relax before bed with meditation or deep breathing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
            3. Move Your Body Regularly
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Aim for at least 150 minutes of moderate aerobic activity weekly.</li>
            <li>Include strength training exercises twice a week.</li>
            <li>Stay active daily by taking breaks and stretching.</li>
            <li>Find joy in movement through activities like yoga or dancing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            4. Cultivate Mental and Emotional Wellness
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Engage in mindfulness practices like meditation and journaling.</li>
            <li>Set boundaries to protect your mental energy.</li>
            <li>Maintain strong social connections for emotional support.</li>
            <li>Seek professional help if needed.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">
            5. Foster a Positive Mindset
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Practice gratitude daily to boost happiness.</li>
            <li>Embrace challenges as opportunities for growth.</li>
            <li>Reduce exposure to negativity, including toxic environments.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            6. Make Small, Sustainable Changes
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Set realistic goals for gradual health improvements.</li>
            <li>Track progress and celebrate milestones.</li>
            <li>Be patient and embrace the journey towards wellness.</li>
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

export default HealthDetail;
