import { useState } from "react";
import { Link } from "react-router-dom";

export default function Aboutbord() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const slicesArr = [
    {
      MainClass: "common-abouts to-do-about",
      hoverFunction: () => console.log("Hovered About toDo"),
      titleClass: "to-do-about-title",
      title: "About toDo",
      contentClass: "to-do-about-p",
      content: (isHovered) => (
        <p className={`to-do-about-p ${isHovered ? "hovered" : ""}`}>
          ToDo Task Manager
          <br /> Effortlessly organize your daily <br />
          tasks with the ToDo Task Manager.
          <br /> <br /> Create, edit, and delete tasks, <br /> track your
          progress, and manage <br /> task completion all in one place.
        </p>
      ),
    },
    {
      MainClass: "common-abouts features",
      hoverFunction: () => console.log("Hovered Features"),
      titleClass: "features-title",
      title: "Features",
      contentClass: "features-p",
      content: (isHovered) => (
        <p className={`features-p ${isHovered ? "hovered" : ""}`}>
          Add Tasks: Quickly add new tasks.
          <br />
          Edit & Delete: Keep your list updated.
          <br />
          Track Progress: Mark tasks as complete
          <br /> or revert them.
          <br />
        </p>
      ),
    },
    {
      MainClass: "common-abouts can-do",
      hoverFunction: () => console.log("Hovered How It Works"),
      titleClass: "can-do-title",
      title: "How It Works",
      contentClass: "can-do-p",
      content: (isHovered) => (
        <p className={`can-do-p ${isHovered ? "hovered" : ""}`}>
          What You Can Do:
          <br />
          <br />
          &nbsp;&nbsp;1. Add New Tasks
          <br />
          &nbsp;&nbsp;2. Organize and Edit
          <br />
          &nbsp;&nbsp;3. Track Completion
        </p>
      ),
    },
  ];

  return (
    <div className="about-bord">
      <div className="abouts">
        {slicesArr.map((slice, index) => (
          <AboutSlice
            key={index}
            slice={slice}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      <Link
        to="/program "
        className="start-btn"
        style={{
          textDecoration: "none",
          color: "inherit",
          textAlign: "center",
        }}
      >
        Get Started
      </Link>
    </div>
  );
}

function AboutSlice({ slice, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${slice.MainClass} ${isHovered ? "hovered" : ""}`}
    >
      <h3 className={`${slice.titleClass} ${isHovered ? "hovered" : ""}`}>
        {slice.title}
      </h3>
      {slice.content(isHovered)}
    </div>
  );
}
