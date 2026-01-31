import React from "react";
import profile from "../assets/profile.png";
import { FaGithub, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import TextType from "../utils/TextType";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Introduction() {
  const socials = [
    { icon: <FaGithub size={22} />, link: "https://github.com/VanJoshua-dev", title: "Github" },
    { icon: <FaFacebook size={22} />, link: "https://www.facebook.com/van.escalante.16", title: "Facebook" },
    { icon: <FaTiktok size={22} />, link: "https://www.tiktok.com/@van11_04", title: "Tiktok" },
    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/vanescalanate/", title: "Instagram" },
  ];

  const navigate = useNavigate();

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 pb-30 pt-10 sm:pb-0 text-center sm:text-left"
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
            alt="Van Joshua"
            className="rounded-full cursor-target w-40 h-40 sm:w-64 sm:h-64 shadow-2xl border-4 border-blue-500/30 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          className="flex flex-col items-center sm:items-start w-full sm:max-w-[550px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Typing Text */}
          <motion.h1
            className="text-4xl sm:text-6xl sm:mb-12 font-extrabold h-20 leading-tight text-left sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r text-3xl md:text-5xl from-blue-500 to-cyan-400 drop-shadow-lg"
              // style={{
              //   minHeight: "3.5rem",
              //   display: "inline-flex",
              //   alignItems: "center",
              // }}
            >
              <TextType
                text={[
                  "Hi, I'm Van Joshua",
                  "A Passionate Web Developer",
                  "A Creative Problem Solver",
                  "A Lifelong Learner",
                ]}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-lg sm:text-xl text-white text-justify font-medium max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I love crafting{" "}
            <span className="text-blue-500 font-semibold">clean</span>,
            <span className="text-cyan-500 font-semibold"> responsive</span>, and
            <span className="text-blue-500 font-semibold"> modern</span> web
            applications that bring ideas to life.
          </motion.h2>

          {/* About paragraph */}
          <motion.p
            className="text-base sm:text-lg text-white text-justify max-w-2xl leading-relaxed mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I’m a{" "}
            <span className="text-blue-500 font-semibold">
              student full-stack developer
            </span>{" "}
            passionate about building user-friendly digital experiences. Always
            eager to learn new technologies and improve every single project I
            touch.
          </motion.p>

          {/* Buttons and Socials */}
          <motion.div
            className="flex flex-wrap gap-5 sm:mt-8 justify-center sm:justify-start items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Projects Button */}
            <motion.button
              onClick={handleScroll}
              className="border border-blue-500 cursor-target text-blue-500 hover:bg-blue-500 cursor-pointer hover:text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-semibold transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsCollection size={20} /> View My Projects
            </motion.button>

            {/* Divider Line */}
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600"></div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white cursor-target hover:text-blue-500 transition-all duration-200"
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
