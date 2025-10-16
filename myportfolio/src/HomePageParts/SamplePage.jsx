import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import clx from "clsx";
import Introduction from "./Introduction";
import { Button } from "@/components/ui/button";
import Squares from "../components/Squares";
import Footer from "../components/Footer";
function SamplePage() {

  return (
    <div
      className={clx(
        "relative min-h-screen overflow-y-auto transition-all duration-300"
      )}
    >
      {/* Background Squares */}
      <div className="absolute inset-0 z-[-60]">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header/>
      </header>

      {/* Main Content */}
      <main className="pt-18 grid grid-cols-5 gap-1 pb-10">
        <div className="col-span-5 h-screen flex justify-center items-center">
          <Introduction />
        </div>
        <div className="col-span-5 h-screen flex justify-center  border-2 items-center">
          Hello World
        </div>
        <div className="col-span-5 h-screen">3</div>
        <div className="col-span-5 h-screen">4</div>
        <div className="col-span-5 h-screen">5</div>
      </main>

      {/* Footer */}
      {/* <footer
        className={clx(
          "w-full h-24 text-center shadow-gray-700 shadow-2xl flex items-center justify-center")}>
        Footer
      </footer> */}

      <Footer />
    </div>
  );
}

export default SamplePage;
