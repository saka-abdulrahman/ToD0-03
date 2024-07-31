import { useEffect } from "react";

export default function EditTask({
  isDarkMode,
  isEditedActive,
  setIsEditActive,
  isMenuActive,
  editedhandleSubmit,
  updatedTitle,
  setUpdatedTitle,
  updatedDetails,
  setupdatedDetails,
  taskBeingEdited,
  setTaskBeingEdited,
}) {
  useEffect(() => {
    if (isEditedActive) {
      setUpdatedTitle(taskBeingEdited.title || "");
      setupdatedDetails(taskBeingEdited.details || "");
    }
  }, [isEditedActive, taskBeingEdited, setUpdatedTitle, setupdatedDetails]);

  function cancelEdit() {
    setIsEditActive(!isEditedActive);
    setUpdatedTitle("");
    setupdatedDetails("");
    setTaskBeingEdited(null);
  }

  return (
    <div
      className={`update-task ${
        isEditedActive ? "active" : ""
      } ${isDarkMode()} ${isMenuActive && isEditedActive ? "active2" : ""}`}
    >
      <form className="update-task-form" onSubmit={editedhandleSubmit}>
        <input
          className={`edit-title edit-inputs ${isDarkMode()}`}
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="New Title"
        />
        <input
          className={`edit-details edit-inputs ${isDarkMode()}`}
          type="text"
          value={updatedDetails}
          onChange={(e) => setupdatedDetails(e.target.value)}
          placeholder="New details"
        />
        <button
          type="submit"
          className={`material-symbols-outlined edit-task-btn ${isDarkMode()}`}
        >
          edit
        </button>
      </form>

      <button
        onClick={cancelEdit}
        className={`material-symbols-outlined edit-task-btn exit ${isDarkMode()}`}
      >
        close
      </button>
    </div>
  );
}
