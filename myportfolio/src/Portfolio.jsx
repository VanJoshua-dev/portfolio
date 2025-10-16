// [unchanged imports]
import { useState } from "react";
import { FaGithub, FaFacebook, FaTiktok } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { CiDark, CiLight  } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import phFlag from "./assets/world-flag.png";
import logo from "./assets/_.png";
import profile from "./assets/profile.png"
// [unchanged data]
const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const tabClass = (tab) =>
    `px-4 py-2 rounded-sm transition ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700"
    }`;

  const containerClass = darkMode
    ? "dark bg-gray-900 text-white"
    : "bg-gray-200 text-gray-700";

  return (
    <div
      className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans transition-colors duration-300 ${containerClass} w-full`}
    >
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <img src={logo} alt="" className="h-6" />
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <nav className="flex gap-2">
              <button
                className={tabClass("home")}
                onClick={() => setActiveTab("home")}
              >
                Home
              </button>
              <button
                className={tabClass("projects")}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1 rounded-sm border-1 border-gray-500 text-sm bg-gray-20 text-gray-200"
            >
              {darkMode ? <CiLight size={25} /> : <CiDark size={25} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section 1: Intro */}
              <section className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <img
                    src={profile}
                    alt="Van Joshua"
                    className="w-36 h-36 rounded-full shadow"
                  />
                  <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold">Hi, I'm Van Joshua</h1>
                    <h2 className="text-4xl mt-2 font-semibold ">A Web Developer</h2>
                  </div>
                </div>
                <p className=" text-xl mt-6 max-w-2xl">
                  A passionate full stack web developer who loves to build
                  clean, responsive, and modern web applications. I enjoy
                  solving problems and learning new tools and technologies.
                </p>
                <div className="flex items-center justify-center gap-6 mt-6 text-3xl ">
                  <a href="#" className="hover:text-blue-600">
                    <FaGithub />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <FaTiktok />
                  </a>
                </div>
              </section>

              {/* Section 2: What I can do */}
              <section className="min-h-screen snap-start flex flex-col justify-center px-10">
                <div className="mb-10">
                  <h2 className="text-3xl font-semibold mb-2 ">
                    Building Digital Experiences
                  </h2>
                  <p className="">
                    I specialize in creating stunning user interfaces and
                    developing high-quality applications that stand out.
                  </p>
                </div>
                <div className={`flex flex-col md:flex-row gap-6 mb-10`}>
                  <div className={`flex-1 min-w-[280px] border-1 border-gray-500 ${containerClass} p-6 rounded-xl`}>
                    <h3 className="text-lg font-semibold mb-2 ">
                      What I can do
                    </h3>
                    <p className="mb-2 ">
                      I can help develop solutions that will help you grow your
                      business:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ">
                      <li>UI/UX Design</li>
                      <li>Fullstack Web Development</li>
                      <li>API Integration</li>
                    </ul>
                  </div>
                  <div className={`flex-1 min-w-[280px] border-1 border-gray-500 ${containerClass} p-6 rounded-xl`}>
                    <h3 className="text-lg font-semibold mb-2 ">Tools I Use</h3>
                    <p className="mb-2 ">
                      I use the latest tools and technologies:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ">
                      <li>
                        <strong>Frontend:</strong> React, Tailwind CSS,
                        TypeScript
                      </li>
                      <li>
                        <strong>Backend:</strong> Node.js, Express, MySQL,
                        Firebase
                      </li>
                      <li>
                        <strong>Design:</strong> Figma, Framer
                      </li>
                    </ul>
                  </div>
                  <div className={`flex-1 min-w-[280px] border-1 border-gray-500 ${containerClass} p-6 rounded-xl`}>
                    <h3 className="text-lg font-semibold mb-2 ">UI/UX Design</h3>
                    <p className="mb-2 ">
                      I am a designer first, developer second:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ">
                      <li>User-Centered Design</li>
                      <li>Modern & Clean UI</li>
                      <li>Responsive Layouts</li>
                      <li>Wireframes & Prototypes</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded hover:bg-gray-700 hover:text-white">
                    <BsCollection /> View my projects
                  </button>
                </div>
              </section>

              {/* Section 3: Contact */}
              <section className="min-h-screen snap-start flex flex-col items-center justify-center px-4">
                <div className="border-1 border-gray-500 p-10 rounded-xl w-full max-w-5xl ">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        Bringing your ideas to life.
                      </h2>
                      <h3 className="text-2xl mb-4">
                        Let's turn your vision into reality
                      </h3>
                      <p>
                        Have a project in mind or just want to chat? Let's
                        connect!
                      </p>
                    </div>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-md">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded border-1 border-gray-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-md">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 rounded border-1 border-gray-500"
                          placeholder="contact@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-md">Message</label>
                        <textarea
                          className="w-full px-4 py-2 rounded border-1 border-gray-500"
                          rows="4"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-white text-black rounded"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Projects Section */}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen px-6 py-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition max-w-sm"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-800 dark:text-gray-300">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        className="text-blue-500 mt-2 inline-block"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <section className="h-auto snap-start px-4">
        <footer className="text-center  text-sm py-6">
          <div className="font-semibold text-lg">Van Joshua Escalante</div>
          <div className="flex justify-center items-center gap-1 mb-2">
            <img src={phFlag} alt="PH Flag" className="h-5" /> Based in
            Philippines
          </div>
          &copy; {new Date().getFullYear()} Van Joshua. All rights reserved.
        </footer>
      </section>
    </div>
  );
}
