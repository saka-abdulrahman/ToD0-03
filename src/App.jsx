// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Main from "./components/mainFile/Main";
import Footer from "./components/Footer";
import ProgramPage from "./Pages/ProgramPage";
import ArchivePage from "./Pages/ArchivePage";

function App() {
  // !LOCAL STORAGE //
  const [tasksArr, setTasksArr] = useState(() => {
    const savedTasks = localStorage.getItem("tasksArr");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completedTasksArr, setCompletedTasksArr] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasksArr");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
  }, [tasksArr]);

  useEffect(() => {
    localStorage.setItem(
      "completedTasksArr",
      JSON.stringify(completedTasksArr)
    );
  }, [completedTasksArr]);

  const [archivedTasks, setArchivedTasks] = useState(() => {
    const savedArchivedTasks = localStorage.getItem("archivedTasks");
    return savedArchivedTasks ? JSON.parse(savedArchivedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("archivedTasks", JSON.stringify(archivedTasks));
  }, [archivedTasks]);

  const [isLight, setIsLight] = useState(() => {
    const savedIsLight = localStorage.getItem("isLight");
    return savedIsLight ? JSON.parse(savedIsLight) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLight", JSON.stringify(isLight));
  }, [isLight]);

  // !END :::: LOCAL STORAGE //

  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  function darkLightModeHandleClick() {
    setIsLight(!isLight);
    setIsActive(!isActive);
  }

  function isDarkMode() {
    return isLight ? " " : "dark-mode";
  }

  function isActiveFunc() {
    return isActive ? " active" : "";
  }

  const menuActiveFunc = () => setIsMenuActive(!isMenuActive);

  return (
    <Router>
      <div className={`App ${isDarkMode()}`}>
        <NavBar
          isMenuActive={isMenuActive}
          isDarkMode={isDarkMode}
          setIsMenuActive={setIsMenuActive}
        />
        <Menu
          isDarkMode={isDarkMode}
          menuActiveFunc={menuActiveFunc}
          isMenuActive={isMenuActive}
        />
        <Header
          darkLightModeHandleClick={darkLightModeHandleClick}
          isDarkMode={isDarkMode}
          isActiveFunc={isActiveFunc}
          isMenuActive={isMenuActive}
        />
        <Routes>
          <Route path="/" element={<Main isDarkMode={isDarkMode} />} />
          <Route
            path="/program"
            element={
              <ProgramPage
                isDarkMode={isDarkMode}
                isMenuActive={isMenuActive}
                archivedTasks={archivedTasks}
                setArchivedTasks={setArchivedTasks}
                tasksArr={tasksArr}
                setTasksArr={setTasksArr}
                completedTasksArr={completedTasksArr}
                setCompletedTasksArr={setCompletedTasksArr}
              />
            }
          />
          <Route
            path="/archive"
            element={
              <ArchivePage
                isDarkMode={isDarkMode}
                isMenuActive={isMenuActive}
                archivedTasks={archivedTasks}
                setArchivedTasks={setArchivedTasks}
                tasksArr={tasksArr}
                setTasksArr={setTasksArr}
                completedTasksArr={completedTasksArr}
                setCompletedTasksArr={setCompletedTasksArr}
              />
            }
          />
        </Routes>
      </div>
      <FooterComponent isDarkMode={isDarkMode} />
    </Router>
  );
}

function FooterComponent({ isDarkMode }) {
  const location = useLocation();
  return location.pathname !== "/program" && <Footer isDarkMode={isDarkMode} />;
}

export default App;
