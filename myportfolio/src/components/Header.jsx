import React, { useEffect, useState } from "react";
import logo from "../assets/vanjoshua-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import clx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const tabs = [
    { tabName: "Introduction", targetId: "intro" },
    { tabName: "Tech Stack", targetId: "techstack" },
    { tabName: "Projects", targetId: "projects" },
    { tabName: "Contact", targetId: "contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Detect scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // 🧭 Scroll spy effect — updates active section + route as user scrolls
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const tab of tabs) {
        const section = document.getElementById(tab.targetId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(tab.targetId);

            // Update path if different
            if (location.pathname !== tab.route) {
              navigate(tab.route, { replace: true });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navigate, location.pathname]);

  return (
    <header
      className={clx(
        "sticky top-0 z-50 transition-all duration-500 backdrop-blur-sm",
        isScrolled
          ? "bg-gray-900/70 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="van.dev"
          className="h-8 cursor-target cursor-pointer"
          onClick={() => handleScrollTo("intro", "/")}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-3 text-white">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleScrollTo(tab.targetId)}
              className={clx(
                "text-md font-semibold px-4 py-2 cursor-target cursor-pointer rounded-sm transition-all duration-300",
                activeSection === tab.targetId
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                  : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
              )}
            >
              {tab.tabName}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clx(
          "md:hidden flex flex-col items-center gap-3 overflow-hidden transition-all duration-500 bg-gray-900/90 backdrop-blur-md",
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleScrollTo(tab.targetId)}
            className={clx(
              "text-white font-semibold text-md px-4 py-2 rounded-md w-40 text-center transition-all duration-300",
              activeSection === tab.targetId
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                : "hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
            )}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
