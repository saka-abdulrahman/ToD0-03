export default function Menu({ isDarkMode, isMenuActive, menuActiveFunc }) {
  return (
    <div
      onClick={menuActiveFunc}
      className={`menu ${isDarkMode()} ${isMenuActive ? "active" : ""}`}
    >
      <span
        className={`material-symbols-outlined menu-icons menu-icon ${isDarkMode()}`}
      >
        menu
      </span>
      <span
        className={`material-symbols-outlined menu-icons close-icon ${isDarkMode()}`}
      >
        close
      </span>
    </div>
  );
}
