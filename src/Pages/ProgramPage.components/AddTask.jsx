export default function AddTask({
  isDarkMode,
  handleSubmit,
  inputTitle,
  setinputTitle,
  inputDetail,
  setinputDetail,
}) {
  return (
    <form className={`add-task ${isDarkMode()}`} onSubmit={handleSubmit}>
      <input
        className={`add-task-input-1 ${isDarkMode()}`}
        type="text"
        value={inputTitle}
        onChange={(e) => setinputTitle(e.target.value)}
        placeholder="Add a Task"
      />
      <input
        className={`add-task-input-2 ${isDarkMode()}`}
        type="text"
        value={inputDetail}
        onChange={(e) => setinputDetail(e.target.value)}
        placeholder="Add details"
      />
      <button
        type="submit"
        className={`material-symbols-outlined add-task-btn ${isDarkMode()}`}
      >
        add
      </button>
    </form>
  );
}
