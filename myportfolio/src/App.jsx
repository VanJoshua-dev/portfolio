import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource-variable/inter";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import SamplePage from "./HomePageParts/SamplePage";
import TargetCursor from "./utils/TargetCursor";
import TryONe from "./components/ui/Background";
function App() {
  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techstack" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/sample" element={<SamplePage />} />
           <Route path="/try" element={<TryONe />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
