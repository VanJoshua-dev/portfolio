import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiShadcnui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

function Tools() {
  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600 text-3xl md:text-4xl" />,
    },
    {
      name: "Github",
      icon: <FaGithub className="text-white-500 text-3xl md:text-4xl" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-3xl md:text-4xl" />,
    },
    {
      name: "VsCode",
      icon: <VscVscode className="text-cyan-600 text-3xl md:text-4xl" />,
    },
    {
      name: "Shadcn",
      icon: (
        <SiShadcnui className="text-white  p-2 bg-black rounded-sm text-3xl md:text-4xl" />
      ),
    },
    {
      name: "FramerMotion",
      icon: (
        <img
          src="https://cdn.brandfetch.io/idDJv1mfrb/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1753779030563"
          className="w-10 md:w-12"
          alt=""
        />
      ),
    },
    {
      name: "Reactbits",
      icon: (
        <img
          src="https://cdn.brandfetch.io/idkN1V_ylL/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1762246142139"
          className="w-10"
          alt=""
        />
      ),
    },
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
        className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-center "
      >
        TOOLS & PLATFORMS
      </motion.h1>

      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full mb-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:flex gap-3 md:gap-4 justify-center"
        >
          {tools.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center border-2 border-blue-500 justify-center
              bg-gray-800/50 rounded-xl
              w-25 h-20 md:w-30 md:h-28
              text-xs md:text-base
              break-all
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

export default Tools;
