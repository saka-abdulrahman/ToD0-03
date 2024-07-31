import React from "react";
import { useState } from "react";


export default function ArchivePage({
  isDarkMode,
  isMenuActive,
  archivedTasks,
  setArchivedTasks,
  tasksArr,
  setTasksArr,
  completedTasksArr,
  setCompletedTasksArr,
}) {
  function printArchievedTasks() {
    return archivedTasks.map((task) => (
      <ATask
        key={task.id}
        task={task}
        taskDelete={taskDelete}
        taskUnArchive={taskUnArchive}
        isDarkMode={isDarkMode}
        taskCheck={taskCheck}
      />
    ));
  }

  function taskDelete(task) {
    const dTaskId = task.id;

    const confirmQ = window.confirm(
      `Are you sure you want to delete ${task.title}?`
    );

    if (confirmQ) {
      setArchivedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== dTaskId)
      );
    } else {
      return;
    }
  }

  function taskUnArchive(task) {
    const dTaskId = task.id;

    const confirmQ = window.confirm(
      `Are you sure you to unarchive ${task.title}?`
    );

    if (confirmQ) {
      setArchivedTasks((prevTasks) =>
        prevTasks.filter((t) => t.id !== dTaskId)
      );

      if (task.isCompleted) {
        setCompletedTasksArr((prevArchivedTasks) => [
          ...prevArchivedTasks,
          task,
        ]);
      } else {
        setTasksArr((prevArchivedTasks) => [...prevArchivedTasks, task]);
      }
    }
  }

  function deletAllArchieved() {
    if (archivedTasks.length === 0) return;
    const confirmQ = window.confirm(
      `Are you sure you to delete all archievd tasks ?`
    );

    if (confirmQ) setArchivedTasks([]);
  }

  function taskCheck() {
    alert("You can't chek while a task in archive");
  }

  function unArcheiveAll() {
    if (archivedTasks.length === 0) {
      return;
    }
    const confirmQ = window.confirm(
      `Are you sure you to unarchieve all archievd tasks ?`
    );

    if (confirmQ) {
      archivedTasks.forEach((task) => {
        if (task.isCompleted) {
          setCompletedTasksArr((prevTasks) => [...prevTasks, task]);
        } else {
          setTasksArr((prevTasks) => [...prevTasks, task]);
        }
      });

      setArchivedTasks([]);
    }
  }

  return (
    <div className={`archive-page-App ${isDarkMode()} `}>
      <div className={`archive-mini-header ${isDarkMode()}`}>
        <h1 className={`mini-archive-header-title ${isDarkMode()}`}>
          Archived Tasks
        </h1>
        <div className={`mini-archive-header-btns ${isDarkMode()}`}>
          <button
            onClick={deletAllArchieved}
            className={`common-archive-mini-header-btns material-symbols-outlined ${isDarkMode()}`}
          >
            delete
          </button>
          <button
            onClick={unArcheiveAll}
            className={`common-archive-mini-header-btns material-symbols-outlined ${isDarkMode()}`}
          >
            unarchive
          </button>
          <button
            className={`common-archive-mini-header-btns material-symbols-outlined ${isDarkMode()}`}
          >
            search
          </button>
        </div>
      </div>

      <div className={`archived-bord ${isDarkMode()}`}>
        {printArchievedTasks()}
      </div>
    </div>
  );
}

function ATask({ task, taskDelete, isDarkMode, taskUnArchive, taskCheck }) {
  const [isDetailsActive, setIsDetailsActive] = useState(false);

  const ATaskBtns = [
    {
      functionName: taskCheck,
      ATaskBtnIcon: `${task.isCompleted ? "close" : "check"}`,
      task: task,
      isDarkMode: isDarkMode,
    },
    {
      functionName: taskDelete,
      ATaskBtnIcon: `delete`,
      task: task,
      isDarkMode: isDarkMode,
    },

    {
      functionName: taskUnArchive,
      ATaskBtnIcon: `unarchive`,
      task: task,
      isDarkMode: isDarkMode,
    },
  ];

  function detailsBtnFun() {
    setIsDetailsActive(!isDetailsActive);
  }

  return (
    <div className={`a-task an-archived-task  ${isDarkMode()}`}>
      <div
        className={`details ${isDetailsActive ? "active" : ""} ${isDarkMode()}`}
      >
        <h4 className={`details-title ${isDarkMode()}`}>details:</h4>
        <p className={`details-content ${isDarkMode()}`}>{task.details}</p>
      </div>
      <h3 className={`a-task-title ${isDarkMode()}`}>{task.title}</h3>
      <div className={`a-task-btns ${isDarkMode()}`}>
        {ATaskBtns.map((taskBtn, index) => (
          <ATaskBtn
            key={index}
            functionName={taskBtn.functionName}
            ATaskBtnIcon={taskBtn.ATaskBtnIcon}
            task={taskBtn.task}
            isDarkMode={taskBtn.isDarkMode}
          />
        ))}
      </div>
      <div className={`infos ${isDarkMode()}`}>
        <p className={`date ${isDarkMode()}`}>{task.date}</p>
        <button
          onClick={detailsBtnFun}
          className={`material-symbols-outlined details-btn ${isDarkMode()}`}
        >
          {isDetailsActive ? "visibility_off" : "visibility"}
        </button>
      </div>
    </div>
  );
}

function ATaskBtn({ functionName, ATaskBtnIcon, task, isDarkMode }) {
  return (
    <button
      onClick={() => functionName(task)}
      className={`a-task-btn material-symbols-outlined ${ATaskBtnIcon} ${isDarkMode()}`}
    >
      {ATaskBtnIcon}
    </button>
  );
}
