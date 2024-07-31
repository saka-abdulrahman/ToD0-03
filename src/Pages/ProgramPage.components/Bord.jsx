import { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";

export default function Bord({
  isDarkMode,
  isMenuActive,
  addingTasks,
  taskCheck,
  tasksArr,
  completedTasksArr,
  setTasksArr,
  setCompletedTasksArr,
  taskBeingEdited,
  setArchivedTasks,
}) {
  const [isTasksVisable, setIsTasksVisable] = useState(true);
  const [isCompletedTasksVisable, setIsCompletedTasksVisable] = useState(true);

  // visablility
  function tasksHandleClicker() {
    setIsTasksVisable(!isTasksVisable);
  }
  function completedTasksHandleClicker() {
    setIsCompletedTasksVisable(!isCompletedTasksVisable);
  }
  // delet all c
  function deleteAllCompletedTasks() {
    if (taskBeingEdited) {
      alert("You can't delete while editing");
      return;
    }

    if (completedTasksArr.length === 0) {
      return;
    }
    const ConfermQ = window.confirm(
      "Are you sure to delete all the completed tasks?"
    );

    if (ConfermQ) setCompletedTasksArr([]);
  }
  // delet all T
  function deleteAllTasks() {
    if (taskBeingEdited) {
      alert("You can't delete while editing");
      return;
    }

    if (tasksArr.length === 0) {
      return;
    }
    const ConfermQ = window.confirm("Are you sure to delete all the tasks?");

    if (ConfermQ) setTasksArr([]);
  }

  // ChekAllTasks
  function checkAllTasks() {
    if (taskBeingEdited) {
      alert("You can't check while editing");
      return;
    }
    if (tasksArr.length === 0) return;

    const ConfermQ = window.confirm("Are you sure to check all the  tasks?");

    if (!ConfermQ) return;

    const updatedTasks = tasksArr.map((task) => ({
      ...task,
      isCompleted: !task.isCompleted,
    }));

    setTasksArr(updatedTasks);
    setCompletedTasksArr((prevTasksArr) => [...prevTasksArr, ...updatedTasks]);
    setTasksArr([]);
  }

  // archive All completed tasks
  function arhivevAllCompletedTasks() {
    if (taskBeingEdited) {
      alert("You can't check while editing");
      return;
    }
    if (completedTasksArr.length === 0) return;

    const ConfermQ = window.confirm("Are you sure to check all the  tasks?");

    if (!ConfermQ) return;

    setArchivedTasks((prevArchivedTasks) => [
      ...prevArchivedTasks,
      ...completedTasksArr,
    ]);
    setCompletedTasksArr([]);
  }

  // To div buttons
  const toDivButtons = [
    {
      functionName: tasksHandleClicker,
      ATaskBtnIcon: `${isTasksVisable ? "visibility_off" : "visibility"}`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn",
    },
    {
      functionName: deleteAllTasks,
      ATaskBtnIcon: `delete`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn delete-to-div",
    },
    {
      functionName: checkAllTasks,
      ATaskBtnIcon: `check`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn delete-to-div",
    },
  ];
  const toDivButtons2 = [
    {
      functionName: completedTasksHandleClicker,
      ATaskBtnIcon: `${
        isCompletedTasksVisable ? "visibility_off" : "visibility"
      }`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn",
    },
    {
      functionName: deleteAllCompletedTasks,
      ATaskBtnIcon: `delete`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn delete-to-div",
    },
    {
      functionName: arhivevAllCompletedTasks,
      ATaskBtnIcon: `archive`,
      isDarkMode: isDarkMode,
      extraClass: "tasks-info-btn delete-to-div",
    },
  ];

  function printBtns(arr) {
    return arr.map((btn, index) => (
      <ButtonWithIcon
        key={index}
        functionName={btn.functionName}
        ATaskBtnIcon={btn.ATaskBtnIcon}
        isDarkMode={btn.isDarkMode}
        extraClass={btn.extraClass}
      />
    ));
  }

  // To div buttons END

  return (
    <div>
      <div className={`bord ${isDarkMode()}`}>
        <div className={`to-div-plus`}>
          {" "}
          <div className={`tasks-info to-div ${isDarkMode()}`}>
            <h3 className={`tasks-info-title ${isDarkMode()}`}> Tasks</h3>

            <div className="tasks-info-btns">{printBtns(toDivButtons)}</div>
          </div>
          <div
            className={`tasks tasks-common ${
              isTasksVisable ? "" : "tasks-visibility-off "
            } ${isDarkMode()}`}
          >
            {addingTasks(taskCheck, tasksArr, isTasksVisable)}
          </div>
        </div>

        <div className={`to-div-plus`}>
          <div className={`completed-tasks-info to-div ${isDarkMode()}`}>
            <h3 className={`completed-tasks-info-title ${isDarkMode()}`}>
              completed Tasks
            </h3>

            <div className="tasks-info-btns">{printBtns(toDivButtons2)}</div>
          </div>

          <div
            className={`completed-tasks tasks-common ${
              isCompletedTasksVisable ? "" : "tasks-visibility-off "
            }${isDarkMode()}`}
          >
            {addingTasks(taskCheck, completedTasksArr, isCompletedTasksVisable)}
          </div>
        </div>
      </div>
    </div>
  );
}
