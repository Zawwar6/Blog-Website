import React, { useState } from "react";
import Navbar from "../pages/Navbar";

const Health = () => {
  const [selectedTopic, setSelectedTopic] = useState("covid");

  const topics = {
    covid: {
      title: "Understanding COVID-19",
      image: "/corona.jpg",
      details: [
        {
          heading: "Causes & Transmission",
          color: "text-red-600",
          points: [
            "Person-to-person transmission through droplets",
            "Contact with contaminated surfaces",
            "Close contact with infected individuals",
          ],
        },
        {
          heading: "Symptoms",
          color: "text-yellow-600",
          points: [
            "Fever & chills",
            "Cough & shortness of breath",
            "Fatigue & muscle aches",
            "Loss of taste or smell",
          ],
        },
        {
          heading: "Prevention & Safety Measures",
          color: "text-green-600",
          points: [
            "Frequent handwashing with soap",
            "Wearing a mask in crowded places",
            "Maintaining social distance",
            "Getting vaccinated",
          ],
        },
        {
          heading: "Effects on Health",
          color: "text-purple-600",
          points: [
            "Respiratory issues & lung damage",
            "Long-term fatigue & weakness",
            "Increased risk of heart complications",
          ],
        },
      ],
    },
    men_health: {
      title: "Men's Health & Wellness",
      image: "/men-h.jpg",
      details: [
        {
          heading: "Common Health Issues",
          color: "text-red-600",
          points: [
            "Heart Disease & High Blood Pressure",
            "Prostate Health Concerns",
            "Mental Health & Stress Management",
          ],
        },
        {
          heading: "Health Tips",
          color: "text-green-600",
          points: [
            "Regular Exercise & Balanced Diet",
            "Routine Health Screenings",
            "Managing Stress & Sleep Patterns",
          ],
        },
      ],
    },
    women_health: {
      title: "Women's Health & Wellness",
      image: "/women-h.jpg",
      details: [
        {
          heading: "Important Health Concerns",
          color: "text-red-600",
          points: [
            "Hormonal Imbalances & PCOS",
            "Breast & Cervical Cancer Awareness",
            "Mental Well-being & Self-care",
          ],
        },
        {
          heading: "Healthy Lifestyle Tips",
          color: "text-green-600",
          points: [
            "Balanced Diet & Nutritional Needs",
            "Regular Exercise & Yoga",
            "Managing Stress & Work-life Balance",
          ],
        },
      ],
    },
  };

  return (
    <div>
      <Navbar />
      <div className="py-6 px-8 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Health & Wellness</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedTopic("covid")}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedTopic === "covid" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}
          >
            COVID-19
          </button>
          <button
            onClick={() => setSelectedTopic("men_health")}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedTopic === "men_health" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}
          >
            Men's Health
          </button>
          <button
            onClick={() => setSelectedTopic("women_health")}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedTopic === "women_health" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}
          >
            Women's Health
          </button>
        </div>
      </div>

      <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-center bg-gray-100 text-gray-900">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={topics[selectedTopic].image}
            alt={topics[selectedTopic].title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-1/2 md:pl-12 text-left">
          <h2 className="text-5xl font-bold text-blue-700 mb-6">{topics[selectedTopic].title}</h2>
          {topics[selectedTopic].details.map((section, index) => (
            <div key={index}>
              <h3 className={`text-2xl font-semibold ${section.color} mt-6`}>{section.heading}</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Health;
