import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import portfolio from "../assets/portfolio.png";
import bytevote from "../assets/byteVote.jpeg";
import pedalHub from "../assets/pedalHub.png";
import BGgame from "../assets/BillionairesGame.png";
import Espresso from "../assets/EspressoEscape.png";
import espressoKubiks from "../assets/espresso-kubiks.png";
import dormManagement from "../assets/dorm-management.png";
import codeWithIntegrity from "../assets/code-with-integrity.png";

function Projects() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern personal portfolio that showcases projects, skills, and contact details with smooth scroll animation.",
      tech: ["React", "Tailwindcss", "Framer Motion", "Shadcn", "Reactbits"],
      github: "https://github.com/VanJoshua-dev/portfolio",
      live: "https://vanjoshua-dev.vercel.app/",
      image: portfolio,
    },
    {
      title: "Pedal Hub",
      description:
        "A full-stack e-commerce web app with product listings and inventory management.",
      tech: ["React", "NodeJS", "Express", "MySQL", "Tailwindcss"],
      github: "https://github.com/VanJoshua-dev/PedalHub",
      image: pedalHub,
    },
    {
      title: "ByteVote",
      description: "An online voting platform for school organizations.",
      tech: ["React", "NodeJS", "Express", "MySQL"],
      github: "https://github.com/VanJoshua-dev/ByteVote",
      image: bytevote,
    },
    {
      title: "Billionaires Game",
      description: "A ninja-themed game website with smooth animations.",
      tech: ["React", "Tailwindcss"],
      github: "https://github.com/VanJoshua-dev/Game",
      live: "https://billionaires-game.vercel.app/",
      image: BGgame,
    },
    {
      title: "Espresso Escape",
      description: "A coffee-themed game website with interactive UI.",
      tech: ["React", "Tailwindcss"],
      github: "https://github.com/VanJoshua-dev/Espresso",
      live: "https://espresso-escape.vercel.app/",
      image: Espresso,
    },
    {
      title: "Espresso Kubiks",
      description: "A 3D Rubik’s Cube game built using React and Three.js.",
      tech: ["React", "Tailwindcss", "Three.js"],
      github: "https://github.com/v4nDev/rubiksCube",
      live: "https://espresso-kubiks.onrender.com/",
      image: espressoKubiks,
    },
    {
      title: "Dorm Management System",
      description:
        "A web-based system for dorm applications and room management.",
      tech: ["React", "NodeJS", "Express", "MySQL", "Tailwindcss"],
      github: "https://github.com/VanJoshua-dev/DormManagement",
      image: dormManagement,
    },
    {
      title: "Academic Dishonesty Through Code",
      description:
        "An interactive campaign website with quizzes and policy references.",
      tech: ["React", "Tailwindcss", "Framer Motion"],
      github: "https://github.com/VanJoshua-dev/DCIT65",
      live: "https://academic-dishonesty-through-code-pl.vercel.app/",
      image: codeWithIntegrity,
    },
  ];

  const next = () => {
    setDirection(1);
    setIndex((i) => Math.min(i + 1, projects.length - 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => Math.max(i - 1, 0));
  };

  const [direction, setDirection] = useState(0);

  // Handle horizontal swipe on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const variant = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next(); // swipe to left = next
      } else {
        prev(); // swipe to right = prev
      }
    }

    // Handle the animation direction to which the user swiped or which button is clicked
  };

  return (
    <section
      id="projects"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white overflow-hidden"
    >
      <h1 className="text-4xl font-extrabold mb-6 ">PROJECTS</h1>

      {/* Project Card */}
      <div className="relative w-full  max-w-7xl min-h-[70vh]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full bg-gray-800/60 border-2 border-blue-500 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-150 md:h-100">
              {/* IMAGE SECTION */}
              <div className="relative w-full h-[290px] md:h-full">
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="absolute inset-0 w-full h-full object-fit"
                />
              </div>

              {/* CONTENT SECTION */}
              <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  {projects[index].title}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {projects[index].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[index].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700/80 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {projects[index].github && (
                    <a
                      href={projects[index].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 cursor-pointer cursor-target hover:text-white transition"
                    >
                      <FaGithub className="inline mr-2" /> Code
                    </a>
                  )}

                  {projects[index].live && (
                    <a
                      href={projects[index].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 border border-cyan-500 cursor-pointer cursor-target text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition"
                    >
                      <FaExternalLinkAlt className="inline mr-2" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 md:-left-6 top-40 md:top-50 -translate-y-1/2 p-3 bg-gray-900/70 border border-white rounded-full hover:bg-gray-700 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 md:-right-6 top-40 md:top-50 -translate-y-1/2 p-3 bg-gray-900/70 border border-white rounded-full hover:bg-gray-700 transition"
        >
          <FaChevronRight />
        </button>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition cursor-pointer cursor-target ${
                i === index ? "bg-cyan-400 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
