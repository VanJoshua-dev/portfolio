import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { IoIosMail } from "react-icons/io";
import {
  FaPhoneAlt,
  FaGithub,
  FaFacebook,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import Swal from "sweetalert2";
function Contact() {
  const socials = [
    {
      icon: <FaGithub size={30} />,
      link: "https://github.com/VanJoshua-dev",
      title: "Github",
    },
    {
      icon: <FaFacebook size={30} />,
      link: "https://www.facebook.com/van.escalante.16",
      title: "Facebook",
    },
    {
      icon: <FaTiktok size={30} />,
      link: "https://www.tiktok.com/@van11_04",
      title: "Tiktok",
    },
    {
      icon: <FaInstagram size={30} />,
      link: "https://www.instagram.com/vanescalanate/",
      title: "Instagram",
    },
  ];
  const [form, setForm] = useState();
  const handleSend = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "Feature Coming Soon!",
      text: "The message form isn’t functional yet. Please check back later.",
      confirmButtonText: "Okay",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-gradient-to-r cursor-target from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 hover:scale-125 transition-all transform duration-300",
      },
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-800/70 backdrop-blur-md  text-white py-12 px-6 w-full"
    >
      
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center w-full md:w-1/2 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          GET IN TOUCH
        </motion.h1>

        <motion.img
          src={profile}
          alt="Profile"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-full border-4 border-blue-500/40 w-36 h-36 md:w-44 md:h-44 object-cover shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="font-semibold text-lg">Contact Information</p>

          <div className="flex flex-col items-center gap-2">
            <IoIosMail size={28} className="text-cyan-400" />
            <p className="text-sm md:text-base">vanjoshuaescalante@gmail.com</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt size={22} className="text-blue-400" />
            <p className="text-sm md:text-base">(+63) 916-631-4936</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-5 mt-4"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white cursor-target hover:scale-125 hover:text-cyan-400 transition-transform duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

     {/* Form */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.form
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="bg-white text-gray-800 w-full max-w-md rounded-xl shadow-lg px-6 py-8 space-y-5"
          onSubmit={handleSend}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
            Send a Message
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-2 border-gray-300 rounded-md cursor-target py-2 px-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-gray-300 cursor-target rounded-md py-2 px-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="border-2 border-gray-300 cursor-target rounded-md py-2 px-3 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                className="border-2 border-gray-300 rounded-md cursor-target py-2 px-3 h-32 resize-none focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition-all"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r cursor-target from-blue-500 to-cyan-400 text-white font-semibold rounded-md py-2 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
            >
              Send
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
