export default function Footer({ isDarkMode }) {
  return (
    <footer className={`footer ${isDarkMode()}`}>
      <p className={`footer-title ${isDarkMode()}`}>
        © Abdulrahman Saka - 2024
      </p>
    </footer>
  );
}
