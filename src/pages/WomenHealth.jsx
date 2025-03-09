import React from "react";
import { Link } from "react-router-dom";



const womenHealthArticles = [
  {
    title: "Hormonal Balance",
    image: "/hb.jpg",
    description:
      "Women's hormones fluctuate throughout life, affecting energy, mood, and overall well-being. A balanced diet rich in omega-3s, lean proteins, and whole grains can help maintain stability. Reducing stress through mindfulness, yoga, and regular exercise supports hormonal health. If you experience fatigue, mood swings, or irregular cycles, consult a healthcare provider to explore solutions tailored to your needs.",
    link: "/blog/women-hormonal-health",
  },
  {
    title: "Reproductive Health",
    image: "/rw.png",
    description:
      "Understanding reproductive health is crucial for overall wellness. Regular check-ups, a nutrient-dense diet, and proper hydration support a healthy reproductive system. Awareness about conditions like PCOS, endometriosis, and menstrual irregularities helps in early diagnosis and management. Empower yourself with knowledge to take proactive steps toward reproductive well-being.",
    link: "/blog/women-reproductive-health",
  },
  {
    title: "Mental Health & Stress",
    image: "/wm.png",
    description:
      "Women often juggle multiple responsibilities, leading to stress and anxiety. Prioritizing self-care, seeking therapy when needed, and maintaining a strong support system are essential. Engaging in activities like meditation, journaling, or creative hobbies can significantly improve mental well-being. Remember, taking care of your mental health is just as important as your physical health.",
    link: "/blog/women-mental-health",
  },
  {
    title: "Bone & Joint Health",
    image: "/bb.jpg",
    description:
      "Osteoporosis is a common concern for women, especially as they age. A calcium-rich diet, weight-bearing exercises, and vitamin D intake help in maintaining strong bones. Strength training and mobility exercises also support joint health, preventing stiffness and pain. Start early to ensure lifelong strength and flexibility.",
    link: "/blog/women-bone-health",
  },
  {
    title: "Heart Health",
    image: "/heart.jpeg",
    description:
      "Heart disease is one of the leading health concerns for women. Maintaining a healthy lifestyle with proper nutrition, regular exercise, and stress management can reduce risks. Watching cholesterol levels, staying hydrated, and getting enough sleep contribute to cardiovascular well-being. Small changes today can lead to a healthier heart tomorrow.",
    link: "/blog/women-heart-health",
  },
];

const WomenHealth = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* <Navbar /> */}
      <div className="py-8 text-center px-4">
        <h2 className="text-4xl py-3 sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
          Women's Health: <br /> Strength, Balance & Wellness
        </h2>
        <p className="text-base py-3 sm:text-lg font-bold mt-4 bg-gradient-to-r from-white to-pink-600 text-transparent bg-clip-text">
          Empowering women with knowledge, care, and wellness for a healthier life.
        </p>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {womenHealthArticles.map((article, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-24 items-center mb-16 p-6 sm:p-8 rounded-xl transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="w-full md:w-1/2 ">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64  sm:h-80 md:h-96 rounded-xl shadow-md object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 md:px-4 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-transparent bg-clip-text">
                {article.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg bg-gradient-to-r font-bold from-purple-500 to-pink-600 text-transparent bg-clip-text">
                {article.description}
              </p>
             
            </div>
          </div>
        ))}
         <Link
                                        to='/WomenDetails'
                                        className=" py-3 ml-4 px-6 bg-gradient-to-r from-gray-400 to-blue-700 text-white text-center text-lg font-semibold rounded-full shadow-xl hover:from-black hover:to-blue-800 transition-all duration-300 transform"
                                        onClick={() => window.scrollTo(0, 0)}
                                      >
                                        Read More About The Women's Health
                                      </Link>
      </section>
     
    </div>
  );
};

export default WomenHealth;
