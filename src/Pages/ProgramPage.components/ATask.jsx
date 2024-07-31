import { useState } from "react";

import ButtonWithIcon from "./ButtonWithIcon";

export default function ATask({
  task,
  taskCheck,
  taskDelete,
  taskEdit,
  taskArchive,
  isDarkMode,
  isVisable,
}) {
  const [isDetailsActive, setIsDetailsActive] = useState(false);

  const ATaskBtns = [
    {
      functionName: taskCheck,
      ATaskBtnIcon: `${task.isCompleted ? "close" : "check"}`,
      task: task,
      isDarkMode: isDarkMode,
      extraClass: "a-task-btn",
    },
    {
      functionName: taskDelete,
      ATaskBtnIcon: `delete`,
      task: task,
      isDarkMode: isDarkMode,
      extraClass: "a-task-btn",
    },
    {
      functionName: taskEdit,
      ATaskBtnIcon: `edit`,
      task: task,
      isDarkMode: isDarkMode,
      extraClass: "a-task-btn",
    },
    {
      functionName: taskArchive,
      ATaskBtnIcon: `archive`,
      task: task,
      isDarkMode: isDarkMode,
      extraClass: "a-task-btn",
    },
  ];

  function detailsBtnFun() {
    setIsDetailsActive(!isDetailsActive);
  }

  return (
    <div
      className={`a-task ${
        isVisable ? "" : " visibility-off"
      }  ${isDarkMode()}`}
    >
      <div
        className={`details ${isDetailsActive ? "active" : ""} ${isDarkMode()}`}
      >
        <h4 className={`details-title ${isDarkMode()}`}>details:</h4>
        <p className={`details-content ${isDarkMode()}`}>{task.details}</p>
      </div>
      <h3 className={`a-task-title ${isDarkMode()}`}>{task.title}</h3>
      <div className={`a-task-btns ${isDarkMode()}`}>
        {ATaskBtns.map((taskBtn, index) => (
          <ButtonWithIcon
            key={index}
            functionName={taskBtn.functionName}
            ATaskBtnIcon={taskBtn.ATaskBtnIcon}
            task={taskBtn.task}
            isDarkMode={taskBtn.isDarkMode}
            extraClass = {taskBtn.extraClass}
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
