import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Snap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white px-6 text-center">
      {/* Floating Animated Background Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl top-10 left-20"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-20"
      ></motion.div>

      {/* Main 404 content */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[8rem] md:text-[10rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Oops! Page not found.
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-gray-400 max-w-md mb-8"
      >
        It looks like the page you're trying to visit doesn't exist.  
        Maybe it got moved or you followed a broken link.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="flex items-center cursor-target cursor-pointer gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/40 transition-all"
      >
        <FaHome size={18} />
        Back to Home
      </motion.button>
    </div>
  );
}

export default Snap;
