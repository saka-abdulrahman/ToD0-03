import React, { useEffect } from "react";
import { useState } from "react";

import Aboutbord from "./AboutBor";
import LoginBoard from "./LoginBoard";

export default function Main({ isDarkMode }) {
  useEffect(() => {
    // Set the data-theme attribute based on isDarkMode function
    const theme = isDarkMode() === "dark-mode" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <div className="main">
      <Aboutbord />
      <LoginBoard />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h2>TODO</h2>
    </div>
  );
}
