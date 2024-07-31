import React from "react";

import { useState, useEffect } from "react";

import Bord from "./ProgramPage.components/Bord";
import ProgramPageFooter from "./ProgramPage.components/ProgramPageFooter";
import ATask from "./ProgramPage.components/ATask";
import AddTask from "./ProgramPage.components/AddTask";
import EditTask from "./ProgramPage.components/EditTask";

export default function ProgramPage({
  isDarkMode,
  isMenuActive,
  archivedTasks,
  setArchivedTasks,
  tasksArr,
  setTasksArr,
  completedTasksArr,
  setCompletedTasksArr,
}) {
  //! useStates !//
  const [inputTitle, setinputTitle] = useState("");
  const [inputDetail, setinputDetail] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDetails, setupdatedDetails] = useState("");
  const [isEditedActive, setIsEditActive] = useState(false);
  const [counter2, setCounter2] = useState(0);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  // !LOCAL Storage !//

  const [counter, setcounter] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);
  // ! END LOCAL Storage !//

  //* INPUT Functions *//

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input 1:", inputTitle);
    console.log("Input 2:", inputDetail);

    let newTask = {
      id: counter,
      title: inputTitle,
      details: inputDetail,
      date: getCurrentDate(),
      isCompleted: isTaskCompleted,
    };

    if (inputTitle === "") {
      alert("Please don't leave title blank ");
      return;
    }

    setTasksArr((prevTasks) => [...prevTasks, newTask]);
    setcounter(counter + 1);
    console.log(tasksArr);

    setinputTitle("");
    setinputDetail("");
  }

  function getCurrentDate() {
    let d = new Date();
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  //! TASK FUNCTIONS !//
  function addingTasks(taskCheck, arr, isVisable) {
    return arr.map((task) => (
      <ATask
        key={task.id}
        task={task}
        taskCheck={taskCheck}
        taskDelete={taskDelete}
        taskEdit={taskEdit}
        taskArchive={taskArchive}
        isDarkMode={isDarkMode}
        isVisable={isVisable}
      />
    ));
  }

  const taskCheck = (task) => {
    if (taskBeingEdited) {
      alert("You can't Check while editing");
      return;
    }
    const taskId = task.id;
    const taskIsCompleted = task.isCompleted;

    const updatedTask = { ...task, isCompleted: !taskIsCompleted };

    if (!taskIsCompleted) {
      setCompletedTasksArr((prevTasks) => [...prevTasks, updatedTask]);
      setTasksArr((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } else {
      setTasksArr((prevTasks) => [...prevTasks, updatedTask]);
      setCompletedTasksArr((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    }

    console.log(tasksArr, completedTasksArr);
  };

  const taskDelete = (task) => {
    if (taskBeingEdited) {
      alert("You can't delete while editing");
      return;
    }
    const dTaskId = task.id;

    const confirmQ = window.confirm(
      `Are you sure you want to delete ${task.title}?`
    );

    if (confirmQ) {
      setTasksArr((prevTasks) =>
        prevTasks.filter((task) => task.id !== dTaskId)
      );
      setCompletedTasksArr((prevTasks) =>
        prevTasks.filter((task) => task.id !== dTaskId)
      );
    } else {
      return;
    }
  };

  const taskEdit = (task) => {
    setIsEditActive(true);
    setTaskBeingEdited(task);
  };

  const editedhandleSubmit = (event) => {
    event.preventDefault();
    console.log("updatedTitle 1:", updatedTitle);
    console.log("updatedDetails 2:", updatedDetails);

    if (updatedTitle === "") {
      alert("Please don't leave title blank");
      setCounter2(counter2 + 1);

      if (counter2 === 1) {
        alert("Try again");
        setIsEditActive(false);
        setCounter2(0);
      }
      return;
    }

    const updatedTask = {
      ...taskBeingEdited,
      title: updatedTitle,
      details: updatedDetails,
    };

    setTasksArr((prevTasks) =>
      prevTasks.map((t) => (t.id === taskBeingEdited.id ? updatedTask : t))
    );
    setCompletedTasksArr((prevTasks) =>
      prevTasks.map((t) => (t.id === taskBeingEdited.id ? updatedTask : t))
    );

    setUpdatedTitle("");
    setupdatedDetails("");
    setIsEditActive(false);
    setTaskBeingEdited(null);
  };

  const taskArchive = (task) => {
    if (taskBeingEdited) {
      alert("You can't delete while editing");
      return;
    }

    const dTaskId = task.id;

    const confirmQ = window.confirm(
      `Are you sure you archive to delete ${task.title}?`
    );

    if (confirmQ) {
      if (task.isCompleted) {
        setCompletedTasksArr((prevTasks) =>
          prevTasks.filter((t) => t.id !== dTaskId)
        );
      } else {
        setTasksArr((prevTasks) => prevTasks.filter((t) => t.id !== dTaskId));
      }

      // Add the task to the archivedTasks array
      setArchivedTasks((prevArchivedTasks) => [...prevArchivedTasks, task]);
    }

    console.log(tasksArr, completedTasksArr, archivedTasks);
  };

  // other

  return (
    <div className={`program-page-app    ${isDarkMode()}`}>
      <AddTask
        isDarkMode={isDarkMode}
        handleSubmit={handleSubmit}
        inputTitle={inputTitle}
        setinputTitle={setinputTitle}
        inputDetail={inputDetail}
        setinputDetail={setinputDetail}
      />

      <EditTask
        isDarkMode={isDarkMode}
        isEditedActive={isEditedActive}
        setIsEditActive={setIsEditActive}
        isMenuActive={isMenuActive}
        editedhandleSubmit={editedhandleSubmit}
        updatedTitle={updatedTitle}
        setUpdatedTitle={setUpdatedTitle}
        updatedDetails={updatedDetails}
        setupdatedDetails={setupdatedDetails}
        taskBeingEdited={taskBeingEdited}
        setTaskBeingEdited={setTaskBeingEdited}
      />
      <Bord
        isDarkMode={isDarkMode}
        isMenuActive={isMenuActive}
        addingTasks={addingTasks}
        taskCheck={taskCheck}
        tasksArr={tasksArr}
        completedTasksArr={completedTasksArr}
        setTasksArr={setTasksArr}
        setCompletedTasksArr={setCompletedTasksArr}
        taskBeingEdited={taskBeingEdited}
        setArchivedTasks={setArchivedTasks}
      />
      <ProgramPageFooter isDarkMode={isDarkMode} />
    </div>
  );
}
