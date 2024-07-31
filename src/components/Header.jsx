// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({
  darkLightModeHandleClick,
  isDarkMode,
  isActiveFunc,
  isMenuActive,
}) {
  return (
    <header className={`header ${isDarkMode()} ${isMenuActive ? "move" : ""}`}>
      <Link to="/" className="header-title-link">
        <h1 className={`header-title ${isDarkMode()}`}>ToDo</h1>
      </Link>
      <Lamb
        isDarkMode={isDarkMode}
        isActiveFunc={isActiveFunc}
        darkLightModeHandleClick={darkLightModeHandleClick}
      />
    </header>
  );
}

function Lamb({ isDarkMode, isActiveFunc, darkLightModeHandleClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = function () {
    setHovered(true);
  };

  const handleMouseLeave = function () {
    setHovered(false);
  };

  const [className, setClassName] = useState("class1");
  const classNames = ["hovered", "hovered1"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setClassName(classNames[index]);
      index = (index + 1) % classNames.length; // Loop back to the first class
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`lamb ${isDarkMode()}`}>
      <div className={`light-dark-mode ${isDarkMode()}`}>
        <span
          onClick={darkLightModeHandleClick}
          className={`material-symbols-outlined lamb-w ${isDarkMode()}`}
        >
          lightbulb
        </span>
      </div>

      <div className={`lamb-leg ${isDarkMode()}`}></div>

      <div
        className={`stick ${isDarkMode()} ${isActiveFunc()}  ${
          hovered ? className : ""
        }`}
      >
        <div className={"stick-s"}></div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={darkLightModeHandleClick}
          className={`open-close-btn ${isDarkMode()}`}
        ></div>
      </div>
    </div>
  );
}
