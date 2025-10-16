import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import clx from "clsx";
import Introduction from "../HomePageParts/Introduction";
import { Button } from "@/components/ui/button";
import Squares from "../components/Squares";
import Background from "../components/ui/Background";
import Footer from "../components/Footer";
import TechStack from "../HomePageParts/TechStack";
import PathofGrowth from "../HomePageParts/PathofGrowth";
import Contact from "../HomePageParts/Contact";
import Projects from "../HomePageParts/Projects";
function Home() {
  return (
    <div
      className={clx(
        "relative min-h-screen overflow-y-auto scroll-smooth transition-all duration-300"
      )}
    >
      {/* Background Squares */}
      <Background />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="pt-18 grid grid-cols-5 text-white gap-20">
        {/* Introduction Section */}
        <section
          id="intro"
          className="col-span-5 h-screen flex justify-center items-center"
        >
          <Introduction />
        </section>
        {/* Tech Stack Section */}
        <section
          id="techstack"
          className="col-span-5 min-h-screen flex items-center justify-center px-4"
        >
          <TechStack />
        </section>
        <section
          id="path-of-growth"
          className="col-span-5 min-h-screen flex items-center justify-center px-4"
        >
          <PathofGrowth />
        </section>
        <section
          id="projects"
          className="col-span-5 h-screen "
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="col-span-5 min-h-screen rounded-lg flex items-center justify-center"
        >
          <Contact />
        </section>
        <section
          id="contact"
          className="col-span-5"
        >
         <Footer />
        </section>
      </main>

      
    </div>
  );
}

export default Home;
