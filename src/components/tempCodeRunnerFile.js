export default function Main({ isDarkMode }) {
  return (
    <div className={`main ${isDarkMode()}`}>
      <h2 className={`main-title ${isDarkMode()}`}>
        Welcome to our ToDo program
      </h2>
      <button className={`main-btn ${isDarkMode()}`}>Let's start</button>
    </div>
  );
}
