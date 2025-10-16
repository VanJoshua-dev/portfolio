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
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    { name: "React JS", icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-4xl" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 text-4xl" />,
    },
  ];

  const backendTechs = [
    { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-amber-400 text-4xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // each child animates slightly after the previous
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-30 px-6 md:px-10 text-white">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="sticky z-10 top-0 text-4xl font-extrabold mb-10 text-center 
             bg-gradient-to-r from-blue-500 to-cyan-400 
             bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]"
      >
        TECH STACK
      </motion.h1>

      <div className="w-full h-full flex flex-row flex-wrap justify-center">
        {/* Frontend Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-2 py-2 w-full"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-300">
            Frontend
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {frontendTechs.map((ftech, index) => (
              <motion.span
                variants={itemVariants}
                key={index}
                className="flex flex-col cursor-target items-center text-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 w-28 h-28 hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {ftech.icon}
                {ftech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Backend Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-2 py-2 w-full"
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-green-400">
            Backend
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {backendTechs.map((btech, index) => (
              <motion.span
                variants={itemVariants}
                key={index}
                className="flex flex-col cursor-target items-center text-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 w-28 h-28 hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {btech.icon}
                {btech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
