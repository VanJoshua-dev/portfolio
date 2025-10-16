import React, { useState, useEffect } from "react";
import clx from "clsx";
import Header from "../components/Header";

function Projects() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "true"
  );

  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      setIsDark(theme === "true");
    };

    // Listen for theme change event
    window.addEventListener("theme-changed", updateTheme);

    // Cleanup
    return () => {
      window.removeEventListener("theme-changed", updateTheme);
    };
  }, []);
  return (
    <div
      className={clx(
        "h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans transition-colors duration-300 w-full",
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      )}
    >
      <Header />
    </div>
  );
}

export default Projects;
