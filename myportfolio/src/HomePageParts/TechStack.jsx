import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

function TechStack() {
  const frontendTechs = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl md:text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl md:text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl md:text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-3xl md:text-4xl" /> },
    { name: "React", icon: <FaReact className="text-sky-400 text-3xl md:text-4xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-3xl md:text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-3xl md:text-4xl" /> },
  ];

  const backendTechs = [
    { name: "Node", icon: <FaNodeJs className="text-green-500 text-3xl md:text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-3xl md:text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl md:text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-amber-400 text-3xl md:text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl md:text-4xl" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-30 px-4 md:px-10 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-center 
        "
        // bg-gradient-to-r from-blue-500 to-cyan-400 
        // bg-clip-text text-transparent
      >
        TECHNOLOGIES
      </motion.h1>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full mb-8"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 bg-gray-900 rounded-sm border text-center text-cyan-300">
          Frontend
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:flex gap-3 md:gap-4 justify-center"
        >
          {frontendTechs.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center border-2  justify-center
              bg-gray-800/50 rounded-xl
              w-20 h-20 md:w-28 md:h-28
              text-xs md:text-base
              hover:bg-gray-700 transition"
            >
              {tech.icon}
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Backend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center border bg-gray-900 rounded-sm text-green-400">
          Backend
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:flex gap-3 md:gap-4 justify-center"
        >
          {backendTechs.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center border-2 justify-center
              bg-gray-800/50 rounded-xl
              w-20 h-20 md:w-28 md:h-28
              text-xs md:text-base
              hover:bg-gray-700 transition"
            >
              {tech.icon}
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TechStack;
