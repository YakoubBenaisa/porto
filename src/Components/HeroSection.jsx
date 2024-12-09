import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-dark text-white min-h-[calc(100vh-65px)] flex items-center px-8 sm:px-16 lg:px-32">
      {/* Left Section: Text */}
      <div className="flex-1">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
          CREATIVE SOFTWARE <span className="text-primary">DEVELOPER</span>
        </h1>
        <p className="text-gray-400 mb-6">
          I create innovative, scalable, and user-friendly software solutions. Let’s build something amazing together!
        </p>
        <div className="flex space-x-4">
          <a href="">
            <button className="bg-primary px-6 py-3 rounded-md text-white font-medium hover:bg-primary-dark">
              <a href='https://github.com/YakoubBenaisa'>Github</a>
            </button>
          </a>
          <a 
            href="assets/CV.pdf" // Adjust this path based on the file in your public folder
            download="My_CV.pdf" // Customize the file name
            className="bg-gray-700 px-6 py-3 rounded-md text-white font-medium hover:bg-gray-600"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Section: Illustration */}
      <div className="flex-1 flex justify-center py-[100px]">
        <img 
          src="assets/coolguy.svg" 
          alt="Creative Developer Illustration" 
          className="max-w-full h-auto ml-[150px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
