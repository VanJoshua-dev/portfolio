import React from "react";
import { motion } from "framer-motion";

function PathofGrowth() {
  const paragraphs = [
    `My journey as a developer began with a deep curiosity about how websites are built and function. I started with the basics  crafting static pages using HTML and CSS  which fueled my interest in creating interactive web experiences.`,
    `As I progressed, I immersed myself in JavaScript and front-end frameworks like React.js and Vite. These tools helped me bring ideas to life with responsive, modern interfaces. I also explored back-end technologies such as Node.js, Express, and databases like MySQL, MongoDB, and Firebase, allowing me to build full-stack applications from the ground up.`,
    `Through academic projects and personal experiments, I’ve learned to combine creativity and functionality from designing clean UI layouts with Tailwind CSS and Bootstrap to handling server logic and API integration. Each project I work on helps me grow as a developer and strengthens my problem-solving skills.`,
    `Today, I continue to expand my knowledge by exploring topics like real-time communication, cloud deployment, and system scalability. My goal is to become a well-rounded full-stack developer capable of creating impactful digital solutions that make a difference.`,
  ];

  // helper to style keywords dynamically
  const highlightKeywords = (text) => {
    const keywords = [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Bootstrap",
    ];

    let updatedText = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      updatedText = updatedText.replace(
        regex,
        `<span class='text-blue-500 font-semibold hover:text-cyan-400 transition-colors duration-200 cursor-pointer'>${word}</span>`
      );
    });
    return updatedText;
  };

  return (
    <div className="flex  flex-col justify-center items-center px-6 rounded-xl py-6 text-gray-200 bg-gray-800/50">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          PATH OF GROWTH
        </h2>

        <div className="space-y-2 text-justify text-lg leading-relaxed text-gray-400">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              dangerouslySetInnerHTML={{ __html: highlightKeywords(p) }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="hover:text-gray-200 transition-colors duration-300"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default PathofGrowth;
