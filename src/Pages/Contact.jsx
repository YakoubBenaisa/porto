import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <section id='contact' className="bg-dark text-white py-16 px-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Got a project in <span className="text-primary">mind?</span>
          </h2>
          <div className="flex justify-center">
            <img
              src="src/assets/cntct.png" // Replace with your image path
              alt="Illustration"
              className="max-w-xs"
            />
          </div>
        </div>

        <div className="flex-1 pl-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-300 hover:text-primary">Home</a>
          <a href="#about" className="text-gray-300 hover:text-primary">About me</a>
          <a href="#contact" className="text-gray-300 hover:text-primary">Contact</a>
        </div>
        <p className="text-sm text-gray-400">
          Terms of Service - Privacy Policy
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
