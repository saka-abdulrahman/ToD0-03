export default function ProgramPageFooter({ isDarkMode }) {
  return (
    <footer className={`footer-program ${isDarkMode()}`}>
      <p className={`footer-program-title ${isDarkMode()}`}>
        © Abdulrahman Saka - 2024
      </p>
    </footer>
  );
}
