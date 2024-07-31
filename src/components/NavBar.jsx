import { Link } from "react-router-dom";

export default function NavBar({ isMenuActive, isDarkMode, setIsMenuActive }) {
  const navBarItemsContents = [
    { extraClassName: "home", content: "home", toWhere: "/" },
    { extraClassName: "ToDo", content: "done_outline", toWhere: "/program" },
    { extraClassName: "login", content: "login", toWhere: "/" },
    { extraClassName: "Archive", content: "inbox", toWhere: "/archive" },
    // { extraClassName: "contect", content: "content", toWhere: "/" },
  ];

  return (
    <nav className={`navbar ${isMenuActive ? "active" : ""} ${isDarkMode()}`}>
      {navBarItemsContents.map((item) => (
        <NavBarItem
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          key={item.extraClassName}
          isDarkMode={isDarkMode}
          extraClassName={item.extraClassName}
          content={item.content}
          toWhere={item.toWhere}
        />
      ))}
    </nav>
  );
}

function NavBarItem({
  isMenuActive,
  setIsMenuActive,
  isDarkMode,
  extraClassName,
  content,
  toWhere,
}) {
  function closeNavBar() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <Link className="navBar-title-link" to={toWhere}>
      <div
        onClick={closeNavBar}
        className={`items  ${isDarkMode()}`}
      >
        <span className={`material-symbols-outlined navbar-items`}>
          {content}
        </span>
        <h4 className={`items-title`}>{extraClassName}</h4>
      </div>
    </Link>
  );
}
