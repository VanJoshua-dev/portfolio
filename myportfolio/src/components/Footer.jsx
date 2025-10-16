import React from "react";
import phFlag from "../assets/world-flag.png";
function Footer() {
  return (
    <footer className="text-center bg-gray-800/70 text-white  text-sm py-6">
      <div className="font-semibold text-lg">Van Joshua Escalante</div>
      <div className="flex justify-center items-center gap-1 mb-2">
        <img src={phFlag} alt="PH Flag" className="h-5" /> Based in Philippines
      </div>
      &copy; {new Date().getFullYear()} Van Joshua. All rights reserved.
    </footer>
  );
}

export default Footer;
