export default function ATaskBtn({
  functionName,
  ATaskBtnIcon,
  task,
  isDarkMode,
  extraClass,
}) {
  return (
    <button
      onClick={() => functionName(task)}
      className={` material-symbols-outlined ${ATaskBtnIcon} ${extraClass} ${isDarkMode()}`}
    >
      {ATaskBtnIcon}
    </button>
  );
}
