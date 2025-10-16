import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import portfolio from "../assets/portfolio.png";
import bytevote from "../assets/byteVote.jpeg";
import pedalHub from "../assets/pedalHub.png";
import BGgame from "../assets/BillionairesGame.png";
import Espresso from "../assets/EspressoEscape.png";
import espressoKubiks from "../assets/espresso-kubiks.png";

function Projects() {
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern personal portfolio built with React.js, Tailwind CSS, and Framer Motion. It showcases projects, skills, and contact details with smooth animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/VanJoshua-dev/portfolio",
      live: "https://vanjoshua-dev.vercel.app/",
      image: portfolio,
    },
    {
      title: "Pedal Hub",
      description:
        "A full-stack e-commerce web app with product listings, shopping cart, and checkout features. Built with React, Node.js, and Firebase.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/VanJoshua-dev/PedalHub",
      image: pedalHub,
    },
    {
      title: "ByteVote",
      description:
        "An online voting platform built with the MERN stack for managing votes and candidates securely.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/VanJoshua-dev/ByteVote",
      image: bytevote,
    },
    {
      title: "Billionaires Game",
      description:
        "An interactive quiz-style game built in React. Fun and educational gameplay experience.",
      tech: ["React"],
      github: "https://github.com/VanJoshua-dev/Game",
      live: "https://billionaires-game.vercel.app/",
      image: BGgame,
    },
    {
      title: "Espresso Escape",
      description:
        "A coffee-themed game website with smooth animations and interactive UI built using React.",
      tech: ["React"],
      github: "https://github.com/VanJoshua-dev/Espresso",
      live: "https://espresso-escape.vercel.app/",
      image: Espresso,
    },
    {
      title: "Espresso Kubiks",
      description:
        "A 3D Rubik’s Cube game built using React and Three.js with dynamic lighting and animation.",
      tech: ["React", "Three.js"],
      github: "https://github.com/v4nDev/rubiksCube",
      live: "https://espresso-kubiks.onrender.com/",
      image: espressoKubiks,
    },
  ];

  // Scroll the carousel when clicking left/right
  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 310;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 text-white overflow-hidden"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        PROJECTS
      </motion.h1>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute cursor-target left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-blue-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="w-full max-w-6xl flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] sm:min-w-[400px] bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fit hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-gray-700/70 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-target items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-target items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute cursor-target right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-blue-500 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}

export default Projects;
