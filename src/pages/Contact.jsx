import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-md" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-md h-32"></textarea>
        <button className="mt-8 px-10 py-4 cursor-pointer bg-gradient-to-r from-black to-blue-700 text-white text-lg font-semibold rounded-full shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">Send Message</button>
      </form>
    </div>
  </div>
  )
}

export default Contact
