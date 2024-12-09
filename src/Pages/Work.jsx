import React, { useState } from "react";

const RecentWorks = () => {
  // Project data
  const projects = [
    {
      id: 1,
      category: "Automation",
      image: "src/assets/yty.png",
      title: "YouTube Downloader Script",
    },
    {
      id: 2,
      category: "Automation",
      image: "src/assets/amascrape.png",
      title: "Amazon Products Scraper",
    },
    {
      id: 3,
      category: "Automation",
      image: "src/assets/disco.png",
      title: "Discord Drop Bot E-Commerce",
    },
    {
      id: 4,
      category: "Web",
      image: "src/assets/dona.png",
      title: "Blood Donation Website",
    },
    {
      id: 6,
      category: "Web",
      image: "src/assets/fun.png",
      title: "When The Idea Comes To Reality",
    },
    {
      id: 5,
      category: "Web",
      image: "src/assets/ecom.png",
      title: "Buy From Everywhere",
    },
    {
      id: 6,
      category: "Desktop",
      image: "src/assets/delp.png",
      title: "Organize Your Shop",
    },
    {
      id: 6,
      category: "Automation",
      image: "src/assets/sql.png",
      title: "Experiance Hacking Today",
    },
    {
      id: 7,
      category: "Automation",
      image: "src/assets/insa.png",
      title: "Automate Your Social Life",
    },
    
    
  ];

  // State to manage active filter and filtered projects
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="works"
      className="bg-dark text-white px-8 sm:px-16 lg:px-32 py-12 min-h-screen relative"
    >
      {/* Background doodles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="src/assets/doodles.svg"
          alt="Background doodles"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          My recent <span className="text-primary">works</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="relative z-10 flex justify-center space-x-4 mb-12">
        {["All", "Automation", "Desktop", "Web"].map((filter) => (
          <button
            key={filter}
            className={`px-6 py-2 rounded-md font-medium ${
              activeFilter === filter
                ? "bg-primary text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Work Items */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
