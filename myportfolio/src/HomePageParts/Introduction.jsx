import React from "react";
import profile from "../assets/profile.png";
import { FaGithub, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import TextType from "../utils/TextType";
import { motion } from "framer-motion";

function Introduction() {
  const socials = [
    {
      icon: <FaGithub size={22} />,
      link: "https://github.com/VanJoshua-dev",
      title: "Github",
    },
    {
      icon: <FaFacebook size={22} />,
      link: "https://www.facebook.com/van.escalante.16",
      title: "Facebook",
    },
    {
      icon: <FaTiktok size={22} />,
      link: "https://www.tiktok.com/@van11_04",
      title: "Tiktok",
    },
    {
      icon: <FaInstagram size={22} />,
      link: "https://www.instagram.com/vanescalanate/",
      title: "Instagram",
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-10 text-center sm:text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 w-full max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profile}
            alt="Van Joshua Escalante"
            className="rounded-full w-40 h-40 sm:w-64 sm:h-64 shadow-2xl border-4 border-blue-500/30"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Intro Content */}
        <motion.div
          className="flex flex-col items-center sm:items-start w-full sm:max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            className="mb-3 px-4 py-1 text-sm font-semibold rounded-full border border-blue-500 text-blue-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Full Stack Web Developer
          </motion.span>

          {/* Typing Text */}
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold h-[3.5rem] sm:h-[4.5rem] flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="whitespace-nowrap text-white">
              <TextType
                text={[
                  "Hi, I'm Van Joshua Escalante",
                  "Aspiring Full Stack Developer",
                ]}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </motion.h1>

          {/* Full Intro Paragraph */}
          <motion.p
            className="text-md sm:text-lg text-white text-justify max-w-3xl leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I'm Van Joshua Escalante, 22 years old, currently pursuing a BS in
            information Technology at Cavite State University—Carmona Campus.
            I’m a full-stack web developer who enjoys building clean,
            responsive, and user-friendly web applications, continuously
            learning new technologies to create meaningful digital solutions.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div
            className="flex flex-wrap gap-5 mt-6 items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Projects Button */}
            <motion.button
              onClick={handleScroll}
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsCollection size={20} />
              View My Projects
            </motion.button>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-all"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Introduction;
