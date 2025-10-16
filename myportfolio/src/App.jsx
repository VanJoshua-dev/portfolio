import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource-variable/inter";
import Home from "./pages/Home";
import "./App.css";
import TargetCursor from "./utils/TargetCursor";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if user is using a mouse or large screen
    const checkDevice = () => {
      const isWide = window.innerWidth > 1024; // You can adjust breakpoint
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(isWide && hasFinePointer);
    };

    checkDevice(); // Run on mount
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <>
      {isDesktop && <TargetCursor spinDuration={2} hideDefaultCursor={true} />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techstack" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
