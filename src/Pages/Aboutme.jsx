import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about" /* Add this ID for scrolling */
      className="bg-dark text-white px-8 sm:px-16 lg:px-32 py-12 min-h-screen flex items-center"
    >
      {/* Left Section: About Text */}
      <div className="flex-1">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          About <span className="text-primary">me</span>
        </h2>
        <p className="text-gray-400 mb-6">
        I am a 3rd-year Information Systems student, Python developer, and founder of Infinity Tech Club.
         Skilled in web development, app creation, and automation,
          I’ve led projects like a Discord Bot and an E-commerce System.
           With certifications in AI Programming and Deep Learning, I deliver innovative tech solutions.
        </p>
        
      </div>

      {/* Right Section: Illustration */}
      <div className="flex-1 relative flex justify-center items-center">
        {/* Person Illustration */}
        <img
          src="src/assets/abt.svg"
          alt="Person Illustration"
          className="z-10 max-w-sm sm:max-w-md"
        />
       
      </div>
    </section>
  );
};

export default AboutSection;
